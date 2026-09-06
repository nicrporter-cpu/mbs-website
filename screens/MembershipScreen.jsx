const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

function MembershipScreen() {
  return (
    <div>
      <PageHeader title="Membership" subtitle="Open to every university in Munich — any subject, any degree level." />

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Who can join" title="Open to every university in Munich."
            desc="If you study in Munich and you're serious about business, you can join. We don't filter by university, by grade average, or by whether your programme has “business” in the title." />
        </div>
        <ul className="mbs-grid-2" style={{ listStyle: 'none', margin: '32px 0 0', padding: 0 }}>
          {D.membershipCanJoin.map(item => (
            <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px 20px', borderRadius: 'var(--mbs-r-sm)', background: 'var(--mbs-off)', border: '1px solid var(--mbs-border)' }}>
              <span style={{ color: 'var(--mbs-gold-text)', flexShrink: 0, marginTop: '1px' }}><Icon name="check" size="18px" /></span>
              <span style={{ fontSize: '14px', color: 'var(--mbs-navy)', lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt">
        <SectionHeading label="What you get" title="Everything membership opens up." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3 mbs-grid--lg">
          {D.membershipGet.map(g => (
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
          <div>
            <SectionHeading label="What we expect" title="Show up. Contribute. Behave well." />
            <p style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>Show up to a few things a semester. Contribute something at some point — an idea, an evening, a contact, a project. Treat the people in this network the way you'd want to be treated by them in five years, when one of them is hiring.</p>
          </div>
          <Card padding="32px" hover={false}>
            <div className="mbs-label" style={{ marginBottom: '10px' }}>The fee</div>
            <p style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '32px', fontWeight: 700, color: 'var(--mbs-navy)', margin: '0 0 12px' }}>
              <span className="mbs-ph">[X] €</span> <span style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', fontWeight: 400, color: 'var(--mbs-gray)' }}>per semester</span>
            </p>
            <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.7, margin: 0 }}>Covers venues, materials and running the programme. Nobody takes a salary. If the fee is the reason you can't join, write to us — we'd rather have you in the room.</p>
          </Card>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading align="center" label="How to join" title="Three steps, about a week." style={{ marginBottom: '40px' }} />
        <div className="mbs-grid-3">
          {D.membershipSteps.map(s => <StepCard key={s.n} number={s.n} title={s.title}>{s.text}</StepCard>)}
        </div>
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Button variant="gold" href={ROUTES.join}>Join MBS →</Button>
          <p className="mbs-ph" style={{ marginTop: '14px', fontSize: '13px' }}>Applications for the [semester] intake close on [date].</p>
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <SectionHeading align="center" label="Still deciding?" title="The questions students ask before applying."
            desc="Fees, eligibility, time commitment, joining mid-degree — answered in full on the FAQ." />
          <div style={{ marginTop: '24px' }}><Button variant="outline" href={ROUTES.faq}>Read the FAQ →</Button></div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { MembershipScreen });
