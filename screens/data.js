/* MBS content — English (EN-GB), cross-university positioning.
 * Copy from "Munich Business Society — Website Copy (EN) v1.0".
 *
 * `icon` values are design-system Icon names, not emoji — see screens/_patches.jsx.
 *
 * Anything a bracket marks ([X], [date], [University]) is a board placeholder the
 * deck says must not be invented; it renders through the .mbs-ph placeholder
 * style so it is visibly a fill-in, never mistaken for real data.
 */
window.MBS_DATA = {

  /* ── Brand ──────────────────────────────────────────────────────────────── */
  brand: {
    name: 'Munich Business Society',
    short: 'MBS',
    tagline: 'Every campus. One network.',
    domain: 'munichbusinesssociety.com',
    boilerplate:
      'Munich Business Society (MBS) is a cross-university student business network in Munich. ' +
      'We connect business-minded students from every university in the city with each other, ' +
      'with alumni, and with the companies they want to work for — through events, workshops, ' +
      'company formats and hands-on projects.',
    footerDescriptor:
      'Munich Business Society — the cross-university business network for students in Munich. ' +
      'Open to every university in the city.'
  },

  /* ── Navigation (order matters — "The Network" carries the USP, sits 2nd) ─── */
  nav: [
    { id: 'about', label: 'About' },
    { id: 'network', label: 'The Network' },
    { id: 'whatwedo', label: 'What We Do' },
    { id: 'membership', label: 'Membership' },
    { id: 'companies', label: 'For Companies' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ],

  /* ── The three pillars — repeated everywhere, in this order ──────────────── */
  pillars: [
    { icon: 'users', title: 'Network', tag: "Meet people you'd never sit next to.",
      text: 'Your degree gives you one lecture hall. We give you the whole city: students from every Munich university, plus alumni and professionals who are already where you want to be.' },
    { icon: 'trending', title: 'Growth', tag: "Learn what the seminar room doesn't teach.",
      text: 'Case workshops, skill labs, real projects and leadership roles inside the society. You practise the work before anyone asks you to do it for a salary.' },
    { icon: 'target', title: 'Exposure', tag: 'Be in the room where you get noticed.',
      text: 'Company evenings, case challenges and partner projects put you in front of recruiters and founders as a person, not a PDF in a stack of applications.' }
  ],

  /* ── Values (carried over, translated) ──────────────────────────────────── */
  values: [
    { icon: 'users', title: 'Community',
      text: "We open doors for each other. No gatekeeping, no cliques, no one club member's university ranked above another's." },
    { icon: 'rocket', title: 'Ambition',
      text: 'We take our own development seriously and expect the same from each other.' },
    { icon: 'scale', title: 'Responsibility',
      text: 'A network is only worth something if the people in it are worth knowing. We behave accordingly.' }
  ],

  /* ── Home proof bar — only [X] until the board supplies true numbers ─────── */
  proof: [
    { value: '[X]', label: 'members' },
    { value: '[X]', label: 'universities represented' },
    { value: '[X]', label: 'events per semester' },
    { value: '[X]', label: 'partner companies' }
  ],

  /* ── Six formats (What We Do) ───────────────────────────────────────────── */
  formats: [
    { icon: 'mic', title: 'Speaker Nights', pillar: 'Network',
      text: 'An evening with someone worth listening to — a founder, a partner, an investor, an operator. Forty minutes of substance, then drinks and the part that actually matters.',
      access: 'Open to all students. Free.' },
    { icon: 'trophy', title: 'Case Workshops', pillar: 'Growth',
      text: 'Real cases, small groups, structured feedback. Consulting and finance interviews are a skill nobody teaches you at university. We teach it here.',
      access: 'Members first, then open seats.' },
    { icon: 'building', title: 'Company Visits', pillar: 'Exposure',
      text: 'You, in their office, with the people who hire. Small groups, no auditorium, no branded tote bag pitch.',
      access: 'Members only. Limited places.' },
    { icon: 'bolt', title: 'Skill Labs', pillar: 'Growth',
      text: 'Two-hour, hands-on sessions on things employers assume you already know: financial modelling, Excel, pitching, negotiation, working with AI tools.',
      access: 'Members first.' },
    { icon: 'users', title: "Founders' Table", pillar: 'Network',
      text: 'A closed dinner-table format for members building something. No pitching, no audience — just people solving the same problems talking honestly.',
      access: 'Members only. Apply per edition.' },
    { icon: 'star', title: 'Socials', pillar: 'Community',
      text: 'The reason the network holds together. Semester opener, Christmas dinner, summer party, and the unscheduled evenings in between.',
      access: 'Members and their guests.' }
  ],

  /* ── Events (translated from the existing programme, venues neutralised to
   *  the whole city; sample data — the board replaces these each semester) ── */
  events: [
    { id: 'launch', day: '15', month: 'May', tag: 'Social', title: 'Launch Night & Kick-Off',
      teaser: 'Our first open evening. Meet the board, hear what MBS is building, and get into a room with business students from across Munich.',
      location: 'Munich', time: '18:00',
      about: 'The launch of Munich Business Society brings business-minded students from every corner of the city into one room for the first time. We set out the vision, the values and the programme for the semester ahead.',
      expect: 'A short keynote from the founders on why a cross-university network needed to exist, an open Q&A, and structured networking with people you would never have met on your own campus — over drinks and food.',
      audience: 'Any student in Munich who cares about business, careers and being part of something that reaches beyond their own lecture hall.',
      capacity: 'Limited to 60 places', price: 'Free', date: '15 May 2026' },
    { id: 'consulting', day: '29', month: 'May', tag: 'Speaker Night', title: 'Speaker Night: Careers in Consulting',
      teaser: 'An industry insider on breaking into management consulting and building a career that lasts.',
      location: 'Munich', time: '17:30',
      about: 'An experienced management consultant walks through the world of consulting — from the first steps of the application process to the realities of the job.',
      expect: 'A 45-minute talk on career paths in consulting, followed by an open Q&A where no question is too basic.',
      audience: 'Students aiming for a career in consulting, or anyone drawn to structured problem-solving and strategy.',
      capacity: 'Limited to 40 places', price: 'Free for MBS members', date: '29 May 2026' },
    { id: 'networking', day: '12', month: 'Jun', tag: 'Social', title: 'Networking Night: Summer Edition',
      teaser: 'Relaxed networking with members, alumni and professionals from across the city.',
      location: 'Munich', time: '19:00',
      about: 'Our summer networking night brings members, alumni and working professionals together in an easy, informal setting.',
      expect: 'A relaxed evening of structured networking rounds, informal conversation, and the chance to meet people from across industries and universities.',
      audience: 'Active MBS members and invited guests from the Munich business scene.',
      capacity: 'Limited to 50 places', price: 'Free for MBS members', date: '12 June 2026' },
    { id: 'cv', day: '26', month: 'Jun', tag: 'Skill Lab', title: 'Skill Lab: CV & Applications',
      teaser: 'A hands-on session on your CV, cover letter and interview technique, with feedback from people who hire.',
      location: 'Munich', time: '16:00',
      about: 'A practical, hands-on session on sharpening your CV, writing a cover letter that gets read, and walking into an interview with something to say.',
      expect: 'Hands-on work on your CV and cover letter, a mock-interview round with individual feedback, and best practice for your LinkedIn profile.',
      audience: 'Any student preparing for internships, working-student roles or their first job after graduating.',
      capacity: 'Limited to 30 places', price: 'Free for MBS members', date: '26 June 2026' }
  ],

  /* ── The Network page ───────────────────────────────────────────────────── */
  networkWho: [
    { icon: 'users', title: 'Students, from any Munich university',
      text: 'Public universities, universities of applied sciences, private schools. Bachelor, master, exchange semester. Business degrees and everyone else heading into business.' },
    { icon: 'trending', title: 'Alumni and young professionals',
      text: "Members who've graduated stay in the network — consulting, finance, tech, industry, their own companies." },
    { icon: 'building', title: 'Partner companies',
      text: 'Employers hiring in Munich, from DAX names to the startups nobody has heard of yet.' },
    { icon: 'mic', title: 'Speakers and mentors',
      text: 'Founders, investors and operators who come in for a format and often stay in touch.' }
  ],
  networkSteps: [
    { n: '1', title: 'Join from wherever you study', text: 'One application, one membership, no campus requirement.' },
    { n: '2', title: 'Show up', text: 'Events run across the semester at venues throughout the city — not on one campus.' },
    { n: '3', title: 'Contribute', text: 'Take a role, run a format, join a project team. This is where the network stops being a mailing list.' },
    { n: '4', title: 'Stay', text: "Graduating doesn't end your membership. It moves you to the other side of it." }
  ],

  /* ── About page — what makes us different ───────────────────────────────── */
  aboutDifferent: [
    { icon: 'globe', title: 'Cross-university by design, not by exception',
      text: "Most student business clubs are an extension of one university. We're a platform that sits above all of them." },
    { icon: 'building', title: 'Built for the city, not the campus',
      text: "Our partners, speakers and venues come from Munich's business ecosystem, not from one faculty's alumni list." },
    { icon: 'trophy', title: 'You do the work',
      text: "Members run formats, own projects and lead teams. It's the fastest way we know to build a CV that isn't just coursework." },
    { icon: 'target', title: 'Open door, real standard',
      text: "We don't screen by university or grade. We do expect you to show up and contribute." }
  ],

  /* ── For Companies ──────────────────────────────────────────────────────── */
  companyWhy: [
    { icon: 'globe', title: 'Breadth without the admin',
      text: 'One agreement instead of five separate campus clubs, five invoices and five sets of dates.' },
    { icon: 'target', title: 'Self-selected audience',
      text: "Our members chose to spend their free evenings on this. That's a different group from a lecture-hall mailing list." },
    { icon: 'users', title: "Formats that aren't a careers fair",
      text: 'Small rooms, real conversations, and enough time for your team to be remembered.' }
  ],
  companyWays: [
    { icon: 'mic', title: 'Event partner',
      text: 'You host or co-host a speaker night, workshop or company evening. Your people, our room, our members from across the city.' },
    { icon: 'trophy', title: 'Case challenge',
      text: 'A real business question, teams of members, a presentation to your leadership. You see how people think before you interview them.' },
    { icon: 'briefcase', title: 'Partner project',
      text: 'A defined piece of work over four to six weeks with a small member team and a documented deliverable.' },
    { icon: 'star', title: 'Annual partnership',
      text: 'A package across the academic year: multiple formats, visibility on site and in the newsletter, direct access to the membership for openings.' }
  ],
  companySteps: [
    { n: '1', title: 'A 30-minute call', text: "You tell us who you're trying to reach and why." },
    { n: '2', title: 'A proposal', text: 'Format, date, expected audience, cost. One page.' },
    { n: '3', title: 'We run it', text: 'Promotion, venue, sign-ups, follow-up — our side.' },
    { n: '4', title: 'A short report', text: 'Who came, from where, what happened next.' }
  ],

  /* ── Membership ─────────────────────────────────────────────────────────── */
  membershipCanJoin: [
    'Enrolled at any university or university of applied sciences in the Munich area.',
    'Any degree level — bachelor, master, MBA, exchange semester, doctorate.',
    'Any subject. Plenty of our members study something other than business and are heading into it anyway.',
    'Comfortable in English or German. Our events run in both; the working language is whatever the room needs.'
  ],
  membershipGet: [
    { icon: 'star', title: 'Access to the full programme',
      text: 'Including members-only company visits, case workshops and the founders’ table.' },
    { icon: 'users', title: 'A network across every Munich university',
      text: 'Plus alumni already working in consulting, finance, tech and industry.' },
    { icon: 'building', title: 'Direct contact with partner companies',
      text: "Including openings shared with members before they're advertised." },
    { icon: 'briefcase', title: 'A role, if you want one',
      text: 'Run a format, lead a team, own a partnership. Genuine responsibility, on your CV, with a reference behind it.' },
    { icon: 'trophy', title: 'Partner projects',
      text: 'Real client work with a real deliverable.' },
    { icon: 'globe', title: 'Alumni status for life',
      text: 'Once you graduate, you stay in the network.' }
  ],
  membershipSteps: [
    { n: '1', title: 'Apply', text: 'A short form: who you are, where you study, what you want out of it. Five minutes.' },
    { n: '2', title: 'Talk to us', text: 'A relaxed 15-minute conversation with a board member. Not an interview.' },
    { n: '3', title: 'Start', text: "You're in from the next event onwards." }
  ],

  /* ── Team ───────────────────────────────────────────────────────────────── */
  board: [
    { name: 'Martijn Mooren', role: '[Role — confirm]', initials: 'MM', description: '[One line on what they own — confirm]' },
    { name: 'Nicholas Porter', role: '[Role — confirm]', initials: 'NP', description: '[One line on what they own — confirm]' },
    { name: 'Lennart Neumeier', role: '[Role — confirm]', initials: 'LN', description: '[One line on what they own — confirm]' }
  ],
  teams: [
    { icon: 'star', title: 'Programme', text: "Plans and runs the semester's formats." },
    { icon: 'briefcase', title: 'Partnerships', text: 'Owns company relationships and the partner pipeline.' },
    { icon: 'users', title: 'Community', text: 'Membership, onboarding, socials, campus representatives.' },
    { icon: 'globe', title: 'Brand & Communications', text: 'Website, social channels, newsletter, design.' },
    { icon: 'building', title: 'Operations', text: 'Finances, legal, tools, everything unglamorous that makes the rest work.' }
  ],

  /* ── FAQ (own page) ─────────────────────────────────────────────────────── */
  faq: [
    { q: 'Which university is MBS part of?',
      a: "None, deliberately. Munich Business Society is a cross-university society — students from every university in Munich join on identical terms. We're not a faculty initiative and no single school owns us." },
    { q: "I don't study business. Can I still join?",
      a: "Yes. Plenty of our members study engineering, law, computer science or something else entirely and are heading into business anyway. What matters is that you're serious about it." },
    { q: 'Is everything in German or English?',
      a: 'Both. Events run in whichever language suits the room and the speaker; written communication is in English so nobody is left out.' },
    { q: 'How much time does it take?',
      a: 'As much as you give it. The minimum is showing up to a few events a semester. Members who take a role typically spend two to four hours a week on it.' },
    { q: 'What does it cost?',
      a: '[X] € per semester. It covers venues, materials and running the programme — nobody in MBS is paid. If the fee is genuinely a barrier, write to us.' },
    { q: "I'm here for one exchange semester. Is it worth joining?",
      a: "Yes, and we'd encourage it. Membership works by semester and the network doesn't expire when you leave the city." },
    { q: 'Do I need to be in my first year?',
      a: 'No. We have first-semester bachelor students and master students finishing their theses. The mix is the point.' },
    { q: 'Can I come to something before I join?',
      a: 'Please do. Speaker nights and most workshops are open to any student in Munich. Come to one, then decide.' },
    { q: "What's the difference between a member and an alum?",
      a: 'Alumni keep access to the network, the alumni events and the mailing list, without the semester fee or the expectation of showing up.' },
    { q: 'How do companies get involved?',
      a: 'Through the For Companies page. We work with employers on events, case challenges and projects — and share their openings with members.' }
  ],

  /* ── Munich universities for the join form (A–Z, no ranking) ─────────────── */
  universities: [
    'Ludwig-Maximilians-Universität (LMU)',
    'Technical University of Munich (TUM)',
    'Munich University of Applied Sciences (HM)',
    'Hochschule Fresenius',
    'Munich Business School',
    'IU International University',
    'Macromedia University',
    'Universität der Bundeswehr München',
    'Other university in Munich'
  ]
};
