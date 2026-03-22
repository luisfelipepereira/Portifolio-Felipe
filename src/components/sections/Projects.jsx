import { motion } from "framer-motion";

const projects = [
  {
    title: "Landing Page",
    desc: "Página focada em conversão e performance.",
    tech: ["React", "CSS"],
    link: "#"
  },
  {
    title: "Dashboard",
    desc: "Interface moderna com dados dinâmicos.",
    tech: ["React", "API"],
    link: "#"
  },
  {
    title: "App Web",
    desc: "Aplicação completa com integração backend.",
    tech: ["Node", "React"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">

        <h2>Projetos</h2>

        <div className="projects-grid">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card"
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <a href={project.link} className="btn">
                Ver projeto
              </a>
              <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
></motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}