import { useState } from 'react'
import { commands, executeCommand } from './terminal'

const projects = [
  { title: 'PintosOS', category: 'Operating systems', description: 'Inside the kernel: system calls, safe user–kernel memory handling, and a preemptive priority scheduler. Built synchronization-safe parent–child relationships along the way.', tags: ['C', 'GDB', 'Concurrency'] },
  { title: 'Secure file storage', category: 'Security & systems', description: 'A multi-user system for creating, retrieving, and sharing files, with access revocation. Thread-safe read and write operations, verified with unit and integration tests.', tags: ['Go', 'Ginkgo', 'File I/O'] },
  { title: 'RISC-V CPU', category: 'Computer architecture', description: 'A CPU built from the ALU up, supporting 15+ RISC-V instructions. Pipelining and data-hazard handling doubled throughput, with test benches to verify execution.', tags: ['Logisim', 'RISC-V', 'Pipelining'] },
]
const experiences = [
  { company: 'Amazon', role: 'Software Development Engineer Intern', dates: 'June – August 2026', description: 'Built cross-region streaming pipelines and sessionization logic that turned customer interaction data into analytics-ready datasets. Reduced data-to-metrics latency from 12–24 hours to under 15 minutes, with a production design covering fault tolerance, observability, and data quality.', tags: ['Apache Flink', 'Kinesis', 'S3', 'SQL', 'Athena'] },
  { company: 'Lucid Motors', role: 'Contract Software Engineer', dates: 'October 2025 – February 2026', description: 'Created an automatic LiDAR–camera calibration system for vehicle cameras. Built image and point-cloud preprocessing pipelines, including segmentation-based feature masks, and compared calibration methods across datasets.', tags: ['Python', 'OpenCV', 'Open3D', 'PyTorch'] },
  { company: 'Adobe', role: 'Contract Software Engineer', dates: 'May – September 2025', description: 'Built an NLP pipeline to classify 8,700+ social media comments by engagement and sentiment. Two models averaged 87% test accuracy; improved preprocessing reduced classification noise by 15%.', tags: ['Python', 'Hugging Face', 'RoBERTa', 'Pandas'] },
]
const skillGroups = [
  { title: 'Languages', skills: ['Python', 'Java', 'C/C++', 'Go', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Rust', 'R'] },
  { title: 'Systems & infrastructure', skills: ['Linux/Unix', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Apache Flink', 'Kinesis', 'Data Firehose', 'S3', 'Athena'] },
  { title: 'Web & backend', skills: ['React', 'Node.js', 'FastAPI', 'Flask', 'MongoDB'] },
  { title: 'Machine learning & data', skills: ['NumPy', 'Pandas', 'PyTorch', 'Hugging Face', 'OpenCV', 'Open3D'] },
]
function Terminal() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  function run(value) {
    const command = value.trim().toLowerCase()
    if (!command) return
    if (command === 'clear') setHistory([])
    else setHistory(previous => [...previous, { command: value.trim(), output: executeCommand(value) }])
    setInput('')
  }
  return <div className="terminal">
    <div className="terminal-bar"><span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span><span>kelley@little-garden: ~</span><span className="terminal-label">interactive</span></div>
    <div className="terminal-body">
      <p className="terminal-welcome">A little garden in a terminal.<br />Plant something, catch a firefly, or make a wish.</p>
      <div className="terminal-history" role="log" aria-label="Terminal output" aria-live="polite">{history.map((entry, index) => <div className="terminal-entry" key={index}><p><span className="prompt">~ $</span> {entry.command}</p><p className="terminal-output">{entry.output}</p></div>)}</div>
      <form className="terminal-form" onSubmit={event => { event.preventDefault(); run(input) }}><label htmlFor="command" className="prompt"><span aria-hidden="true">~ $</span><span className="sr-only">Terminal command</span></label><input id="command" value={input} onChange={event => setInput(event.target.value)} autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder="try planting something…" /><button type="submit" aria-label="Run command">↵</button></form>
      <div className="terminal-shortcuts" aria-label="Suggested commands">{commands.map(command => <button key={command} onClick={() => run(command)}>{command}</button>)}</div>
    </div>
  </div>
}
function App() {
  return <main className="page-shell">
    <img className="corner-doodle" src={`${import.meta.env.BASE_URL}assets/Buzz.png`} alt="" aria-hidden="true" />
    <section className="hero" aria-labelledby="intro-heading">
      <div><p className="eyebrow">CURIOUS ABOUT HOW THINGS WORK</p><h1 id="intro-heading">Hello, I’m <span className="accent">Kelley</span></h1><p className="subtitle">EECS @ UC Berkeley</p>
        <div className="bio"><p>I enjoy building software and understanding the systems underneath it—from a CPU’s instructions to the way an operating system manages memory and schedules work.</p><p>CS 162 sparked my interest in operating systems. Now I’m exploring concurrency, distributed systems, and learning about vertical operating systems.</p></div>
        <div className="social-links"><a href="https://github.com/kelleyliang" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/kelley-liang/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:kelley.s.liang@gmail.com">say hello ↗</a></div>
      </div>
      <div className="hero-art-wrap"><div className="hero-circle" /><img className="hero-art" src={`${import.meta.env.BASE_URL}assets/Buzz.png`} alt="A playful hand-drawn robot" /><span className="art-caption">always figuring things out.</span></div>
    </section>
    <section className="terminal-section" id="little-garden" aria-label="Interactive terminal garden">
      <Terminal />
    </section>
    <section id="projects" aria-labelledby="projects-heading"><div className="section-heading"><h2 id="projects-heading">things I’ve <span className="accent">built</span></h2><p>From hardware to the kernel.</p></div><div className="project-list">{projects.map((project, index) => <article className="project" key={project.title}><span className="project-number">0{index + 1}</span><div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div></section>
    <section className="experience-section" id="experience" aria-labelledby="experience-heading">
      <div className="section-heading"><h2 id="experience-heading">where I’ve <span className="accent">worked</span></h2><p>Building software across streaming data, perception, and language.</p></div>
      <div className="experience-list">{experiences.map(experience => <article className="experience" key={experience.company}>
        <div className="experience-meta"><h3>{experience.company}</h3><p className="experience-date">{experience.dates}</p></div>
        <div><h4>{experience.role}</h4><p className="project-description">{experience.description}</p><ul className="tags" aria-label="Technologies">{experience.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
      </article>)}</div>
    </section>
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="section-heading"><h2 id="skills-heading">my <span className="accent">toolkit</span></h2><p>The languages and tools I work with.</p></div>
      <div className="skills-grid">{skillGroups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul className="tags" aria-label={group.title}>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
    </section>
    <footer><span>Kelley Liang</span><a href="mailto:kelley.s.liang@gmail.com">Let’s build something. ↗</a></footer>
  </main>
}
export default App
