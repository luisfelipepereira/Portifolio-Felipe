import { useMemo } from "react";
import { motion as Motion } from "framer-motion";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";
import SocialButtons from "../ui/SocialButtons";
import useTypewriter from "../../hooks/useTypewriter";
import featuredImage from "../../assets/imagenssite/site1.png";
import mobilePreview from "../../assets/images/barbearia-mobile.svg";
import { slideIn, fadeIn } from "../../utils/animations";

export default function Hero() {
  const roles = useMemo(() => [
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Interfaces responsivas",
  ], []);
  const typedText = useTypewriter(roles);

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <AnimatedSection
          className="hero-content"
          variants={slideIn("left", 80)}
        >
          <span className="hero-eyebrow">Full Stack Developer</span>
          <h1 className="hero-title">Luiz Felipe</h1>
          <h2 className="hero-role">
            <span className="typewriter">{typedText}</span>
            <span className="cursor" aria-hidden="true" />
          </h2>
          <p className="hero-description">
            Transformo ideias em experiências digitais modernas, cuidando da
            interface, da lógica e dos detalhes que tornam cada produto simples
            de usar.
          </p>

          <div className="hero-actions">
            <Button href="#projetos" size="lg">Ver projetos</Button>
            <Button
              href="#contato"
              variant="outline"
              size="lg"
            >
              Entre em contato
            </Button>
          </div>

          <SocialButtons className="hero-socials" />
        </AnimatedSection>

        <Motion.div
          className="hero-showcase"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          aria-label="Prévia do projeto Barbearia Premium em desktop e mobile"
        >
          <a className="hero-browser" href="https://webboostdev.github.io/baroesbarber/" target="_blank" rel="noreferrer" aria-label="Conheça o projeto Barbearia Premium">
            <div className="browser-chrome" aria-hidden="true"><span /><span /><span /><i>barbearia-premium</i></div>
            <div className="hero-image"><img src={featuredImage} alt="Prévia do site Barbearia Premium" fetchPriority="high" /></div>
          </a>
          <div className="hero-phone" aria-hidden="true">
            <div className="phone-speaker" />
            <img src={mobilePreview} alt="" />
          </div>
          <div className="hero-float-chip chip-react"><span>⚛</span> React</div>
          <div className="hero-float-chip chip-js"><span>JS</span> JavaScript</div>
          <div className="hero-showcase-caption">
            <span className="showcase-status" />
            <span>Projeto em destaque</span>
            <span className="showcase-caption-line" />
            <span>01 / 04</span>
          </div>
        </Motion.div>
      </div>

      <div className="hero-blur" aria-hidden="true" />
    </section>
  );
}
