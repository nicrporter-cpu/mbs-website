const { Button, Badge, Card, SectionHeading, StatTile, Avatar, Icon,
  Field, Input, Select, Textarea, Checkbox, FormNote,
  SiteHeader, SiteFooter, Hero, PageHeader, PrincipleCard, StepCard, EventCard,
  EventListItem, MemberCard, ProfileCard, FaqItem, Timeline, DataTable, Modal,
  Section } = window.MBSDesignSystem_f206f7;

function MonthCalendar({ events, weekdays, prevLabel, nextLabel, emptyLabel, locale, onSelect }) {
  const dated = React.useMemo(() => events
    .filter(e => e.iso)
    .map(e => ({ ...e, date: new Date(e.iso + 'T00:00:00') }))
    .sort((a, b) => a.date - b.date), [events]);

  const [viewDate, setViewDate] = React.useState(() => {
    const first = dated[0];
    const base = first ? first.date : new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const byDay = {};
  const monthEvents = dated.filter(e => e.date.getFullYear() === year && e.date.getMonth() === month);
  monthEvents.forEach(e => { byDay[e.date.getDate()] = e; });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (new Date(year, month, 1).getDay() + 6) % 7;

  const cells = [];
  for (let i = 0; i < leadingBlanks; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const monthLabel = viewDate.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  const goPrev = () => setViewDate(new Date(year, month - 1, 1));
  const goNext = () => setViewDate(new Date(year, month + 1, 1));

  return (
    <div className="mbs-calendar">
      <div className="mbs-calendar-head">
        <button type="button" className="mbs-calendar-nav" onClick={goPrev} aria-label={prevLabel}>
          <Icon name="chevronLeft" size="18px" />
        </button>
        <span className="mbs-calendar-month" aria-live="polite">{monthLabel}</span>
        <button type="button" className="mbs-calendar-nav" onClick={goNext} aria-label={nextLabel}>
          <Icon name="chevronRight" size="18px" />
        </button>
      </div>

      <div className="mbs-calendar-weekdays" aria-hidden="true">
        {weekdays.map(w => <span key={w}>{w}</span>)}
      </div>

      <div className="mbs-calendar-grid">
        {cells.map((d, i) => {
          if (d === null) return <span key={'b' + i} className="mbs-calendar-cell is-blank" aria-hidden="true" />;
          const ev = byDay[d];
          if (!ev) return <span key={d} className="mbs-calendar-cell">{d}</span>;
          return (
            <button key={d} type="button" className="mbs-calendar-cell has-event"
              onClick={() => onSelect(ev.id)} aria-label={d + ' ' + monthLabel + ' — ' + ev.title}>
              <span>{d}</span>
              <span className="mbs-calendar-dot" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      {monthEvents.length === 0 && <p className="mbs-calendar-empty">{emptyLabel}</p>}
    </div>
  );
}

function CalendarScreen({ C, openEvent }) {
  const E = C.calendarPage;
  return (
    <div>
      <PageHeader title={C.title.calendar} subtitle={E.subtitle} />

      <Section>
        <SectionHeading label={E.calLabel} title={E.calTitle} style={{ marginBottom: '32px' }} />
        <MonthCalendar events={C.events} weekdays={E.weekdays} prevLabel={E.prevMonth}
          nextLabel={E.nextMonth} emptyLabel={E.noEvents} locale={C.locale} onSelect={openEvent} />
      </Section>

      <Section tone="alt">
        <SectionHeading label={E.label} title={E.title} style={{ marginBottom: '40px' }} />
        {C.events.length ? (
          <div data-stagger style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {C.events.map(e => (
              <EventListItem key={e.id} day={e.day} month={e.month} title={e.title} tag={e.tag}
                location={e.location} time={e.time} onClick={() => openEvent(e.id)}>{e.teaser}</EventListItem>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px', borderRadius: 'var(--mbs-r)', background: 'var(--mbs-white)', border: '1px solid var(--mbs-border)' }}>
            <p style={{ fontSize: '15px', color: 'var(--mbs-gray)', margin: 0 }}>{E.empty}</p>
          </div>
        )}
        <p className="mbs-ph" style={{ marginTop: '20px', fontSize: '13px' }}>{E.note}</p>
      </Section>
    </div>
  );
}
Object.assign(window, { CalendarScreen });
