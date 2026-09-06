const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;

/* Validation lives next to the fields it describes so the two can't drift.
   Messages name the problem and the fix, in the society's own voice. */
const REQUIRED = {
  firstname: 'Please add your first name.',
  lastname: 'Please add your last name.',
  email: 'Please add your email address.',
  university: 'Please choose your university.',
  level: 'Please choose your degree level.',
  motivation: 'Tell us in a line or two why you want to join.'
};
const FIELD_ORDER = ['firstname', 'lastname', 'email', 'university', 'level', 'motivation', 'consent'];

function validate(data) {
  const errors = {};
  Object.keys(REQUIRED).forEach(k => {
    if (!String(data.get(k) || '').trim()) errors[k] = REQUIRED[k];
  });
  const email = String(data.get('email') || '').trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "That email address doesn't look complete — please check it.";
  }
  if (!data.get('consent')) {
    errors.consent = 'Please agree to your data being processed so we can get back to you.';
  }
  return errors;
}

function JoinScreen() {
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const formRef = React.useRef(null);
  const successRef = React.useRef(null);

  React.useEffect(() => {
    if (sent && successRef.current) successRef.current.focus();
  }, [sent]);

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = FIELD_ORDER.find(k => found[k]);
      const el = formRef.current && formRef.current.elements[first];
      if (el && el.focus) el.focus();
      return;
    }
    setSent(true);
  };

  const clear = name => () => setErrors(prev => (prev[name] ? { ...prev, [name]: undefined } : prev));
  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <div>
      <PageHeader height={220} title="Join MBS" subtitle="Fill in the form and we'll set up your short conversation." />
      <Section tone="alt">
        <div style={{ maxWidth: 'var(--mbs-form-max)', margin: '0 auto' }}>
          {sent ? (
            <Card padding="40px" hover={false} style={{ textAlign: 'center' }}>
              <div ref={successRef} tabIndex={-1} role="status" style={{ outline: 'none' }}>
                <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px' }}><Icon name="check" size="34px" /></div>
                <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '22px', margin: '0 0 8px' }}>Application received.</h2>
                <p style={{ fontSize: '14px', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 24px' }}>
                  We read every one. You'll hear from us within <span className="mbs-ph">[X]</span> days to arrange a short conversation. In the meantime, the next open event is <span className="mbs-ph">[event]</span> — come along, no membership needed.
                </p>
              </div>
              <Button variant="outline" onClick={() => { setSent(false); setErrors({}); }}>Send another application</Button>
            </Card>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate>
              {errorCount > 0 && (
                <div role="alert" style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px',
                  padding: '14px 18px', borderRadius: 'var(--mbs-r-sm)',
                  background: 'var(--mbs-danger-bg)', color: 'var(--mbs-danger)',
                  fontSize: 'var(--mbs-fs-body-sm)', lineHeight: 1.6
                }}>
                  <Icon name="close" size="17px" style={{ marginTop: '2px' }} />
                  <span>{errorCount === 1 ? 'One field still needs your attention.' : `${errorCount} fields still need your attention.`}</span>
                </div>
              )}

              <div className="mbs-form-row">
                <Field label="First name" required error={errors.firstname}>
                  <Input name="firstname" autoComplete="given-name" placeholder="Your first name" onInput={clear('firstname')} />
                </Field>
                <Field label="Last name" required error={errors.lastname}>
                  <Input name="lastname" autoComplete="family-name" placeholder="Your last name" onInput={clear('lastname')} />
                </Field>
              </div>

              <Field label="Email address" required error={errors.email}>
                <Input type="email" name="email" autoComplete="email" inputMode="email"
                  placeholder="you@example.com" onInput={clear('email')} />
              </Field>

              <div className="mbs-form-row">
                <Field label="University" required error={errors.university}>
                  <Select name="university" defaultValue="" onChange={clear('university')}>
                    <option value="">Choose your university</option>
                    {D.universities.map(u => <option key={u}>{u}</option>)}
                  </Select>
                </Field>
                <Field label="Degree level" required error={errors.level}>
                  <Select name="level" defaultValue="" onChange={clear('level')}>
                    <option value="">Choose your level</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>MBA</option>
                    <option>Exchange semester</option>
                    <option>Doctorate</option>
                    <option>Other</option>
                  </Select>
                </Field>
              </div>

              <Field label="Why do you want to join MBS?" required error={errors.motivation}>
                <Textarea name="motivation" placeholder="A line or two on what you're after and what you'd bring…" onInput={clear('motivation')} />
              </Field>

              <FormNote tone="alt">By sending this application you confirm you're serious about joining Munich Business Society. Applications are reviewed each intake by the board, and you'll get an email to arrange a short, relaxed conversation.</FormNote>

              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <Checkbox name="consent" value="yes" onChange={clear('consent')}
                    aria-invalid={errors.consent ? 'true' : undefined}
                    aria-describedby={errors.consent ? 'consent-msg' : undefined}
                    label={<span>I've read the privacy policy <span className="mbs-ph">(in preparation)</span> and agree to my data being processed.</span>} />
                  {errors.consent && (
                    <span id="consent-msg" role="alert" style={{ display: 'block', marginTop: '6px', fontSize: '12px', color: 'var(--mbs-danger)' }}>{errors.consent}</span>
                  )}
                </div>
                <Button variant="navy" block type="submit">Send my application →</Button>
              </div>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { JoinScreen });
