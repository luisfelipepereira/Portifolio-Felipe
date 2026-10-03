import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ContactButton from "../ui/ContactButton";
import profileImage from "../../assets/images/profile.png";
import { slideIn } from "../../utils/animations";
import { SOCIAL_LINKS } from "../../utils/social";

export default function Contact() {
  return (
    <section id="contato" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Contato</p>
            <h2>Tem uma ideia? Vamos construir.</h2>
            <p className="section-subtitle">
              Conte um pouco sobre o que você quer criar e vamos conversar.
            </p>
          </AnimatedSection>
          <div className="contact-end-actions">
            <ContactButton>Entrar em contato</ContactButton>
            <Button href="#projetos" variant="outline">Ver projetos</Button>
          </div>
        </div>

        <div className="contact-grid">
          <AnimatedSection
            className="contact-info"
            variants={slideIn("left", 80)}
          >
            <Card className="contact-card" glow>
              <h3>Contato direto e rapido</h3>
              <p>
                Clique no canal que preferir. O WhatsApp e o caminho mais rapido
                para iniciar a conversa.
              </p>
              <div className="contact-actions">
                <ContactButton className="contact-btn-whatsapp">
                  <FaWhatsapp /> WhatsApp
                </ContactButton>
                <Button
                  href={SOCIAL_LINKS.instagram}
                  className="contact-btn"
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram /> Instagram
                </Button>
                <Button
                  href={SOCIAL_LINKS.linkedin}
                  className="contact-btn"
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn /> LinkedIn
                </Button>
                <Button
                  href={SOCIAL_LINKS.github}
                  className="contact-btn"
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection
            className="contact-profile"
            variants={slideIn("right", 80)}
          >
            <Card className="contact-profile-card" glow>
              <div className="contact-avatar">
                <img src={profileImage} alt="Luiz Felipe" loading="lazy" decoding="async" />
              </div>
              <div>
                <h3>Luiz Felipe</h3>
                <p className="contact-role">Full Stack Developer</p>
              </div>
              <div className="contact-badges">
                <span>React</span>
                <span>JavaScript</span>
                <span>UX</span>
              </div>
              <p className="contact-mini">
                Projetos sob medida, performance real e foco em conversao.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
