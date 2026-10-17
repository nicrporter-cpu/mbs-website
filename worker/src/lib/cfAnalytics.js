// Pulls Cloudflare Web Analytics (RUM) data for the site via Cloudflare's
// GraphQL Analytics API. This is a separate product from the Worker's own
// request/invocation metrics you see under Workers & Pages — those measure
// this Worker; this measures visits to the static site.
//
// Needs env.CF_API_TOKEN (an API token scoped to "Account Analytics: Read"
// on the account, see README) and env.CF_ACCOUNT_ID (the account id shown
// in the dashboard's URL/sidebar). Both are account-level, not Worker-level,
// so they're separate from the Google service account used in sheets.js.
//
// The Web Analytics "site tag" isn't the beacon token from build/build.py's
// PAGE template — it's a different id — so this looks the site up by
// hostname via /rum/site_info/list rather than needing it configured by hand.

const API_BASE = 'https://api.cloudflare.com/client/v4';

async function cfFetch(env, path, init) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.CF_API_TOKEN}`,
      'Content-Type': 'application/json',
      ...(init && init.headers)
    }
  });
  const data = await res.json();
  if (!res.ok || data.success === false) {
    throw new Error(`Cloudflare API error at ${path}: ${res.status} ${JSON.stringify(data.errors || data)}`);
  }
  return data;
}

async function findSiteTag(env, hostname) {
  const data = await cfFetch(env, `/accounts/${env.CF_ACCOUNT_ID}/rum/site_info/list`);
  const site = (data.result || []).find(s => s.host === hostname);
  if (!site) {
    throw new Error(`No Web Analytics site registered for host "${hostname}" on this Cloudflare account`);
  }
  return site.site_tag;
}

// Returns [{ path, visits, pageviews }], busiest first, for the last `days`
// days. "Visits" is Cloudflare's own session count, not raw page views.
//
// rumPageloadEventsAdaptiveGroups/requestPath/sum.visits are this function's
// one unverified part — written from documented shape, never run against a
// live account. If this throws a GraphQL/field-name error, that's the field
// to fix; everything else here (auth, site lookup) is standard REST.
export async function getPageVisits(env, hostname, days) {
  const siteTag = await findSiteTag(env, hostname);
  const since = new Date(Date.now() - days * 86400000).toISOString();
  const until = new Date().toISOString();

  const query = `
    query($accountTag: String!, $siteTag: String!, $since: Time!, $until: Time!) {
      viewer {
        accounts(filter: { accountTag: $accountTag }) {
          rumPageloadEventsAdaptiveGroups(
            limit: 20
            filter: { siteTag: $siteTag, datetime_geq: $since, datetime_leq: $until }
            orderBy: [sum_visits_DESC]
          ) {
            count
            sum { visits }
            dimensions { requestPath }
          }
        }
      }
    }
  `;

  const data = await cfFetch(env, '/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables: { accountTag: env.CF_ACCOUNT_ID, siteTag, since, until }
    })
  });

  if (data.errors && data.errors.length) {
    throw new Error(`Cloudflare GraphQL error: ${JSON.stringify(data.errors)}`);
  }

  const groups = data.data?.viewer?.accounts?.[0]?.rumPageloadEventsAdaptiveGroups || [];
  return groups.map(g => ({
    path: g.dimensions.requestPath || '/',
    visits: g.sum.visits,
    pageviews: g.count
  }));
}
