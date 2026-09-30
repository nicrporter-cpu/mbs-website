/* Munich Business Society content, bilingual (English EN-GB + German, du-form).
 *
 * MBS_CONTENT.en and MBS_CONTENT.de hold every string for all ten pages, plus
 * nav labels, UI chrome (buttons, footer, newsletter, dialog, form labels and
 * validation) and page titles. The React app renders whichever language is
 * active; the header's DE/EN tab toggles it in place and remembers the choice.
 *
 * `icon` values are design-system Icon names, not emoji. See screens/_patches.jsx.
 * A bracket ([X], [date], [University]) is a board placeholder the copy deck says
 * must not be invented; it renders through the .mbs-ph style so it stays visibly
 * a fill-in in both languages.
 *
 * Shared, language-neutral facts (domain, event dates, icon names) are the same
 * in both trees on purpose, so the two stay in lock-step.
 */

const MBS_DOMAIN = 'munichbusinesssociety.com';

/* Munich universities for the join form, proper nouns, so only the trailing
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

/* Impressum and Datenschutzerklärung, board draft text, German only (the
 * legally operative language for a Munich e.V.; not run through the EN/DE
 * switch). Shared verbatim by both language trees below, same as MBS_DOMAIN
 * and MBS_UNIVERSITIES. A `[...]` run is a board fill-in, same convention as
 * everywhere else on the site. It renders through .mbs-ph in screens/
 * ImpressumScreen.jsx and DatenschutzScreen.jsx. Brackets can nest (an
 * instruction that quotes an example sentence which itself has a `[X]`
 * inside it); the renderer walks bracket depth rather than a flat regex so
 * that still comes out as one placeholder, not a broken one. */
const MBS_LEGAL_IMPRESSUM = `
### Munich Business Society e.V.

Asternstraße 3
82152 Krailling
Deutschland

### Vertreten durch den Vorstand

Nicholas Porter, 1. Vorsitzender
Martijn Mooren, 2. Vorsitzender
Lennart Neumeier, Schatzmeister

### Kontakt

E-Mail: munichbusinesssociety@gmail.com
Telefon: +49 151 54209559

### Registereintrag

Eintragung im Vereinsregister
Registergericht: Amtsgericht München
Registernummer: VR [Registernummer einsetzen]

### Umsatzsteuer-Identifikationsnummer

[Falls vorhanden gemäß § 27a UStG einsetzen; falls nicht vorhanden, diesen Absatz ersatzlos streichen]

### Gemeinnützigkeit

[Nur einfügen, sobald der Freistellungsbescheid / die vorläufige Bescheinigung vorliegt, z. B.: „Der Verein ist durch Bescheid des Finanzamts München für Körperschaften vom [Datum] als gemeinnützig i. S. d. §§ 51 ff. AO anerkannt."]

### Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV (nur falls die Seite journalistisch-redaktionelle Inhalte enthält, z. B. einen News- oder Blog-Bereich)

[Name, gleiche Anschrift wie oben]

### Verbraucherstreitbeilegung (§ 36 VSBG)

Wir sind nicht bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

[Falls der Vorstand stattdessen teilnehmen möchte, ersetzen durch: „Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig ist die Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein."]

### Haftung für Inhalte

Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.

### Haftung für Links

Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

### Urheberrecht

Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
`;

const MBS_LEGAL_DATENSCHUTZ = `
## Datenschutz auf einen Blick

### Allgemeine Hinweise

Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie der Datenschutzerklärung unter diesem Text.

### Datenerfassung auf dieser Website

### Wer ist verantwortlich für die Datenerfassung auf dieser Website?

Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber, Munich Business Society e.V. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.

### Wie erfassen wir Ihre Daten?

Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, etwa über das Kontaktformular, eine Mitgliedsbewerbung, eine Bewerbung um eine ehrenamtliche Rolle oder die Anmeldung zum Newsletter. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Websitebesuch durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem, Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.

### Wofür nutzen wir Ihre Daten?

Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Weitere Daten können zur Bearbeitung Ihrer Kontakt-, Mitglieds- oder Bewerbungsanfrage sowie [falls Analyse-Tools zum Einsatz kommen: zur Analyse Ihres Nutzerverhaltens] verwendet werden.

### Welche Rechte haben Sie bezüglich Ihrer Daten?

Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen sowie ein Recht auf Einschränkung der Verarbeitung und ein Beschwerderecht bei der zuständigen Aufsichtsbehörde. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.

### Analyse-Tools und Tools von Drittanbietern

[Zu bestätigen: Setzt Munich Business Society beim Website-Besuch ein Analyse- oder Cookie-Consent-Tool ein? Falls ja, hier kurz benennen und auf den Teil 5 unten verweisen. Falls nein, was für den aktuellen Stand der Planung gilt, diesen Absatz ersatzlos streichen.]

## Allgemeine Hinweise und Pflichtinformationen

### Datenschutz

Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

### Hinweis zur verantwortlichen Stelle

Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

Munich Business Society e.V.
Asternstraße 3
82152 Krailling
Deutschland
E-Mail: munichbusinesssociety@gmail.com

Vertreten durch den Vorstand: Nicholas Porter (1. Vorsitzender), Martijn Mooren (2. Vorsitzender), Lennart Neumeier (Schatzmeister)

Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.

### Widerruf Ihrer Einwilligung zur Datenverarbeitung

Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich (z. B. Newsletter-Anmeldung, Cookie-Einwilligung). Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.

### Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)

Werden personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO verarbeitet, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Widerspruch einzulegen. Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung einzulegen, die sich auf diese Direktwerbung bezieht.

### Beschwerderecht bei der zuständigen Aufsichtsbehörde

Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Für Bayern zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.

### Recht auf Datenübertragbarkeit

Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen (Art. 20 DSGVO).

### SSL- bzw. TLS-Verschlüsselung

Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.

### Auskunft, Löschung und Berichtigung

Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.

### Recht auf Einschränkung der Verarbeitung

Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, u. a. wenn Sie die Richtigkeit der bei uns gespeicherten Daten bestreiten oder wenn Sie statt einer Löschung die Einschränkung der Verarbeitung verlangen.

### Widerspruch gegen Werbe-E-Mails

Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Wir behalten uns ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen vor, etwa durch Spam-E-Mails.

## Datenerfassung auf dieser Website

### Cookies

[Zu bestätigen und anzupassen, je nachdem welche Cookies tatsächlich gesetzt werden, z. B.: „Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind. Diese werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TDDDG gesetzt und erfordern keine Einwilligung." Werden zusätzlich Analyse- oder Marketing-Cookies eingesetzt, ist ein Cookie-Consent-Banner mit Opt-in erforderlich, und dieser Abschnitt muss die eingesetzten Dienste einzeln auflisten.]

### Cookie-Einwilligung mit Usercentrics

[Nur einfügen, falls Munich Business Society sich für Usercentrics als Cookie-Consent-Tool entscheidet. Aktuell nicht vorgesehen, vor Go-live streichen oder durch das tatsächlich gewählte Tool ersetzen.]

### Cookie-Einwilligung mit Consent Manager Provider

[Nur einfügen, falls Munich Business Society ein anderes Consent-Management-Tool einsetzt (z. B. Cookiebot, Borlabs Cookie, CookieYes). Aktuell nicht vorgesehen, vor Go-live streichen oder durch das tatsächlich gewählte Tool ersetzen.]

### Server-Log-Dateien

Diese Website wird gehostet bei [Hosting-Anbieter einsetzen, z. B. Vercel, Netlify, All-Inkl, Strato, Hetzner …], [Anschrift des Anbieters].

Bei jedem Aufruf unserer Website erfasst unser Hostinganbieter automatisiert sogenannte Server-Logfiles, die Ihr Browser automatisch übermittelt. Dazu gehören: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung der Website). Die Logfiles werden aus Sicherheitsgründen für [z. B. 7 Tage] gespeichert und danach gelöscht.

### Kontaktformular

Wenn Sie uns per Kontaktformular kontaktieren, werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Nachrichtentext, und ggf. weitere freiwillig mitgeteilte Angaben) zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind, spätestens nach [z. B. 12 Monaten] ohne weiteren Kontakt.

### Anfrage per E-Mail, Telefon oder Telefax

Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist dieselbe wie beim Kontaktformular.

### Registrierung auf dieser Website

[Zu bestätigen: Bietet die Website ein Nutzerkonto bzw. Mitgliederportal mit Login an? Aktuell laut \`MBS_Website_Copy_EN.md\` nicht vorgesehen. Die Membership-Seite ist ein Bewerbungsformular, kein Login-Bereich. Diesen Absatz streichen, solange das so bleibt; nur ausformulieren, falls ein Mitgliederportal eingeführt wird.]

### Mitgliederverwaltung

[Diese Rubrik hat kein Gegenstück im Referenz-Aufbau, ist für einen eingetragenen Verein aber zwingend nötig und bleibt deshalb erhalten:]

Wenn Sie Mitglied bei Munich Business Society e.V. werden, verarbeiten wir die im Rahmen des Aufnahmeverfahrens von Ihnen mitgeteilten Daten (Name, Hochschule, Studiengang, Kontaktdaten und ggf. weitere in der Satzung vorgesehene Angaben) zur Begründung und Durchführung der Mitgliedschaft. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO in Verbindung mit der Vereinssatzung sowie, soweit gesetzlich vorgeschrieben, Art. 6 Abs. 1 lit. c DSGVO (z. B. Mitgliederverzeichnis, Beitragsverwaltung). Die Daten werden für die Dauer der Mitgliedschaft und darüber hinaus so lange gespeichert, wie gesetzliche Aufbewahrungsfristen (z. B. handels- und steuerrechtliche Fristen nach §§ 147 AO, 257 HGB) dies erfordern.

## Soziale Medien

[Grundsatz für alle vier Plattformen: Solange die Website nur auf die Munich Business Society-Profile verlinkt, ohne Plugins/Widgets/Embeds einzubetten, werden beim Aufruf unserer Seite keine Daten an die jeweilige Plattform übertragen. Erst ein Klick auf den Link führt zur Plattform und deren eigener Datenschutzerklärung. Erst wenn ein echtes Plugin eingebettet wird (z. B. ein Like-Button, ein eingebetteter Feed), greift die ausführlichere, unten skizzierte Beschreibung.]

### Facebook Plugins (Like & Share-Button)

[Munich Business Society nutzt laut aktuellem Stand kein Facebook-Profil und keine Facebook-Plugins (\`MBS_Website_Copy_EN.md\` nennt nur LinkedIn und Instagram), Abschnitt vor Go-live streichen, sofern sich das nicht ändert. Falls doch eingeführt: Anbieter, übertragene Daten (IP-Adresse u. a.), Rechtsgrundlage (Art. 6 Abs. 1 lit. a DSGVO, Einwilligung über Consent-Tool) und Link zur Datenschutzerklärung von Meta ergänzen.]

### Instagram Plugin

Auf unserer Website verlinken wir auf unser Instagram-Profil. Dabei handelt es sich um eine reine Verlinkung, nicht um ein eingebettetes Plugin. Es werden beim Aufruf unserer Seite keine Daten an Instagram übertragen. Erst wenn Sie aktiv auf den Link klicken und Instagram aufrufen, gilt die Datenschutzerklärung von Meta Platforms Ireland Limited.

[Falls stattdessen ein eingebetteter Instagram-Feed verwendet wird, diesen Absatz durch eine Beschreibung der übertragenen Daten, der Rechtsgrundlage (Art. 6 Abs. 1 lit. a DSGVO) und einen Link zur Datenschutzerklärung des Anbieters ersetzen.]

### LinkedIn Plugin

Auf unserer Website verlinken wir auf unser LinkedIn-Profil. Dabei handelt es sich um eine reine Verlinkung, nicht um ein eingebettetes Plugin. Es werden beim Aufruf unserer Seite keine Daten an LinkedIn übertragen. Erst wenn Sie aktiv auf den Link klicken und LinkedIn aufrufen, gilt die Datenschutzerklärung der LinkedIn Ireland Unlimited Company.

[Falls stattdessen ein eingebettetes LinkedIn-„Follow"-Widget verwendet wird, diesen Absatz entsprechend ersetzen.]

## Analyse-Tools und Werbung

### Google Analytics

[Zu bestätigen: Setzt Munich Business Society Google Analytics ein? Für einen kleinen Verein ist ein datensparsameres, oft ohne Cookie-Banner auskommendes Tool wie Matomo (selbst gehostet) oder Plausible/Fathom häufig die einfachere Wahl. Das ist eine Empfehlung, keine Vorgabe. Falls Google Analytics tatsächlich zum Einsatz kommt, hier ergänzen:]

### IP-Anonymisierung

[Beschreibung, ob/wie IP-Adressen gekürzt übertragen werden]

### Browser-Plugin

[Hinweis auf das Browser-Add-on zur Deaktivierung von Google Analytics]

### Widerspruch gegen Datenerfassung

[Opt-out-Möglichkeit für Nutzer beschreiben]

### Auftragsverarbeitung

[Hinweis auf den mit Google abgeschlossenen Auftragsverarbeitungsvertrag]

### Demografische Merkmale bei Google Analytics

[Nur relevant, falls die entsprechende Funktion aktiviert ist]

### Speicherdauer

[Aufbewahrungsfrist der erhobenen Daten]

[Falls kein Google Analytics eingesetzt wird: gesamten Block streichen.]

### etracker

[Munich Business Society setzt aktuell kein etracker oder vergleichbares Tracking-Tool eines anderen Drittanbieters ein, Abschnitt streichen, sofern sich das nicht ändert. Falls doch: Anbieter, verarbeitete Daten, Rechtsgrundlage und Speicherdauer ergänzen.]

### Google AdSense

Munich Business Society schaltet keine Werbung Dritter auf dieser Website und setzt kein Google AdSense ein. [Sollte sich das ändern: Vorstand vorab mit dem Steuerberater abstimmen, da Werbeeinnahmen bei einem als gemeinnützig anerkannten Verein einen steuerpflichtigen wirtschaftlichen Geschäftsbetrieb auslösen können, siehe Abschnitt 0, Risikobereiche.]

## Newsletter

### Newsletterdaten

[Nur einfügen, falls ein Newsletter tatsächlich versendet wird, und an das eingesetzte Tool anpassen, z. B.: „Wenn Sie sich für unseren Newsletter anmelden, verwenden wir das sogenannte Double-Opt-in-Verfahren: Nach Ihrer Anmeldung erhalten Sie eine Bestätigungs-E-Mail, mit der Sie Ihre Anmeldung bestätigen müssen. Für den Versand nutzen wir [Anbieter, z. B. Mailchimp/Brevo], [Anschrift des Anbieters]. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Sie können den Newsletter jederzeit über den Abmeldelink in jeder E-Mail oder per Nachricht an munichbusinesssociety@gmail.com abbestellen."]

## Plugins und Tools

### Google Web Fonts

[Prüfen: Werden Fraunces und DM Sans (siehe \`MBS_Design_System.md\`) über Googles Server oder lokal auf dem eigenen Server eingebunden? Lokal eingebunden (empfohlen) → keine gesonderte Angabe nötig, diesen Absatz streichen. Extern von Google geladen → eigenen Absatz mit übertragenen Daten (IP-Adresse) und Rechtsgrundlage ergänzen.]

### Adobe Fonts

[Nur einfügen, falls Adobe Fonts tatsächlich lizenziert und eingebunden wird. Aktuell nicht vorgesehen, streichen.]

### Adobe-Stock-Lizenzen

[Nur einfügen, falls Bildmaterial über Adobe Stock lizenziert wird, hier den Lizenztyp und ggf. Bildnachweise dokumentieren. Getrennt zu behandeln von der KI-Kennzeichnung aus Abschnitt 5: eine Stock-Lizenz regelt Nutzungsrechte, keine KI-Herkunftskennzeichnung.]

### Pixabay-Lizenzen

[Nur einfügen, falls Bildmaterial über Pixabay bezogen wird, Lizenztyp und Bildnachweise dokumentieren. Auch hier gilt: getrennt von Abschnitt 5 zu behandeln.]

### Google Maps

[Nur einfügen, falls eine Google-Maps-Karte eingebettet wird, z. B. für Event-Locations oder eine Kontaktseite. Bei Einbettung werden beim Laden der Karte Daten an Google in die USA übertragen. Dafür ist regelmäßig eine Einwilligung über ein Consent-Tool nötig (2-Klick-Lösung oder Cookie-Banner). Aktuell laut Website-Copy nicht vorgesehen („Where you'll find us: We meet across Munich rather than on one campus, venues are listed with each event"), streichen, solange keine Karte eingebettet wird.]

### Google reCAPTCHA

[Nur einfügen, falls das Kontakt- oder Mitgliedschaftsformular reCAPTCHA zum Spam-Schutz nutzt. Falls ja: Zweck, übertragene Daten und Rechtsgrundlage (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse am Schutz vor Missbrauch) ergänzen. Aktuell nicht bestätigt. Vorstand sollte das mit der technischen Umsetzung klären.]

## Eigene Dienste

### Umgang mit Bewerbungsdaten für ehrenamtliche Rollen

[Hinweis zur Einordnung: Der Referenz-Aufbau spricht von „Bewerberdaten" im arbeitsrechtlichen Sinn (§ 26 BDSG, bezahlte Anstellung). Munich Business Society-Rollen, Vorstand, Team, Campus Representative (vgl. \`MBS_Website_Copy_EN.md\`, „Take a role" / „Represent your university"), sind ehrenamtlich, kein Beschäftigungsverhältnis. § 26 BDSG passt daher nicht direkt; die Verarbeitung stützt sich stattdessen auf Art. 6 Abs. 1 lit. b DSGVO (vorvertragliches Verhältnis zur Begründung der ehrenamtlichen Tätigkeit) bzw. lit. f (berechtigtes Interesse an einer geordneten Rollenbesetzung). Inhaltlich unten trotzdem nach demselben Muster wie beim Referenz-Aufbau gegliedert, da die Fragen (Umfang, Aufbewahrung, Pool) dieselben sind.]

### Umfang und Zweck der Datenerhebung

Wenn Sie sich bei uns um eine ehrenamtliche Rolle bewerben (z. B. Vorstand, Teamrolle, Campus Representative), verarbeiten wir die von Ihnen mitgeteilten Daten (Name, Kontaktdaten, Hochschule, Motivation, ggf. Lebenslauf) ausschließlich zum Zweck der Auswahlentscheidung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO analog bzw. Art. 6 Abs. 1 lit. f DSGVO.

### Aufbewahrungsdauer der Daten

[Zu entscheiden: Munich Business Society sollte eine Löschfrist für nicht erfolgreiche Bewerbungen um ehrenamtliche Rollen festlegen, z. B. „Bei Nichtberücksichtigung löschen wir Ihre Bewerbungsunterlagen spätestens [X] Monate nach Abschluss des Auswahlverfahrens."]

### Aufnahme in den Kandidat:innen-Pool

[Nur einfügen, falls Munich Business Society Bewerbungen für künftige Rollen aktiv vorhält, z. B.: „Mit Ihrer ausdrücklichen Einwilligung nehmen wir Ihre Unterlagen für [X] Monate in unseren Pool für künftige ehrenamtliche Rollen auf. Diese Einwilligung können Sie jederzeit widerrufen."]

## Disclaimer

[Einordnung: munichbfc.de führt hier vermutlich einen Anlage-/Finanzberatungs-Disclaimer, weil der Verein sich als "Business & Finance Club" positioniert und entsprechende Inhalte veröffentlicht. Für Munich Business Society als cross-universitäres Networking- und Event-Format (Speaker Nights, Case Workshops, Company Visits, vgl. \`MBS_Website_Copy_EN.md\`) ist ein wortgleicher Anlage-Disclaimer nicht einschlägig, ein allgemeiner Inhalts-Disclaimer aber sinnvoll, sobald Gastredner:innen aus Finance/Consulting auftreten. Vorschlag, vom Vorstand freizugeben:]

Die auf dieser Website sowie im Rahmen von Veranstaltungen von Munich Business Society e.V. bereitgestellten Inhalte, einschließlich der Beiträge externer Gastredner:innen bei Guest-Speaker-Formaten, Case Nights und Firmenbesuchen, dienen ausschließlich der Information und dem Erfahrungsaustausch. Sie stellen keine rechtliche, steuerliche, finanzielle oder sonstige professionelle Beratung dar und begründen keinen Anspruch auf bestimmte Ergebnisse, insbesondere nicht auf eine Anstellung, ein Praktikum oder einen sonstigen wirtschaftlichen Erfolg. Meinungsäußerungen von Gastredner:innen und Partnerunternehmen geben deren eigene Auffassung wieder und nicht notwendigerweise die des Vereins.
`;

window.MBS_CONTENT = {

  /* ═══════════════════════════ ENGLISH ═══════════════════════════ */
  en: {
    label: 'EN',
    dir: 'ltr',
    locale: 'en-GB',
    brand: {
      name: 'Munich Business Society', short: 'Munich Business Society', domain: MBS_DOMAIN,
      tagline: 'Every campus. One network.',
      metaDescription: "Munich's first cross-university case club.",
      footerDescriptor: 'Munich Business Society, the cross-university case club for every student in Munich. Open to every university in the city.'
    },
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'calendar', label: 'Events' },
      { id: 'team', label: 'Team' },
      { id: 'membership', label: 'Membership' },
      { id: 'companies', label: 'For Companies' },
      { id: 'contact', label: 'Contact' }
    ],
    ui: {
      join: 'Apply', joinArrow: "Join free →", menuOpen: 'Open menu', menuClose: 'Close menu',
      skip: 'Skip to content', home: 'Munich Business Society, home', langLabel: 'Language',
      dialog: { about: 'About this event', expect: 'What to expect', who: "Who's it for?",
        cta: 'Join Munich Business Society & attend →', close: 'Close dialog' },
      inPrep: 'in preparation',
      social: [
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/munichbusinesssociety' },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/munichbusinesssociety/' },
        { label: 'Email us', icon: 'mail', href: 'mailto:munichbusinesssociety@gmail.com' }
      ],
      footerCols: [
        { title: 'Society', items: [
          { label: 'About', to: 'about' }, { label: 'Team', to: 'team' } ] },
        { title: 'Get involved', items: [
          { label: 'Membership', to: 'membership' }, { label: 'Events', to: 'calendar' },
          { label: 'Contact', to: 'contact' } ] },
        { title: 'Companies', items: [
          { label: 'For Companies', to: 'companies' } ] },
        { title: 'Legal', items: [
          { label: 'Imprint', to: 'impressum' }, { label: 'Privacy policy', to: 'datenschutz' } ] }
      ],
      newsletter: {
        h: 'One email a month. Everything happening in Munich.',
        body: "Events, openings, partner formats and the odd opportunity we've been asked to pass on. No spam, unsubscribe in one click.",
        placeholder: 'Your email', srEmail: 'Your email', btn: 'Keep me posted', sending: 'Sending…',
        done: "You're on the list. First email lands at the start of next month.",
        err: 'Please enter a valid email address.',
        sendError: 'Something went wrong. Please email us directly at munichbusinesssociety@gmail.com instead.'
      },
      copyright: '© 2026 Munich Business Society'
    },
    title: { home: "Munich's first cross-university case club", about: 'About', network: 'The Network',
      whatwedo: 'What We Do', calendar: 'Events', membership: 'Membership', companies: 'For Companies', team: 'Team',
      faq: 'FAQ', join: 'Join Munich Business Society', contact: 'Contact', impressum: 'Impressum', datenschutz: 'Datenschutzerklärung' },

    legal: { impressum: MBS_LEGAL_IMPRESSUM, datenschutz: MBS_LEGAL_DATENSCHUTZ },

    pillars: [
      { icon: 'users', title: 'Network', tag: "Meet people you'd never sit next to.",
        text: 'Your degree gives you one lecture hall. We give you the whole city: students from every Munich university, plus alumni and professionals who are already where you want to be.' },
      { icon: 'trending', title: 'Growth', tag: "Learn what the seminar room doesn't teach.",
        text: 'Case Nights, Company Cases, Skillnights and leadership roles inside the society, all free. You practise the work before anyone asks you to do it for a salary.' },
      { icon: 'target', title: 'Exposure', tag: 'Be in the room where you get noticed.',
        text: 'Company evenings, case competitions and partner projects put you in front of recruiters and founders as a person, not a PDF in a stack of applications.' }
    ],
    values: [
      { icon: 'users', title: 'Community', text: "We open doors for each other. No gatekeeping, no cliques, no price tag, and no one member's university ranked above another's." },
      { icon: 'rocket', title: 'Ambition', text: 'We take our own development seriously and expect the same from each other.' },
      { icon: 'scale', title: 'Ownership', text: "You own what you sign up for - a Case Night, a project, a role. Nobody chases you to follow through, and nobody else will do it for you." }
    ],
    formats: [
      { icon: 'target', title: 'Case Night', pillar: 'Growth', access: 'Open to all students. Free, every two weeks.',
        text: 'A team case, ninety to a hundred-twenty minutes, pitch and feedback at the end. Runs every two weeks, the core of what we do.' },
      { icon: 'trophy', title: 'Case Competition', pillar: 'Growth', access: 'Open to all students. Free, once or twice a semester.',
        text: 'A multi-stage competition that builds to a final in front of a jury. Once or twice a semester, for anyone who wants the case format with the stakes turned up.' },
      { icon: 'building', title: 'Company Case', pillar: 'Exposure', access: 'Open to all students. Free.',
        text: 'A partner brings us a real case from their own business, and shares their actual solution with you afterwards.' },
      { icon: 'mic', title: 'Guest Speaker', pillar: 'Network', access: 'Open to all students. Free.',
        text: 'A talk from someone worth listening to, on a business topic or a specific skill, with real time for questions after.' },
      { icon: 'bolt', title: 'Skillnight', pillar: 'Growth', access: 'Open to all students. Free.',
        text: 'Two hours on one skill employers assume you already have: Excel, valuation, storytelling, the stuff nobody teaches in a lecture hall.' },
      { icon: 'users', title: 'Networking Nights', pillar: 'Network', access: 'Open to all students. Free.',
        text: 'An evening built for meeting people across universities, no pitch, no agenda beyond good conversation.' },
      { icon: 'star', title: 'Community Stammtisch', pillar: 'Community', access: 'Open to all students. Free, no agenda.',
        text: 'A regular, open get-together between Case Nights. No programme, just people who keep showing up.' },
      { icon: 'trending', title: 'Alumni & Speaker Get-Together', pillar: 'Network', access: 'Open to all students. Free.',
        text: "Fireside conversations with practitioners and alumni who'll tell you what the job is actually like." },
      { icon: 'globe', title: 'Excursions & Company Visits', pillar: 'Exposure', access: 'Open to all students. Free, limited spots per visit.',
        text: 'A visit to a partner company\'s office, you see how the place actually runs, not just its recruiting deck.' }
    ],
    events: [],
    universities: MBS_UNIVERSITIES.concat(['Other university in Munich']),

    home: {
      heroLead: "Munich Business Society is Munich's first cross-university case-solving and business platform, 100% free, with no membership fee, open to every student in the city.",
      seeEvents: "See what's coming up",
      whyLabel: 'Why we exist', whyTitle: 'Munich has 110,000+ students split across 33 universities, and almost none of them talk to each other.',
      whyP1: 'Every Munich university has strong people and its own bubble. Most case-solving and networking clubs are tied to a single university, giving visibility into that university\'s own talent, not across one shared, central club. Recruiters see one Munich talent pool; students only ever meet their own seminar group. Good formats exist, but they tend to cost money, filter early, or cover just one narrow field.',
      whyP2: "Munich Business Society exists to close that gap: one open, free, cross-university platform with a broad focus on real business problems. We're deliberately not owned by one university. Whichever lecture hall you sit in, you get the same access, on the same terms, at no cost.",
      pillarsLabel: 'What you get', pillarsTitle: 'What you actually get out of it.',
      formatsLabel: 'What we do', formatsTitle: 'Nine formats, every semester.',
      formatsText: "Case Nights every two weeks, plus Case Competitions, Company Cases, Guest Speakers, Skillnights and the social formats that hold the community together. Everything is free and open to any student in Munich.",
      formatsLink: 'See the full programme →',
      studentH: 'Open now. Just show up.', studentText: "It's free for every student at every Munich university. Come to a Case Night, or get on the list for updates. Takes thirty seconds.",
      companyH: 'Hiring in Munich?', companyText: 'Reach ambitious business students across all 33 Munich universities through one point of contact, instead of negotiating with five separate campus clubs.',
      partnerBtn: 'Partner with us →'
    },
    about: {
      subtitle: 'One case club for all of Munich, student-run, cross-university, open to every campus in the city.',
      whoLabel: 'Who we are', whoTitle: 'One case club for all of Munich.',
      whoDesc: 'Munich Business Society is a student-run society that connects business-minded students across every university in Munich. We were founded by students who kept running into the same problem: the most interesting people in this city were always one campus away.',
      storyLabel: 'Our story', storyTitle: 'We built the society we wanted to join.',
      storyP1: "Munich Business Society started with three students, Nicholas, Martijn and Lennart, and a simple observation. Munich has over 110,000 students spread across 33 universities, but every university has its own career fair, and almost none of them talk to each other. Good case-solving and networking formats exist, but they tend to cost money, filter early, or cover just one narrow field.",
      storyP2: 'So we built the thing we wanted to join: a free, cross-university platform with no home campus. Open on identical terms to anyone in Munich studying business, economics, management, or studying something else entirely and heading into business anyway.',
      storyP3: 'We held our founding assembly on 23 September 2026, adopted our statutes and elected the board. The next milestone is our first Case Night, planned for early 2027. Until then, we\'re building the partner and campus network to get there.',
      diffLabel: 'What makes us different', diffTitle: 'Cross-university by design, not by exception.',
      different: [
        { icon: 'globe', title: 'Cross-university by design, not by exception', text: "Most student business clubs are an extension of one university. We're a platform that sits above all of them." },
        { icon: 'building', title: 'Built for the city, not the campus', text: "Our partners, speakers and venues come from Munich's business ecosystem, not from one faculty's alumni list." },
        { icon: 'trophy', title: 'You do the work', text: "Members run formats, own projects and lead teams. It's the fastest way we know to build a CV that isn't just coursework." },
        { icon: 'target', title: 'Open door, real standard', text: "We don't screen by university, grade or ability to pay. Every format is free. We do expect you to show up and contribute." }
      ],
      valuesLabel: 'Our values', valuesTitle: 'What we stand for',
      orgLabel: "How we're organised", orgTitle: 'Run by students, built to last.',
      orgP1: 'Munich Business Society is run entirely by students. We held our founding assembly on 23 September 2026, where members adopted the statutes and elected the board.',
      orgP2: " We're now registering with the Munich register of associations (Vereinsregister), which will give the society a permanent legal footing as an eingetragener Verein (e.V.). Statutes and financial reporting are available to members on request.",
      orgNote: 'Munich Business Society operates as a Verein in Gründung (association in formation) until the Vereinsregister entry is complete. The registration number will appear in the Impressum once it lands.',
      meetTeam: 'Meet the team →', faqBtn: 'Read the FAQ →'
    },
    calendarPage: {
      subtitle: 'Every Case Night, Skillnight and company evening, in one place.',
      calLabel: 'Calendar', calTitle: 'This month',
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      prevMonth: 'Previous month', nextMonth: 'Next month', noEvents: 'No events this month.',
      label: 'Upcoming', title: "What's on",
      empty: 'Nothing on the calendar yet. The board was elected on 23 September 2026 and the first events are being scheduled now, check back soon or join the list to hear first.'
    },
    network: {
      subtitle: "Munich Business Society isn't attached to a university. It's attached to a city.",
      introLabel: 'Every campus. One room.', introTitle: 'A network is worth the doors it opens.',
      introDesc: "Munich Business Society isn't attached to a university. It's attached to a city. That single decision changes what membership is worth, because the value of a network is the number of doors it opens that you couldn't have opened yourself.",
      whoLabel: "Who's in the network", whoTitle: 'Four groups, one room.',
      who: [
        { icon: 'users', title: 'Students, from any Munich university', text: 'Public universities, universities of applied sciences, private schools. Bachelor, master, exchange semester. Business degrees and everyone else heading into business.' },
        { icon: 'trending', title: 'Alumni and young professionals', text: "Members who've graduated stay in the network, consulting, finance, tech, industry, their own companies." },
        { icon: 'building', title: 'Partner companies', text: 'Employers hiring in Munich, from DAX names to the startups nobody has heard of yet.' },
        { icon: 'mic', title: 'Speakers and mentors', text: 'Founders, investors and operators who come in for a format and often stay in touch.' }
      ],
      uniLabel: 'Universities represented', uniTitle: 'Listed alphabetically. No ranking, ever.',
      uniDesc: "Members' universities, in plain text and A–Z. Any other order would read as a hierarchy, and the whole point is that there isn't one.",
      uniNote: "Placeholder list. Replace with every university currently represented in the membership. If a member's university isn't listed yet, they'd be the first.",
      worksLabel: 'How the network works', worksTitle: 'One membership, four moves.',
      steps: [
        { n: '1', title: 'Join from wherever you study', text: 'One sign-up, one membership, no campus requirement.' },
        { n: '2', title: 'Show up', text: 'Events run across the semester at venues throughout the city, not on one campus.' },
        { n: '3', title: 'Contribute', text: 'Take a role, run a format, join a project team. This is where the network stops being a mailing list.' },
        { n: '4', title: 'Stay', text: "Graduating doesn't end your membership. It moves you to the other side of it." }
      ],
      repH: 'Be the first Munich Business Society voice at your university.',
      repText: "Every university in Munich should have someone in the network who makes it visible there. Campus representatives run local outreach, bring people to events and sit in on the programme planning. It's a real role with a real title, and we're actively looking for people to fill it.",
      repBtn: 'Represent your university →'
    },
    whatwedo: {
      subtitle: 'Nine formats. One semester. All of Munich.',
      formatsLabel: 'The formats', formatsTitle: 'Widen your network, grow a skill, or get noticed.',
      formatsDesc: 'Every format is built to do one of three things. All of them are free and open to any student in Munich, no membership tier, no reserved seats.',
      projLabel: 'Partner projects', projTitle: 'Sometimes a company gives us a real problem.',
      projText: "A small team of members works on a defined question over four to six weeks and presents to the client at the end. Paid or credited depending on the partner. It's the closest thing to consulting work you can do before you're hired to do it.",
      projLink: 'Companies, set up a project →',
      projCard: "Four to six weeks. A small member team. A defined question and a documented deliverable, presented to the partner's leadership. Real work, before anyone's paying you to do it.",
      progLabel: 'Programme', progTitle: 'Coming up this semester',
      progEmpty: "Our first event is coming soon. Details will land here shortly. Get on the list and we'll email you the moment it's confirmed.",
      progNote: '',
      recapLabel: 'Event recaps', recapTitle: 'Catch up on Instagram',
      recapText: 'We share highlights and key takeaways from every event on our socials. Follow us to stay in the loop.'
    },
    membership: {
      subtitle: 'Open to every university in Munich, any subject, any degree level.',
      whoLabel: 'Who can join', whoTitle: 'Open to every university in Munich.',
      whoDesc: 'If you study in Munich, you can join - free. We review every application and let you know our decision. We don’t filter by university, by grade average, or by whether your programme has “business” in the title. Talent, curiosity and showing up are the only requirements.',
      canJoin: [
        'Enrolled at any university or university of applied sciences in the Munich area.',
        'Any degree level, bachelor, master, MBA, exchange semester, doctorate.',
        'Any subject. Plenty of our members study something other than business and are heading into it anyway.',
        'Comfortable in English or German. Our events run in both; the working language is whatever the room needs.'
      ],
      getLabel: 'What you get', getTitle: 'Everything membership opens up.',
      get: [
        { icon: 'star', title: 'Access to the full programme', text: 'Every Case Night, Case Competition, Company Case, Skillnight and company visit, open to you from day one.' },
        { icon: 'users', title: 'A network across every Munich university', text: 'Plus alumni already working in consulting, finance, tech and industry.' },
        { icon: 'building', title: 'Direct contact with partner companies', text: "Including openings shared with members before they're advertised." },
        { icon: 'briefcase', title: 'A role, if you want one', text: 'Become a Case Coach or Campus Lead, run a format, own a partnership. Genuine responsibility, on your CV, with a reference behind it.' },
        { icon: 'trophy', title: 'Partner projects', text: 'Real client work with a real deliverable.' },
        { icon: 'globe', title: 'Alumni status for life', text: 'Once you graduate, you stay in the network.' }
      ],
      expectLabel: 'What we expect', expectTitle: 'Show up. Contribute. Behave well.',
      expectText: "Show up to a few things a semester. Contribute something at some point, an idea, an evening, a contact, a project. Treat the people in this network the way you'd want to be treated by them in five years, when one of them is hiring.",
      feeLabel: 'The cost', feeValue: '0 €', feePer: 'always, for students',
      feeText: "Membership has never cost anything and never will. We're funded by sponsors, partners and in-kind support, not by charging the students we're here for.",
      faqLabel: 'Still deciding?', faqTitle: 'The questions students ask before joining.',
      faqDesc: 'Cost, eligibility, time commitment, joining mid-degree, answered in full on the FAQ.',
      faqBtn: 'Read the FAQ →'
    },
    companies: {
      subtitle: 'Reach every Munich university through one conversation.',
      whyLabel: 'Why partner with the Munich Business Society', whyTitle: 'Reach every Munich university through one conversation.',
      whyDesc: 'Most student partnerships buy you access to one campus. Munich Business Society is cross-university by construction, one partnership, one point of contact, and a room that draws from students across all 33 Munich universities.',
      packBtn: 'Get the partner pack →', callBtn: 'Book a call',
      whyGridLabel: 'The value',
      why: [
        { icon: 'target', title: 'Direct access to top talent', text: 'Meet engaged, capable students before the regular application season opens, a case competition shows you how people think, present and work in a team, in real time.' },
        { icon: 'users', title: 'An efficient alternative to career fairs', text: "Talk to students who actually fit what you're hiring for, instead of a stand at a job fair or a lecture-hall mailing list." },
        { icon: 'globe', title: 'Employer branding that means something', text: 'Workshops, real cases and company presentations put your brand in front of a self-selected, business-minded audience, as a serious employer, not a logo on a tote bag.' }
      ],
      waysLabel: 'Ways to work together', waysTitle: 'Four ways in.',
      ways: [
        { icon: 'mic', title: 'Event partner', text: 'You host or co-host a Guest Speaker session, Skillnight or company evening. Your people, our room, our students from across the city.' },
        { icon: 'trophy', title: 'Case Competition or Company Case', text: 'A real business question, teams of students, a presentation to your leadership. You see how people think before you interview them.' },
        { icon: 'briefcase', title: 'Partner project', text: 'A defined piece of work over four to six weeks with a small member team and a documented deliverable.' },
        { icon: 'star', title: 'Annual partnership', text: 'A package across the academic year: multiple formats, visibility on site and in the newsletter, direct access to the membership for openings.' }
      ],
      partnersLabel: 'Our partners', partnersTitle: 'Companies we work with',
      partnersDesc: 'Become our first partner now.',
      partnersBtn: 'Get in touch →',
      closeH: 'Get in touch.',
      closeText: "Any of the reasons above, or you've met one of our business talents and want to hire them directly. Write to munichbusinesssociety@gmail.com or book a call, we'll get back within a week.",
      emailBtn: 'Email the partnerships team →'
    },
    team: {
      subtitle: 'Built and run entirely by students, alongside their degrees.',
      whoTitle: 'Who runs the Munich Business Society',
      whoDesc: 'Munich Business Society is built and run entirely by students alongside their degrees. The board is elected by the membership; every other role is open to members who want it.',
      boardTitle: 'The Board',
      board: [
        { name: 'Nicholas Porter', role: 'Chairman', initials: 'NP', description: 'Student affairs, university relations, education and administration.', photoSrc: '/assets/team-nicholas-porter.png', photoStyle: { objectPosition: 'center 45%' } },
        { name: 'Martijn Mooren', role: 'Deputy Chairman', initials: 'MM', description: 'Marketing, events, membership management and recruiting.', photoSrc: '/assets/team-martijn-mooren.jpg' },
        { name: 'Lennart Neumeier', role: 'Treasurer', initials: 'LN', description: 'Finance, legal matters, sponsoring and company relations.', photoSrc: '/assets/team-lennart-neumeier.jpg' }
      ],
      teamsLabel: 'Teams', teamsTitle: 'Five teams, one society.',
      teams: [
        { icon: 'star', title: 'Programme', text: "Plans and runs the semester's formats." },
        { icon: 'briefcase', title: 'Partnerships', text: 'Owns company relationships and the partner pipeline.' },
        { icon: 'users', title: 'Community', text: 'Membership, onboarding, socials, campus representatives.' },
        { icon: 'globe', title: 'Brand & Communications', text: 'Website, social channels, newsletter, design.' },
        { icon: 'building', title: 'Operations', text: 'Finances, legal, tools, everything unglamorous that makes the rest work.' }
      ],
      faqText: 'Got questions about the board, the teams, or how to get involved?',
      faqBtn: 'Read the FAQ →'
    },
    faq: {
      subtitle: 'The questions students ask before joining.',
      label: 'FAQ', title: 'Before you show up',
      items: [
        { q: 'Which university is Munich Business Society part of?', a: "None, deliberately. Munich Business Society is a cross-university society. Students from every university in Munich join on identical terms. We're not a faculty initiative and no single school owns us." },
        { q: "I don't study business. Can I still join?", a: "Yes. Plenty of our members study engineering, law, computer science or something else entirely and are heading into business anyway. What matters is that you're serious about it." },
        { q: 'Is everything in German or English?', a: 'Both. Events run in whichever language suits the room and the speaker; written communication is in English so nobody is left out.' },
        { q: 'How much time does it take?', a: 'As much as you give it. The minimum is showing up to a few events a semester. Members who take a role typically spend two to four hours a week on it.' },
        { q: 'What does it cost?', a: "Nothing. Membership is 100% free. We review every application and let you know our decision. We're funded by sponsors and partners, not by charging students." },
        { q: "I'm here for one exchange semester. Is it worth joining?", a: "Yes, and we'd encourage it. There's no fee to work around, and the network doesn't expire when you leave the city." },
        { q: 'Do I need to be in my first year?', a: 'No. We have first-semester bachelor students and master students finishing their theses. The mix is the point.' },
        { q: 'Can I come to something before I join?', a: "There's nothing to join before. Just show up. Case Nights and most other formats are open to any student in Munich." },
        { q: "What's the difference between a member and an alum?", a: 'Alumni keep access to the network, the alumni events and the mailing list, just without the expectation of showing up or taking on a role.' },
        { q: 'How do companies get involved?', a: 'Through the For Companies page. We work with employers on events, case challenges and projects, and share their openings with members.' }
      ],
      stillText: 'Still weighing it up? Come to an open event before you decide.',
      joinBtn: 'Get on the list →', seeBtn: "See what's coming up"
    },
    join: {
      subtitle: "Free. We review every application and you'll receive our decision within a few days.",
      required: { firstname: 'Please add your first name.', lastname: 'Please add your last name.',
        email: 'Please add your email address.', university: 'Please choose your university.',
        level: 'Please choose your degree level.', studyprogram: 'Please choose your degree programme.',
        language: 'Please choose your preferred language.', motivation: 'Tell us in a line or two what you\'re after.' },
      errEmail: "That email address doesn't look complete. Please check it.",
      errConsent: 'Please agree to your data being processed so we can get back to you.',
      errOne: 'One field still needs your attention.', errMany: 'fields still need your attention.',
      submitting: 'Sending…',
      sendError: "Something went wrong sending this. Please email us directly at munichbusinesssociety@gmail.com instead.",
      f: { firstname: 'First name', lastname: 'Last name', email: 'Email address', university: 'University', level: 'Degree level',
        studyprogram: 'Degree programme', language: 'Preferred language', motivation: 'What are you hoping to get out of Munich Business Society?',
        interests: "Subject areas you'd like to see in the club", cv: 'CV / résumé', enrollment: 'Certificate of enrollment' },
      ph: { firstname: 'Your first name', lastname: 'Your last name', email: 'you@example.com',
        university: 'Choose your university', level: 'Choose your level',
        studyprogram: 'Choose your degree programme', language: 'Choose your preferred language',
        motivation: 'A line or two, Case Nights, a role, just curious…',
        interests: 'e.g. consulting, finance, marketing, HR, M&A…' },
      help: { cv: 'Optional, PDF or Word, a page or two.',
        enrollment: "Optional, your Immatrikulationsbescheinigung, so we can confirm you're currently a student." },
      levels: ['Bachelor', 'Master', 'Exchange semester', 'Leave of absence semester', 'Other'],
      studyPrograms: ['Business Administration (BWL)', 'International Business', 'Business Informatics',
        'Industrial Engineering & Management', 'Economics (VWL)', 'Business Law', 'Finance & Accounting',
        'Business Psychology', 'Management', 'Marketing', 'Other degree programme'],
      languages: ['German', 'English', 'Either / no preference'],
      note: "We review every application and you'll receive our decision within a few days. Say so in the message above if you'd like a role, such as Case Coach or Campus Lead, and we'll get back to you about that separately.",
      consent: "I've read the ", consentLink: 'privacy policy', consentEnd: ' and agree to my data being processed.',
      submit: 'Sign me up →',
      successTitle: "Your application is in.",
      successA: "We review every application and you'll receive our decision within a few days. In the meantime, come straight to the next open event: ", successC: '.',
      another: 'Sign up another address'
    },
    contact: {
      subtitle: 'Ask us anything, student, company, or just curious.',
      label: 'Ask us anything', title: 'Ask us anything.',
      descA: "Whether you're a student weighing up joining, a company thinking about a partnership, or someone with an idea for a format. Write to us. We'll get back to you as soon as possible.",
      routes: [
        { icon: 'users', label: 'Students & membership', addr: 'munichbusinesssociety@gmail.com' },
        { icon: 'briefcase', label: 'Companies & partnerships', addr: 'munichbusinesssociety@gmail.com' },
        { icon: 'mail', label: 'Press & everything else', addr: 'munichbusinesssociety@gmail.com' }
      ],
      formLabel: 'Send a message', formTitle: 'Straight to the right person.',
      formText: "Tell us who you are and what you're after. The form routes your message to the team that can actually help.",
      findLabel: 'Find us', findText: 'We meet across Munich rather than on one campus. Venues are listed with each event.',
      follow: 'Follow: ', followPh: 'LinkedIn · Instagram [handles]',
      f: { firstname: 'First name', lastname: 'Last name', email: 'Email', role: "I'm a…", message: 'Your message' },
      ph: { firstname: 'Your first name', lastname: 'Your last name', email: 'you@example.com', message: "What's on your mind?" },
      roles: [ { v: 'student', label: 'Student' }, { v: 'company', label: 'Company' }, { v: 'other', label: 'Other' } ],
      send: 'Send it →', direct: 'Or write to us directly at munichbusinesssociety@gmail.com.',
      errFirstname: 'Please add your first name.', errLastname: 'Please add your last name.', errEmail: "That email address doesn't look complete. Please check it.", errMsg: 'Please add a message.',
      sending: 'Sending…',
      sendError: "Something went wrong sending this. Please email us directly at munichbusinesssociety@gmail.com instead.",
      sentTitle: 'Message sent.', sentA: "We'll come back to you as soon as possible.",
      faqText: 'Before you write in, your question might already be answered.', faqBtn: 'Read the FAQ →'
    }
  },

  /* ═══════════════════════════ DEUTSCH ═══════════════════════════ */
  de: {
    label: 'DE',
    dir: 'ltr',
    locale: 'de-DE',
    brand: {
      name: 'Munich Business Society', short: 'Munich Business Society', domain: MBS_DOMAIN,
      tagline: 'Jeder Campus. Ein Netzwerk.',
      metaDescription: 'Münchens erster hochschulübergreifender Case Club.',
      footerDescriptor: 'Munich Business Society, der hochschulübergreifende Case Club für jede:n Studierende:n in München. Offen für jede Hochschule der Stadt.'
    },
    nav: [
      { id: 'home', label: 'Start' },
      { id: 'about', label: 'Über Uns' },
      { id: 'calendar', label: 'Termine' },
      { id: 'team', label: 'Team' },
      { id: 'membership', label: 'Mitgliedschaft' },
      { id: 'companies', label: 'Für Unternehmen' },
      { id: 'contact', label: 'Kontakt' }
    ],
    ui: {
      join: 'Bewerben', joinArrow: 'Kostenlos mitmachen →', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen',
      skip: 'Zum Inhalt springen', home: 'Munich Business Society, zur Startseite', langLabel: 'Sprache',
      dialog: { about: 'Über diese Veranstaltung', expect: 'Was dich erwartet', who: 'Für wen ist das?',
        cta: 'Mitglied werden & teilnehmen →', close: 'Dialog schließen' },
      inPrep: 'in Vorbereitung',
      social: [
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/munichbusinesssociety' },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/munichbusinesssociety/' },
        { label: 'Schreib uns', icon: 'mail', href: 'mailto:munichbusinesssociety@gmail.com' }
      ],
      footerCols: [
        { title: 'Society', items: [
          { label: 'Über Uns', to: 'about' }, { label: 'Team', to: 'team' } ] },
        { title: 'Mitmachen', items: [
          { label: 'Mitgliedschaft', to: 'membership' }, { label: 'Events', to: 'calendar' },
          { label: 'Kontakt', to: 'contact' } ] },
        { title: 'Unternehmen', items: [
          { label: 'Für Unternehmen', to: 'companies' } ] },
        { title: 'Rechtliches', items: [
          { label: 'Impressum', to: 'impressum' }, { label: 'Datenschutz', to: 'datenschutz' } ] }
      ],
      newsletter: {
        h: 'Eine E-Mail im Monat. Alles, was in München passiert.',
        body: 'Events, offene Stellen, Partner-Formate und die eine oder andere Gelegenheit, die man uns weiterzugeben gebeten hat. Kein Spam, Abmeldung mit einem Klick.',
        placeholder: 'Deine E-Mail', srEmail: 'Deine E-Mail', btn: 'Halt mich auf dem Laufenden', sending: 'Wird gesendet…',
        done: 'Du bist auf der Liste. Die erste E-Mail kommt Anfang nächsten Monats.',
        err: 'Bitte gib eine gültige E-Mail-Adresse ein.',
        sendError: 'Etwas ist schiefgelaufen. Schreib uns stattdessen direkt an munichbusinesssociety@gmail.com.'
      },
      copyright: '© 2026 Munich Business Society'
    },
    title: { home: 'Münchens erster hochschulübergreifender Case Club', about: 'Über Uns', network: 'Das Netzwerk',
      whatwedo: 'Was wir tun', calendar: 'Termine', membership: 'Mitgliedschaft', companies: 'Für Unternehmen', team: 'Team',
      faq: 'FAQ', join: 'Mitglied werden', contact: 'Kontakt', impressum: 'Impressum', datenschutz: 'Datenschutzerklärung' },

    legal: { impressum: MBS_LEGAL_IMPRESSUM, datenschutz: MBS_LEGAL_DATENSCHUTZ },

    pillars: [
      { icon: 'users', title: 'Netzwerk', tag: 'Triff Menschen, neben denen du sonst nie sitzt.',
        text: 'Dein Studium gibt dir einen Hörsaal. Wir geben dir die ganze Stadt: Studierende von jeder Münchner Hochschule, dazu Alumni und Profis, die schon dort sind, wo du hinwillst.' },
      { icon: 'trending', title: 'Wachstum', tag: 'Lern, was der Seminarraum nicht lehrt.',
        text: 'Case Nights, Company Cases, Skillnights und Führungsrollen im Verein, alles kostenlos. Du übst die Arbeit, bevor sie jemand von dir gegen Gehalt verlangt.' },
      { icon: 'target', title: 'Sichtbarkeit', tag: 'Sei im Raum, in dem du wahrgenommen wirst.',
        text: 'Unternehmensabende, Case-Competitions und Partnerprojekte bringen dich als Mensch vor Recruiter und Gründer, nicht als PDF im Bewerbungsstapel.' }
    ],
    values: [
      { icon: 'users', title: 'Gemeinschaft', text: 'Wir öffnen einander Türen. Kein Gatekeeping, keine Cliquen, kein Preisschild, keine Hochschule über einer anderen.' },
      { icon: 'rocket', title: 'Ambition', text: 'Wir nehmen unsere eigene Entwicklung ernst und erwarten das auch voneinander.' },
      { icon: 'scale', title: 'Ownership', text: 'Du übernimmst, was du dir vornimmst - eine Case Night, ein Projekt, eine Rolle. Niemand rennt dir hinterher, und niemand macht es für dich.' }
    ],
    formats: [
      { icon: 'target', title: 'Case Night', pillar: 'Wachstum', access: 'Offen für alle Studierenden. Kostenlos, alle zwei Wochen.',
        text: 'Team-Case, 90–120 Minuten mit Pitch & Feedback, alle zwei Wochen. Das Herzstück von dem, was wir tun.' },
      { icon: 'trophy', title: 'Case Competition', pillar: 'Wachstum', access: 'Offen für alle Studierenden. Kostenlos, ein- bis zweimal pro Semester.',
        text: 'Mehrstufiger Wettbewerb mit Finale und Jury, ein- bis zweimal pro Semester, für alle, die den Case mit echtem Einsatz wollen.' },
      { icon: 'building', title: 'Company Case', pillar: 'Sichtbarkeit', access: 'Offen für alle Studierenden. Kostenlos.',
        text: 'Ein Partner bringt einen echten Case aus dem eigenen Unternehmen mit und teilt danach den eigenen Lösungsansatz.' },
      { icon: 'mic', title: 'Guest-Speaker', pillar: 'Netzwerk', access: 'Offen für alle Studierenden. Kostenlos.',
        text: 'Ein Impulsvortrag zu einem Wirtschaftsthema oder einer konkreten Skill, mit Zeit für echte Fragen danach.' },
      { icon: 'bolt', title: 'Skillnight', pillar: 'Wachstum', access: 'Offen für alle Studierenden. Kostenlos.',
        text: 'Zwei Stunden zu einer Fähigkeit, die Arbeitgeber voraussetzen: Excel, Valuation, Storytelling, Dinge, die dir kein Seminar beibringt.' },
      { icon: 'users', title: 'Networking-Abende', pillar: 'Netzwerk', access: 'Offen für alle Studierenden. Kostenlos.',
        text: 'Ein Abend, der fürs Kennenlernen über Hochschulen hinweg gemacht ist, kein Pitch, keine Agenda außer gutem Gespräch.' },
      { icon: 'star', title: 'Community-Stammtisch', pillar: 'Gemeinschaft', access: 'Offen für alle Studierenden. Kostenlos, ohne Programm.',
        text: 'Ein offener, regelmäßiger Treffpunkt zwischen den Case Nights. Kein Programm, nur Leute, die immer wieder auftauchen.' },
      { icon: 'trending', title: 'Alumni & Speaker Get-Together', pillar: 'Netzwerk', access: 'Offen für alle Studierenden. Kostenlos.',
        text: 'Kaminabende mit Gästen aus der Praxis und Alumni, die dir ehrlich erzählen, wie der Job wirklich ist.' },
      { icon: 'globe', title: 'Exkursionen & Firmenbesuche', pillar: 'Sichtbarkeit', access: 'Offen für alle Studierenden. Kostenlos, begrenzte Plätze je Besuch.',
        text: 'Ein Besuch im Büro eines Partnerunternehmens. Du siehst, wie der Laden wirklich läuft, nicht nur das Recruiting-Deck.' }
    ],
    events: [],
    universities: MBS_UNIVERSITIES.concat(['Andere Hochschule in München']),

    home: {
      heroLead: 'Die Munich Business Society ist Münchens erste hochschulübergreifende Case- und Wirtschafts-Plattform, 100 % kostenlos, ohne Mitgliedsbeitrag, offen für jede:n Studierende:n der Stadt.',
      seeEvents: 'Zu den Terminen',
      whyLabel: 'Warum es uns gibt', whyTitle: 'München hat über 110.000 Studierende, verteilt auf 33 Hochschulen, und fast keine spricht mit der anderen.',
      whyP1: 'Jede Münchner Hochschule hat starke Leute und ihre eigene Blase. Die meisten Case- und Networking-Clubs sind an eine einzelne Hochschule gebunden: Sie geben Sichtbarkeit auf die Talente der eigenen Uni, aber nicht hochschulübergreifend in einem zentralen Club. Recruiter sehen einen Münchner Talentpool; Studierende treffen immer nur ihre eigene Seminargruppe. Gute Case- und Networking-Angebote gibt es, aber sie kosten meist Geld, filtern früh aus oder decken nur ein einzelnes Themenfeld ab.',
      whyP2: 'Die Munich Business Society schließt genau diese Lücke: eine offene, kostenlose, hochschulübergreifende Plattform mit breitem Fokus auf echte Wirtschaftsprobleme. Wir gehören bewusst keiner einzelnen Hochschule. Egal, in welchem Hörsaal du sitzt, du bekommst denselben Zugang, zu denselben Bedingungen, ohne Kosten.',
      pillarsLabel: 'Was du bekommst', pillarsTitle: 'Was du wirklich davon hast.',
      formatsLabel: 'Was wir tun', formatsTitle: 'Neun Formate, jedes Semester.',
      formatsText: 'Alle zwei Wochen eine Case Night, dazu Case Competitions, Company Cases, Guest-Speaker, Skillnights und die Social-Formate, die die Community zusammenhalten. Alles kostenlos und offen für jede:n Studierende:n in München.',
      formatsLink: 'Zum ganzen Programm →',
      studentH: 'Ab sofort dabei. Einfach auftauchen.', studentText: 'Kostenlos für jede:n Studierende:n an jeder Münchner Hochschule. Komm zur nächsten Case Night oder trag dich für Updates ein. Dauert dreißig Sekunden.',
      companyH: 'Sie stellen in München ein?', companyText: 'Erreichen Sie ambitionierte Business-Studierende über alle 33 Münchner Hochschulen hinweg, über einen Ansprechpartner, statt mit fünf einzelnen Campus-Clubs zu verhandeln.',
      partnerBtn: 'Partner werden →'
    },
    about: {
      subtitle: 'Ein Case Club für ganz München, studentisch geführt, hochschulübergreifend, offen für jeden Campus der Stadt.',
      whoLabel: 'Wer wir sind', whoTitle: 'Ein Case Club für ganz München.',
      whoDesc: 'Die Munich Business Society ist ein studentisch geführter Case Club, der wirtschaftlich interessierte Studierende über jede Münchner Hochschule hinweg verbindet. Gegründet von Studierenden, die immer wieder auf dasselbe Problem stießen: Es gab keinen Case Club, der ganz München statt nur einen Campus abdeckte.',
      storyLabel: 'Unsere Geschichte', storyTitle: 'Wir haben den Verein gebaut, dem wir beitreten wollten.',
      storyP1: 'Die Munich Business Society begann mit drei Studierenden, Nicholas, Martijn und Lennart, und einer einfachen Beobachtung. München hat über 110.000 Studierende, verteilt auf 33 Hochschulen, doch jede Hochschule hat ihre eigenen Initiativen, die nur einzelne Themenfelder abdecken, und fast keine spricht mit der anderen. Gute Case- und Networking-Formate gibt es, aber sie kosten meist Geld oder filtern früh aus.',
      storyP2: 'Also bauten wir das, dem wir beitreten wollten: eine kostenlose, hochschulübergreifende Plattform ohne Heim-Campus. Offen zu identischen Bedingungen für alle in München, die Wirtschaft, Ökonomie, Management studieren, oder etwas völlig anderes und trotzdem in die Wirtschaft gehen.',
      diffLabel: 'Was uns unterscheidet', diffTitle: 'Hochschulübergreifend by design, nicht als Ausnahme.',
      different: [
        { icon: 'globe', title: 'Hochschulübergreifend by design, nicht als Ausnahme', text: 'Die meisten studentischen Business-Clubs sind der Ableger einer Hochschule. Wir sind eine Plattform über allen.' },
        { icon: 'building', title: 'Für die Stadt gebaut, nicht für den Campus', text: 'Unsere Partner, Speaker und Locations kommen aus dem Münchner Wirtschafts-Ökosystem, nicht aus der Alumni-Liste einer Fakultät.' },
        { icon: 'trophy', title: 'Du machst die Arbeit', text: 'Mitglieder leiten Formate, verantworten Projekte und führen Teams. Der schnellste Weg zu einem Lebenslauf, der mehr ist als Kurse.' },
        { icon: 'target', title: 'Offene Tür, echter Anspruch', text: 'Wir sieben nicht nach Hochschule, Note oder Zahlungsfähigkeit. Jedes Format ist kostenlos. Wir erwarten aber, dass du auftauchst und beiträgst.' }
      ],
      valuesLabel: 'Unsere Werte', valuesTitle: 'Wofür wir stehen',
      orgLabel: 'Wie wir organisiert sind', orgTitle: 'Von Studierenden geführt, auf Dauer gebaut.',
      orgP1: 'Die Munich Business Society wird komplett von Studierenden geführt. Am 23. September 2026 haben wir unsere Gründungsversammlung abgehalten, bei der die Mitglieder die Satzung verabschiedet und den Vorstand gewählt haben.',
      orgP2: ' Wir befinden uns aktuell in der Eintragung ins Münchner Vereinsregister, was dem Verein eine dauerhafte rechtliche Grundlage als eingetragener Verein (e.V.) gibt. Satzung und Finanzberichte sind für Mitglieder auf Anfrage einsehbar.',
      orgNote: 'Die Munich Business Society ist bis zum Abschluss der Vereinsregister-Eintragung ein Verein in Gründung. Die Registernummer folgt im Impressum, sobald sie vorliegt.',
      meetTeam: 'Lern das Team kennen →', faqBtn: 'Zur FAQ →'
    },
    calendarPage: {
      subtitle: 'Jede Case Night, Skillnight und jeder Company Evening an einem Ort.',
      calLabel: 'Kalender', calTitle: 'Dieser Monat',
      weekdays: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      prevMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat', noEvents: 'Keine Termine in diesem Monat.',
      label: 'Demnächst', title: 'Was ansteht',
      empty: 'Noch nichts im Kalender. Der Vorstand wurde am 23. September 2026 gewählt, die ersten Termine werden gerade geplant, schau bald wieder vorbei oder trag dich in die Liste ein, um es zuerst zu erfahren.'
    },
    network: {
      subtitle: 'Die Munich Business Society hängt nicht an einer Hochschule. Sie hängt an einer Stadt.',
      introLabel: 'Jeder Campus. Ein Raum.', introTitle: 'Ein Netzwerk ist die Türen wert, die es öffnet.',
      introDesc: 'Die Munich Business Society hängt nicht an einer Hochschule. Sie hängt an einer Stadt. Diese eine Entscheidung verändert, was Mitgliedschaft wert ist, denn der Wert eines Netzwerks ist die Zahl der Türen, die es dir öffnet, die du allein nie geöffnet hättest.',
      whoLabel: 'Wer im Netzwerk ist', whoTitle: 'Vier Gruppen, ein Raum.',
      who: [
        { icon: 'users', title: 'Studierende, von jeder Münchner Hochschule', text: 'Universitäten, Hochschulen für angewandte Wissenschaften, private Schulen. Bachelor, Master, Auslandssemester. Business-Studiengänge und alle anderen, die in die Wirtschaft gehen.' },
        { icon: 'trending', title: 'Alumni und Young Professionals', text: 'Mitglieder, die ihren Abschluss haben, bleiben im Netzwerk, Consulting, Finance, Tech, Industrie, eigene Unternehmen.' },
        { icon: 'building', title: 'Partnerunternehmen', text: 'Arbeitgeber, die in München einstellen, von DAX-Namen bis zu Startups, von denen noch niemand gehört hat.' },
        { icon: 'mic', title: 'Speaker und Mentor:innen', text: 'Gründer, Investorinnen und Macher, die für ein Format kommen und oft in Kontakt bleiben.' }
      ],
      uniLabel: 'Vertretene Hochschulen', uniTitle: 'Alphabetisch gelistet. Nie ein Ranking.',
      uniDesc: 'Die Hochschulen der Mitglieder, als Klartext und von A–Z. Jede andere Reihenfolge läse sich als Hierarchie, und der ganze Punkt ist, dass es keine gibt.',
      uniNote: 'Platzhalter-Liste, durch jede aktuell in der Mitgliedschaft vertretene Hochschule ersetzen. Fehlt die Hochschule eines Mitglieds noch, wäre es das erste.',
      worksLabel: 'Wie das Netzwerk funktioniert', worksTitle: 'Eine Mitgliedschaft, vier Schritte.',
      steps: [
        { n: '1', title: 'Tritt bei, egal wo du studierst', text: 'Eine Anmeldung, eine Mitgliedschaft, keine Campus-Voraussetzung.' },
        { n: '2', title: 'Tauch auf', text: 'Events laufen über das Semester an Orten in der ganzen Stadt, nicht auf einem Campus.' },
        { n: '3', title: 'Bring dich ein', text: 'Übernimm eine Rolle, leite ein Format, steig in ein Projektteam ein. Hier hört das Netzwerk auf, ein Verteiler zu sein.' },
        { n: '4', title: 'Bleib', text: 'Der Abschluss beendet deine Mitgliedschaft nicht. Er bringt dich auf die andere Seite davon.' }
      ],
      repH: 'Sei die erste Munich Business Society-Stimme an deiner Hochschule.',
      repText: 'Jede Münchner Hochschule sollte jemanden im Netzwerk haben, der sie dort sichtbar macht. Campus-Vertreter:innen machen lokale Öffentlichkeitsarbeit, bringen Leute zu Events und sitzen bei der Programmplanung mit. Eine echte Rolle mit echtem Titel, und wir suchen aktiv Leute dafür.',
      repBtn: 'Vertritt deine Hochschule →'
    },
    whatwedo: {
      subtitle: 'Neun Formate. Ein Semester. Ganz München.',
      formatsLabel: 'Die Formate', formatsTitle: 'Netzwerk erweitern, Fähigkeit aufbauen oder auffallen.',
      formatsDesc: 'Jedes Format tut eine von drei Sachen. Alle sind kostenlos und offen für jede:n Studierende:n in München, keine Mitgliederstufe, kein reservierter Platz.',
      projLabel: 'Partnerprojekte', projTitle: 'Manchmal gibt uns ein Unternehmen ein echtes Problem.',
      projText: 'Ein kleines Team aus Mitgliedern arbeitet vier bis sechs Wochen an einer definierten Fragestellung und präsentiert am Ende beim Kunden. Bezahlt oder mit Credits, je nach Partner. Das Näheste an Consulting-Arbeit, das du machen kannst, bevor du dafür eingestellt bist.',
      projLink: 'Unternehmen, Projekt aufsetzen →',
      projCard: 'Vier bis sechs Wochen. Ein kleines Mitgliederteam. Eine definierte Fragestellung und ein dokumentiertes Ergebnis, präsentiert vor der Führung des Partners. Echte Arbeit, bevor dich jemand dafür bezahlt.',
      progLabel: 'Programm', progTitle: 'Demnächst in diesem Semester',
      progEmpty: 'Unser erstes Event kommt bald. Infos folgen in Kürze hier. Trag dich in die Liste ein, dann schreiben wir dir, sobald es feststeht.',
      progNote: '',
      recapLabel: 'Event Einblicke', recapTitle: 'Schau auf Instagram vorbei',
      recapText: 'Wir teilen Highlights und wichtige Erkenntnisse von jedem Event auf unseren Socials. Folge uns, um auf dem Laufenden zu bleiben.'
    },
    membership: {
      subtitle: 'Offen für jede Münchner Hochschule, jedes Fach, jedes Studienniveau.',
      whoLabel: 'Wer beitreten kann', whoTitle: 'Offen für jede Hochschule in München.',
      whoDesc: 'Wenn du in München studierst, kannst du mitmachen, kostenlos. Wir prüfen jede Bewerbung und teilen dir unsere Entscheidung mit. Wir filtern nicht nach Hochschule, nach Notenschnitt oder danach, ob „Business" im Titel deines Studiengangs steht. Talent, Neugier und Auftauchen sind die einzige Voraussetzung.',
      canJoin: [
        'Eingeschrieben an einer Universität oder Hochschule im Raum München.',
        'Jedes Studienniveau, Bachelor, Master, MBA, Auslandssemester, Promotion.',
        'Jedes Fach. Viele unserer Mitglieder studieren etwas anderes als Wirtschaft und gehen trotzdem hinein.',
        'Sicher auf Deutsch oder Englisch. Unsere Events laufen in beiden; die Arbeitssprache ist, was der Raum braucht.'
      ],
      getLabel: 'Was du bekommst', getTitle: 'Alles, was Mitgliedschaft öffnet.',
      get: [
        { icon: 'star', title: 'Zugang zum ganzen Programm', text: 'Jede Case Night, Case Competition, jeden Company Case, Skillnight und Unternehmensbesuch, ab Tag eins.' },
        { icon: 'users', title: 'Ein Netzwerk über jede Münchner Hochschule', text: 'Plus Alumni, die schon in Consulting, Finance, Tech und Industrie arbeiten.' },
        { icon: 'building', title: 'Direkter Kontakt zu Partnerunternehmen', text: 'Inklusive Stellen, die Mitglieder vor der Ausschreibung sehen.' },
        { icon: 'briefcase', title: 'Eine Rolle, wenn du willst', text: 'Werde Case Coach oder Campus Lead, leite ein Format, verantworte eine Partnerschaft. Echte Verantwortung, im Lebenslauf, mit einer Referenz dahinter.' },
        { icon: 'trophy', title: 'Partnerprojekte', text: 'Echte Kundenarbeit mit einem echten Ergebnis.' },
        { icon: 'globe', title: 'Alumni-Status auf Lebenszeit', text: 'Nach dem Abschluss bleibst du im Netzwerk.' }
      ],
      expectLabel: 'Was wir erwarten', expectTitle: 'Tauch auf. Bring dich ein. Verhalte dich gut.',
      expectText: 'Komm zu ein paar Sachen im Semester. Bring irgendwann etwas ein, eine Idee, einen Abend, einen Kontakt, ein Projekt. Behandle die Menschen in diesem Netzwerk so, wie du in fünf Jahren von ihnen behandelt werden willst, wenn eine:r von ihnen einstellt.',
      feeLabel: 'Die Kosten', feeValue: '0 €', feePer: 'immer, für Studierende',
      feeText: 'Die Mitgliedschaft hat noch nie etwas gekostet und wird es nie tun. Wir finanzieren uns über Sponsoren, Partner und Sachleistungen, nicht über die Studierenden, für die es uns gibt.',
      faqLabel: 'Noch unentschlossen?', faqTitle: 'Die Fragen, die Studierende vor dem Mitmachen stellen.',
      faqDesc: 'Kosten, Voraussetzungen, Zeitaufwand, Einstieg mitten im Studium, vollständig beantwortet in der FAQ.',
      faqBtn: 'Zur FAQ →'
    },
    companies: {
      subtitle: 'Erreichen Sie jede Münchner Hochschule in einem Gespräch.',
      whyLabel: 'Warum Partnerschaft mit der Munich Business Society', whyTitle: 'Erreichen Sie jede Münchner Hochschule in einem Gespräch.',
      whyDesc: 'Die meisten Studierenden-Partnerschaften kaufen Ihnen Zugang zu einem Campus. Die Munich Business Society ist hochschulübergreifend gebaut, eine Partnerschaft, ein Ansprechpartner und ein Raum, der Studierende aus allen 33 Münchner Hochschulen zusammenbringt.',
      packBtn: 'Partner-Paket anfordern →', callBtn: 'Termin buchen',
      whyGridLabel: 'Der Mehrwert',
      why: [
        { icon: 'target', title: 'Direkter Zugang zu Top-Talenten', text: 'Lernen Sie engagierte, leistungsstarke Studierende kennen, noch bevor die reguläre Bewerbungssaison beginnt. Eine Case Competition zeigt Ihnen in Echtzeit, wie jemand denkt, präsentiert und im Team arbeitet.' },
        { icon: 'users', title: 'Effiziente Alternative zur Karrieremesse', text: 'Sprechen Sie gezielt Studierende an, die zu Ihrem Bedarf passen, statt einen Stand auf der Jobmesse oder einen Hörsaal-Verteiler zu bespielen.' },
        { icon: 'globe', title: 'Employer Branding mit Substanz', text: 'Workshops, echte Cases und Unternehmenspräsentationen bringen Ihre Marke vor eine selbstselektierte, wirtschaftlich interessierte Zielgruppe, als ernstzunehmender Arbeitgeber, nicht als Logo auf einem Jutebeutel.' }
      ],
      waysLabel: 'Wege der Zusammenarbeit', waysTitle: 'Vier Wege hinein.',
      ways: [
        { icon: 'mic', title: 'Event-Partner', text: 'Sie veranstalten oder co-hosten einen Guest-Speaker-Abend, ein Skillnight oder einen Unternehmensabend. Ihre Leute, unser Raum, unsere Studierenden aus der ganzen Stadt.' },
        { icon: 'trophy', title: 'Case Competition oder Company Case', text: 'Eine echte Fragestellung, Teams aus Studierenden, eine Präsentation vor Ihrer Führung. Sie sehen, wie Menschen denken, bevor Sie sie interviewen.' },
        { icon: 'briefcase', title: 'Partnerprojekt', text: 'Ein definiertes Stück Arbeit über vier bis sechs Wochen mit einem kleinen Mitgliederteam und einem dokumentierten Ergebnis.' },
        { icon: 'star', title: 'Jahrespartnerschaft', text: 'Ein Paket über das akademische Jahr: mehrere Formate, Sichtbarkeit auf der Website und im Newsletter, direkter Zugang zur Mitgliedschaft für Stellen.' }
      ],
      partnersLabel: 'Unsere Partner', partnersTitle: 'Unternehmen, mit denen wir arbeiten',
      partnersDesc: 'Werde jetzt unser erster Partner.',
      partnersBtn: 'Kontakt aufnehmen →',
      closeH: 'Melden Sie sich.',
      closeText: 'Einer der oben genannten Gründe, oder Sie haben eines unserer Wirtschaftstalente kennengelernt und möchten es direkt einstellen. Schreiben Sie an munichbusinesssociety@gmail.com oder buchen Sie einen Termin, wir melden uns innerhalb einer Woche.',
      emailBtn: 'Partnerschaftsteam schreiben →'
    },
    team: {
      subtitle: 'Komplett von Studierenden gebaut und geführt, neben dem Studium.',
      whoTitle: 'Wer die Munich Business Society führt',
      whoDesc: 'Die Munich Business Society wird komplett von Studierenden neben dem Studium gebaut und geführt. Der Vorstand wird von der Mitgliedschaft gewählt; jede andere Rolle steht Mitgliedern offen, die sie wollen.',
      boardTitle: 'Der Vorstand',
      board: [
        { name: 'Nicholas Porter', role: '1. Vorsitzender', initials: 'NP', description: 'Studierendenangelegenheiten, Hochschulbeziehungen, Bildung und Administration.', photoSrc: '/assets/team-nicholas-porter.png', photoStyle: { objectPosition: 'center 45%' } },
        { name: 'Martijn Mooren', role: '2. Vorsitzender', initials: 'MM', description: 'Marketing, Events, Mitgliederverwaltung und Recruiting.', photoSrc: '/assets/team-martijn-mooren.jpg' },
        { name: 'Lennart Neumeier', role: 'Schatzmeister', initials: 'LN', description: 'Finanzen, Rechtliches, Sponsoring und Unternehmensbeziehungen.', photoSrc: '/assets/team-lennart-neumeier.jpg' }
      ],
      teamsLabel: 'Teams', teamsTitle: 'Fünf Teams, ein Verein.',
      teams: [
        { icon: 'star', title: 'Programm', text: 'Plant und veranstaltet die Formate des Semesters.' },
        { icon: 'briefcase', title: 'Partnerschaften', text: 'Verantwortet Unternehmensbeziehungen und die Partner-Pipeline.' },
        { icon: 'users', title: 'Community', text: 'Mitgliedschaft, Onboarding, Socials, Campus-Vertretungen.' },
        { icon: 'globe', title: 'Brand & Kommunikation', text: 'Website, Social-Kanäle, Newsletter, Design.' },
        { icon: 'building', title: 'Operations', text: 'Finanzen, Recht, Tools, alles Unglamouröse, das den Rest am Laufen hält.' }
      ],
      faqText: 'Fragen zum Vorstand, den Teams oder wie du mitmachen kannst?',
      faqBtn: 'Zur FAQ →'
    },
    faq: {
      subtitle: 'Die Fragen, die Studierende vor dem Mitmachen stellen.',
      label: 'FAQ', title: 'Bevor du auftauchst',
      items: [
        { q: 'Zu welcher Hochschule gehört die Munich Business Society?', a: 'Zu keiner, bewusst. Die Munich Business Society ist ein hochschulübergreifender Verein. Studierende jeder Münchner Hochschule treten zu identischen Bedingungen bei. Wir sind keine Fakultätsinitiative, und keine einzelne Schule besitzt uns.' },
        { q: 'Ich studiere nicht Wirtschaft. Kann ich trotzdem beitreten?', a: 'Ja. Viele unserer Mitglieder studieren Ingenieurwesen, Jura, Informatik oder etwas ganz anderes und gehen trotzdem in die Wirtschaft. Wichtig ist, dass du es ernst meinst.' },
        { q: 'Ist alles auf Deutsch oder Englisch?', a: 'Beides. Events laufen in der Sprache, die zum Raum und zur:zum Speaker:in passt; schriftliche Kommunikation ist auf Englisch, damit niemand außen vor bleibt.' },
        { q: 'Wie viel Zeit kostet es?', a: 'So viel, wie du gibst. Das Minimum ist, zu ein paar Events im Semester zu kommen. Mitglieder mit einer Rolle wenden meist zwei bis vier Stunden pro Woche auf.' },
        { q: 'Was kostet es?', a: 'Nichts. Die Mitgliedschaft ist zu 100 % kostenlos. Wir prüfen jede Bewerbung und teilen dir unsere Entscheidung mit. Wir finanzieren uns über Sponsoren und Partner, nicht über die Studierenden.' },
        { q: 'Ich bin für ein Auslandssemester hier. Lohnt sich der Beitritt?', a: 'Ja, und wir würden dich ermutigen. Es gibt keinen Beitrag, auf den du warten musst, und das Netzwerk endet nicht, wenn du die Stadt verlässt.' },
        { q: 'Muss ich im ersten Semester sein?', a: 'Nein. Wir haben Bachelor-Studierende im ersten Semester und Master-Studierende, die ihre Thesis abschließen. Genau diese Mischung ist der Punkt.' },
        { q: 'Kann ich zu etwas kommen, bevor ich beitrete?', a: 'Es gibt kein „Vorher". Komm einfach vorbei. Case Nights und die meisten anderen Formate sind offen für alle Studierenden in München.' },
        { q: 'Was ist der Unterschied zwischen Mitglied und Alumnus?', a: 'Alumni behalten Zugang zum Netzwerk, den Alumni-Events und dem Verteiler, nur ohne die Erwartung, aufzutauchen oder eine Rolle zu übernehmen.' },
        { q: 'Wie werden Unternehmen Teil davon?', a: 'Über die Seite „Für Unternehmen". Wir arbeiten mit Arbeitgebern an Events, Case-Challenges und Projekten, und teilen ihre Stellen mit Mitgliedern.' }
      ],
      stillText: 'Noch am Abwägen? Komm zu einem offenen Event, bevor du entscheidest.',
      joinBtn: 'Auf die Liste →', seeBtn: 'Zu den Terminen'
    },
    join: {
      subtitle: 'Kostenlos. Wir prüfen jede Bewerbung und du erhältst unsere Entscheidung innerhalb weniger Tage.',
      required: { firstname: 'Bitte gib deinen Vornamen an.', lastname: 'Bitte gib deinen Nachnamen an.',
        email: 'Bitte gib deine E-Mail-Adresse an.', university: 'Bitte wähle deine Hochschule.',
        level: 'Bitte wähle dein Studienniveau.', studyprogram: 'Bitte wähle deinen Studiengang.',
        language: 'Bitte wähle deine bevorzugte Sprache.', motivation: 'Sag uns in ein, zwei Zeilen, was du suchst.' },
      errEmail: 'Diese E-Mail-Adresse sieht nicht vollständig aus. Bitte prüf sie.',
      errConsent: 'Bitte stimme der Verarbeitung deiner Daten zu, damit wir uns melden können.',
      errOne: 'Ein Feld braucht noch deine Aufmerksamkeit.', errMany: 'Felder brauchen noch deine Aufmerksamkeit.',
      submitting: 'Wird gesendet…',
      sendError: 'Beim Senden ist etwas schiefgelaufen. Schreib uns stattdessen direkt an munichbusinesssociety@gmail.com.',
      f: { firstname: 'Vorname', lastname: 'Nachname', email: 'E-Mail-Adresse', university: 'Hochschule', level: 'Studienniveau',
        studyprogram: 'Studiengang', language: 'Bevorzugte Sprache', motivation: 'Was erhoffst du dir von der Munich Business Society?',
        interests: 'Fachliche Interessen, die du gerne im Club sehen würdest', cv: 'Lebenslauf', enrollment: 'Immatrikulationsbescheinigung' },
      ph: { firstname: 'Dein Vorname', lastname: 'Dein Nachname', email: 'du@beispiel.de',
        university: 'Hochschule wählen', level: 'Niveau wählen',
        studyprogram: 'Studiengang wählen', language: 'Sprache wählen',
        motivation: 'Ein, zwei Zeilen, Case Nights, eine Rolle, einfach neugierig…',
        interests: 'z. B. Consulting, Finance, Marketing, HR, M&A …' },
      help: { cv: 'Optional, PDF oder Word, ein bis zwei Seiten.',
        enrollment: 'Optional, damit wir bestätigen können, dass du aktuell eingeschrieben bist.' },
      levels: ['Bachelor', 'Master', 'Auslandssemester', 'Urlaubssemester', 'Sonstiges'],
      studyPrograms: ['Betriebswirtschaftslehre (BWL)', 'International Business', 'Wirtschaftsinformatik',
        'Wirtschaftsingenieurwesen', 'Volkswirtschaftslehre (VWL)', 'Wirtschaftsrecht', 'Finance & Accounting',
        'Wirtschaftspsychologie', 'Management', 'Marketing', 'Anderer Studiengang'],
      languages: ['Deutsch', 'Englisch', 'Beide / keine Präferenz'],
      note: 'Wir prüfen jede Bewerbung und du erhältst unsere Entscheidung innerhalb weniger Tage. Schreib oben dazu, wenn du eine Rolle wie Case Coach oder Campus Lead willst. Wir melden uns dazu separat.',
      consent: 'Ich habe die ', consentLink: 'Datenschutzerklärung', consentEnd: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
      submit: 'Eintragen →',
      successTitle: 'Deine Bewerbung ist eingegangen.',
      successA: 'Wir prüfen sie und du erhältst unsere Entscheidung innerhalb weniger Tage. Komm in der Zwischenzeit gern direkt zum nächsten offenen Event: ', successC: '.',
      another: 'Weitere Adresse eintragen'
    },
    contact: {
      subtitle: 'Frag uns alles, Studierende:r, Unternehmen oder einfach neugierig.',
      label: 'Frag uns alles', title: 'Frag uns alles.',
      descA: 'Ob du Studierende:r bist und über einen Beitritt nachdenkst, ein Unternehmen, das über eine Partnerschaft nachdenkt, oder jemand mit einer Idee für ein Format. Schreib uns. Wir melden uns so schnell wie möglich.',
      routes: [
        { icon: 'users', label: 'Studierende & Mitgliedschaft', addr: 'munichbusinesssociety@gmail.com' },
        { icon: 'briefcase', label: 'Unternehmen & Partnerschaften', addr: 'munichbusinesssociety@gmail.com' },
        { icon: 'mail', label: 'Presse & alles andere', addr: 'munichbusinesssociety@gmail.com' }
      ],
      formLabel: 'Nachricht senden', formTitle: 'Direkt an die richtige Person.',
      formText: 'Sag uns, wer du bist und was du suchst. Das Formular leitet deine Nachricht an das Team, das wirklich helfen kann.',
      findLabel: 'Wo du uns findest', findText: 'Wir treffen uns in ganz München statt auf einem Campus. Locations stehen bei jedem Event.',
      follow: 'Folgen: ', followPh: 'LinkedIn · Instagram [Handles]',
      f: { firstname: 'Vorname', lastname: 'Nachname', email: 'E-Mail', role: 'Ich bin…', message: 'Deine Nachricht' },
      ph: { firstname: 'Dein Vorname', lastname: 'Dein Nachname', email: 'du@beispiel.de', message: 'Was beschäftigt dich?' },
      roles: [ { v: 'student', label: 'Studierende:r' }, { v: 'company', label: 'Unternehmen' }, { v: 'other', label: 'Sonstiges' } ],
      send: 'Absenden →', direct: 'Oder schreib uns direkt an munichbusinesssociety@gmail.com.',
      errFirstname: 'Bitte gib deinen Vornamen an.', errLastname: 'Bitte gib deinen Nachnamen an.', errEmail: 'Diese E-Mail-Adresse sieht nicht vollständig aus. Bitte prüf sie.', errMsg: 'Bitte gib eine Nachricht ein.',
      sending: 'Wird gesendet…',
      sendError: 'Beim Senden ist etwas schiefgelaufen. Schreib uns stattdessen direkt an munichbusinesssociety@gmail.com.',
      sentTitle: 'Nachricht gesendet.', sentA: 'Wir melden uns so schnell wie möglich.',
      faqText: 'Bevor du schreibst, vielleicht ist deine Frage schon beantwortet.', faqBtn: 'Zur FAQ →'
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
  } catch (e) { /* storage blocked (private mode / file://), fall through */ }
  return window.MBS_LANG_DEFAULT;
};
window.MBS_SET_LANG = function (lang) {
  try { window.localStorage.setItem('mbs-lang', lang); } catch (e) { /* ignore */ }
};

/* Form backend (Join, Contact, Newsletter — see worker/README.md). Points at
   a local Worker when the site itself is being served from localhost (see
   worker/README.md's "Local development"), and at the deployed Worker
   otherwise. */
window.MBS_API_ENDPOINT = (function () {
  var host = window.location.hostname;
  var isLocal = host === 'localhost' || host === '127.0.0.1';
  return isLocal
    ? 'http://localhost:8787/submit'
    : 'https://mbs-website.nicrporter.workers.dev/submit';
})();

/* Shared submit helper for all three forms. Appends the bookkeeping fields
   the Worker expects (form type, current language, and whatever honeypot/
   timestamp fields that form's own JSX already put in `formData`), posts as
   multipart/form-data (do NOT set a Content-Type header — the browser sets
   the multipart boundary itself), and resolves to a plain {ok, error?,
   errors?} shape every form's onSubmit can branch on the same way. Never
   rejects: a network failure or timeout resolves to {ok:false} rather than
   throwing, so callers only need a .then(). */
window.MBS_SUBMIT_FORM = function (formData, formType) {
  formData.set('formType', formType);
  formData.set('mbs_lang', window.MBS_GET_LANG());

  var hasAbort = typeof AbortController !== 'undefined';
  var controller = hasAbort ? new AbortController() : null;
  var timeoutId = controller ? setTimeout(function () { controller.abort(); }, 15000) : null;

  return fetch(window.MBS_API_ENDPOINT, {
    method: 'POST',
    body: formData,
    signal: controller ? controller.signal : undefined
  }).then(function (res) {
    if (timeoutId) clearTimeout(timeoutId);
    return res.json().catch(function () { return {}; }).then(function (data) {
      if (res.ok && data && data.ok) return { ok: true };
      return { ok: false, error: (data && data.error) || 'server_error', errors: data && data.errors };
    });
  }).catch(function (err) {
    if (timeoutId) clearTimeout(timeoutId);
    return { ok: false, error: (err && err.name === 'AbortError') ? 'timeout' : 'network_error' };
  });
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
  } catch (e) { /* no matchMedia, leave motion off rather than risk a flash */ }
})();
