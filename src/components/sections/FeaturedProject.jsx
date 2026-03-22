import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ContactButton from "../ui/ContactButton";
import { fadeUp, slideIn } from "../../utils/animations";
import featuredImage from "../../assets/images/project-featured.svg";
import { SOCIAL_LINKS } from "../../utils/social";

const project = {
  title: "Plataforma SaaS para automacao de vendas",
  description:
    "Sistema completo com painel administrativo, automacoes de marketing, integracao com gateways de pagamento e metricas em tempo real.",
  tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
  results: ["+38% conversao", "99.9% uptime", "Setup em 48h"],
  repo: SOCIAL_LINKS.github,
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
              <img src={featuredImage} alt="Preview do projeto em destaque" />
              <div className="featured-badge">SaaS Premium</div>
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
              <Button href={project.repo} variant="outline" target="_blank" rel="noreferrer">
                Ver GitHub
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
