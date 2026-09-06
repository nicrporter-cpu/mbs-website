const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

function FaqScreen() {
  return (
    <div>
      <PageHeader title="FAQ" subtitle="The questions students ask before applying." />
      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)', margin: '0 auto' }}>
          <SectionHeading align="center" label="FAQ" title="Before you apply" style={{ marginBottom: '40px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {D.faq.map((item, i) => <FaqItem key={item.q} question={item.q} defaultOpen={i === 0}>{item.a}</FaqItem>)}
          </div>
        </div>
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: 'var(--mbs-gray)', marginBottom: '20px' }}>Still weighing it up? Come to an open event before you decide.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="gold" href={ROUTES.join}>Join MBS →</Button>
            <Button variant="outline" href={ROUTES.whatwedo}>See what's coming up</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { FaqScreen });
