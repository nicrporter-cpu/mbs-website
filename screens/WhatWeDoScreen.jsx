const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function WhatWeDoScreen({ C, openEvent }) {
  const W = C.whatwedo;
  return (
    <div>
      <PageHeader title={C.title.whatwedo} subtitle={W.subtitle} />

      <Section tone="alt">
        <div style={{ maxWidth: 'var(--mbs-prose-max)', marginBottom: '40px' }}>
          <SectionHeading label={W.formatsLabel} title={W.formatsTitle} desc={W.formatsDesc} />
        </div>
        <div className="mbs-grid-2">
          {C.formats.map(f => (
            <Card key={f.title} padding="28px">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                <span style={{ color: 'var(--mbs-gold-text)', lineHeight: 1 }}><Icon name={f.icon} size="24px" /></span>
                <Badge variant="tag">{f.pillar}</Badge>
              </div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: '0 0 14px' }}>{f.text}</p>
              <p style={{ fontSize: '12px', color: 'var(--mbs-gold-text)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.5px', margin: 0 }}>{f.access}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mbs-split">
          <div>
            <SectionHeading label={W.projLabel} title={W.projTitle} />
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>{W.projText}</p>
            <Button variant="navy" href={ROUTES.companies}>{W.projLink}</Button>
          </div>
          <Card tone="navy" padding="32px">
            <div data-on-navy="" style={{ color: 'var(--mbs-gold-on-navy)', marginBottom: '16px' }}><Icon name="briefcase" size="28px" /></div>
            <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.8, margin: 0 }}>{W.projCard}</p>
          </Card>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label={W.progLabel} title={W.progTitle} />
        {C.events.length ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {C.events.map(e => (
              <EventListItem key={e.id} day={e.day} month={e.month} title={e.title} tag={e.tag}
                location={e.location} time={e.time} onClick={() => openEvent(e.id)}>{e.teaser}</EventListItem>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px', borderRadius: 'var(--mbs-r)', background: 'var(--mbs-white)', border: '1px solid var(--mbs-border)' }}>
            <p style={{ fontSize: '15px', color: 'var(--mbs-gray)', margin: 0 }}>{W.progEmpty}</p>
          </div>
        )}
        <p className="mbs-ph" style={{ marginTop: '20px', fontSize: '13px' }}>{W.progNote}</p>
      </Section>
    </div>
  );
}
Object.assign(window, { WhatWeDoScreen });
