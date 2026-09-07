const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function TeamScreen({ C }) {
  const T = C.team;
  return (
    <div>
      <PageHeader title={C.title.team} subtitle={T.subtitle} />

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label={T.whoLabel} title={T.whoTitle} desc={T.whoDesc} />
        </div>
        <div style={{ marginTop: '48px' }}>
          <SectionHeading label={T.boardLabel} title={T.boardTitle} style={{ marginBottom: '32px' }} />
          <div className="mbs-grid-3 mbs-grid--lg">
            {T.board.map(p => <MemberCard key={p.name} {...p} />)}
          </div>
          <FormNote tone="alt" style={{ marginTop: '28px' }}>{T.boardNote}</FormNote>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label={T.teamsLabel} title={T.teamsTitle} style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg">
          {T.teams.map(t => (
            <Card key={t.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={t.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '17px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{t.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{t.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto', padding: '48px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-gold-dim)', border: '1px solid var(--mbs-gold-border)' }}>
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 12px' }}>{T.rolesH}</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 8px' }}>{T.rolesText}</p>
          <p className="mbs-ph" style={{ fontSize: '13px', margin: '0 auto 24px' }}>{T.rolesOpenings}</p>
          <Button variant="gold" href={ROUTES.join}>{T.rolesBtn}</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { TeamScreen });
