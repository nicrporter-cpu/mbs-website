const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function FaqScreen({ C }) {
  const F = C.faq;
  return (
    <div>
      <PageHeader title={C.title.faq} subtitle={F.subtitle} />
      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)', margin: '0 auto' }}>
          <SectionHeading align="center" label={F.label} title={F.title} style={{ marginBottom: '40px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {F.items.map((item, i) => <FaqItem key={item.q} question={item.q} defaultOpen={i === 0}>{item.a}</FaqItem>)}
          </div>
        </div>
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: 'var(--mbs-gray)', marginBottom: '20px' }}>{F.stillText}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="gold" href={ROUTES.join}>{F.joinBtn}</Button>
            <Button variant="outline" href={ROUTES.whatwedo}>{F.seeBtn}</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { FaqScreen });
