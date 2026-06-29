import './Careers.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import heroBgLight from "../../assets/hero-bg-light.png"
import heroBgDark from "../../assets/hero-bg.png"
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs,
  SiPython, SiOpenjdk, SiDocker,
  SiMongodb, SiPostgresql, SiTensorflow, SiFlutter
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import {
  FiZap, FiClock, FiLayers, FiShield, FiUsers, FiStar,
  FiCode, FiLock, FiCloud, FiCpu, FiTrendingUp, FiBriefcase, FiAward
} from 'react-icons/fi';

function Careers({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const heroBg = darkMode ? heroBgDark : heroBgLight;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.add('visible');
            } else {
              entry.target.style.transition = 'none';
              entry.target.classList.add('visible');
              requestAnimationFrame(() => requestAnimationFrame(() => {
                entry.target.style.transition = '';
              }));
            }
          } else {
            entry.target.classList.remove('visible');
            entry.target.style.transition = '';
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -48px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const deptsRef = useRef(null);
  const jobsRef  = useRef(null);

  useEffect(() => {
    [deptsRef, jobsRef].forEach((ref) => {
      const container = ref.current;
      if (!container) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (entry.boundingClientRect.top > 0) {
              container.classList.add('revealed');
            } else {
              const cards = container.querySelectorAll('.department-card, .job-card');
              cards.forEach(c => c.style.transition = 'none');
              container.classList.add('revealed');
              requestAnimationFrame(() => requestAnimationFrame(() => {
                cards.forEach(c => c.style.transition = '');
              }));
            }
          } else {
            container.classList.remove('revealed');
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );

      observer.observe(container);
    });
  }, []);

  const values = [
    { icon: <FiZap />, title: 'Performance First', description: 'We build software that runs fast, scales well, and holds up under real-world load.' },
    { icon: <FiClock />, title: 'On-Time Delivery', description: 'Deadlines are commitments. We plan realistically and deliver what we promise, when we promise it.' },
    { icon: <FiLayers />, title: 'Full-Stack Excellence', description: 'From databases to interfaces, every layer is built with the same care and attention to detail.' },
    { icon: <FiShield />, title: 'Zero Downtime', description: 'We design systems that stay reliable, with monitoring and processes that catch issues early.' },
    { icon: <FiUsers />, title: 'Trust & Transparency', description: 'Clear communication with clients and teammates, every step of the way — no surprises.' },
    { icon: <FiStar />, title: 'Innovation Through Collaboration', description: 'The best ideas come from working together. We share knowledge and grow as a team.' },
  ];

  const departments = [
    { icon: <FiCode />, name: 'Software Development', description: 'Full-stack web & app development' },
    { icon: <FiLock />, name: 'Cybersecurity', description: 'Protecting client systems & data' },
    { icon: <FiCloud />, name: 'Cloud & DevOps', description: 'AWS, Azure, GCP infrastructure' },
    { icon: <FiCpu />, name: 'AI / ML Products', description: 'AI-powered product development' },
    { icon: <FiTrendingUp />, name: 'Digital Marketing', description: 'SEO, social media & growth' },
    { icon: <FiBriefcase />, name: 'Business Solutions', description: 'ERP & CRM implementations' },
    { icon: <FiAward />, name: 'Staffing & Training', description: 'Hiring & upskilling talent' },
    { icon: <FiStar />, name: 'IT Consulting & Advisory', description: 'Strategic tech guidance & advisory' },
  ];

  const techStack = [
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Vue.js', icon: <SiVuedotjs /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Java', icon: <SiOpenjdk /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'Flutter', icon: <SiFlutter /> },
  ];

  const hiringSteps = [
    { step: '1', title: 'Apply', description: 'Submit your application online' },
    { step: '2', title: 'Screening', description: 'Initial review of your profile' },
    { step: '3', title: 'Skills Round', description: 'Technical assessment or task' },
    { step: '4', title: 'Culture Fit', description: 'Conversation with the team' },
    { step: '5', title: 'Offer', description: 'Welcome to HDC MA' },
  ];

  const jobs = [
    { title: 'Cyber Security Analyst Intern', department: 'Cybersecurity', location: 'Remote', type: 'Internship', skills: 'Networking basics, OWASP Top 10, SIEM tools, Linux fundamentals' },
    { title: 'Full Stack Developer Intern', department: 'Software Development', location: 'Remote', type: 'Internship', skills: 'React.js, Node.js, REST APIs, MongoDB, Git' },
    { title: 'Java Full Stack Developer Intern', department: 'Software Development', location: 'Remote', type: 'Internship', skills: 'Java, Spring Boot, React.js, SQL, REST APIs' },
    { title: 'UI/UX Designer Intern', department: 'Software Development', location: 'Remote', type: 'Internship', skills: 'Figma, Wireframing, User Research, Prototyping' },
    { title: 'SOC Analyst Intern', department: 'Cybersecurity', location: 'Remote', type: 'Internship', skills: 'Threat monitoring, Incident response basics, SIEM tools' },
    { title: 'Talent Acquisition Associate', department: 'Staffing & Training', location: 'Remote', type: 'Full-time', skills: 'Sourcing, Screening, Communication, ATS tools' },
    { title: 'Digital Marketing Executive', department: 'Digital Marketing', location: 'Remote', type: 'Full-time', skills: 'SEO, Social Media Marketing, Content Strategy, Analytics' },
    { title: 'Business Development Associate', department: 'Business Solutions', location: 'Remote', type: 'Full-time', skills: 'Client outreach, Negotiation, CRM tools, Market research' },
    { title: 'AI & ML Intern', department: 'AI / ML Products', location: 'Remote', type: 'Internship', skills: 'Python, TensorFlow basics, Data preprocessing, ML fundamentals' },
  ];

  return (
    <div className={`career-page ${darkMode ? 'dark' : 'light'}`}>

      <section className="career-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1>Build the Future of Tech with HDC MA</h1>
        <p>
          Empower organizations through intelligent software — built to perform,
          delivered on time. Join a team shaping the future of enterprise technology.
        </p>
        <button
          className="cta-btn"
          onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
        >
          View Open Roles
        </button>
      </section>

      <section className="career-about">
        <p className="reveal">
          Horizon Digital Core Management Associates (HDC MA) is a full-service
          IT company delivering enterprise-grade software, AI products, cloud
          infrastructure, and digital solutions for businesses worldwide. Founded
          in 2026, we're building a team of people who care about doing great work.
        </p>
      </section>

      <section className="career-section alt-bg">
        <div className="section-header reveal">
          <h2>Why Join HDC MA</h2>
          <p>The values that guide how we work, build, and grow together.</p>
        </div>
        <div className="values-marquee-wrapper">
          <div className="values-marquee-track">
            {[...values, ...values].map((value, index) => (
              <div className="marquee-card" key={index}>
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-section">
        <div className="section-header reveal">
          <h2>Teams You Can Join</h2>
          <p>Explore the areas where you could make an impact.</p>
        </div>
        <div className="departments-grid" ref={deptsRef}>
          {departments.map((dept, index) => (
            <div className="department-card" key={index}>
              <div className="dept-icon">{dept.icon}</div>
              <h4>{dept.name}</h4>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="career-section alt-bg">
        <div className="section-header reveal">
          <h2>Tech You'll Work With</h2>
          <p>Modern tools and frameworks across our entire stack.</p>
        </div>
        <div className="tech-grid reveal-group">
          {techStack.map((tech, index) => (
            <div className="tech-item reveal" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="career-section" id="open-positions">
        <div className="section-header reveal">
          <h2>Open Positions</h2>
          <p>Find a role that matches your skills and interests.</p>
        </div>

        {jobs.length > 0 ? (
          <div className="jobs-list" ref={jobsRef}>
            {jobs.map((job, index) => (
              <div className="job-card" key={index}>
                <div className="job-info">
                  <h4>{job.title}</h4>
                  <div className="job-tags">
                    <span>{job.department}</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                  <div className="job-skills">
                    <strong>Skills:</strong> {job.skills}
                  </div>
                </div>
                <button
                  className="apply-btn"
                  onClick={() => navigate(`/careers/apply?role=${encodeURIComponent(job.title)}`)}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="jobs-empty reveal">
            <p>We don't have open positions listed right now — but we're growing fast.</p>
            <button className="cta-btn-outline">Register Your Interest</button>
          </div>
        )}
      </section>

      <section className="career-section alt-bg">
        <div className="section-header reveal">
          <h2>Our Hiring Process</h2>
          <p>What to expect once you apply.</p>
        </div>
        <div className="hiring-steps reveal-group">
          {hiringSteps.map((step, index) => (
            <div className="hiring-step reveal" key={index}>
              <div className="step-circle">{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="career-footer-cta">
        <h2 className="reveal">Don't See Your Role?</h2>
        <p className="reveal">We're always looking for talented people. Send us your resume.</p>
        <a href="mailto:careers@horizondigitalcore.com" className="email-link reveal">
          careers@horizondigitalcore.com
        </a>
      </section>

    </div>
  );
}

export default Careers;