const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function AboutScreen({ C, openEvent }) {
  const A = C.about;
  const W = C.whatwedo;
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
          {A.storyP3 && <p style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>{A.storyP3}</p>}
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
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)', marginBottom: '40px' }}>
          <SectionHeading label={W.formatsLabel} title={W.formatsTitle} desc={W.formatsDesc} />
        </div>
        <div className="mbs-grid-2" data-stagger>
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

      <Section tone="alt">
        <div className="mbs-split">
          <div data-reveal>
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

      <Section>
        <SectionHeading label={W.progLabel} title={W.progTitle} />
        {C.events.length ? (
          <div data-stagger style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
        {W.progNote && <p className="mbs-ph" style={{ marginTop: '20px', fontSize: '13px' }}>{W.progNote}</p>}
      </Section>

      <Section tone="alt">
        <SectionHeading label={W.recapLabel} title={W.recapTitle} />
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '32px', maxWidth: 'var(--mbs-prose-max)' }}>{W.recapText}</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {C.ui.social.filter(s => s.href).map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--mbs-gold)', color: 'var(--mbs-navy)', borderRadius: 'var(--mbs-r)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              <Icon name={s.icon} size="18px" /> {s.label}
            </a>
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
            {A.orgText}
          </p>
          <div style={{ marginTop: '8px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="navy" href={ROUTES.team}>{A.meetTeam}</Button>
            <Button variant="outline" href={ROUTES.faq}>{A.faqBtn}</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { AboutScreen });
