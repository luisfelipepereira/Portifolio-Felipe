import { motion as Motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import site1 from "../../assets/imagenssite/site1.png";
import site2 from "../../assets/imagenssite/site2.png";
import site3 from "../../assets/imagenssite/site3.png";

const projectVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const projects = [
  {
    title: "Barbearia Premium",
    description: "Site para barbearia com apresentação dos serviços e identidade visual própria.",
    category: "Site institucional",
    liveUrl: "https://webboostdev.github.io/baroesbarber/",
    image: site1,
  },
  {
    title: "Portfolio Full Stack",
    description: "Portfólio audiovisual para apresentar trabalhos e informações profissionais.",
    category: "Portfólio",
    liveUrl: "https://webboostdev.github.io/pedroribeirofilmaker/",
    image: site2,
  },
  {
    title: "Agencia Premium",
    description: "Página de apresentação de serviços com layout focado em comunicação clara.",
    category: "Página de serviços",
    liveUrl: "https://luisfelipepereira.github.io/Personal-Trainer/",
    image: site3,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Projetos selecionados</p>
            <h2>Trabalho real, apresentado como deve ser.</h2>
            <p className="section-subtitle">
              Alguns dos sites que desenvolvi e que estão disponíveis para explorar.
            </p>
          </AnimatedSection>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              className={`project-case project-case-${index + 1}`}
              custom={index}
              variants={projectVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <a className="project-shot project-browser" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}>
                <span className="browser-chrome" aria-hidden="true"><i>{new URL(project.liveUrl).hostname}</i></span>
                <img src={project.image} alt={`Captura de tela do projeto ${project.title}`} loading="lazy" decoding="async" />
              </a>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">Ver projeto ↗</a>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
