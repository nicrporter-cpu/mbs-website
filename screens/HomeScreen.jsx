const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
/* ROUTES is declared by the page shell in the same scope; screens read it at render time. */

function HomeScreen() {
  return (
    <div>
      {/* Hero — the deck's H1 is the value sentence; the signature gold-italic
          Fraunces accent moves onto its closing phrase. */}
      <section className="mbs-hero">
        <div className="mbs-hero-copy">
          <div className="mbs-label" style={{ marginBottom: '16px' }}>Munich's cross-university business network</div>
          <h1 className="mbs-display" style={{ maxWidth: '560px', margin: '0 0 24px' }}>
            Your network shouldn't stop at <em>your campus.</em>
          </h1>
          <p style={{ fontSize: 'var(--mbs-fs-lead)', color: 'var(--mbs-gray)', maxWidth: '480px', lineHeight: 'var(--mbs-lh-body)', margin: '0 0 40px' }}>
            Munich Business Society brings together business-minded students from every university in Munich — one platform to build your network, grow real skills, and get on the radar of the companies you actually want to work for.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="gold" href={ROUTES.join}>Join MBS →</Button>
            <Button variant="outline" href={ROUTES.whatwedo}>See what's coming up</Button>
          </div>
        </div>
        <div className="mbs-hero-media">
          <div aria-hidden="true" style={{ width: '100%', aspectRatio: '4 / 5', borderRadius: 'var(--mbs-r-lg)',
            background: 'var(--mbs-navy)', boxShadow: '0 4px 20px rgba(39,63,99,.1)' }} />
        </div>
      </section>

      {/* Proof bar — numbers are board placeholders until true today. */}
      <div className="mbs-sec mbs-sec--navy" data-on-navy="">
        <div className="mbs-sec-inner" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <ul className="mbs-grid-4" style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
            {D.proof.map(p => (
              <li key={p.label}>
                <div className="mbs-tabular" style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--mbs-gold-on-navy)', lineHeight: 1 }}>
                  <span className="mbs-ph mbs-ph--on-navy">{p.value}</span>
                </div>
                <div style={{ marginTop: '8px', fontSize: 'var(--mbs-fs-label)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, color: 'var(--mbs-on-navy-50)' }}>{p.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why we exist */}
      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Why we exist" title="Munich is one business city. Its students are split across a dozen campuses." />
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>LMU, TUM, the universities of applied sciences, the private schools — each one has strong people and its own bubble. Recruiters see one Munich talent pool; students only ever meet their own seminar group.</p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>Munich Business Society exists to close that gap. We're deliberately not owned by one university. Whichever lecture hall you sit in, you join the same network, on the same terms.</p>
        </div>
      </Section>

      {/* The three pillars */}
      <Section tone="alt">
        <SectionHeading align="center" label="What you get" title="What you actually get out of it." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3">
          {D.pillars.map(p => (
            <Card key={p.title} padding="32px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '16px', lineHeight: 1 }}><Icon name={p.icon} size="28px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '20px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 4px' }}>{p.title}</h3>
              <p style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--mbs-gold-text)', margin: '0 0 12px' }}>{p.tag}</p>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Formats teaser */}
      <Section>
        <div className="mbs-split">
          <div>
            <SectionHeading label="What we do" title="Six formats, every semester." />
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>Speaker nights, case workshops, company visits, skill labs, the founders' table and the socials that make the rest of it work. Members get first access; most events are open to any student in Munich.</p>
            <Button variant="navy" href={ROUTES.whatwedo}>See the full programme →</Button>
          </div>
          <ul className="mbs-grid-2" style={{ listStyle: 'none', margin: 0, padding: 0, alignSelf: 'start' }}>
            {D.formats.map(f => (
              <li key={f.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 0' }}>
                <span style={{ color: 'var(--mbs-gold-text)', flexShrink: 0, marginTop: '1px' }}><Icon name={f.icon} size="20px" /></span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--mbs-navy)' }}>{f.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Member voice */}
      <Section tone="navy">
        <figure data-on-navy="" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: 'var(--mbs-gold-on-navy)', marginBottom: '20px' }}><Icon name="star" size="26px" /></div>
          <blockquote style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: 'clamp(22px,3vw,30px)', lineHeight: 1.4, color: 'var(--mbs-white)', margin: '0 0 20px', fontWeight: 500 }}>
            "I came for the case workshop and left with a working-student job. Neither of them was at my university."
          </blockquote>
          <figcaption style={{ fontSize: '13px', color: 'var(--mbs-on-navy-50)' }}>
            <span className="mbs-ph mbs-ph--on-navy">[First name], [Programme], [University]</span>
            <span style={{ display: 'block', marginTop: '8px', fontSize: '11px' }}>Collect two real member quotes before launch.</span>
          </figcaption>
        </figure>
      </Section>

      {/* Closing bands */}
      <Section tone="alt">
        <div className="mbs-grid-2 mbs-grid--lg">
          <div style={{ padding: '40px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-gold-dim)', border: '1px solid var(--mbs-gold-border)' }}>
            <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 12px' }}>Applications are open.</h2>
            <p style={{ fontSize: '14px', lineHeight: 1.8, margin: '0 0 24px' }}>Membership runs by semester and is open to students at any university in Munich. Takes five minutes to apply.</p>
            <Button variant="gold" href={ROUTES.join}>Join MBS →</Button>
          </div>
          <div data-on-navy="" style={{ padding: '40px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }}>
            <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-white)', margin: '0 0 12px' }}>Hiring in Munich?</h2>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--mbs-on-navy-50)', margin: '0 0 24px' }}>Reach ambitious business students across every university in the city through one point of contact, instead of negotiating with five separate campus clubs.</p>
            <Button variant="gold" href={ROUTES.companies}>Partner with us →</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
