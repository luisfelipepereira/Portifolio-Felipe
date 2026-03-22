import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { stagger } from "../../utils/animations";
import site1 from "../../assets/imagenssite/site1.png";
import site2 from "../../assets/imagenssite/site2.png";
import site3 from "../../assets/imagenssite/site3.png";

const frameVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    "--frame-opacity": 0,
    "--frame-scale": 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    "--frame-opacity": 1,
    "--frame-scale": 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const projects = [
  {
    title: "Barbearia Premium",
    liveUrl: "https://webboostdev.github.io/baroesbarber/",
    image: site1,
  },
  {
    title: "Portfolio Full Stack",
    liveUrl: "https://webboostdev.github.io/pedroribeirofilmaker/",
    image: site2,
  },
  {
    title: "Agencia Premium",
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
            <p className="section-tag">Projetos</p>
            <h2>Cases que geram impacto real</h2>
            <p className="section-subtitle">
              Selecionados com foco em conversao, performance e experiencias
              digitais modernas.
            </p>
          </AnimatedSection>
        </div>

        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              className="project-shot"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              variants={frameVariants}
            >
              <img src={project.image} alt={`Preview ${project.title}`} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
