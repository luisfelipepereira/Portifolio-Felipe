import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ContactButton from "../ui/ContactButton";
import { fadeUp, slideIn } from "../../utils/animations";
import featuredImage from "../../assets/images/fptechsolutions-featured.png";

const project = {
  title: "FP Tech Solutions",
  description:
    "Projeto de site institucional moderno com foco em performance, credibilidade e apresentacao profissional de servicos digitais.",
  tech: ["React", "Node.js", "PostgreSQL", "tailwindcss"],
  results: ["+38% conversao", "99.9% uptime"],
  liveUrl: "https://fptechsolutions.vercel.app/",
};

export default function FeaturedProject() {
  return (
    <section id="destaque" className="section">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Projeto em destaque</p>
            <h2>Produto premium com design e engenharia impecaveis</h2>
          </AnimatedSection>
        </div>

        <div className="featured-grid">
          <AnimatedSection
            className="featured-media"
            variants={slideIn("left", 80)}
          >
            <Card className="featured-image" glow>
              <img src={featuredImage} alt="Preview do projeto FP Tech Solutions" />
              <div className="featured-badge">Destaque</div>
            </Card>
          </AnimatedSection>

          <AnimatedSection
            className="featured-content"
            variants={slideIn("right", 80)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="featured-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <motion.div className="featured-results" variants={fadeUp}>
              {project.results.map((result) => (
                <div key={result}>{result}</div>
              ))}
            </motion.div>

            <div className="featured-actions">
              <ContactButton>Iniciar projeto</ContactButton>
              <Button href={project.liveUrl} variant="outline" target="_blank" rel="noreferrer">
                Ver projeto
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
