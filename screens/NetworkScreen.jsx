const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

function NetworkScreen() {
  return (
    <div>
      <PageHeader title="The Network" subtitle="MBS isn't attached to a university. It's attached to a city." />

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Every campus. One room." title="A network is worth the doors it opens."
            desc="MBS isn't attached to a university. It's attached to a city. That single decision changes what membership is worth — because the value of a network is the number of doors it opens that you couldn't have opened yourself." />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading label="Who's in the network" title="Four groups, one room." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-2 mbs-grid--lg">
          {D.networkWho.map(w => (
            <Card key={w.title} padding="28px">
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px', lineHeight: 1 }}><Icon name={w.icon} size="24px" /></div>
              <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--mbs-navy)', margin: '0 0 8px' }}>{w.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>{w.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Universities represented" title="Listed alphabetically. No ranking, ever."
            desc="Members' universities, in plain text and A–Z — any other order would read as a hierarchy, and the whole point is that there isn't one." />
        </div>
        <ul className="mbs-grid-3" style={{ listStyle: 'none', margin: '32px 0 0', padding: 0 }}>
          {D.universities.slice().sort((a, b) => a.localeCompare(b)).map(u => (
            <li key={u} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: 'var(--mbs-r-sm)', background: 'var(--mbs-off)', border: '1px solid var(--mbs-border)', fontSize: '13.5px', color: 'var(--mbs-navy)', fontWeight: 500 }}>
              <span style={{ color: 'var(--mbs-gold-text)', flexShrink: 0 }}><Icon name="building" size="16px" /></span>{u}
            </li>
          ))}
        </ul>
        <p className="mbs-ph" style={{ marginTop: '20px', fontSize: '13px' }}>
          Placeholder list — replace with every university currently represented in the membership. If a member's university isn't listed yet, they'd be the first.
        </p>
      </Section>

      <Section tone="alt">
        <SectionHeading label="How the network works" title="One membership, four moves." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-4">
          {D.networkSteps.map(s => <StepCard key={s.n} number={s.n} title={s.title}>{s.text}</StepCard>)}
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto', padding: '48px', borderRadius: 'var(--mbs-r-lg)', background: 'var(--mbs-navy)' }} data-on-navy="">
          <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--mbs-white)', margin: '0 0 12px' }}>Be the first MBS voice at your university.</h2>
          <p style={{ fontSize: '14px', color: 'var(--mbs-on-navy-50)', lineHeight: 1.8, margin: '0 auto 24px', maxWidth: '480px' }}>Every university in Munich should have someone in the network who makes it visible there. Campus representatives run local outreach, bring people to events and sit in on the programme planning. It's a real role with a real title, and we're actively looking for people to fill it.</p>
          <Button variant="gold" href={ROUTES.join}>Represent your university →</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { NetworkScreen });
