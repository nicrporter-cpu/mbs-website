const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

const DOMAIN = D.brand.domain;
const ROUTES_MAIL = [
  { icon: 'users', label: 'Students & membership', addr: 'hello@' + DOMAIN },
  { icon: 'briefcase', label: 'Companies & partnerships', addr: 'partners@' + DOMAIN },
  { icon: 'mail', label: 'Press & everything else', addr: 'info@' + DOMAIN }
];

function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const formRef = React.useRef(null);
  const statusRef = React.useRef(null);

  React.useEffect(() => { if (sent && statusRef.current) statusRef.current.focus(); }, [sent]);

  const clear = name => () => setErrors(prev => (prev[name] ? { ...prev, [name]: undefined } : prev));

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const err = {};
    if (!String(data.get('name') || '').trim()) err.name = 'Please add your name.';
    const email = String(data.get('email') || '').trim();
    if (!email) err.email = 'Please add your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) err.email = "That email address doesn't look complete — please check it.";
    if (!String(data.get('message') || '').trim()) err.message = 'Please add a message.';
    setErrors(err);
    if (Object.keys(err).length) {
      const first = ['name', 'email', 'role', 'message'].find(k => err[k]);
      const el = formRef.current && formRef.current.elements[first];
      if (el && el.focus) el.focus();
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <Card padding="40px" hover={false} style={{ textAlign: 'center' }}>
        <div ref={statusRef} tabIndex={-1} role="status" style={{ outline: 'none' }}>
          <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px' }}><Icon name="check" size="34px" /></div>
          <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '20px', margin: '0 0 8px' }}>Message sent.</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.8, maxWidth: '360px', margin: '0 auto' }}>
            We'll come back to you within <span className="mbs-ph">[X]</span> working days.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <Field label="Name" required error={errors.name}>
        <Input name="name" autoComplete="name" placeholder="Your name" onInput={clear('name')} />
      </Field>
      <Field label="Email" required error={errors.email}>
        <Input type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@example.com" onInput={clear('email')} />
      </Field>
      <Field label="I'm a…">
        <Select name="role" defaultValue="student">
          <option value="student">Student</option>
          <option value="company">Company</option>
          <option value="other">Other</option>
        </Select>
      </Field>
      <Field label="Your message" required error={errors.message}>
        <Textarea name="message" placeholder="What's on your mind?" onInput={clear('message')} />
      </Field>
      <Button variant="navy" block type="submit">Send it →</Button>
      <p style={{ marginTop: '14px', fontSize: '12px', color: 'var(--mbs-gray)', textAlign: 'center' }}>
        Or write to us directly at hello@{DOMAIN}.
      </p>
    </form>
  );
}

function ContactScreen() {
  return (
    <div>
      <PageHeader title="Contact" subtitle="Ask us anything — student, company, or just curious." />

      <Section>
        <div style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading label="Ask us anything" title="Ask us anything."
            desc={<span>Whether you're a student weighing up joining, a company thinking about a partnership, or someone with an idea for a format — write to us. We answer within <span className="mbs-ph">[X]</span> working days.</span>} />
        </div>
        <div className="mbs-grid-3" style={{ marginTop: '32px' }}>
          {ROUTES_MAIL.map(r => (
            <a key={r.label} href={'mailto:' + r.addr} style={{ display: 'block', padding: '24px', borderRadius: 'var(--mbs-r)', background: 'var(--mbs-off)', border: '1px solid var(--mbs-border)', textDecoration: 'none' }}>
              <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '12px' }}><Icon name={r.icon} size="22px" /></div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--mbs-navy)', marginBottom: '4px' }}>{r.label}</div>
              <div style={{ fontSize: '13px', color: 'var(--mbs-gold-text)' }}>{r.addr}</div>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="mbs-split mbs-split--top">
          <div>
            <SectionHeading label="Send a message" title="Straight to the right person." />
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>Tell us who you are and what you're after — the form routes your message to the team that can actually help.</p>
            <div style={{ marginTop: '28px' }}>
              <div className="mbs-label" style={{ marginBottom: '12px' }}>Find us</div>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.8, margin: '0 0 8px' }}>We meet across Munich rather than on one campus — venues are listed with each event.</p>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', margin: 0 }}>
                Follow: <span className="mbs-ph">LinkedIn · Instagram [handles]</span>
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 'var(--mbs-form-max)' }}>
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { ContactScreen });
