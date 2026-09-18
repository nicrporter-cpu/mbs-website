const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
/* C (active-language content) and ROUTES are supplied by the page shell. */

function HomeScreen({ C }) {
  const H = C.home;
  return (
    <div>
      {/* Hero — the "Munich Business Society" wordmark, restored per request; the
          Hero component renders the gold-italic split. Lead + CTAs localise. */}
      <Hero lead={H.heroLead}
        primary={{ label: C.ui.joinArrow, href: ROUTES.join }}
        secondary={{ label: H.seeEvents, href: ROUTES.about }} />

      {/* Proof bar — numbers are board placeholders until true today. */}
      <div className="mbs-sec mbs-sec--navy" data-on-navy="">
        <div className="mbs-sec-inner" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <ul className="mbs-grid-4" data-stagger style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
            {C.proof.map(p => (
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
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={H.whyLabel} title={H.whyTitle} />
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>{H.whyP1}</p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>{H.whyP2}</p>
        </div>
      </Section>

      {/* The three pillars */}
      <Section tone="alt">
        <SectionHeading align="center" label={H.pillarsLabel} title={H.pillarsTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3" data-stagger>
          {C.pillars.map(p => (
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
          <div data-reveal>
            <SectionHeading label={H.formatsLabel} title={H.formatsTitle} />
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>{H.formatsText}</p>
            <Button variant="navy" href={ROUTES.about}>{H.formatsLink}</Button>
          </div>
          <ul className="mbs-grid-2" data-stagger style={{ listStyle: 'none', margin: 0, padding: 0, alignSelf: 'start' }}>
            {C.formats.map(f => (
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
        <figure data-on-navy="" data-reveal style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: 'var(--mbs-gold-on-navy)', marginBottom: '20px' }}><Icon name="star" size="26px" /></div>
          <blockquote style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: 'clamp(22px,3vw,30px)', lineHeight: 1.4, color: 'var(--mbs-white)', margin: '0 0 20px', fontWeight: 500 }}>{H.voiceQuote}</blockquote>
          <figcaption style={{ fontSize: '13px', color: 'var(--mbs-on-navy-50)' }}>
            <span className="mbs-ph mbs-ph--on-navy">{H.voiceAttr}</span>
            <span style={{ display: 'block', marginTop: '8px', fontSize: '11px' }}>{H.voiceNote}</span>
          </figcaption>
        </figure>
      </Section>

      {/* Closing bands */}
      <Section tone="alt">
        <div className="mbs-grid-2 mbs-grid--lg" data-stagger>
          <div style={{ padding: '40px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-gold-dim)', border: '1px solid var(--mbs-gold-border)' }}>
            <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 12px' }}>{H.studentH}</h2>
            <p style={{ fontSize: '14px', lineHeight: 1.8, margin: '0 0 24px' }}>{H.studentText}</p>
            <Button variant="gold" href={ROUTES.join}>{C.ui.joinArrow}</Button>
          </div>
          <div data-on-navy="" style={{ padding: '40px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }}>
            <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-white)', margin: '0 0 12px' }}>{H.companyH}</h2>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--mbs-on-navy-50)', margin: '0 0 24px' }}>{H.companyText}</p>
            <Button variant="gold" href={ROUTES.companies}>{H.partnerBtn}</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
