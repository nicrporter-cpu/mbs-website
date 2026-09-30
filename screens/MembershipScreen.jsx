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

      <Section>
        <div data-reveal style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <SectionHeading align="center" label={M.faqLabel} title={M.faqTitle} desc={M.faqDesc} />
          <div style={{ marginTop: '24px' }}><Button variant="outline" href={ROUTES.faq}>{M.faqBtn}</Button></div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { MembershipScreen });
