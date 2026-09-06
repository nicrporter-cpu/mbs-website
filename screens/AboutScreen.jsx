const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

function AboutScreen() {
  return (
    <div>
      <PageHeader title="About" subtitle="One business network for all of Munich — student-run, cross-university, open to every campus in the city." />

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Who we are" title="One business network for all of Munich."
            desc="Munich Business Society is a student-run society that connects business-minded students across every university in Munich. We were founded by students who kept running into the same problem: the most interesting people in this city were always one campus away." />
        </div>

        <div style={{ marginTop: '56px', maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Our story" title="We built the society we wanted to join." />
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>MBS started with three students, a business plan and a simple observation. Munich has one of Europe's densest concentrations of business talent and one of its most fragmented student scenes. Every university has a career fair. Almost none of them talk to each other.</p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>So we built the thing we wanted to join: a society with no home campus. One network, open on identical terms to anyone in Munich studying business, economics, management — or studying something else entirely and heading into business anyway.</p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>Since then we've built a programme of events, a partner network of companies hiring in Munich, and a member base drawn from <span className="mbs-ph">[X]</span> different universities.</p>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label="What makes us different" title="Cross-university by design, not by exception." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-2 mbs-grid--lg">
          {D.aboutDifferent.map(item => (
            <Card key={item.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={item.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading align="center" label="Our values" title="What we stand for" style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg">
          {D.values.map(v => (
            <Card key={v.title} tone="navy" padding="32px">
              <div data-on-navy="" style={{ marginBottom: '16px', lineHeight: 1, color: 'var(--mbs-gold-on-navy)' }}><Icon name={v.icon} size="28px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-gold-on-navy)', margin: '0 0 12px' }}>{v.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.7, margin: 0 }}>{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="How we're organised" title="Run by students, built to last." />
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
            MBS is run entirely by students. The society is currently constituted as a <span className="mbs-ph">[GbR — confirm current legal form]</span> and is in the process of becoming a registered association (<em>eingetragener Verein, e.V.</em>), which will give members formal voting rights and the society a permanent legal footing. Our board is elected by the membership. Statutes and financial reporting are available to members on request.
          </p>
          <FormNote tone="alt">Verify before publishing: confirm the legal form as of today (GbR vs. e.V. in progress vs. registered) and whether board elections have actually taken place. Every claim here is one a partner or a university could check.</FormNote>
          <div style={{ marginTop: '28px' }}>
            <Button variant="navy" href={ROUTES.team}>Meet the team →</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { AboutScreen });
