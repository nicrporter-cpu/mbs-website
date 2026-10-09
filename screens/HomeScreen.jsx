const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
/* C (active-language content) and ROUTES are supplied by the page shell. */

function HomeScreen({ C }) {
  const H = C.home;
  return (
    <div>
      {/* Hero banner — Munich skyline photo, full-bleed, with a navy box
          carrying the "Munich Business Society" wordmark, lead copy and CTAs. */}
      <section className="mbs-hero-banner" style={{ backgroundImage: 'url(assets/munich-skyline.jpg)' }}>
        <div className="mbs-hero-banner-inner">
          <div className="mbs-hero-banner-box">
            <h1 style={{
              fontFamily: 'var(--mbs-font-serif)', fontSize: 'var(--mbs-fs-display)',
              fontWeight: 'var(--mbs-fw-bold)', lineHeight: 'var(--mbs-lh-display)',
              letterSpacing: 'var(--mbs-tr-display)', color: 'var(--mbs-white)',
              margin: '0 0 14px'
            }}><span className="mbs-hero-l1">Munich</span><br /><em className="mbs-hero-l2" style={{ fontStyle: 'normal', color: 'var(--mbs-gold-on-navy)' }}>Business Society</em></h1>
            <p className="mbs-hero-lead" style={{ fontSize: 'var(--mbs-fs-lead)', color: 'var(--mbs-on-navy-70)', lineHeight: 'var(--mbs-lh-body)', margin: '0 0 24px' }}>{H.heroLead}</p>
            <div className="mbs-hero-cta" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="gold" href={ROUTES.about}>{C.ui.aboutArrow}</Button>
              <Button variant="onNavy" href={ROUTES.calendar}>{H.seeEvents}</Button>
            </div>
          </div>
        </div>
      </section>

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
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '20px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{p.title}</h3>
              <p style={{ fontSize: '13.5px', fontWeight: 600, lineHeight: 1.5, color: 'var(--mbs-gold-text)', margin: '0 0 18px', minHeight: '3em' }}>{p.tag}</p>
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

      {/* Closing bands */}
      <Section tone="alt">
        <div className="mbs-grid-2 mbs-grid--lg" data-stagger>
          <div style={{ padding: '40px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-gold-dim)', border: '1px solid var(--mbs-gold-border)' }}>
            <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 12px' }}>{H.studentH}</h2>
            <p style={{ fontSize: '14px', lineHeight: 1.8, margin: '0 0 24px' }}>{H.studentText}</p>
            <Button variant="gold" href={ROUTES.about}>{C.ui.aboutArrow}</Button>
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
