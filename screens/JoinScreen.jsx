const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

const JOIN_ORDER = ['firstname', 'lastname', 'email', 'university', 'level', 'studyprogram', 'language', 'motivation', 'consent'];

function validateJoin(data, J) {
  const errors = {};
  Object.keys(J.required).forEach(k => {
    if (!String(data.get(k) || '').trim()) errors[k] = J.required[k];
  });
  const email = String(data.get('email') || '').trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = J.errEmail;
  if (!data.get('consent')) errors.consent = J.errConsent;
  return errors;
}

function JoinScreen({ C }) {
  const J = C.join;
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const formRef = React.useRef(null);
  const successRef = React.useRef(null);

  React.useEffect(() => { if (sent && successRef.current) successRef.current.focus(); }, [sent]);

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validateJoin(data, J);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = JOIN_ORDER.find(k => found[k]);
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
      <PageHeader height={220} title={C.title.join} subtitle={J.subtitle} />
      <Section tone="alt">
        <div data-reveal style={{ maxWidth: 'var(--mbs-form-max)', margin: '0 auto' }}>
          {sent ? (
            <Card padding="40px" hover={false} style={{ textAlign: 'center' }}>
              <div ref={successRef} tabIndex={-1} role="status" style={{ outline: 'none' }}>
                <div style={{ color: 'var(--mbs-gold-text)', marginBottom: '14px' }}><Icon name="check" size="34px" /></div>
                <h2 style={{ fontFamily: 'var(--mbs-font-serif)', fontSize: '22px', margin: '0 0 8px' }}>{J.successTitle}</h2>
                <p style={{ fontSize: '14px', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 24px' }}>
                  {J.successA}<span className="mbs-ph">[event]</span>{J.successC}
                </p>
              </div>
              <Button variant="outline" onClick={() => { setSent(false); setErrors({}); }}>{J.another}</Button>
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
                  <span>{errorCount === 1 ? J.errOne : `${errorCount} ${J.errMany}`}</span>
                </div>
              )}

              <div className="mbs-form-row">
                <Field label={J.f.firstname} required error={errors.firstname}>
                  <Input name="firstname" autoComplete="given-name" placeholder={J.ph.firstname} onInput={clear('firstname')} />
                </Field>
                <Field label={J.f.lastname} required error={errors.lastname}>
                  <Input name="lastname" autoComplete="family-name" placeholder={J.ph.lastname} onInput={clear('lastname')} />
                </Field>
              </div>

              <Field label={J.f.email} required error={errors.email}>
                <Input type="email" name="email" autoComplete="email" inputMode="email" placeholder={J.ph.email} onInput={clear('email')} />
              </Field>

              <div className="mbs-form-row">
                <Field label={J.f.university} required error={errors.university}>
                  <Select name="university" defaultValue="" onChange={clear('university')}>
                    <option value="">{J.ph.university}</option>
                    {C.universities.map(u => <option key={u}>{u}</option>)}
                  </Select>
                </Field>
                <Field label={J.f.level} required error={errors.level}>
                  <Select name="level" defaultValue="" onChange={clear('level')}>
                    <option value="">{J.ph.level}</option>
                    {J.levels.map(l => <option key={l}>{l}</option>)}
                  </Select>
                </Field>
              </div>

              <div className="mbs-form-row">
                <Field label={J.f.studyprogram} required error={errors.studyprogram}>
                  <Select name="studyprogram" defaultValue="" onChange={clear('studyprogram')}>
                    <option value="">{J.ph.studyprogram}</option>
                    {J.studyPrograms.map(s => <option key={s}>{s}</option>)}
                  </Select>
                </Field>
                <Field label={J.f.language} required error={errors.language}>
                  <Select name="language" defaultValue="" onChange={clear('language')}>
                    <option value="">{J.ph.language}</option>
                    {J.languages.map(l => <option key={l}>{l}</option>)}
                  </Select>
                </Field>
              </div>

              <Field label={J.f.motivation} required error={errors.motivation}>
                <Textarea name="motivation" placeholder={J.ph.motivation} onInput={clear('motivation')} />
              </Field>

              <Field label={J.f.interests}>
                <Textarea name="interests" placeholder={J.ph.interests} />
              </Field>

              <div className="mbs-form-row">
                <Field label={J.f.cv} help={J.help.cv}>
                  <Input type="file" name="cv" accept=".pdf,.doc,.docx" />
                </Field>
                <Field label={J.f.enrollment} help={J.help.enrollment}>
                  <Input type="file" name="enrollment" accept=".pdf,.jpg,.jpeg,.png" />
                </Field>
              </div>

              <FormNote tone="alt">{J.note}</FormNote>

              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <Checkbox name="consent" value="yes" onChange={clear('consent')}
                    aria-invalid={errors.consent ? 'true' : undefined}
                    aria-describedby={errors.consent ? 'consent-msg' : undefined}
                    label={<span>{J.consent}<a href={ROUTES.datenschutz} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>{J.consentLink}</a>{J.consentEnd}</span>} />
                  {errors.consent && (
                    <span id="consent-msg" role="alert" style={{ display: 'block', marginTop: '6px', fontSize: '12px', color: 'var(--mbs-danger)' }}>{errors.consent}</span>
                  )}
                </div>
                <Button variant="navy" block type="submit">{J.submit}</Button>
              </div>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { JoinScreen });
