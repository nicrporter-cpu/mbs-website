const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function MembershipScreen({ C }) {
  const M = C.membership;
  return (
    <div>
      <PageHeader title={C.title.membership} subtitle={M.subtitle} />

      <Section>
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={M.whoLabel} title={M.whoTitle} desc={M.whoDesc} />
        </div>
        <ul className="mbs-grid-2" data-stagger style={{ listStyle: 'none', margin: '32px 0 0', padding: 0 }}>
          {M.canJoin.map(item => (
            <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px 20px', borderRadius: 'var(--mbs-r-sm)', background: 'var(--mbs-off)', border: '1px solid var(--mbs-border)' }}>
              <span style={{ color: 'var(--mbs-gold-text)', flexShrink: 0, marginTop: '1px' }}><Icon name="check" size="18px" /></span>
              <span style={{ fontSize: '14px', color: 'var(--mbs-navy)', lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt">
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)', marginBottom: '32px' }}>
          <SectionHeading title={M.tiersTitle} desc={M.tiersDesc} />
        </div>
        <div className="mbs-tiers" data-reveal>
          {M.tiers.map((t, i) => (
            <section key={t.name} className={'mbs-tier' + (i === 1 ? ' mbs-tier--member' : '')} aria-labelledby={'mbs-tier-' + i}>
              <h3 id={'mbs-tier-' + i} className="mbs-tier-name">{t.name}</h3>
              <dl className="mbs-tier-rows">
                <div><dt>{M.tierRows.who}</dt><dd>{t.who}</dd></div>
                <div><dt>{M.tierRows.how}</dt><dd>{t.how}</dd></div>
                <div><dt>{M.tierRows.which}</dt><dd>{MBS_PH(t.which)}</dd></div>
              </dl>
            </section>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading label={M.getLabel} title={M.getTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg" data-stagger>
          {M.get.map(g => (
            <Card key={g.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={g.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '17px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{g.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{g.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label={M.processLabel} title={M.processTitle} style={{ marginBottom: '48px' }} />
        <div className="mbs-process" data-reveal>
          {M.process.map((step, i) => (
            <div key={step.title} className={'mbs-process-row mbs-process-row--' + (i % 2 === 0 ? 'left' : 'right')}>
              <div className="mbs-process-dot" />
              <div className="mbs-process-card">
                <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 6px' }}>{step.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--mbs-gray)', lineHeight: 1.6, margin: 0 }}>{step.text}</p>
                {step.note && <p style={{ fontSize: '12.5px', color: 'var(--mbs-gold-text)', lineHeight: 1.6, margin: '8px 0 0' }}>{step.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mbs-split mbs-split--top">
          <div data-reveal>
            <SectionHeading label={M.expectLabel} title={M.expectTitle} />
            <p style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>{M.expectText}</p>
          </div>
          <Card padding="32px" hover={false}>
            <div className="mbs-label" style={{ marginBottom: '10px' }}>{M.feeLabel}</div>
            <p style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '32px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 12px' }}>
              <span>{M.feeValue}</span> <span style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', fontWeight: 400, color: 'var(--mbs-gray)' }}>{M.feePer}</span>
            </p>
            <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{M.feeText}</p>
          </Card>
        </div>
      </Section>

      <Section tone="alt">
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={M.faqLabel} title={M.faqTitle} style={{ marginBottom: '32px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} data-stagger>
            {M.faqItems.map(item => (
              <FaqItem key={item.q} question={item.q}>{item.a}</FaqItem>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div data-reveal data-on-navy="" style={{ textAlign: 'center', padding: '48px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }}>
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', color: 'var(--mbs-white)', margin: '0 0 10px' }}>{M.ctaH}</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-70)', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto 24px' }}>{M.ctaText}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="gold" href={ROUTES.join}>{C.ui.apply}</Button>
            <Button variant="onNavy" href={ROUTES.calendar}>{C.home.seeEvents}</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { MembershipScreen });
