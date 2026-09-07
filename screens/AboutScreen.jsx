const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function AboutScreen({ C }) {
  const A = C.about;
  return (
    <div>
      <PageHeader title={C.title.about} subtitle={A.subtitle} />

      <Section>
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={A.whoLabel} title={A.whoTitle} desc={A.whoDesc} />
        </div>

        <div data-reveal style={{ marginTop: '56px', maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={A.storyLabel} title={A.storyTitle} />
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>{A.storyP1}</p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>{A.storyP2}</p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>{A.storyP3a}<span className="mbs-ph">[X]</span>{A.storyP3b}</p>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label={A.diffLabel} title={A.diffTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-2 mbs-grid--lg" data-stagger>
          {A.different.map(item => (
            <Card key={item.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={item.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading align="center" label={A.valuesLabel} title={A.valuesTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg" data-stagger>
          {C.values.map(v => (
            <Card key={v.title} tone="navy" padding="32px">
              <div data-on-navy="" style={{ marginBottom: '16px', lineHeight: 1, color: 'var(--mbs-gold-on-navy)' }}><Icon name={v.icon} size="28px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-gold-on-navy)', margin: '0 0 12px' }}>{v.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.7, margin: 0 }}>{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={A.orgLabel} title={A.orgTitle} />
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
            {A.orgP1}<span className="mbs-ph">{A.orgPh}</span>{A.orgP2}
          </p>
          <FormNote tone="alt">{A.orgNote}</FormNote>
          <div style={{ marginTop: '28px' }}>
            <Button variant="navy" href={ROUTES.team}>{A.meetTeam}</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { AboutScreen });
