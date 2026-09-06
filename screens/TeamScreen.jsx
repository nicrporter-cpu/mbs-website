const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

function TeamScreen() {
  return (
    <div>
      <PageHeader title="Team" subtitle="Built and run entirely by students, alongside their degrees." />

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Who runs MBS" title="Students, running this properly."
            desc="MBS is built and run entirely by students alongside their degrees. The board is elected by the membership; every other role is open to members who want it." />
        </div>
        <div style={{ marginTop: '48px' }}>
          <SectionHeading label="The board" title="Elected by the membership" style={{ marginBottom: '32px' }} />
          <div className="mbs-grid-3 mbs-grid--lg">
            {D.board.map(p => <MemberCard key={p.name} {...p} />)}
          </div>
          <FormNote tone="alt" style={{ marginTop: '28px' }}>Assign each founder's role, confirm the one-line bio and add a photo before publishing. Naming each founder's university here is useful — it demonstrates the cross-university claim — provided the board is (or becomes) mixed.</FormNote>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label="Teams" title="Five teams, one society." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg">
          {D.teams.map(t => (
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
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 12px' }}>We're short-handed in the good way.</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 8px' }}>Growing this network faster than five people can run it is a nice problem. If you want real responsibility rather than a line on a members list, there's a role here.</p>
          <p className="mbs-ph" style={{ fontSize: '13px', margin: '0 auto 24px' }}>Current openings: [list roles, or link to a roles page].</p>
          <Button variant="gold" href={ROUTES.join}>Take a role →</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { TeamScreen });
