const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function NetworkScreen({ C }) {
  const N = C.network;
  return (
    <div>
      <PageHeader title={C.title.network} subtitle={N.subtitle} />

      <Section>
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={N.introLabel} title={N.introTitle} desc={N.introDesc} />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label={N.whoLabel} title={N.whoTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-2 mbs-grid--lg" data-stagger>
          {N.who.map(w => (
            <Card key={w.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={w.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{w.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{w.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={N.uniLabel} title={N.uniTitle} desc={N.uniDesc} />
        </div>
        <ul className="mbs-grid-3" data-stagger style={{ listStyle: 'none', margin: '32px 0 0', padding: 0 }}>
          {C.universities.slice().sort((a, b) => a.localeCompare(b)).map(u => (
            <li key={u} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: 'var(--mbs-r-sm)', background: 'var(--mbs-off)', border: '1px solid var(--mbs-border)', fontSize: '13.5px', color: 'var(--mbs-navy)', fontWeight: 500 }}>
              <span style={{ color: 'var(--mbs-gold-text)', flexShrink: 0 }}><Icon name="building" size="16px" /></span>{u}
            </li>
          ))}
        </ul>
        <p className="mbs-ph" style={{ marginTop: '20px', fontSize: '13px' }}>{N.uniNote}</p>
      </Section>

      <Section tone="alt">
        <SectionHeading label={N.worksLabel} title={N.worksTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-4" data-stagger>
          {N.steps.map(s => <StepCard key={s.n} number={s.n} title={s.title}>{s.text}</StepCard>)}
        </div>
      </Section>

      <Section>
        <div data-reveal style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto', padding: '48px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }} data-on-navy="">
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-white)', margin: '0 0 12px' }}>{N.repH}</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.8, margin: '0 auto 24px', maxWidth: '480px' }}>{N.repText}</p>
          <Button variant="gold" href={ROUTES.join}>{N.repBtn}</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { NetworkScreen });
