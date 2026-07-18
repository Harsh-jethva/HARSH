import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Braces,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Globe2,
  GraduationCap,
  HardDrive,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  MoveUpRight,
  Network,
  Play,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

// Brand marks are intentionally represented with supported Lucide symbols so the
// page remains compatible with the installed icon package version.
const Github = Code2;
const Linkedin = Network;
const Instagram = Sparkles;

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#work'],
  ['Contact', '#contact'],
];

const skills = [
  { name: 'Frontend', icon: Braces, tags: ['React', 'Next.js', 'TypeScript'] },
  { name: 'Backend', icon: Server, tags: ['Node.js', 'Express', 'REST APIs'] },
  { name: 'Cybersecurity', icon: ShieldCheck, tags: ['Threat analysis', 'OWASP', 'Kali Linux'], featured: true },
  { name: 'Programming', icon: Code2, tags: ['Python', 'JavaScript', 'C++'] },
  { name: 'Database', icon: Database, tags: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { name: 'Tools', icon: Terminal, tags: ['Git', 'Docker', 'Burp Suite'] },
  { name: 'Cloud', icon: Cloud, tags: ['AWS', 'Vercel', 'CI / CD'] },
  { name: 'Operating systems', icon: MonitorCog, tags: ['Linux', 'Windows', 'Bash'] },
];

const projects = [
  {
    number: '01',
    title: 'Kavach',
    eyebrow: 'Security operations / 2024',
    description: 'A focused security dashboard that turns scattered signals into calm, actionable visibility for small teams.',
    tags: ['Next.js', 'Python', 'PostgreSQL'],
    kind: 'SECURITY',
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'Network Sniffer',
    eyebrow: 'Packet intelligence / 2023',
    description: 'A lightweight packet analysis tool for inspecting traffic, spotting anomalies, and learning from the wire.',
    tags: ['Python', 'Scapy', 'Linux'],
    kind: 'PACKET / 04',
    accent: 'white',
  },
  {
    number: '03',
    title: 'Phishing Awareness',
    eyebrow: 'Human layer / 2023',
    description: 'An interactive learning platform helping teams recognize social engineering before it becomes an incident.',
    tags: ['React', 'Node.js', 'Figma'],
    kind: 'LEARN / 07',
    accent: 'lavender',
  },
  {
    number: '04',
    title: 'Code Review Tool',
    eyebrow: 'Developer tooling / 2022',
    description: 'A quiet, opinionated review companion that makes quality and security feedback easier to act on.',
    tags: ['TypeScript', 'OpenAI', 'GitHub'],
    kind: 'PULL / 18',
    accent: 'lime',
  },
];

const timeline = [
  { date: '2024 — Present', title: 'IT Engineer · Independent', meta: 'Remote / Ahmedabad', body: 'Building dependable software, tightening systems, and exploring the overlap between product craft and security.' },
  { date: '2022 — 2024', title: 'Full Stack Developer · Freelance', meta: 'Selected client work', body: 'Shipped responsive web products and internal tools from first sketch to production handoff.' },
  { date: '2021 — 2024', title: 'B.Tech · Computer Engineering', meta: 'Gujarat Technological University', body: 'Focused on networks, operating systems, application development, and the fundamentals behind secure systems.' },
];

const certifications = [
  { code: 'CCNA', title: 'Cisco Certified Network Associate', issuer: 'Cisco', year: '2024' },
  { code: 'CEH', title: 'Certified Ethical Hacking — Foundations', issuer: 'EC-Council', year: '2023' },
  { code: 'AWS', title: 'Cloud Practitioner Essentials', issuer: 'Amazon Web Services', year: '2023' },
];

const stats = [
  { value: 14, suffix: '+', label: 'Projects shipped' },
  { value: 3, suffix: ' yrs', label: 'Building systems' },
  { value: 8, suffix: '', label: 'Core disciplines' },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Harsh Jethva home">
      <span className="logo-mark">HJ</span>
      <span className="logo-copy">harsh<br /><em>jethva</em></span>
    </a>
  );
}

function MagneticButton({ children, className = '', href, onClick, download }) {
  const ref = useRef(null);
  const handleMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left - box.width / 2) * 0.12;
    const y = (event.clientY - box.top - box.height / 2) * 0.12;
    node.style.setProperty('--mx', `${x}px`);
    node.style.setProperty('--my', `${y}px`);
  };
  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty('--mx', '0px');
    ref.current.style.setProperty('--my', '0px');
  };
  const props = { ref, className: `button ${className}`, onMouseMove: handleMove, onMouseLeave: handleLeave, onClick };
  return href ? <a {...props} href={href} download={download}>{children}</a> : <button {...props}>{children}</button>;
}

function TechChip({ label, icon: Icon, className = '' }) {
  return <span className={`tech-chip ${className}`}><Icon size={13} strokeWidth={1.8} />{label}</span>;
}

function AvatarIllustration() {
  return (
    <div className="avatar-stage" aria-label="Black and white illustration of a developer working at a laptop" role="img">
      <div className="avatar-orbit orbit-one" />
      <div className="avatar-orbit orbit-two" />
      <div className="avatar-tag tag-react"><Braces size={15} /> /react</div>
      <div className="avatar-tag tag-python"><span className="python-mark">●</span> python</div>
      <div className="avatar-tag tag-linux"><Terminal size={14} /> linux</div>
      <div className="avatar-tag tag-shield"><ShieldCheck size={15} /> secure</div>
      <div className="avatar-figure">
        <svg viewBox="0 0 560 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M89 456C112 405 172 378 271 379C376 379 441 408 478 456" stroke="currentColor" strokeWidth="2" />
          <path d="M147 458H441" stroke="currentColor" strokeWidth="3" />
          <path d="M188 458L176 497M410 458L425 497" stroke="currentColor" strokeWidth="2" />
          <path d="M181 497H431" stroke="currentColor" strokeWidth="3" />
          <path d="M232 296C238 264 251 245 275 235C304 222 339 235 354 263C367 288 358 322 346 344L314 385H251L216 347C205 332 207 310 216 298" fill="#0A0A0A" stroke="currentColor" strokeWidth="3" />
          <path d="M222 270C218 238 233 197 279 188C323 178 361 203 361 247C358 276 347 294 330 302C316 286 313 262 291 248C273 237 246 245 222 270Z" fill="#F4F4F1" stroke="currentColor" strokeWidth="3" />
          <path d="M223 270C229 285 239 297 254 302M332 301C345 292 355 279 361 257" stroke="currentColor" strokeWidth="2" />
          <path d="M247 273C255 276 263 276 271 271M309 270C317 274 325 274 333 269" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M275 293C285 298 296 298 304 292" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M239 312C256 329 319 333 339 308L346 367C326 385 254 386 216 357L215 316" fill="#F4F4F1" stroke="currentColor" strokeWidth="3" />
          <path d="M238 317L193 353L153 383M338 319L389 348L420 383" stroke="currentColor" strokeWidth="19" strokeLinecap="round" />
          <path d="M193 353L153 383M389 348L420 383" stroke="#F4F4F1" strokeWidth="13" strokeLinecap="round" />
          <path d="M244 368L231 425M333 368L350 426" stroke="currentColor" strokeWidth="21" strokeLinecap="round" />
          <path d="M232 425L194 456M350 426L405 456" stroke="currentColor" strokeWidth="21" strokeLinecap="round" />
          <path d="M226 217C236 168 292 152 336 179C354 190 363 204 366 219C344 211 331 202 315 189C302 217 267 236 226 217Z" fill="currentColor" />
          <path d="M385 388L465 408L458 462L379 441L385 388Z" fill="#111111" stroke="currentColor" strokeWidth="3" />
          <path d="M395 397L453 412L448 446L390 431L395 397Z" fill="#D7D7D3" stroke="currentColor" strokeWidth="2" />
          <path d="M408 414L432 420M404 422L424 427" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
          <path d="M456 462L471 471" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="469" cy="472" r="4" fill="currentColor" />
          <path d="M102 418C119 406 130 396 142 382M438 379C451 384 467 394 480 407" stroke="currentColor" strokeWidth="2" strokeDasharray="4 7" />
        </svg>
      </div>
      <div className="avatar-caption"><span>01</span><span>SECURITY<br />MINDSET</span><span className="caption-line" /></div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, description, index }) {
  return (
    <div className="section-intro reveal">
      <div className="section-label"><span>{index}</span>{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual visual-${project.accent}`}>
      <div className="visual-topline"><span>HJ / LABS</span><span>{project.number}</span></div>
      <div className="visual-grid" />
      {project.accent === 'cyan' && <>
        <div className="radar"><span /><span /><span /></div>
        <div className="radar-sweep" />
        <div className="visual-code">STATUS: <b>MONITORED</b><br />UPTIME: 99.9%<br />THREATS: 00</div>
      </>}
      {project.accent === 'white' && <>
        <div className="packet-lines"><i /><i /><i /><i /><i /></div>
        <div className="visual-terminal"><span>root@sniffer:~$</span><br /><b>tcpdump -i eth0</b><br /><em>listening...</em></div>
      </>}
      {project.accent === 'lavender' && <>
        <div className="phish-card"><LockKeyhole size={20} /><span>is this safe?</span><strong>VERIFY</strong></div>
        <div className="visual-rings"><span /><span /><span /></div>
      </>}
      {project.accent === 'lime' && <>
        <div className="code-window"><span className="window-dots">● ● ●</span><code><i>if</i> (review.ready) {'{'}<br />  merge(<b>secure</b>);<br />{'}'}</code></div>
        <div className="merge-badge"><Check size={14} /> READY TO MERGE</div>
      </>}
      <div className="visual-corner">{project.kind}</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('top');
  const [formSent, setFormSent] = useState(false);
  const cursorRef = useRef(null);

  const filterOptions = ['All', 'Security', 'Full stack'];
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Security') return projects.filter((p) => ['Kavach', 'Network Sniffer', 'Phishing Awareness'].includes(p.title));
    if (activeFilter === 'Full stack') return projects.filter((p) => ['Kavach', 'Phishing Awareness', 'Code Review Tool'].includes(p.title));
    return projects;
  }, [activeFilter]);

  useEffect(() => {
    const onPointerMove = (event) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.13 });
    reveals.forEach((element) => observer.observe(element));

    const sections = ['top', 'about', 'skills', 'work', 'experience', 'contact'].map((id) => document.getElementById(id)).filter(Boolean);
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
    return () => { observer.disconnect(); sectionObserver.disconnect(); };
  }, []);

  const downloadResume = () => {
    const resume = `HARSH JETHVA\nIT ENGINEER / CYBERSECURITY ENTHUSIAST\n\nSecurity-minded engineer building resilient digital experiences.\n\nFOCUS\nFull stack development · Network security · Cloud foundations\n\nCONTACT\nhello@harshjethva.dev · linkedin.com/in/harshjethva · Ahmedabad, India`;
    const blob = new Blob([resume], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = 'harsh-jethva-resume.txt'; link.click();
    URL.revokeObjectURL(url);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <div ref={cursorRef} className="cursor-glow" />
      <div className="noise" />
      <header className="site-header">
        <Logo />
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
          {navItems.map(([label, href], index) => <a key={label} href={href} onClick={closeMenu} className={activeSection === href.slice(1) ? 'active' : ''}><span>0{index + 1}</span>{label}</a>)}
        </nav>
        <div className="header-right">
          <span className="availability"><i /> Open to work</span>
          <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="top">
          <div className="hero-content">
            <div className="hero-kicker page-load"><span className="kicker-line" /> Portfolio / 2024–25 <span className="kicker-dot">●</span> Ahmedabad, IN</div>
            <div className="hero-heading page-load-delay">
              <p className="hello">HELLO, I’M</p>
              <h1>Harsh<br /><span>Jethva</span><b>.</b></h1>
              <div className="role-lockup"><span>IT ENGINEER</span><span>CYBERSECURITY ENTHUSIAST</span><span>FULL STACK DEVELOPER</span></div>
            </div>
            <p className="hero-description page-load-delay-two">I build secure, thoughtful digital systems where clean interfaces meet a curious security mindset.</p>
            <div className="hero-actions page-load-delay-two">
              <MagneticButton href="#work" className="button-solid">View projects <ArrowDownRight size={16} /></MagneticButton>
              <MagneticButton className="button-ghost" onClick={downloadResume}>Download resume <Download size={15} /></MagneticButton>
            </div>
            <div className="hero-meta page-load-delay-two"><span>SCROLL TO EXPLORE</span><span className="scroll-arrow"><ArrowDownRight size={16} /></span></div>
          </div>
          <div className="hero-visual page-load-delay"><AvatarIllustration /></div>
          <div className="hero-bottom-line"><span>SELECTED WORK / 04</span><span>SCROLL ↓</span></div>
        </section>

        <section className="marquee-strip" aria-label="Areas of focus">
          <div className="marquee-track"><span>SECURITY BY DESIGN</span><i>✳</i><span>BUILT TO BE USEFUL</span><i>✳</i><span>CURIOUS BY DEFAULT</span><i>✳</i><span>SECURITY BY DESIGN</span><i>✳</i><span>BUILT TO BE USEFUL</span><i>✳</i></div>
        </section>

        <section className="about section-wrap" id="about">
          <SectionIntro index="01" eyebrow="About me" title={<>The person<br /><em>behind the build.</em></>} description="A little context, before we get technical." />
          <div className="about-grid">
            <div className="about-lead reveal"><p className="large-copy">I’m an IT Engineer who likes to understand how things work — then make them work better.</p><p>My work lives at the intersection of product engineering and practical security. I enjoy the moment a messy problem becomes a clear system, a safe default, or a simple interface.</p><a href="#contact" className="text-link">Start a conversation <ArrowUpRight size={15} /></a></div>
            <div className="about-details reveal"><div className="detail-item"><span>Currently</span><strong>Engineering secure<br />digital experiences</strong></div><div className="detail-item"><span>Based in</span><strong>Ahmedabad, India<br /><small>Available worldwide</small></strong></div><div className="detail-item"><span>Education</span><strong>B.Tech, Computer<br />Engineering <small>2024</small></strong></div></div>
            <div className="about-index">HJ / 01<span className="vertical-rule" /></div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionIntro index="02" eyebrow="Capabilities" title={<>A broad toolkit.<br /><em>One clear focus.</em></>} description="The technologies I use to turn ideas into dependable, well-made software." />
          <div className="skills-grid reveal">{skills.map(({ name, icon: Icon, tags, featured }) => <article key={name} className={`skill-card ${featured ? 'featured' : ''}`}><div className="skill-head"><div className="skill-icon"><Icon size={20} strokeWidth={1.5} /></div><span>0{skills.findIndex((skill) => skill.name === name) + 1}</span></div><h3>{name}</h3><div className="skill-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ArrowUpRight className="card-arrow" size={17} /></article>)}</div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="work-heading"><SectionIntro index="03" eyebrow="Selected work" title={<>Built with intent.<br /><em>Shipped with care.</em></>} description="A few projects from the lab — each one a chance to learn, simplify, and make something useful." /><div className="work-filter" role="group" aria-label="Filter projects">{filterOptions.map((filter) => <button className={activeFilter === filter ? 'selected' : ''} onClick={() => setActiveFilter(filter)} key={filter}>{filter}<span>{filter === 'All' ? '04' : filter === 'Security' ? '03' : '03'}</span></button>)}</div></div>
          <div className="projects-grid">{filteredProjects.map((project) => <article className="project-card reveal" key={project.title}><ProjectVisual project={project} /><div className="project-info"><div><span className="project-eyebrow">{project.eyebrow}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="project-bottom"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={16} /></a><a href="#contact" aria-label={`${project.title} live demo`}><ExternalLink size={16} /></a></div></div></div></article>)}</div>
          <div className="work-footer reveal"><span>MORE EXPERIMENTS IN THE WORKS</span><a className="text-link" href="https://github.com" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="experience section-wrap" id="experience">
          <SectionIntro index="04" eyebrow="Experience & education" title={<>Learning in<br /><em>public.</em></>} description="Every project, role, and rabbit hole adds another useful layer." />
          <div className="timeline reveal">{timeline.map((item, index) => <div className="timeline-item" key={item.title}><div className="timeline-marker"><span>0{index + 1}</span><i /></div><div className="timeline-copy"><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><span className="timeline-meta">{item.meta}</span><p>{item.body}</p></div><ArrowUpRight className="timeline-arrow" size={18} /></div>)}</div>
        </section>

        <section className="certifications section-wrap">
          <div className="cert-heading"><div className="section-label"><span>05</span>Certifications</div><p>Foundations that keep the<br />curiosity grounded.</p></div>
          <div className="cert-grid">{certifications.map((cert) => <article className="cert-card reveal" key={cert.code}><div className="cert-icon"><Award size={17} /></div><span className="cert-code">{cert.code}</span><h3>{cert.title}</h3><div className="cert-meta"><span>{cert.issuer}</span><span>{cert.year}</span></div></article>)}</div>
        </section>

        <section className="github section-wrap">
          <div className="github-top reveal"><div><div className="section-label"><span>06</span>Open source / GitHub</div><h2>Proof of <em>practice.</em></h2></div><a href="https://github.com" target="_blank" rel="noreferrer" className="icon-link">github.com/harshjethva <ArrowUpRight size={16} /></a></div>
          <div className="github-panel reveal"><div className="github-panel-top"><span><Github size={16} /> Contribution activity</span><span>Last 12 months <ChevronDown size={14} /></span></div><div className="contribution-map" aria-label="GitHub contribution activity graph">{Array.from({ length: 78 }, (_, index) => <i key={index} className={`level-${(index * 7 + index % 5) % 5}`} />)}</div><div className="map-legend"><span>Less</span>{[0, 1, 2, 3, 4].map((level) => <i className={`level-${level}`} key={level} />)}<span>More</span></div><div className="github-repos"><div className="repo-card"><div className="repo-title"><span className="repo-dot" />kavach<span className="repo-public">Public</span></div><p>Security dashboard for calmer operations.</p><div><span>TypeScript</span><span>★ 12</span></div></div><div className="repo-card"><div className="repo-title"><span className="repo-dot white" />packet-lens<span className="repo-public">Public</span></div><p>Small tools for understanding the wire.</p><div><span>Python</span><span>⑂ 4</span></div></div><div className="github-note"><Sparkles size={16} /><span>Building in the open,<br />one useful commit at a time.</span></div></div></div>
        </section>

        <section className="achievements section-wrap">
          <div className="achievements-head reveal"><div className="section-label"><span>07</span>By the numbers</div><p>Small data points.<br />Real momentum.</p></div>
          <div className="stats-grid">{stats.map((stat) => <div className="stat reveal" key={stat.label}><strong>{stat.value}<sup>{stat.suffix}</sup></strong><span>{stat.label}</span></div>)}</div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel reveal"><div className="contact-main"><div className="section-label"><span>08</span>Contact</div><h2>Have a good<br /><em>problem?</em></h2><p>I’m always up for thoughtful work, interesting systems, and conversations about making the internet a little more resilient.</p><a className="contact-email" href="mailto:hello@harshjethva.dev">hello@harshjethva.dev <ArrowUpRight size={17} /></a></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Email address<input required type="email" name="email" placeholder="jane@company.com" /></label><label>What are you working on?<textarea required name="message" placeholder="A short note is perfect." rows="3" /></label><MagneticButton className="button-solid" type="submit">{formSent ? <>Message noted <Check size={16} /></> : <>Send message <Send size={15} /> </>}</MagneticButton><span className="form-note">Usually replies within 1–2 working days.</span></form></div>
          <div className="contact-details reveal"><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a><span><MapPin size={16} /> Ahmedabad, India</span></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><Logo /><div className="footer-center"><span>DESIGNED / BUILT BY HARSH JETHVA</span><span>© 2024–25</span></div><div className="footer-links"><a href="#top">Back to top <ArrowUpRight size={14} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15} /></a></div></footer>
    </div>
  );
}

// Keep the portfolio shell self-contained so it can be deployed from any static host.
import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(<App />);
