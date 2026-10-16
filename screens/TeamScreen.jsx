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
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading title={T.whoTitle} desc={T.whoDesc} />
        </div>
        <div style={{ marginTop: '48px' }}>
          <div className="mbs-grid-3 mbs-grid--lg" data-stagger>
            {T.board.map(p => <MemberCard key={p.name} {...p} />)}
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label={T.teamsLabel} title={T.teamsTitle} style={{ marginBottom: '40px' }} />
        <ul className="mbs-ledger" data-stagger>
          {T.teams.map(t => (
            <li key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div data-reveal data-on-navy="" style={{ textAlign: 'center', padding: '48px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }}>
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', color: 'var(--mbs-white)', margin: '0 0 10px' }}>{T.ctaH}</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-70)', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto 24px' }}>{T.ctaText}</p>
          <Button variant="gold" href={ROUTES.join}>{C.ui.apply}</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { TeamScreen });
