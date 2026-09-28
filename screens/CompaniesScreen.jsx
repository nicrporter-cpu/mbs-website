const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function CompaniesScreen({ C }) {
  const K = C.companies;
  const partnersMail = 'munichbusinesssociety@gmail.com';
  return (
    <div>
      <PageHeader title={C.title.companies} subtitle={K.subtitle} />

      <Section>
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={K.whyLabel} title={K.whyTitle} desc={K.whyDesc} />
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
            <Button variant="gold" href={'mailto:' + partnersMail + '?subject=Partner%20pack'}>{K.packBtn}</Button>
            <Button variant="outline" href={ROUTES.contact}>{K.callBtn}</Button>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label={K.whyGridLabel} title={K.why[0].title} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg" data-stagger>
          {K.why.map(w => (
            <Card key={w.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={w.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{w.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{w.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading label={K.waysLabel} title={K.waysTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-2 mbs-grid--lg" data-stagger>
          {K.ways.map(w => (
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
        <SectionHeading label={K.partnersLabel} title={K.partnersTitle} />
        <div data-reveal style={{
          marginTop: '28px', textAlign: 'center', padding: '48px', borderRadius: 'var(--mbs-r-lg)',
          background: 'var(--mbs-white)', border: '1px dashed var(--mbs-border)'
        }}>
          <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 20px' }}>{K.partnersDesc}</p>
          <Button variant="gold" href={ROUTES.contact}>{K.partnersBtn}</Button>
        </div>
      </Section>

      <Section>
        <SectionHeading label={K.howLabel} title={K.howTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-4" data-stagger>
          {K.steps.map(s => <StepCard key={s.n} number={s.n} title={s.title}>{s.text}</StepCard>)}
        </div>
        <div data-reveal style={{ marginTop: '48px', textAlign: 'center', padding: '48px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }} data-on-navy="">
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', color: 'var(--mbs-white)', margin: '0 0 10px' }}>{K.closeH}</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto 24px' }}>{K.closeText}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="gold" href={'mailto:' + partnersMail}>{K.emailBtn}</Button>
            <Button variant="onNavy" href={ROUTES.contact}>{K.callBtn}</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { CompaniesScreen });
