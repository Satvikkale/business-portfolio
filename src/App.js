import {useEffect, useState} from "react";
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {projects} from "./data/projects";
import {services} from "./data/services";
import {skillGroups} from "./data/skills";
import "./App.css";

const navItems = [
  "about",
  "experience",
  "skills",
  "projects",
  "education",
  "contact",
];
const socialLinks = {linkedin: "", github: ""};
const Github = GitBranch;
const Linkedin = Link2;

function SectionIntro({eyebrow, title, children}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "",
    budget: "",
    details: "",
  });
  const [formMessage, setFormMessage] = useState("");
  useEffect(() => {
    const revealItems = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      {threshold: 0.14},
    );
    revealItems.forEach((item) => observer.observe(item));
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({behavior: "smooth"});
    setMenuOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const {name, email, type, details} = formState;
    if (!name || !email || !type || !details) {
      setFormMessage("Please complete the required fields before sending.");
      return;
    }
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${type}\nBudget: ${formState.budget || "Not specified"}\n\n${details}`,
    );
    window.location.href = `mailto:satvikkale07@gmail.com?subject=${subject}&body=${body}`;
    setFormMessage("Your email app is opening with the project brief.");
  };
  const updateField = (event) =>
    setFormState({...formState, [event.target.name]: event.target.value});

  return (
    <div className="site-shell">
      <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to homepage"
        >
          <span className="brand-mark">SK</span>
          <span>SATVIK KALE</span>
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToSection(item)}>
              {item}
            </button>
          ))}
          <button
            className="nav-cta"
            onClick={() => scrollToSection("contact")}
          >
            Hire me <ArrowUpRight size={15} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> Hello, I&apos;m Satvik Kale
            </p>
            <h1>
              Building modern <em>web experiences</em> with React &amp; MERN
              Stack.
            </h1>
            <p className="hero-lede">
              I&apos;m a web developer passionate about building responsive
              interfaces, scalable web applications, and meaningful digital
              solutions.
            </p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => scrollToSection("projects")}
              >
                View my projects <ArrowUpRight size={17} />
              </button>
              <button
                className="button button-quiet"
                onClick={() => scrollToSection("contact")}
              >
                Hire me <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="freelance-callout">
              <span className="status-dot" />
              <strong>Taking on select freelance projects</strong>
              <span>React · frontend · MERN</span>
            </div>
            <div className="hero-meta">
              <span>React.js Developer</span>
              <span>MERN Stack Developer</span>
              <span>
                <MapPin size={14} /> Nagpur, India
              </span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Developer workspace illustration"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <small>satvik.js</small>
              </div>
              <div className="code-lines">
                <p>
                  <i>const</i> developer = {"{"}
                </p>
                <p className="indent">
                  <b>name:</b> <strong>&apos;Satvik Kale&apos;</strong>,
                </p>
                <p className="indent">
                  <b>stack:</b> [<strong>&apos;React&apos;</strong>,{" "}
                  <strong>&apos;Node&apos;</strong>],
                </p>
                <p className="indent">
                  <b>focus:</b> <strong>&apos;impactful web&apos;</strong>
                </p>
                <p>{"}"};</p>
                <p className="cursor-line">
                  developer.<span>build()</span>
                  <i className="cursor" />
                </p>
              </div>
            </div>
            <div className="visual-tag tag-react">
              <span>◈</span> React.js
            </div>
            <div className="visual-tag tag-node">
              <span>●</span> Node.js
            </div>
            <div className="visual-caption">
              <Sparkles size={16} /> Turning ideas into interfaces
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <span>Based in Nagpur, India</span>
          <span>Open to freelance projects</span>
          <span>Focused on useful, well-crafted products</span>
        </section>

        <section className="section-pad about-section scroll-reveal" id="about">
          <SectionIntro
            eyebrow="About me"
            title={
              <>
                A developer who cares about the <em>details.</em>
              </>
            }
          >
            <p className="intro-copy">
              I&apos;m a motivated MERN Stack Developer with hands-on experience
              building responsive web applications. I enjoy solving real-world
              problems through technology and creating clean, user-friendly
              digital experiences.
            </p>
          </SectionIntro>
          <div className="about-grid">
            <div className="about-note">
              <span className="quote-mark">“</span>
              <p>
                Good software should feel considered from the first click to the
                last.
              </p>
              <span className="note-signature">— Satvik</span>
            </div>
            <div className="strengths">
              <p className="small-label">What I bring</p>
              {[
                "Full-stack web development",
                "Responsive UI development",
                "React component development",
                "REST API & backend integration",
                "Database-driven applications",
                "Problem-solving & continuous learning",
              ].map((item) => (
                <div className="strength" key={item}>
                  <Check size={15} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad dark-section scroll-reveal" id="experience">
          <SectionIntro
            eyebrow="Experience"
            title={
              <>
                Learning by <em>building.</em>
              </>
            }
          >
            <p className="intro-copy">
              Hands-on internships where I turned briefs into working,
              user-friendly web experiences.
            </p>
          </SectionIntro>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-marker">01</div>
              <div>
                <div className="timeline-top">
                  <h3>Web Developer Intern</h3>
                  <span>Mar 2024 — Apr 2024</span>
                </div>
                <p className="company">Revat Network</p>
                <p>
                  Built a responsive online social media platform specifically
                  for fashion designers to discover and showcase their design
                  work, focusing on clean UI design and a seamless user
                  experience.
                </p>
                <div className="tags">
                  <span>Responsive UI</span>
                  <span>Social platform</span>
                  <span>UX design</span>
                </div>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker">02</div>
              <div>
                <div className="timeline-top">
                  <h3>Web Developer Intern</h3>
                  <span>Jan 2024 — Feb 2024</span>
                </div>
                <p className="company">InternPe</p>
                <p>
                  Built a dynamic and user-friendly room rental website using
                  React.js and Tailwind CSS, implementing authentication,
                  property listings, and booking functionality.
                </p>
                <div className="tags">
                  <span>React.js</span>
                  <span>Tailwind CSS</span>
                  <span>Authentication</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-pad skills-section scroll-reveal" id="skills">
          <SectionIntro
            eyebrow="Toolkit"
            title={
              <>
                Tools for thoughtful <em>work.</em>
              </>
            }
          >
            <p className="intro-copy">
              A practical toolkit across the frontend, backend, database, and
              modern development workflow.
            </p>
          </SectionIntro>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.label}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.label}</h3>
                <div>
                  {group.items.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad projects-section scroll-reveal" id="projects">
          <SectionIntro
            eyebrow="Selected work"
            title={
              <>
                A few things I&apos;ve <em>made.</em>
              </>
            }
          >
            <p className="intro-copy">
              Projects that explore community, creativity, useful information,
              and better ways to find what you need.
            </p>
          </SectionIntro>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent}`}
                key={project.name}
              >
                <div className="project-art">
                  <span className="project-number">{project.number}</span>
                  <div className="art-shape">
                    <span>
                      {project.name === "JanMitra"
                        ? "↗"
                        : project.name === "Fashion Social"
                          ? "✦"
                          : project.name === "Pearl Farming"
                            ? "◌"
                            : "⌂"}
                    </span>
                  </div>
                  <div className="art-label">{project.subtitle}</div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <div className="tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.name} live demo`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.name} source code`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad education-section scroll-reveal" id="education">
          <SectionIntro
            eyebrow="Education"
            title={
              <>
                Always staying <em>curious.</em>
              </>
            }
          />
          <div className="education-grid">
            <article className="education-card">
              <span className="edu-year">2023 — 2026</span>
              <h3>B.Tech — Computer Science &amp; Engineering</h3>
              <p>Priyadarshini College of Engineering, Nagpur</p>
              <strong>CGPA 8.4</strong>
            </article>
            <article className="education-card">
              <span className="edu-year">2020 — 2023</span>
              <h3>Diploma — Computer Engineering</h3>
              <p>Dr. Panjabrao Deshmukh Polytechnic, Amravati</p>
              <strong>85.31%</strong>
            </article>
          </div>
          <div className="achievement-row">
            <div>
              <p className="small-label">Achievement</p>
              <h3>Gold Medal for Academic Excellence</h3>
            </div>
            <div>
              <p className="small-label">Certifications</p>
              <div className="cert-list">
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Prompt Engineering</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad services-section scroll-reveal" id="services">
          <SectionIntro
            eyebrow="Services"
            title={
              <>
                Let&apos;s make something <em>useful.</em>
              </>
            }
          >
            <p className="intro-copy">
              Clear, focused development support for ideas that deserve a
              thoughtful digital home.
            </p>
          </SectionIntro>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-bottom">
                  <div>
                    <strong>{service.price}</strong>
                    <small>{service.note}</small>
                  </div>
                  <button
                    onClick={() => scrollToSection("contact")}
                    aria-label={`Discuss your ${service.title} project`}
                  >
                    <span>Discuss project</span>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad contact-section scroll-reveal" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">Start a conversation</p>
            <h2>
              Have an idea? Let&apos;s build something <em>great together.</em>
            </h2>
            <p>
              Looking for a web developer for your next project? Let&apos;s
              discuss your requirements.
            </p>
            <div className="contact-details">
              <a href="mailto:satvikkale07@gmail.com">
                <Mail size={16} />
                satvikkale07@gmail.com
              </a>
              <a href="tel:+918237602904">
                <Phone size={16} />
                +91 82376 02904
              </a>
              <span>
                <MapPin size={16} />
                Nagpur, Maharashtra, India
              </span>
            </div>
            <a
              className="whatsapp-link"
              href="https://wa.me/918237602904"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>
                Full name
                <input
                  name="name"
                  value={formState.name}
                  onChange={updateField}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Project type
                <select
                  name="type"
                  value={formState.type}
                  onChange={updateField}
                  required
                >
                  <option value="">Select one</option>
                  <option>Business website</option>
                  <option>React.js development</option>
                  <option>MERN Stack application</option>
                  <option>Website bug fixing</option>
                </select>
              </label>
              <label>
                Budget range
                <select
                  name="budget"
                  value={formState.budget}
                  onChange={updateField}
                >
                  <option value="">Select one</option>
                  <option>₹2,000 — ₹5,000</option>
                  <option>₹5,000 — ₹15,000</option>
                  <option>₹15,000+</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </label>
            </div>
            <label>
              Project description
              <textarea
                name="details"
                value={formState.details}
                onChange={updateField}
                placeholder="Tell me a little about what you want to build..."
                rows="5"
                required
              />
            </label>
            <div className="form-submit">
              <button className="button button-primary" type="submit">
                Send project brief <Send size={16} />
              </button>
              {formMessage && (
                <p className="form-message" role="status">
                  {formMessage}
                </p>
              )}
            </div>
            <p className="form-note">
              This opens your email app with a prepared project brief. No data
              is stored on this site.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <button className="brand" onClick={() => scrollToSection("home")}>
            <span className="brand-mark">SK</span>
            <span>SATVIK KALE</span>
          </button>
          <p>React.js Developer · MERN Stack Developer</p>
        </div>
        <div className="footer-nav">
          <p className="small-label">Quick navigation</p>
          <div>
            {navItems.slice(0, 4).map((item) => (
              <button key={item} onClick={() => scrollToSection(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="footer-social">
          <p className="small-label">Find me online</p>
          <div>
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
              </a>
            )}
            <a href="mailto:satvikkale07@gmail.com">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Satvik Kale</span>
          <span>Built with care in Nagpur</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
