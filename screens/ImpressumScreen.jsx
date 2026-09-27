const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

/* Walks a legal-text block for `[...]` placeholders, tracking bracket depth so
   a placeholder that itself quotes another placeholder (an instruction with an
   example sentence containing its own `[X]`) still comes out as one .mbs-ph
   span rather than breaking on the first `]`. Everything outside brackets
   keeps its line breaks as <br/>, same as an address block. */
function legalInline(text) {
  const nodes = [];
  let i = 0, key = 0;
  while (i < text.length) {
    if (text[i] === '[') {
      let depth = 1, j = i + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === '[') depth++;
        else if (text[j] === ']') depth--;
        j++;
      }
      nodes.push(<span key={key++} className="mbs-ph" style={{ whiteSpace: 'normal' }}>{text.slice(i, j)}</span>);
      i = j;
    } else {
      let j = i;
      while (j < text.length && text[j] !== '[') j++;
      text.slice(i, j).split('\n').forEach((line, idx, arr) => {
        nodes.push(<React.Fragment key={key++}>{line}</React.Fragment>);
        if (idx < arr.length - 1) nodes.push(<br key={key++} />);
      });
      i = j;
    }
  }
  return nodes;
}

/* Renders one legal document from a blank-line-separated block string.
   `## ` and `### ` prefixes mark headings; everything else is a paragraph
   run through legalInline(). See screens/data.js for why the source is
   plain German rather than the bilingual C tree. */
function LegalBody({ text }) {
  return (
    <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)', margin: '0 auto' }}>
      {text.trim().split(/\n\n+/).map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} style={{
              fontFamily: 'var(--mbs-font-serif)', fontSize: 'var(--mbs-fs-h2)', fontWeight: 'var(--mbs-fw-bold)',
              color: 'var(--mbs-navy)', margin: i === 0 ? '0 0 20px' : '56px 0 20px',
              paddingTop: i === 0 ? 0 : '32px', borderTop: i === 0 ? 'none' : '1px solid var(--mbs-border)'
            }}>{block.slice(3)}</h2>
          );
        }
        if (block.startsWith('### ')) {
          return (
            <h3 key={i} style={{
              fontFamily: 'var(--mbs-font-serif)', fontSize: '18px', fontWeight: 600,
              color: 'var(--mbs-navy)', margin: i === 0 ? '0 0 10px' : '32px 0 10px'
            }}>{block.slice(4)}</h3>
          );
        }
        return (
          <p key={i} style={{ fontSize: '15px', lineHeight: 'var(--mbs-lh-prose)', color: 'var(--mbs-gray)', margin: '0 0 16px' }}>
            {legalInline(block)}
          </p>
        );
      })}
    </div>
  );
}

function ImpressumScreen({ C }) {
  return (
    <div>
      <PageHeader title={C.title.impressum} subtitle="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)" />
      <Section>
        <LegalBody text={C.legal.impressum} />
      </Section>
    </div>
  );
}
Object.assign(window, { ImpressumScreen });
