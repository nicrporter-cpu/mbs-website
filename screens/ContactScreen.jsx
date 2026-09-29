const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function ContactForm({ C }) {
  const K = C.contact;
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  const [sendError, setSendError] = React.useState(false);
  const formRef = React.useRef(null);
  const statusRef = React.useRef(null);
  const renderedAtRef = React.useRef(Date.now());

  React.useEffect(() => { if (sent && statusRef.current) statusRef.current.focus(); }, [sent]);

  const clear = name => () => setErrors(prev => (prev[name] ? { ...prev, [name]: undefined } : prev));

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const err = {};
    if (!String(data.get('firstname') || '').trim()) err.firstname = K.errFirstname;
    if (!String(data.get('lastname') || '').trim()) err.lastname = K.errLastname;
    const email = String(data.get('email') || '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) err.email = K.errEmail;
    if (!String(data.get('message') || '').trim()) err.message = K.errMsg;
    setErrors(err);
    if (Object.keys(err).length) {
      const first = ['firstname', 'lastname', 'email', 'role', 'message'].find(k => err[k]);
      const el = formRef.current && formRef.current.elements[first];
      if (el && el.focus) el.focus();
      return;
    }
    setSendError(false);
    setSubmitting(true);
    data.set('mbs_rendered_at', String(renderedAtRef.current));
    window.MBS_SUBMIT_FORM(data, 'contact').then(result => {
      setSubmitting(false);
      if (result.ok) setSent(true);
      else setSendError(true);
    });
  };

  if (sent) {
    return (
      <Card padding="40px" hover={false} style={{ textAlign: 'center' }}>
        <div ref={statusRef} tabIndex={-1} role="status" style={{ outline: 'none' }}>
          <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px' }}><Icon name="check" size="34px" /></div>
          <h3 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '20px', margin: '0 0 8px' }}>{K.sentTitle}</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.8, maxWidth: '360px', margin: '0 auto' }}>
            {K.sentA}<span className="mbs-ph">[X]</span>{K.sentB}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      {sendError && (
        <div role="alert" style={{
          display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px',
          padding: '14px 18px', borderRadius: 'var(--mbs-r-sm)',
          background: 'var(--mbs-danger-bg)', color: 'var(--mbs-danger)',
          fontSize: 'var(--mbs-fs-body-sm)', lineHeight: 1.6
        }}>
          <Icon name="close" size="17px" style={{ marginTop: '2px' }} />
          <span>{K.sendError}</span>
        </div>
      )}

      {/* Honeypot — see worker/src/lib/spam.js. */}
      <div aria-hidden="true" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        <label htmlFor="mbs_hp_contact">Leave this field empty</label>
        <input id="mbs_hp_contact" type="text" name="mbs_hp_field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mbs-form-row">
        <Field label={K.f.firstname} required error={errors.firstname}>
          <Input name="firstname" autoComplete="given-name" placeholder={K.ph.firstname} onInput={clear('firstname')} />
        </Field>
        <Field label={K.f.lastname} required error={errors.lastname}>
          <Input name="lastname" autoComplete="family-name" placeholder={K.ph.lastname} onInput={clear('lastname')} />
        </Field>
      </div>
      <Field label={K.f.email} required error={errors.email}>
        <Input type="email" name="email" autoComplete="email" inputMode="email" placeholder={K.ph.email} onInput={clear('email')} />
      </Field>
      <Field label={K.f.role}>
        <Select name="role" defaultValue="student">
          {K.roles.map(r => <option key={r.v} value={r.v}>{r.label}</option>)}
        </Select>
      </Field>
      <Field label={K.f.message} required error={errors.message}>
        <Textarea name="message" placeholder={K.ph.message} onInput={clear('message')} />
      </Field>
      <Button variant="navy" block type="submit" disabled={submitting}>{submitting ? K.sending : K.send}</Button>
      <p style={{ marginTop: '14px', fontSize: '12px', color: 'var(--mbs-gray)', textAlign: 'center' }}>{K.direct}</p>
    </form>
  );
}

function ContactScreen({ C }) {
  const K = C.contact;
  return (
    <div>
      <PageHeader title={C.title.contact} subtitle={K.subtitle} />

      <Section>
        <div data-reveal style={{ maxWidth: 'var(--mbs-prose-max)' }}>
          <SectionHeading align="center" label={K.label} title={K.title}
            desc={<span>{K.descA}<span className="mbs-ph">[X]</span>{K.descB}</span>} />
        </div>
        <div className="mbs-grid-3" data-stagger style={{ marginTop: '32px' }}>
          {K.routes.map(r => (
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
          <div data-reveal>
            <SectionHeading label={K.formLabel} title={K.formTitle} />
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>{K.formText}</p>
            <div style={{ marginTop: '28px' }}>
              <div className="mbs-label" style={{ marginBottom: '12px' }}>{K.findLabel}</div>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', lineHeight: 1.8, margin: '0 0 8px' }}>{K.findText}</p>
              <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', margin: 0 }}>
                {K.follow}<span className="mbs-ph">{K.followPh}</span>
              </p>
            </div>
          </div>
          <div data-reveal style={{ maxWidth: 'var(--mbs-form-max)' }}>
            <ContactForm C={C} />
          </div>
        </div>
      </Section>

      <Section>
        <div data-reveal style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>
          <p style={{ fontSize: '14px', color: 'var(--mbs-gray)', marginBottom: '20px' }}>{K.faqText}</p>
          <Button variant="outline" href={ROUTES.faq}>{K.faqBtn}</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { ContactScreen });
