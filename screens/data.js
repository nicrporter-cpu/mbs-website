/* MBS content — bilingual (English EN-GB + German, du-form).
 *
 * MBS_CONTENT.en and MBS_CONTENT.de hold every string for all ten pages, plus
 * nav labels, UI chrome (buttons, footer, newsletter, dialog, form labels and
 * validation) and page titles. The React app renders whichever language is
 * active; the header's DE/EN tab toggles it in place and remembers the choice.
 *
 * `icon` values are design-system Icon names, not emoji — see screens/_patches.jsx.
 * A bracket ([X], [date], [University]) is a board placeholder the copy deck says
 * must not be invented; it renders through the .mbs-ph style so it stays visibly
 * a fill-in in both languages.
 *
 * Shared, language-neutral facts (domain, event dates, icon names) are the same
 * in both trees on purpose, so the two stay in lock-step.
 */

const MBS_DOMAIN = 'munichbusinesssociety.com';

/* Munich universities for the join form — proper nouns, so only the trailing
   "other" option is localised. */
const MBS_UNIVERSITIES = [
  'Ludwig-Maximilians-Universität (LMU)',
  'Technische Universität München (TUM)',
  'Hochschule München (HM)',
  'Hochschule Fresenius',
  'Munich Business School',
  'IU Internationale Hochschule',
  'Hochschule Macromedia',
  'Universität der Bundeswehr München'
];

window.MBS_CONTENT = {

  /* ═══════════════════════════ ENGLISH ═══════════════════════════ */
  en: {
    label: 'EN',
    dir: 'ltr',
    brand: {
      name: 'Munich Business Society', short: 'MBS', domain: MBS_DOMAIN,
      tagline: 'Every campus. One network.',
      footerDescriptor: 'Munich Business Society — the cross-university business network for students in Munich. Open to every university in the city.'
    },
    nav: [
      { id: 'about', label: 'About' },
      { id: 'network', label: 'The Network' },
      { id: 'whatwedo', label: 'What We Do' },
      { id: 'membership', label: 'Membership' },
      { id: 'companies', label: 'For Companies' },
      { id: 'team', label: 'Team' },
      { id: 'contact', label: 'Contact' }
    ],
    ui: {
      join: 'Join MBS', joinArrow: 'Join MBS →', menuOpen: 'Open menu', menuClose: 'Close menu',
      skip: 'Skip to content', home: 'Munich Business Society — home', langLabel: 'Language',
      dialog: { about: 'About this event', expect: 'What to expect', who: "Who's it for?",
        cta: 'Join MBS & attend →', close: 'Close dialog' },
      inPrep: 'in preparation',
      social: [
        { label: 'LinkedIn', icon: 'linkedin', href: null },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/munichbusinesssociety/' },
        { label: 'Email us', icon: 'mail', href: 'mailto:hello@' + MBS_DOMAIN }
      ],
      footerCols: [
        { title: 'Society', items: [
          { label: 'About', to: 'about' }, { label: 'The Network', to: 'network' },
          { label: 'Team', to: 'team' }, { label: 'What We Do', to: 'whatwedo' } ] },
        { title: 'Get involved', items: [
          { label: 'Membership', to: 'membership' }, { label: 'Events', to: 'whatwedo' },
          { label: 'Open roles', to: null }, { label: 'Contact', to: 'contact' } ] },
        { title: 'Companies', items: [
          { label: 'For Companies', to: 'companies' }, { label: 'Partner pack', to: null },
          { label: 'partners@' + MBS_DOMAIN, href: 'mailto:partners@' + MBS_DOMAIN } ] },
        { title: 'Legal', items: [
          { label: 'Imprint', to: null }, { label: 'Privacy policy', to: null }, { label: 'Statutes', to: null } ] }
      ],
      newsletter: {
        h: 'One email a month. Everything happening in Munich.',
        body: "Events, openings, partner formats and the odd opportunity we've been asked to pass on. No spam, unsubscribe in one click.",
        placeholder: 'Your email', srEmail: 'Your email', btn: 'Keep me posted',
        done: "You're on the list. First email lands at the start of next month.",
        err: 'Please enter a valid email address.'
      },
      copyright: '© 2026 Munich Business Society'
    },
    title: { home: "Munich's Student Business Network", about: 'About', network: 'The Network',
      whatwedo: 'What We Do', membership: 'Membership', companies: 'For Companies', team: 'Team',
      faq: 'FAQ', join: 'Join MBS', contact: 'Contact' },

    pillars: [
      { icon: 'users', title: 'Network', tag: "Meet people you'd never sit next to.",
        text: 'Your degree gives you one lecture hall. We give you the whole city: students from every Munich university, plus alumni and professionals who are already where you want to be.' },
      { icon: 'trending', title: 'Growth', tag: "Learn what the seminar room doesn't teach.",
        text: 'Case workshops, skill labs, real projects and leadership roles inside the society. You practise the work before anyone asks you to do it for a salary.' },
      { icon: 'target', title: 'Exposure', tag: 'Be in the room where you get noticed.',
        text: 'Company evenings, case challenges and partner projects put you in front of recruiters and founders as a person, not a PDF in a stack of applications.' }
    ],
    values: [
      { icon: 'users', title: 'Community', text: "We open doors for each other. No gatekeeping, no cliques, no one member's university ranked above another's." },
      { icon: 'rocket', title: 'Ambition', text: 'We take our own development seriously and expect the same from each other.' },
      { icon: 'scale', title: 'Responsibility', text: 'A network is only worth something if the people in it are worth knowing. We behave accordingly.' }
    ],
    proof: [
      { value: '[X]', label: 'members' }, { value: '[X]', label: 'universities represented' },
      { value: '[X]', label: 'events per semester' }, { value: '[X]', label: 'partner companies' }
    ],
    formats: [
      { icon: 'mic', title: 'Speaker Nights', pillar: 'Network', access: 'Open to all students. Free.',
        text: 'An evening with someone worth listening to — a founder, a partner, an investor, an operator. Forty minutes of substance, then drinks and the part that actually matters.' },
      { icon: 'trophy', title: 'Case Workshops', pillar: 'Growth', access: 'Members first, then open seats.',
        text: 'Real cases, small groups, structured feedback. Consulting and finance interviews are a skill nobody teaches you at university. We teach it here.' },
      { icon: 'building', title: 'Company Visits', pillar: 'Exposure', access: 'Members only. Limited places.',
        text: 'You, in their office, with the people who hire. Small groups, no auditorium, no branded tote bag pitch.' },
      { icon: 'bolt', title: 'Skill Labs', pillar: 'Growth', access: 'Members first.',
        text: 'Two-hour, hands-on sessions on things employers assume you already know: financial modelling, Excel, pitching, negotiation, working with AI tools.' },
      { icon: 'users', title: "Founders' Table", pillar: 'Network', access: 'Members only. Apply per edition.',
        text: 'A closed dinner-table format for members building something. No pitching, no audience — just people solving the same problems talking honestly.' },
      { icon: 'star', title: 'Socials', pillar: 'Community', access: 'Members and their guests.',
        text: 'The reason the network holds together. Semester opener, Christmas dinner, summer party, and the unscheduled evenings in between.' }
    ],
    events: [
      { id: 'launch', day: '15', month: 'May', tag: 'Social', title: 'Launch Night & Kick-Off',
        teaser: 'Our first open evening. Meet the board, hear what MBS is building, and get into a room with business students from across Munich.',
        location: 'Munich', time: '18:00', capacity: 'Limited to 60 places', price: 'Free', date: '15 May 2026',
        about: 'The launch of Munich Business Society brings business-minded students from every corner of the city into one room for the first time. We set out the vision, the values and the programme for the semester ahead.',
        expect: 'A short keynote from the founders on why a cross-university network needed to exist, an open Q&A, and structured networking with people you would never have met on your own campus — over drinks and food.',
        audience: 'Any student in Munich who cares about business, careers and being part of something that reaches beyond their own lecture hall.' },
      { id: 'consulting', day: '29', month: 'May', tag: 'Speaker Night', title: 'Speaker Night: Careers in Consulting',
        teaser: 'An industry insider on breaking into management consulting and building a career that lasts.',
        location: 'Munich', time: '17:30', capacity: 'Limited to 40 places', price: 'Free for MBS members', date: '29 May 2026',
        about: 'An experienced management consultant walks through the world of consulting — from the first steps of the application process to the realities of the job.',
        expect: 'A 45-minute talk on career paths in consulting, followed by an open Q&A where no question is too basic.',
        audience: 'Students aiming for a career in consulting, or anyone drawn to structured problem-solving and strategy.' },
      { id: 'networking', day: '12', month: 'Jun', tag: 'Social', title: 'Networking Night: Summer Edition',
        teaser: 'Relaxed networking with members, alumni and professionals from across the city.',
        location: 'Munich', time: '19:00', capacity: 'Limited to 50 places', price: 'Free for MBS members', date: '12 June 2026',
        about: 'Our summer networking night brings members, alumni and working professionals together in an easy, informal setting.',
        expect: 'A relaxed evening of structured networking rounds, informal conversation, and the chance to meet people from across industries and universities.',
        audience: 'Active MBS members and invited guests from the Munich business scene.' },
      { id: 'cv', day: '26', month: 'Jun', tag: 'Skill Lab', title: 'Skill Lab: CV & Applications',
        teaser: 'A hands-on session on your CV, cover letter and interview technique, with feedback from people who hire.',
        location: 'Munich', time: '16:00', capacity: 'Limited to 30 places', price: 'Free for MBS members', date: '26 June 2026',
        about: 'A practical, hands-on session on sharpening your CV, writing a cover letter that gets read, and walking into an interview with something to say.',
        expect: 'Hands-on work on your CV and cover letter, a mock-interview round with individual feedback, and best practice for your LinkedIn profile.',
        audience: 'Any student preparing for internships, working-student roles or their first job after graduating.' }
    ],
    universities: MBS_UNIVERSITIES.concat(['Other university in Munich']),

    home: {
      heroLead: 'Munich Business Society brings together business-minded students from every university in Munich — one platform to build your network, grow real skills, and get on the radar of the companies you actually want to work for.',
      seeEvents: "See what's coming up",
      whyLabel: 'Why we exist', whyTitle: 'Munich is one business city. Its students are split across a dozen campuses.',
      whyP1: 'LMU, TUM, the universities of applied sciences, the private schools — each one has strong people and its own bubble. Recruiters see one Munich talent pool; students only ever meet their own seminar group.',
      whyP2: "Munich Business Society exists to close that gap. We're deliberately not owned by one university. Whichever lecture hall you sit in, you join the same network, on the same terms.",
      pillarsLabel: 'What you get', pillarsTitle: 'What you actually get out of it.',
      formatsLabel: 'What we do', formatsTitle: 'Six formats, every semester.',
      formatsText: "Speaker nights, case workshops, company visits, skill labs, the founders' table and the socials that make the rest of it work. Members get first access; most events are open to any student in Munich.",
      formatsLink: 'See the full programme →',
      voiceQuote: '"I came for the case workshop and left with a working-student job. Neither of them was at my university."',
      voiceAttr: '[First name], [Programme], [University]', voiceNote: 'Collect two real member quotes before launch.',
      studentH: 'Applications are open.', studentText: 'Membership runs by semester and is open to students at any university in Munich. Takes five minutes to apply.',
      companyH: 'Hiring in Munich?', companyText: 'Reach ambitious business students across every university in the city through one point of contact, instead of negotiating with five separate campus clubs.',
      partnerBtn: 'Partner with us →'
    },
    about: {
      subtitle: 'One business network for all of Munich — student-run, cross-university, open to every campus in the city.',
      whoLabel: 'Who we are', whoTitle: 'One business network for all of Munich.',
      whoDesc: 'Munich Business Society is a student-run society that connects business-minded students across every university in Munich. We were founded by students who kept running into the same problem: the most interesting people in this city were always one campus away.',
      storyLabel: 'Our story', storyTitle: 'We built the society we wanted to join.',
      storyP1: "MBS started with three students, a business plan and a simple observation. Munich has one of Europe's densest concentrations of business talent and one of its most fragmented student scenes. Every university has a career fair. Almost none of them talk to each other.",
      storyP2: 'So we built the thing we wanted to join: a society with no home campus. One network, open on identical terms to anyone in Munich studying business, economics, management — or studying something else entirely and heading into business anyway.',
      storyP3a: "Since then we've built a programme of events, a partner network of companies hiring in Munich, and a member base drawn from ",
      storyP3b: ' different universities.',
      diffLabel: 'What makes us different', diffTitle: 'Cross-university by design, not by exception.',
      different: [
        { icon: 'globe', title: 'Cross-university by design, not by exception', text: "Most student business clubs are an extension of one university. We're a platform that sits above all of them." },
        { icon: 'building', title: 'Built for the city, not the campus', text: "Our partners, speakers and venues come from Munich's business ecosystem, not from one faculty's alumni list." },
        { icon: 'trophy', title: 'You do the work', text: "Members run formats, own projects and lead teams. It's the fastest way we know to build a CV that isn't just coursework." },
        { icon: 'target', title: 'Open door, real standard', text: "We don't screen by university or grade. We do expect you to show up and contribute." }
      ],
      valuesLabel: 'Our values', valuesTitle: 'What we stand for',
      orgLabel: "How we're organised", orgTitle: 'Run by students, built to last.',
      orgP1: 'MBS is run entirely by students. The society is currently constituted as a ',
      orgPh: '[GbR — confirm current legal form]',
      orgP2: ' and is in the process of becoming a registered association (eingetragener Verein, e.V.), which will give members formal voting rights and the society a permanent legal footing. Our board is elected by the membership. Statutes and financial reporting are available to members on request.',
      orgNote: 'Verify before publishing: confirm the legal form as of today (GbR vs. e.V. in progress vs. registered) and whether board elections have actually taken place. Every claim here is one a partner or a university could check.',
      meetTeam: 'Meet the team →'
    },
    network: {
      subtitle: "MBS isn't attached to a university. It's attached to a city.",
      introLabel: 'Every campus. One room.', introTitle: 'A network is worth the doors it opens.',
      introDesc: "MBS isn't attached to a university. It's attached to a city. That single decision changes what membership is worth — because the value of a network is the number of doors it opens that you couldn't have opened yourself.",
      whoLabel: "Who's in the network", whoTitle: 'Four groups, one room.',
      who: [
        { icon: 'users', title: 'Students, from any Munich university', text: 'Public universities, universities of applied sciences, private schools. Bachelor, master, exchange semester. Business degrees and everyone else heading into business.' },
        { icon: 'trending', title: 'Alumni and young professionals', text: "Members who've graduated stay in the network — consulting, finance, tech, industry, their own companies." },
        { icon: 'building', title: 'Partner companies', text: 'Employers hiring in Munich, from DAX names to the startups nobody has heard of yet.' },
        { icon: 'mic', title: 'Speakers and mentors', text: 'Founders, investors and operators who come in for a format and often stay in touch.' }
      ],
      uniLabel: 'Universities represented', uniTitle: 'Listed alphabetically. No ranking, ever.',
      uniDesc: "Members' universities, in plain text and A–Z — any other order would read as a hierarchy, and the whole point is that there isn't one.",
      uniNote: "Placeholder list — replace with every university currently represented in the membership. If a member's university isn't listed yet, they'd be the first.",
      worksLabel: 'How the network works', worksTitle: 'One membership, four moves.',
      steps: [
        { n: '1', title: 'Join from wherever you study', text: 'One application, one membership, no campus requirement.' },
        { n: '2', title: 'Show up', text: 'Events run across the semester at venues throughout the city — not on one campus.' },
        { n: '3', title: 'Contribute', text: 'Take a role, run a format, join a project team. This is where the network stops being a mailing list.' },
        { n: '4', title: 'Stay', text: "Graduating doesn't end your membership. It moves you to the other side of it." }
      ],
      repH: 'Be the first MBS voice at your university.',
      repText: "Every university in Munich should have someone in the network who makes it visible there. Campus representatives run local outreach, bring people to events and sit in on the programme planning. It's a real role with a real title, and we're actively looking for people to fill it.",
      repBtn: 'Represent your university →'
    },
    whatwedo: {
      subtitle: 'Six formats. One semester. All of Munich.',
      formatsLabel: 'The formats', formatsTitle: 'Widen your network, grow a skill, or get noticed.',
      formatsDesc: 'Every format is built to do one of three things. Most are open to any student in Munich; members get early access and the smaller rooms.',
      projLabel: 'Partner projects', projTitle: 'Sometimes a company gives us a real problem.',
      projText: "A small team of members works on a defined question over four to six weeks and presents to the client at the end. Paid or credited depending on the partner. It's the closest thing to consulting work you can do before you're hired to do it.",
      projLink: 'Companies — set up a project →',
      projCard: "Four to six weeks. A small member team. A defined question and a documented deliverable, presented to the partner's leadership. Real work, before anyone's paying you to do it.",
      progLabel: ‘Programme’, progTitle: ‘Coming up this semester’,
      progEmpty: “The next semester’s programme is being finalised. Join the newsletter and you’ll hear first.”,
      progNote: ‘Sample programme — the board replaces these with the real semester’s events. Venues show as “Munich” until each is confirmed.’,
      recapLabel: ‘Event recaps’, recapTitle: ‘Catch up on Instagram’,
      recapText: ‘We share highlights and key takeaways from every event on our socials. Follow us to stay in the loop.’
    },
    membership: {
      subtitle: 'Open to every university in Munich — any subject, any degree level.',
      whoLabel: 'Who can join', whoTitle: 'Open to every university in Munich.',
      whoDesc: 'If you study in Munich and you’re serious about business, you can join. We don’t filter by university, by grade average, or by whether your programme has “business” in the title.',
      canJoin: [
        'Enrolled at any university or university of applied sciences in the Munich area.',
        'Any degree level — bachelor, master, MBA, exchange semester, doctorate.',
        'Any subject. Plenty of our members study something other than business and are heading into it anyway.',
        'Comfortable in English or German. Our events run in both; the working language is whatever the room needs.'
      ],
      getLabel: 'What you get', getTitle: 'Everything membership opens up.',
      get: [
        { icon: 'star', title: 'Access to the full programme', text: 'Including members-only company visits, case workshops and the founders’ table.' },
        { icon: 'users', title: 'A network across every Munich university', text: 'Plus alumni already working in consulting, finance, tech and industry.' },
        { icon: 'building', title: 'Direct contact with partner companies', text: "Including openings shared with members before they're advertised." },
        { icon: 'briefcase', title: 'A role, if you want one', text: 'Run a format, lead a team, own a partnership. Genuine responsibility, on your CV, with a reference behind it.' },
        { icon: 'trophy', title: 'Partner projects', text: 'Real client work with a real deliverable.' },
        { icon: 'globe', title: 'Alumni status for life', text: 'Once you graduate, you stay in the network.' }
      ],
      expectLabel: 'What we expect', expectTitle: 'Show up. Contribute. Behave well.',
      expectText: "Show up to a few things a semester. Contribute something at some point — an idea, an evening, a contact, a project. Treat the people in this network the way you'd want to be treated by them in five years, when one of them is hiring.",
      feeLabel: 'The fee', feeValue: '[X] €', feePer: 'per semester',
      feeText: "Covers venues, materials and running the programme. Nobody takes a salary. If the fee is the reason you can't join, write to us — we'd rather have you in the room.",
      howLabel: 'How to join', howTitle: 'Three steps, about a week.',
      steps: [
        { n: '1', title: 'Apply', text: 'A short form: who you are, where you study, what you want out of it. Five minutes.' },
        { n: '2', title: 'Talk to us', text: 'A relaxed 15-minute conversation with a board member. Not an interview.' },
        { n: '3', title: 'Start', text: "You're in from the next event onwards." }
      ],
      joinBtn: 'Join MBS →', deadline: 'Applications for the [semester] intake close on [date].',
      faqLabel: 'Still deciding?', faqTitle: 'The questions students ask before applying.',
      faqDesc: 'Fees, eligibility, time commitment, joining mid-degree — answered in full on the FAQ.',
      faqBtn: 'Read the FAQ →'
    },
    companies: {
      subtitle: 'Reach every Munich university through one conversation.',
      whyLabel: 'Why partner with MBS', whyTitle: 'Reach every Munich university through one conversation.',
      whyDesc: 'Most student partnerships buy you access to one campus. Munich Business Society is cross-university by construction — one partnership, one point of contact, and a room that draws from every business faculty in the city.',
      packBtn: 'Get the partner pack →', callBtn: 'Book a call',
      why: [
        { icon: 'globe', title: 'Breadth without the admin', text: 'One agreement instead of five separate campus clubs, five invoices and five sets of dates.' },
        { icon: 'target', title: 'Self-selected audience', text: "Our members chose to spend their free evenings on this. That's a different group from a lecture-hall mailing list." },
        { icon: 'users', title: "Formats that aren't a careers fair", text: 'Small rooms, real conversations, and enough time for your team to be remembered.' }
      ],
      waysLabel: 'Ways to work together', waysTitle: 'Four ways in.',
      ways: [
        { icon: 'mic', title: 'Event partner', text: 'You host or co-host a speaker night, workshop or company evening. Your people, our room, our members from across the city.' },
        { icon: 'trophy', title: 'Case challenge', text: 'A real business question, teams of members, a presentation to your leadership. You see how people think before you interview them.' },
        { icon: 'briefcase', title: 'Partner project', text: 'A defined piece of work over four to six weeks with a small member team and a documented deliverable.' },
        { icon: 'star', title: 'Annual partnership', text: 'A package across the academic year: multiple formats, visibility on site and in the newsletter, direct access to the membership for openings.' }
      ],
      partnersLabel: 'Our partners', partnersTitle: 'Companies we work with',
      partnersDesc: 'Partner logos go here — only companies with a signed agreement and written permission to use their mark.',
      partnerLogo: 'Partner logo',
      howLabel: 'How it works', howTitle: 'From first call to short report.',
      steps: [
        { n: '1', title: 'A 30-minute call', text: "You tell us who you're trying to reach and why." },
        { n: '2', title: 'A proposal', text: 'Format, date, expected audience, cost. One page.' },
        { n: '3', title: 'We run it', text: 'Promotion, venue, sign-ups, follow-up — our side.' },
        { n: '4', title: 'A short report', text: 'Who came, from where, what happened next.' }
      ],
      closeH: "Tell us who you're hiring.",
      closeText: "Write to partners@" + MBS_DOMAIN + " or book a call. We'll come back with a proposal within a week.",
      emailBtn: 'Email the partnerships team →'
    },
    team: {
      subtitle: 'Built and run entirely by students, alongside their degrees.',
      whoLabel: 'Who runs MBS', whoTitle: 'Students, running this properly.',
      whoDesc: 'MBS is built and run entirely by students alongside their degrees. The board is elected by the membership; every other role is open to members who want it.',
      boardLabel: 'The board', boardTitle: 'Elected by the membership',
      boardNote: "Assign each founder's role, confirm the one-line bio and add a photo before publishing. Naming each founder's university here is useful — it demonstrates the cross-university claim — provided the board is (or becomes) mixed.",
      board: [
        { name: 'Martijn Mooren', role: '[Role — confirm]', initials: 'MM', description: '[One line on what they own — confirm]' },
        { name: 'Nicholas Porter', role: '[Role — confirm]', initials: 'NP', description: '[One line on what they own — confirm]' },
        { name: 'Lennart Neumeier', role: '[Role — confirm]', initials: 'LN', description: '[One line on what they own — confirm]' }
      ],
      teamsLabel: 'Teams', teamsTitle: 'Five teams, one society.',
      teams: [
        { icon: 'star', title: 'Programme', text: "Plans and runs the semester's formats." },
        { icon: 'briefcase', title: 'Partnerships', text: 'Owns company relationships and the partner pipeline.' },
        { icon: 'users', title: 'Community', text: 'Membership, onboarding, socials, campus representatives.' },
        { icon: 'globe', title: 'Brand & Communications', text: 'Website, social channels, newsletter, design.' },
        { icon: 'building', title: 'Operations', text: 'Finances, legal, tools, everything unglamorous that makes the rest work.' }
      ],
      rolesH: "We're short-handed in the good way.",
      rolesText: 'Growing this network faster than five people can run it is a nice problem. If you want real responsibility rather than a line on a members list, there’s a role here.',
      rolesOpenings: 'Current openings: [list roles, or link to a roles page].',
      rolesBtn: 'Take a role →'
    },
    faq: {
      subtitle: 'The questions students ask before applying.',
      label: 'FAQ', title: 'Before you apply',
      items: [
        { q: 'Which university is MBS part of?', a: "None, deliberately. Munich Business Society is a cross-university society — students from every university in Munich join on identical terms. We're not a faculty initiative and no single school owns us." },
        { q: "I don't study business. Can I still join?", a: "Yes. Plenty of our members study engineering, law, computer science or something else entirely and are heading into business anyway. What matters is that you're serious about it." },
        { q: 'Is everything in German or English?', a: 'Both. Events run in whichever language suits the room and the speaker; written communication is in English so nobody is left out.' },
        { q: 'How much time does it take?', a: 'As much as you give it. The minimum is showing up to a few events a semester. Members who take a role typically spend two to four hours a week on it.' },
        { q: 'What does it cost?', a: '[X] € per semester. It covers venues, materials and running the programme — nobody in MBS is paid. If the fee is genuinely a barrier, write to us.' },
        { q: "I'm here for one exchange semester. Is it worth joining?", a: "Yes, and we'd encourage it. Membership works by semester and the network doesn't expire when you leave the city." },
        { q: 'Do I need to be in my first year?', a: 'No. We have first-semester bachelor students and master students finishing their theses. The mix is the point.' },
        { q: 'Can I come to something before I join?', a: 'Please do. Speaker nights and most workshops are open to any student in Munich. Come to one, then decide.' },
        { q: "What's the difference between a member and an alum?", a: 'Alumni keep access to the network, the alumni events and the mailing list, without the semester fee or the expectation of showing up.' },
        { q: 'How do companies get involved?', a: 'Through the For Companies page. We work with employers on events, case challenges and projects — and share their openings with members.' }
      ],
      stillText: 'Still weighing it up? Come to an open event before you decide.',
      joinBtn: 'Join MBS →', seeBtn: "See what's coming up"
    },
    join: {
      subtitle: "Fill in the form and we'll set up your short conversation.",
      required: { firstname: 'Please add your first name.', lastname: 'Please add your last name.',
        email: 'Please add your email address.', university: 'Please choose your university.',
        level: 'Please choose your degree level.', motivation: 'Tell us in a line or two why you want to join.' },
      errEmail: "That email address doesn't look complete — please check it.",
      errConsent: 'Please agree to your data being processed so we can get back to you.',
      errOne: 'One field still needs your attention.', errMany: 'fields still need your attention.',
      f: { firstname: 'First name', lastname: 'Last name', email: 'Email address', university: 'University', level: 'Degree level', motivation: 'Why do you want to join MBS?' },
      ph: { firstname: 'Your first name', lastname: 'Your last name', email: 'you@example.com',
        university: 'Choose your university', level: 'Choose your level',
        motivation: "A line or two on what you're after and what you'd bring…" },
      levels: ['Bachelor', 'Master', 'MBA', 'Exchange semester', 'Doctorate', 'Other'],
      note: "By sending this application you confirm you're serious about joining Munich Business Society. Applications are reviewed each intake by the board, and you'll get an email to arrange a short, relaxed conversation.",
      consent: "I've read the privacy policy ", consentPh: '(in preparation)', consentEnd: ' and agree to my data being processed.',
      submit: 'Send my application →',
      successTitle: 'Application received.',
      successA: 'We read every one. You’ll hear from us within ', successB: ' days to arrange a short conversation. In the meantime, the next open event is ', successC: ' — come along, no membership needed.',
      another: 'Send another application'
    },
    contact: {
      subtitle: 'Ask us anything — student, company, or just curious.',
      label: 'Ask us anything', title: 'Ask us anything.',
      descA: "Whether you're a student weighing up joining, a company thinking about a partnership, or someone with an idea for a format — write to us. We answer within ", descB: ' working days.',
      routes: [
        { icon: 'users', label: 'Students & membership', addr: 'hello@' + MBS_DOMAIN },
        { icon: 'briefcase', label: 'Companies & partnerships', addr: 'partners@' + MBS_DOMAIN },
        { icon: 'mail', label: 'Press & everything else', addr: 'info@' + MBS_DOMAIN }
      ],
      formLabel: 'Send a message', formTitle: 'Straight to the right person.',
      formText: "Tell us who you are and what you're after — the form routes your message to the team that can actually help.",
      findLabel: 'Find us', findText: 'We meet across Munich rather than on one campus — venues are listed with each event.',
      follow: 'Follow: ', followPh: 'LinkedIn · Instagram [handles]',
      f: { name: 'Name', email: 'Email', role: "I'm a…", message: 'Your message' },
      ph: { name: 'Your name', email: 'you@example.com', message: "What's on your mind?" },
      roles: [ { v: 'student', label: 'Student' }, { v: 'company', label: 'Company' }, { v: 'other', label: 'Other' } ],
      send: 'Send it →', direct: 'Or write to us directly at hello@' + MBS_DOMAIN + '.',
      errName: 'Please add your name.', errEmail: "That email address doesn't look complete — please check it.", errMsg: 'Please add a message.',
      sentTitle: 'Message sent.', sentA: "We'll come back to you within ", sentB: ' working days.'
    }
  },

  /* ═══════════════════════════ DEUTSCH ═══════════════════════════ */
  de: {
    label: 'DE',
    dir: 'ltr',
    brand: {
      name: 'Munich Business Society', short: 'MBS', domain: MBS_DOMAIN,
      tagline: 'Jeder Campus. Ein Netzwerk.',
      footerDescriptor: 'Munich Business Society — das hochschulübergreifende Business-Netzwerk für Studierende in München. Offen für jede Hochschule der Stadt.'
    },
    nav: [
      { id: 'about', label: 'Über Uns' },
      { id: 'network', label: 'Das Netzwerk' },
      { id: 'whatwedo', label: 'Was wir tun' },
      { id: 'membership', label: 'Mitgliedschaft' },
      { id: 'companies', label: 'Für Unternehmen' },
      { id: 'team', label: 'Team' },
      { id: 'contact', label: 'Kontakt' }
    ],
    ui: {
      join: 'Mitglied werden', joinArrow: 'Mitglied werden →', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen',
      skip: 'Zum Inhalt springen', home: 'Munich Business Society — zur Startseite', langLabel: 'Sprache',
      dialog: { about: 'Über diese Veranstaltung', expect: 'Was dich erwartet', who: 'Für wen ist das?',
        cta: 'Mitglied werden & teilnehmen →', close: 'Dialog schließen' },
      inPrep: 'in Vorbereitung',
      social: [
        { label: 'LinkedIn', icon: 'linkedin', href: null },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/munichbusinesssociety/' },
        { label: 'Schreib uns', icon: 'mail', href: 'mailto:hello@' + MBS_DOMAIN }
      ],
      footerCols: [
        { title: 'Society', items: [
          { label: 'Über Uns', to: 'about' }, { label: 'Das Netzwerk', to: 'network' },
          { label: 'Team', to: 'team' }, { label: 'Was wir tun', to: 'whatwedo' } ] },
        { title: 'Mitmachen', items: [
          { label: 'Mitgliedschaft', to: 'membership' }, { label: 'Events', to: 'whatwedo' },
          { label: 'Offene Rollen', to: null }, { label: 'Kontakt', to: 'contact' } ] },
        { title: 'Unternehmen', items: [
          { label: 'Für Unternehmen', to: 'companies' }, { label: 'Partner-Paket', to: null },
          { label: 'partners@' + MBS_DOMAIN, href: 'mailto:partners@' + MBS_DOMAIN } ] },
        { title: 'Rechtliches', items: [
          { label: 'Impressum', to: null }, { label: 'Datenschutz', to: null }, { label: 'Satzung', to: null } ] }
      ],
      newsletter: {
        h: 'Eine E-Mail im Monat. Alles, was in München passiert.',
        body: 'Events, offene Stellen, Partner-Formate und die eine oder andere Gelegenheit, die man uns weiterzugeben gebeten hat. Kein Spam, Abmeldung mit einem Klick.',
        placeholder: 'Deine E-Mail', srEmail: 'Deine E-Mail', btn: 'Halt mich auf dem Laufenden',
        done: 'Du bist auf der Liste. Die erste E-Mail kommt Anfang nächsten Monats.',
        err: 'Bitte gib eine gültige E-Mail-Adresse ein.'
      },
      copyright: '© 2026 Munich Business Society'
    },
    title: { home: 'Studentisches Business-Netzwerk in München', about: 'Über Uns', network: 'Das Netzwerk',
      whatwedo: 'Was wir tun', membership: 'Mitgliedschaft', companies: 'Für Unternehmen', team: 'Team',
      faq: 'FAQ', join: 'Mitglied werden', contact: 'Kontakt' },

    pillars: [
      { icon: 'users', title: 'Netzwerk', tag: 'Triff Menschen, neben denen du sonst nie sitzt.',
        text: 'Dein Studium gibt dir einen Hörsaal. Wir geben dir die ganze Stadt: Studierende von jeder Münchner Hochschule, dazu Alumni und Profis, die schon dort sind, wo du hinwillst.' },
      { icon: 'trending', title: 'Wachstum', tag: 'Lern, was der Seminarraum nicht lehrt.',
        text: 'Case-Workshops, Skill-Labs, echte Projekte und Führungsrollen im Verein. Du übst die Arbeit, bevor sie jemand von dir gegen Gehalt verlangt.' },
      { icon: 'target', title: 'Sichtbarkeit', tag: 'Sei im Raum, in dem du wahrgenommen wirst.',
        text: 'Unternehmensabende, Case-Challenges und Partnerprojekte bringen dich als Mensch vor Recruiter und Gründer — nicht als PDF im Bewerbungsstapel.' }
    ],
    values: [
      { icon: 'users', title: 'Gemeinschaft', text: 'Wir öffnen einander Türen. Kein Gatekeeping, keine Cliquen, keine Hochschule über einer anderen.' },
      { icon: 'rocket', title: 'Ambition', text: 'Wir nehmen unsere eigene Entwicklung ernst und erwarten das auch voneinander.' },
      { icon: 'scale', title: 'Verantwortung', text: 'Ein Netzwerk ist nur so viel wert wie die Menschen darin. Entsprechend verhalten wir uns.' }
    ],
    proof: [
      { value: '[X]', label: 'Mitglieder' }, { value: '[X]', label: 'vertretene Hochschulen' },
      { value: '[X]', label: 'Events pro Semester' }, { value: '[X]', label: 'Partnerunternehmen' }
    ],
    formats: [
      { icon: 'mic', title: 'Speaker-Abende', pillar: 'Netzwerk', access: 'Offen für alle Studierenden. Kostenlos.',
        text: 'Ein Abend mit jemandem, dem es sich zuzuhören lohnt — Gründerin, Partner, Investor, Macher. Vierzig Minuten Substanz, dann Drinks und der Teil, der wirklich zählt.' },
      { icon: 'trophy', title: 'Case-Workshops', pillar: 'Wachstum', access: 'Erst Mitglieder, dann offene Plätze.',
        text: 'Echte Cases, kleine Gruppen, strukturiertes Feedback. Consulting- und Finance-Interviews sind eine Fähigkeit, die dir an der Hochschule niemand beibringt. Hier schon.' },
      { icon: 'building', title: 'Unternehmensbesuche', pillar: 'Sichtbarkeit', access: 'Nur für Mitglieder. Begrenzte Plätze.',
        text: 'Du, in ihrem Büro, mit den Leuten, die einstellen. Kleine Gruppen, kein Hörsaal, kein Jutebeutel-Pitch.' },
      { icon: 'bolt', title: 'Skill-Labs', pillar: 'Wachstum', access: 'Erst Mitglieder.',
        text: 'Zweistündige Hands-on-Sessions zu Dingen, die Arbeitgeber voraussetzen: Financial Modeling, Excel, Pitchen, Verhandeln, Arbeiten mit KI-Tools.' },
      { icon: 'users', title: "Founders' Table", pillar: 'Netzwerk', access: 'Nur für Mitglieder. Bewerbung je Ausgabe.',
        text: 'Ein geschlossenes Dinner-Format für Mitglieder, die etwas aufbauen. Kein Pitch, kein Publikum — nur Menschen, die dieselben Probleme lösen, ehrlich im Gespräch.' },
      { icon: 'star', title: 'Socials', pillar: 'Gemeinschaft', access: 'Mitglieder und ihre Gäste.',
        text: 'Der Grund, warum das Netzwerk zusammenhält. Semesterauftakt, Weihnachtsdinner, Sommerfest und die ungeplanten Abende dazwischen.' }
    ],
    events: [
      { id: 'launch', day: '15', month: 'Mai', tag: 'Social', title: 'Launch-Abend & Kick-Off',
        teaser: 'Unser erster offener Abend. Lern den Vorstand kennen, erfahr, was die MBS aufbaut, und komm mit Business-Studierenden aus ganz München in einen Raum.',
        location: 'München', time: '18:00 Uhr', capacity: 'Begrenzt auf 60 Plätze', price: 'Kostenlos', date: '15. Mai 2026',
        about: 'Der Launch der Munich Business Society bringt wirtschaftlich denkende Studierende aus jeder Ecke der Stadt zum ersten Mal in einen Raum. Wir stellen die Vision, die Werte und das Programm für das kommende Semester vor.',
        expect: 'Eine kurze Keynote der Gründer, warum es ein hochschulübergreifendes Netzwerk braucht, eine offene Q&A und strukturiertes Networking mit Menschen, die du auf deinem eigenen Campus nie getroffen hättest — bei Drinks und Essen.',
        audience: 'Alle Studierenden in München, denen Wirtschaft, Karriere und eine Community über den eigenen Hörsaal hinaus wichtig sind.' },
      { id: 'consulting', day: '29', month: 'Mai', tag: 'Speaker-Abend', title: 'Speaker-Abend: Karriere im Consulting',
        teaser: 'Ein Branchen-Insider über den Einstieg ins Management Consulting und den Aufbau einer Karriere, die trägt.',
        location: 'München', time: '17:30 Uhr', capacity: 'Begrenzt auf 40 Plätze', price: 'Kostenlos für MBS-Mitglieder', date: '29. Mai 2026',
        about: 'Ein erfahrener Management-Consultant führt durch die Welt der Beratung — von den ersten Schritten im Bewerbungsprozess bis zur Realität des Alltags.',
        expect: 'Ein 45-minütiger Vortrag über Karrierewege im Consulting, gefolgt von einer offenen Q&A, in der keine Frage zu einfach ist.',
        audience: 'Studierende, die eine Karriere in der Beratung anstreben, oder alle, die strukturiertes Problemlösen und Strategie reizen.' },
      { id: 'networking', day: '12', month: 'Jun', tag: 'Social', title: 'Networking-Abend: Summer Edition',
        teaser: 'Entspanntes Networking mit Mitgliedern, Alumni und Profis aus der ganzen Stadt.',
        location: 'München', time: '19:00 Uhr', capacity: 'Begrenzt auf 50 Plätze', price: 'Kostenlos für MBS-Mitglieder', date: '12. Juni 2026',
        about: 'Unser Sommer-Networking-Abend bringt Mitglieder, Alumni und Berufstätige in lockerer, informeller Atmosphäre zusammen.',
        expect: 'Ein entspannter Abend mit strukturierten Networking-Runden, informellen Gesprächen und der Chance, Menschen aus verschiedenen Branchen und Hochschulen zu treffen.',
        audience: 'Aktive MBS-Mitglieder und eingeladene Gäste aus der Münchner Wirtschaft.' },
      { id: 'cv', day: '26', month: 'Jun', tag: 'Skill-Lab', title: 'Skill-Lab: Lebenslauf & Bewerbung',
        teaser: 'Eine Hands-on-Session zu Lebenslauf, Anschreiben und Interview-Technik, mit Feedback von Leuten, die einstellen.',
        location: 'München', time: '16:00 Uhr', capacity: 'Begrenzt auf 30 Plätze', price: 'Kostenlos für MBS-Mitglieder', date: '26. Juni 2026',
        about: 'Eine praxisnahe Session, um deinen Lebenslauf zu schärfen, ein Anschreiben zu verfassen, das gelesen wird, und mit etwas zu sagen ins Interview zu gehen.',
        expect: 'Praktische Arbeit an Lebenslauf und Anschreiben, eine Mock-Interview-Runde mit individuellem Feedback und Best Practices für dein LinkedIn-Profil.',
        audience: 'Alle Studierenden, die sich auf Praktika, Werkstudentenstellen oder den ersten Job nach dem Abschluss vorbereiten.' }
    ],
    universities: MBS_UNIVERSITIES.concat(['Andere Hochschule in München']),

    home: {
      heroLead: 'Die Munich Business Society bringt wirtschaftlich denkende Studierende von jeder Münchner Hochschule zusammen — eine Plattform, um dein Netzwerk aufzubauen, echte Fähigkeiten zu entwickeln und bei den Unternehmen sichtbar zu werden, für die du wirklich arbeiten willst.',
      seeEvents: 'Zu den Terminen',
      whyLabel: 'Warum es uns gibt', whyTitle: 'München ist eine Wirtschaftsstadt. Ihre Studierenden verteilen sich auf ein Dutzend Campus.',
      whyP1: 'LMU, TUM, die Hochschulen für angewandte Wissenschaften, die privaten Schulen — jede hat starke Leute und ihre eigene Blase. Recruiter sehen einen Münchner Talentpool; Studierende treffen immer nur ihre eigene Seminargruppe.',
      whyP2: 'Die Munich Business Society schließt genau diese Lücke. Wir gehören bewusst keiner einzelnen Hochschule. Egal, in welchem Hörsaal du sitzt, du trittst demselben Netzwerk bei — zu denselben Bedingungen.',
      pillarsLabel: 'Was du bekommst', pillarsTitle: 'Was du wirklich davon hast.',
      formatsLabel: 'Was wir tun', formatsTitle: 'Sechs Formate, jedes Semester.',
      formatsText: "Speaker-Abende, Case-Workshops, Unternehmensbesuche, Skill-Labs, der Founders' Table und die Socials, die den Rest zusammenhalten. Mitglieder haben Vorrang; die meisten Events sind offen für alle Studierenden in München.",
      formatsLink: 'Zum ganzen Programm →',
      voiceQuote: '„Ich kam für den Case-Workshop und ging mit einem Werkstudentenjob. Beides war nicht an meiner Hochschule."',
      voiceAttr: '[Vorname], [Studiengang], [Hochschule]', voiceNote: 'Vor dem Launch zwei echte Mitgliederstimmen einsammeln.',
      studentH: 'Die Bewerbung ist offen.', studentText: 'Die Mitgliedschaft läuft semesterweise und steht Studierenden jeder Münchner Hochschule offen. Bewerbung in fünf Minuten.',
      companyH: 'Sie stellen in München ein?', companyText: 'Erreichen Sie ambitionierte Business-Studierende quer über jede Hochschule der Stadt — über einen Ansprechpartner, statt mit fünf einzelnen Campus-Clubs zu verhandeln.',
      partnerBtn: 'Partner werden →'
    },
    about: {
      subtitle: 'Ein Business-Netzwerk für ganz München — studentisch geführt, hochschulübergreifend, offen für jeden Campus der Stadt.',
      whoLabel: 'Wer wir sind', whoTitle: 'Ein Business-Netzwerk für ganz München.',
      whoDesc: 'Die Munich Business Society ist ein studentisch geführter Verein, der wirtschaftlich denkende Studierende über jede Münchner Hochschule hinweg verbindet. Gegründet von Studierenden, die immer wieder auf dasselbe Problem stießen: Die spannendsten Menschen dieser Stadt waren immer einen Campus entfernt.',
      storyLabel: 'Unsere Geschichte', storyTitle: 'Wir haben den Verein gebaut, dem wir beitreten wollten.',
      storyP1: 'Die MBS begann mit drei Studierenden, einem Businessplan und einer einfachen Beobachtung. München hat eine der dichtesten Konzentrationen an Business-Talent in Europa und eine der zersplittertsten Studierendenszenen. Jede Hochschule hat eine Karrieremesse. Fast keine spricht mit der anderen.',
      storyP2: 'Also bauten wir das, dem wir beitreten wollten: einen Verein ohne Heim-Campus. Ein Netzwerk, offen zu identischen Bedingungen für alle in München, die Wirtschaft, Ökonomie, Management studieren — oder etwas völlig anderes und trotzdem in die Wirtschaft gehen.',
      storyP3a: 'Seitdem haben wir ein Programm aus Events aufgebaut, ein Partnernetzwerk aus Unternehmen, die in München einstellen, und eine Mitgliederbasis aus ',
      storyP3b: ' verschiedenen Hochschulen.',
      diffLabel: 'Was uns unterscheidet', diffTitle: 'Hochschulübergreifend by design, nicht als Ausnahme.',
      different: [
        { icon: 'globe', title: 'Hochschulübergreifend by design, nicht als Ausnahme', text: 'Die meisten studentischen Business-Clubs sind der Ableger einer Hochschule. Wir sind eine Plattform über allen.' },
        { icon: 'building', title: 'Für die Stadt gebaut, nicht für den Campus', text: 'Unsere Partner, Speaker und Locations kommen aus dem Münchner Wirtschafts-Ökosystem, nicht aus der Alumni-Liste einer Fakultät.' },
        { icon: 'trophy', title: 'Du machst die Arbeit', text: 'Mitglieder leiten Formate, verantworten Projekte und führen Teams. Der schnellste Weg zu einem Lebenslauf, der mehr ist als Kurse.' },
        { icon: 'target', title: 'Offene Tür, echter Anspruch', text: 'Wir sieben nicht nach Hochschule oder Note. Wir erwarten aber, dass du auftauchst und beiträgst.' }
      ],
      valuesLabel: 'Unsere Werte', valuesTitle: 'Wofür wir stehen',
      orgLabel: 'Wie wir organisiert sind', orgTitle: 'Von Studierenden geführt, auf Dauer gebaut.',
      orgP1: 'Die MBS wird komplett von Studierenden geführt. Der Verein ist derzeit als ',
      orgPh: '[GbR — aktuelle Rechtsform bestätigen]',
      orgP2: ' konstituiert und im Prozess, ein eingetragener Verein (e.V.) zu werden, was den Mitgliedern formale Stimmrechte und dem Verein eine dauerhafte rechtliche Grundlage gibt. Unser Vorstand wird von der Mitgliedschaft gewählt. Satzung und Finanzberichte sind für Mitglieder auf Anfrage einsehbar.',
      orgNote: 'Vor Veröffentlichung prüfen: Rechtsform von heute bestätigen (GbR vs. e.V. in Arbeit vs. eingetragen) und ob Vorstandswahlen tatsächlich stattgefunden haben. Jede Aussage hier ist eine, die ein Partner oder eine Hochschule prüfen könnte.',
      meetTeam: 'Lern das Team kennen →'
    },
    network: {
      subtitle: 'Die MBS hängt nicht an einer Hochschule. Sie hängt an einer Stadt.',
      introLabel: 'Jeder Campus. Ein Raum.', introTitle: 'Ein Netzwerk ist die Türen wert, die es öffnet.',
      introDesc: 'Die MBS hängt nicht an einer Hochschule. Sie hängt an einer Stadt. Diese eine Entscheidung verändert, was Mitgliedschaft wert ist — denn der Wert eines Netzwerks ist die Zahl der Türen, die es dir öffnet, die du allein nie geöffnet hättest.',
      whoLabel: 'Wer im Netzwerk ist', whoTitle: 'Vier Gruppen, ein Raum.',
      who: [
        { icon: 'users', title: 'Studierende, von jeder Münchner Hochschule', text: 'Universitäten, Hochschulen für angewandte Wissenschaften, private Schulen. Bachelor, Master, Auslandssemester. Business-Studiengänge und alle anderen, die in die Wirtschaft gehen.' },
        { icon: 'trending', title: 'Alumni und Young Professionals', text: 'Mitglieder, die ihren Abschluss haben, bleiben im Netzwerk — Consulting, Finance, Tech, Industrie, eigene Unternehmen.' },
        { icon: 'building', title: 'Partnerunternehmen', text: 'Arbeitgeber, die in München einstellen, von DAX-Namen bis zu Startups, von denen noch niemand gehört hat.' },
        { icon: 'mic', title: 'Speaker und Mentor:innen', text: 'Gründer, Investorinnen und Macher, die für ein Format kommen und oft in Kontakt bleiben.' }
      ],
      uniLabel: 'Vertretene Hochschulen', uniTitle: 'Alphabetisch gelistet. Nie ein Ranking.',
      uniDesc: 'Die Hochschulen der Mitglieder, als Klartext und von A–Z — jede andere Reihenfolge läse sich als Hierarchie, und der ganze Punkt ist, dass es keine gibt.',
      uniNote: 'Platzhalter-Liste — durch jede aktuell in der Mitgliedschaft vertretene Hochschule ersetzen. Fehlt die Hochschule eines Mitglieds noch, wäre es das erste.',
      worksLabel: 'Wie das Netzwerk funktioniert', worksTitle: 'Eine Mitgliedschaft, vier Schritte.',
      steps: [
        { n: '1', title: 'Tritt bei, egal wo du studierst', text: 'Eine Bewerbung, eine Mitgliedschaft, keine Campus-Voraussetzung.' },
        { n: '2', title: 'Tauch auf', text: 'Events laufen über das Semester an Orten in der ganzen Stadt — nicht auf einem Campus.' },
        { n: '3', title: 'Bring dich ein', text: 'Übernimm eine Rolle, leite ein Format, steig in ein Projektteam ein. Hier hört das Netzwerk auf, ein Verteiler zu sein.' },
        { n: '4', title: 'Bleib', text: 'Der Abschluss beendet deine Mitgliedschaft nicht. Er bringt dich auf die andere Seite davon.' }
      ],
      repH: 'Sei die erste MBS-Stimme an deiner Hochschule.',
      repText: 'Jede Münchner Hochschule sollte jemanden im Netzwerk haben, der sie dort sichtbar macht. Campus-Vertreter:innen machen lokale Öffentlichkeitsarbeit, bringen Leute zu Events und sitzen bei der Programmplanung mit. Eine echte Rolle mit echtem Titel — und wir suchen aktiv Leute dafür.',
      repBtn: 'Vertritt deine Hochschule →'
    },
    whatwedo: {
      subtitle: 'Sechs Formate. Ein Semester. Ganz München.',
      formatsLabel: 'Die Formate', formatsTitle: 'Netzwerk erweitern, Fähigkeit aufbauen oder auffallen.',
      formatsDesc: 'Jedes Format tut eine von drei Sachen. Die meisten sind offen für alle Studierenden in München; Mitglieder bekommen frühen Zugang und die kleineren Räume.',
      projLabel: 'Partnerprojekte', projTitle: 'Manchmal gibt uns ein Unternehmen ein echtes Problem.',
      projText: 'Ein kleines Team aus Mitgliedern arbeitet vier bis sechs Wochen an einer definierten Fragestellung und präsentiert am Ende beim Kunden. Bezahlt oder mit Credits, je nach Partner. Das Näheste an Consulting-Arbeit, das du machen kannst, bevor du dafür eingestellt bist.',
      projLink: 'Unternehmen — Projekt aufsetzen →',
      projCard: 'Vier bis sechs Wochen. Ein kleines Mitgliederteam. Eine definierte Fragestellung und ein dokumentiertes Ergebnis, präsentiert vor der Führung des Partners. Echte Arbeit, bevor dich jemand dafür bezahlt.',
      progLabel: 'Programm', progTitle: 'Demnächst in diesem Semester',
      progEmpty: 'Das Programm für das nächste Semester wird gerade finalisiert. Melde dich zum Newsletter an, dann hörst du es zuerst.',
      progNote: 'Beispielprogramm — der Vorstand ersetzt dies durch die echten Events des Semesters. Locations stehen als „München", bis sie bestätigt sind.',
      recapLabel: 'Event-Nachbesprechnungen', recapTitle: 'Schau auf Instagram vorbei',
      recapText: 'Wir teilen Highlights und wichtige Erkenntnisse von jedem Event auf unseren Socials. Folge uns, um auf dem Laufenden zu bleiben.'
    },
    membership: {
      subtitle: 'Offen für jede Münchner Hochschule — jedes Fach, jedes Studienniveau.',
      whoLabel: 'Wer beitreten kann', whoTitle: 'Offen für jede Hochschule in München.',
      whoDesc: 'Wenn du in München studierst und es mit der Wirtschaft ernst meinst, kannst du beitreten. Wir filtern nicht nach Hochschule, nach Notenschnitt oder danach, ob „Business" im Titel deines Studiengangs steht.',
      canJoin: [
        'Eingeschrieben an einer Universität oder Hochschule im Raum München.',
        'Jedes Studienniveau — Bachelor, Master, MBA, Auslandssemester, Promotion.',
        'Jedes Fach. Viele unserer Mitglieder studieren etwas anderes als Wirtschaft und gehen trotzdem hinein.',
        'Sicher auf Deutsch oder Englisch. Unsere Events laufen in beiden; die Arbeitssprache ist, was der Raum braucht.'
      ],
      getLabel: 'Was du bekommst', getTitle: 'Alles, was Mitgliedschaft öffnet.',
      get: [
        { icon: 'star', title: 'Zugang zum ganzen Programm', text: "Inklusive Unternehmensbesuche, Case-Workshops und dem Founders' Table nur für Mitglieder." },
        { icon: 'users', title: 'Ein Netzwerk über jede Münchner Hochschule', text: 'Plus Alumni, die schon in Consulting, Finance, Tech und Industrie arbeiten.' },
        { icon: 'building', title: 'Direkter Kontakt zu Partnerunternehmen', text: 'Inklusive Stellen, die Mitglieder vor der Ausschreibung sehen.' },
        { icon: 'briefcase', title: 'Eine Rolle, wenn du willst', text: 'Leite ein Format, führe ein Team, verantworte eine Partnerschaft. Echte Verantwortung, im Lebenslauf, mit einer Referenz dahinter.' },
        { icon: 'trophy', title: 'Partnerprojekte', text: 'Echte Kundenarbeit mit einem echten Ergebnis.' },
        { icon: 'globe', title: 'Alumni-Status auf Lebenszeit', text: 'Nach dem Abschluss bleibst du im Netzwerk.' }
      ],
      expectLabel: 'Was wir erwarten', expectTitle: 'Tauch auf. Bring dich ein. Verhalte dich gut.',
      expectText: 'Komm zu ein paar Sachen im Semester. Bring irgendwann etwas ein — eine Idee, einen Abend, einen Kontakt, ein Projekt. Behandle die Menschen in diesem Netzwerk so, wie du in fünf Jahren von ihnen behandelt werden willst, wenn eine:r von ihnen einstellt.',
      feeLabel: 'Der Beitrag', feeValue: '[X] €', feePer: 'pro Semester',
      feeText: 'Deckt Locations, Materialien und den Betrieb des Programms. Niemand bekommt ein Gehalt. Wenn der Beitrag der Grund ist, warum du nicht kannst, schreib uns — wir haben dich lieber im Raum.',
      howLabel: 'Wie du beitrittst', howTitle: 'Drei Schritte, etwa eine Woche.',
      steps: [
        { n: '1', title: 'Bewerben', text: 'Ein kurzes Formular: wer du bist, wo du studierst, was du dir erhoffst. Fünf Minuten.' },
        { n: '2', title: 'Sprich mit uns', text: 'Ein entspanntes 15-Minuten-Gespräch mit einem Vorstandsmitglied. Kein Interview.' },
        { n: '3', title: 'Los geht’s', text: 'Du bist ab dem nächsten Event dabei.' }
      ],
      joinBtn: 'Mitglied werden →', deadline: 'Bewerbungen für die [Semester]-Aufnahme schließen am [Datum].',
      faqLabel: 'Noch unentschlossen?', faqTitle: 'Die Fragen, die Studierende vor der Bewerbung stellen.',
      faqDesc: 'Beitrag, Voraussetzungen, Zeitaufwand, Einstieg mitten im Studium — vollständig beantwortet in der FAQ.',
      faqBtn: 'Zur FAQ →'
    },
    companies: {
      subtitle: 'Erreichen Sie jede Münchner Hochschule in einem Gespräch.',
      whyLabel: 'Warum Partnerschaft mit MBS', whyTitle: 'Erreichen Sie jede Münchner Hochschule in einem Gespräch.',
      whyDesc: 'Die meisten Studierenden-Partnerschaften kaufen Ihnen Zugang zu einem Campus. Die Munich Business Society ist hochschulübergreifend gebaut — eine Partnerschaft, ein Ansprechpartner und ein Raum, der aus jeder Business-Fakultät der Stadt schöpft.',
      packBtn: 'Partner-Paket anfordern →', callBtn: 'Termin buchen',
      why: [
        { icon: 'globe', title: 'Reichweite ohne den Aufwand', text: 'Ein Vertrag statt fünf einzelner Campus-Clubs, fünf Rechnungen und fünf Terminlisten.' },
        { icon: 'target', title: 'Selbstselektierte Zielgruppe', text: 'Unsere Mitglieder haben sich entschieden, ihre freien Abende hierfür zu nutzen. Das ist eine andere Gruppe als ein Hörsaal-Verteiler.' },
        { icon: 'users', title: 'Formate, die keine Karrieremesse sind', text: 'Kleine Räume, echte Gespräche und genug Zeit, damit Ihr Team in Erinnerung bleibt.' }
      ],
      waysLabel: 'Wege der Zusammenarbeit', waysTitle: 'Vier Wege hinein.',
      ways: [
        { icon: 'mic', title: 'Event-Partner', text: 'Sie veranstalten oder co-hosten einen Speaker-Abend, Workshop oder Unternehmensabend. Ihre Leute, unser Raum, unsere Mitglieder aus der ganzen Stadt.' },
        { icon: 'trophy', title: 'Case-Challenge', text: 'Eine echte Fragestellung, Teams aus Mitgliedern, eine Präsentation vor Ihrer Führung. Sie sehen, wie Menschen denken, bevor Sie sie interviewen.' },
        { icon: 'briefcase', title: 'Partnerprojekt', text: 'Ein definiertes Stück Arbeit über vier bis sechs Wochen mit einem kleinen Mitgliederteam und einem dokumentierten Ergebnis.' },
        { icon: 'star', title: 'Jahrespartnerschaft', text: 'Ein Paket über das akademische Jahr: mehrere Formate, Sichtbarkeit auf der Website und im Newsletter, direkter Zugang zur Mitgliedschaft für Stellen.' }
      ],
      partnersLabel: 'Unsere Partner', partnersTitle: 'Unternehmen, mit denen wir arbeiten',
      partnersDesc: 'Partnerlogos kommen hier hin — nur Unternehmen mit unterzeichneter Vereinbarung und schriftlicher Erlaubnis zur Nutzung ihrer Marke.',
      partnerLogo: 'Partnerlogo',
      howLabel: 'So läuft es', howTitle: 'Vom ersten Anruf zum kurzen Bericht.',
      steps: [
        { n: '1', title: 'Ein 30-Minuten-Call', text: 'Sie sagen uns, wen Sie erreichen wollen und warum.' },
        { n: '2', title: 'Ein Vorschlag', text: 'Format, Datum, erwartetes Publikum, Kosten. Eine Seite.' },
        { n: '3', title: 'Wir setzen es um', text: 'Bewerbung, Location, Anmeldungen, Nachbereitung — unsere Seite.' },
        { n: '4', title: 'Ein kurzer Bericht', text: 'Wer kam, von wo, was danach passierte.' }
      ],
      closeH: 'Sagen Sie uns, wen Sie einstellen.',
      closeText: 'Schreiben Sie an partners@' + MBS_DOMAIN + ' oder buchen Sie einen Termin. Wir kommen innerhalb einer Woche mit einem Vorschlag zurück.',
      emailBtn: 'Partnerschaftsteam schreiben →'
    },
    team: {
      subtitle: 'Komplett von Studierenden gebaut und geführt, neben dem Studium.',
      whoLabel: 'Wer die MBS führt', whoTitle: 'Studierende, die das richtig machen.',
      whoDesc: 'Die MBS wird komplett von Studierenden neben dem Studium gebaut und geführt. Der Vorstand wird von der Mitgliedschaft gewählt; jede andere Rolle steht Mitgliedern offen, die sie wollen.',
      boardLabel: 'Der Vorstand', boardTitle: 'Von der Mitgliedschaft gewählt',
      boardNote: 'Vor Veröffentlichung: jedem Gründer eine Rolle zuweisen, die Ein-Zeilen-Bio bestätigen und ein Foto ergänzen. Die Hochschule jedes Gründers zu nennen ist hier sinnvoll — es belegt den hochschulübergreifenden Anspruch — sofern der Vorstand gemischt ist (oder wird).',
      board: [
        { name: 'Martijn Mooren', role: '[Rolle — bestätigen]', initials: 'MM', description: '[Eine Zeile zur Verantwortung — bestätigen]' },
        { name: 'Nicholas Porter', role: '[Rolle — bestätigen]', initials: 'NP', description: '[Eine Zeile zur Verantwortung — bestätigen]' },
        { name: 'Lennart Neumeier', role: '[Rolle — bestätigen]', initials: 'LN', description: '[Eine Zeile zur Verantwortung — bestätigen]' }
      ],
      teamsLabel: 'Teams', teamsTitle: 'Fünf Teams, ein Verein.',
      teams: [
        { icon: 'star', title: 'Programm', text: 'Plant und veranstaltet die Formate des Semesters.' },
        { icon: 'briefcase', title: 'Partnerschaften', text: 'Verantwortet Unternehmensbeziehungen und die Partner-Pipeline.' },
        { icon: 'users', title: 'Community', text: 'Mitgliedschaft, Onboarding, Socials, Campus-Vertretungen.' },
        { icon: 'globe', title: 'Brand & Kommunikation', text: 'Website, Social-Kanäle, Newsletter, Design.' },
        { icon: 'building', title: 'Operations', text: 'Finanzen, Recht, Tools — alles Unglamouröse, das den Rest am Laufen hält.' }
      ],
      rolesH: 'Uns fehlen Leute — im guten Sinne.',
      rolesText: 'Dieses Netzwerk schneller wachsen zu lassen, als fünf Leute es führen können, ist ein schönes Problem. Wenn du echte Verantwortung willst statt einer Zeile auf einer Mitgliederliste, gibt es hier eine Rolle.',
      rolesOpenings: 'Aktuell offen: [Rollen auflisten oder auf eine Rollen-Seite verlinken].',
      rolesBtn: 'Übernimm eine Rolle →'
    },
    faq: {
      subtitle: 'Die Fragen, die Studierende vor der Bewerbung stellen.',
      label: 'FAQ', title: 'Bevor du dich bewirbst',
      items: [
        { q: 'Zu welcher Hochschule gehört die MBS?', a: 'Zu keiner, bewusst. Die Munich Business Society ist ein hochschulübergreifender Verein — Studierende jeder Münchner Hochschule treten zu identischen Bedingungen bei. Wir sind keine Fakultätsinitiative, und keine einzelne Schule besitzt uns.' },
        { q: 'Ich studiere nicht Wirtschaft. Kann ich trotzdem beitreten?', a: 'Ja. Viele unserer Mitglieder studieren Ingenieurwesen, Jura, Informatik oder etwas ganz anderes und gehen trotzdem in die Wirtschaft. Wichtig ist, dass du es ernst meinst.' },
        { q: 'Ist alles auf Deutsch oder Englisch?', a: 'Beides. Events laufen in der Sprache, die zum Raum und zur:zum Speaker:in passt; schriftliche Kommunikation ist auf Englisch, damit niemand außen vor bleibt.' },
        { q: 'Wie viel Zeit kostet es?', a: 'So viel, wie du gibst. Das Minimum ist, zu ein paar Events im Semester zu kommen. Mitglieder mit einer Rolle wenden meist zwei bis vier Stunden pro Woche auf.' },
        { q: 'Was kostet es?', a: '[X] € pro Semester. Es deckt Locations, Materialien und den Betrieb des Programms — niemand in der MBS wird bezahlt. Wenn der Beitrag wirklich eine Hürde ist, schreib uns.' },
        { q: 'Ich bin für ein Auslandssemester hier. Lohnt sich der Beitritt?', a: 'Ja, und wir würden dich ermutigen. Die Mitgliedschaft läuft semesterweise, und das Netzwerk endet nicht, wenn du die Stadt verlässt.' },
        { q: 'Muss ich im ersten Semester sein?', a: 'Nein. Wir haben Bachelor-Studierende im ersten Semester und Master-Studierende, die ihre Thesis abschließen. Genau diese Mischung ist der Punkt.' },
        { q: 'Kann ich zu etwas kommen, bevor ich beitrete?', a: 'Gerne. Speaker-Abende und die meisten Workshops sind offen für alle Studierenden in München. Komm zu einem und entscheide dann.' },
        { q: 'Was ist der Unterschied zwischen Mitglied und Alumnus?', a: 'Alumni behalten Zugang zum Netzwerk, den Alumni-Events und dem Verteiler — ohne Semesterbeitrag und ohne die Erwartung aufzutauchen.' },
        { q: 'Wie werden Unternehmen Teil davon?', a: 'Über die Seite „Für Unternehmen". Wir arbeiten mit Arbeitgebern an Events, Case-Challenges und Projekten — und teilen ihre Stellen mit Mitgliedern.' }
      ],
      stillText: 'Noch am Abwägen? Komm zu einem offenen Event, bevor du entscheidest.',
      joinBtn: 'Mitglied werden →', seeBtn: 'Zu den Terminen'
    },
    join: {
      subtitle: 'Fülle das Formular aus und wir vereinbaren dein kurzes Gespräch.',
      required: { firstname: 'Bitte gib deinen Vornamen an.', lastname: 'Bitte gib deinen Nachnamen an.',
        email: 'Bitte gib deine E-Mail-Adresse an.', university: 'Bitte wähle deine Hochschule.',
        level: 'Bitte wähle dein Studienniveau.', motivation: 'Sag uns in ein, zwei Zeilen, warum du beitreten möchtest.' },
      errEmail: 'Diese E-Mail-Adresse sieht nicht vollständig aus — bitte prüf sie.',
      errConsent: 'Bitte stimme der Verarbeitung deiner Daten zu, damit wir uns melden können.',
      errOne: 'Ein Feld braucht noch deine Aufmerksamkeit.', errMany: 'Felder brauchen noch deine Aufmerksamkeit.',
      f: { firstname: 'Vorname', lastname: 'Nachname', email: 'E-Mail-Adresse', university: 'Hochschule', level: 'Studienniveau', motivation: 'Warum möchtest du der MBS beitreten?' },
      ph: { firstname: 'Dein Vorname', lastname: 'Dein Nachname', email: 'du@beispiel.de',
        university: 'Hochschule wählen', level: 'Niveau wählen',
        motivation: 'Ein, zwei Zeilen dazu, was du suchst und was du mitbringst…' },
      levels: ['Bachelor', 'Master', 'MBA', 'Auslandssemester', 'Promotion', 'Sonstiges'],
      note: 'Mit dem Absenden bestätigst du dein ernsthaftes Interesse an der Munich Business Society. Bewerbungen werden je Aufnahme vom Vorstand geprüft, und du bekommst eine E-Mail, um ein kurzes, entspanntes Gespräch zu vereinbaren.',
      consent: 'Ich habe die Datenschutzerklärung ', consentPh: '(in Vorbereitung)', consentEnd: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
      submit: 'Bewerbung absenden →',
      successTitle: 'Bewerbung eingegangen.',
      successA: 'Wir lesen jede. Du hörst innerhalb von ', successB: ' Tagen von uns, um ein kurzes Gespräch zu vereinbaren. Bis dahin ist das nächste offene Event ', successC: ' — komm vorbei, ganz ohne Mitgliedschaft.',
      another: 'Weitere Bewerbung'
    },
    contact: {
      subtitle: 'Frag uns alles — Studierende:r, Unternehmen oder einfach neugierig.',
      label: 'Frag uns alles', title: 'Frag uns alles.',
      descA: 'Ob du Studierende:r bist und über einen Beitritt nachdenkst, ein Unternehmen, das über eine Partnerschaft nachdenkt, oder jemand mit einer Idee für ein Format — schreib uns. Wir antworten innerhalb von ', descB: ' Werktagen.',
      routes: [
        { icon: 'users', label: 'Studierende & Mitgliedschaft', addr: 'hello@' + MBS_DOMAIN },
        { icon: 'briefcase', label: 'Unternehmen & Partnerschaften', addr: 'partners@' + MBS_DOMAIN },
        { icon: 'mail', label: 'Presse & alles andere', addr: 'info@' + MBS_DOMAIN }
      ],
      formLabel: 'Nachricht senden', formTitle: 'Direkt an die richtige Person.',
      formText: 'Sag uns, wer du bist und was du suchst — das Formular leitet deine Nachricht an das Team, das wirklich helfen kann.',
      findLabel: 'Wo du uns findest', findText: 'Wir treffen uns in ganz München statt auf einem Campus — Locations stehen bei jedem Event.',
      follow: 'Folgen: ', followPh: 'LinkedIn · Instagram [Handles]',
      f: { name: 'Name', email: 'E-Mail', role: 'Ich bin…', message: 'Deine Nachricht' },
      ph: { name: 'Dein Name', email: 'du@beispiel.de', message: 'Was beschäftigt dich?' },
      roles: [ { v: 'student', label: 'Studierende:r' }, { v: 'company', label: 'Unternehmen' }, { v: 'other', label: 'Sonstiges' } ],
      send: 'Absenden →', direct: 'Oder schreib uns direkt an hello@' + MBS_DOMAIN + '.',
      errName: 'Bitte gib deinen Namen an.', errEmail: 'Diese E-Mail-Adresse sieht nicht vollständig aus — bitte prüf sie.', errMsg: 'Bitte gib eine Nachricht ein.',
      sentTitle: 'Nachricht gesendet.', sentA: 'Wir melden uns innerhalb von ', sentB: ' Werktagen.'
    }
  }
};

/* Language resolution: remembered choice → <html lang> → default English.
   Exposed so the shell and every page agree on the same starting language. */
window.MBS_LANG_DEFAULT = 'en';
window.MBS_GET_LANG = function () {
  try {
    var saved = window.localStorage.getItem('mbs-lang');
    if (saved === 'en' || saved === 'de') return saved;
  } catch (e) { /* storage blocked (private mode / file://) — fall through */ }
  return window.MBS_LANG_DEFAULT;
};
window.MBS_SET_LANG = function (lang) {
  try { window.localStorage.setItem('mbs-lang', lang); } catch (e) { /* ignore */ }
};

/* Arm motion before React renders (so the hero's entrance never flashes). Adds
   `mbs-motion` to <html> only when the visitor hasn't asked for reduced motion;
   the CSS gates every load animation on it. The scroll-reveal engine in
   screens/_patches.jsx adds its own `mbs-reveal` class separately. */
(function () {
  try {
    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('mbs-motion');
    }
  } catch (e) { /* no matchMedia — leave motion off rather than risk a flash */ }
})();
