const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

const PARTNERS_MAIL = 'partners@' + D.brand.domain;

function CompaniesScreen() {
  return (
    <div>
      <PageHeader title="For Companies" subtitle="Reach every Munich university through one conversation." />

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Why partner with MBS" title="Reach every Munich university through one conversation."
            desc="Most student partnerships buy you access to one campus. Munich Business Society is cross-university by construction — one partnership, one point of contact, and a room that draws from every business faculty in the city." />
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
            <Button variant="gold" href={'mailto:' + PARTNERS_MAIL + '?subject=Partner%20pack%20request'}>Get the partner pack →</Button>
            <Button variant="outline" href={ROUTES.contact}>Book a call</Button>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label="Why MBS" title="Breadth without the admin." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg">
          {D.companyWhy.map(w => (
            <Card key={w.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={w.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{w.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{w.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading label="Ways to work together" title="Four ways in." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-2 mbs-grid--lg">
          {D.companyWays.map(w => (
            <Card key={w.title} tone="navy" padding="28px">
              <h3 data-on-navy="" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-white)', margin: '0 0 8px' }}>
                <Icon name={w.icon} size="20px" style={{ color: 'var(--mbs-gold-on-navy)' }} />{w.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.7, margin: 0 }}>{w.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label="Our partners" title="Companies we work with"
          desc="Partner logos go here — only companies with a signed agreement and written permission to use their mark." />
        <ul className="mbs-grid-4" style={{ listStyle: 'none', margin: '28px 0 0', padding: 0 }}>
          {[1, 2, 3, 4].map(i => (
            <li key={i} style={{ height: '96px', borderRadius: 'var(--mbs-r)', border: '1px dashed var(--mbs-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--mbs-white)',
              fontSize: '10px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--mbs-gray-muted-text)' }}>Partner logo</li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading label="How it works" title="From first call to short report." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-4">
          {D.companySteps.map(s => <StepCard key={s.n} number={s.n} title={s.title}>{s.text}</StepCard>)}
        </div>
        <div style={{ marginTop: '48px', textAlign: 'center', padding: '48px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }} data-on-navy="">
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', color: 'var(--mbs-white)', margin: '0 0 10px' }}>Tell us who you're hiring.</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto 24px' }}>Write to {PARTNERS_MAIL} or book a call. We'll come back with a proposal within a week.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="gold" href={'mailto:' + PARTNERS_MAIL}>Email the partnerships team →</Button>
            <Button variant="onNavy" href={ROUTES.contact}>Book a call</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { CompaniesScreen });
