import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ContactButton from "../ui/ContactButton";
import { slideIn } from "../../utils/animations";
import featuredImage from "../../assets/images/fptechsolutions-featured.png";

const project = {
  title: "FP Tech Solutions",
  description:
    "Site institucional da FP Tech Solutions, apresentado para organizar a presença digital da marca e tornar seus serviços mais fáceis de conhecer.",
  liveUrl: "https://fptechsolutions.vercel.app/",
};

export default function FeaturedProject() {
  return (
    <section id="destaque" className="section">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Projeto em destaque</p>
            <h2>Uma vitrine digital pensada para apresentar uma marca.</h2>
          </AnimatedSection>
        </div>

        <div className="featured-grid">
          <AnimatedSection
            className="featured-media"
            variants={slideIn("left", 80)}
          >
            <Card className="featured-image" glow>
              <div className="featured-browserbar" aria-hidden="true"><span /><span /><span /><i>fptechsolutions.vercel.app</i></div>
              <img src={featuredImage} alt="Captura de tela do site FP Tech Solutions" loading="lazy" decoding="async" />
              <div className="featured-badge">FP Tech Solutions</div>
            </Card>
          </AnimatedSection>

          <AnimatedSection
            className="featured-content"
            variants={slideIn("right", 80)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="featured-case-notes">
              <div><span>FOCO</span><p>Apresentação institucional e identidade digital.</p></div>
              <div><span>ABORDAGEM</span><p>Conteúdo organizado em uma experiência web objetiva.</p></div>
            </div>

            <div className="featured-actions">
              <Button href={project.liveUrl} variant="outline" target="_blank" rel="noreferrer">
                Ver projeto
              </Button>
              <ContactButton>Conversar sobre um projeto</ContactButton>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
