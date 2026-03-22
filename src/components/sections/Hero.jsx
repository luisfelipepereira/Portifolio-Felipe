import { motion } from "framer-motion";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";
import ContactButton from "../ui/ContactButton";
import SocialButtons from "../ui/SocialButtons";
import useTypewriter from "../../hooks/useTypewriter";
import profileImage from "../../assets/images/profile.png";
import { slideIn, fadeIn } from "../../utils/animations";
import { SOCIAL_LINKS } from "../../utils/social";

export default function Hero() {
  const typedText = useTypewriter([
    "Desenvolvedor Full Stack",
    "Especialista em React e Node.js",
    "Interfaces premium e escalaveis",
  ]);

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <AnimatedSection
          className="hero-content"
          variants={slideIn("left", 80)}
        >
          <span className="hero-eyebrow">Disponivel para novos projetos</span>
          <h1 className="hero-title">Luiz Felipe</h1>
          <h2 className="hero-role">
            <span className="typewriter">{typedText}</span>
            <span className="cursor" aria-hidden="true" />
          </h2>
          <p className="hero-description">
            Desenvolvo produtos digitais com foco em performance, conversao e
            experiencia de usuario. Solucoes full stack com design premium,
            escalabilidade e codigo limpo.
          </p>

          <div className="hero-actions">
            <ContactButton size="lg">Iniciar projeto</ContactButton>
            <Button
              href={SOCIAL_LINKS.github}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub
            </Button>
          </div>

          <SocialButtons className="hero-socials" />
        </AnimatedSection>

        <motion.div
          className="hero-card"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <div className="hero-image">
            <img src={profileImage} alt="Foto de Luiz Felipe" />
          </div>
          <div className="hero-card-content">
            <p className="hero-card-title">Full Stack Engineer</p>
            <p className="hero-card-subtitle">
              React, Node, APIs escalaveis e UX premium.
            </p>
            <div className="hero-stats">
              <div>
                <span>+5</span>
                <small>Projetos entregues</small>
              </div>
              <div>
                <span>2 anos</span>
                <small>Experiencia</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-blur" aria-hidden="true" />
    </section>
  );
}
