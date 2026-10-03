import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import AnimatedSection from "../ui/AnimatedSection";
import Card from "../ui/Card";
import profileImage from "../../assets/images/profile.png";
import { stagger, fadeUp } from "../../utils/animations";
import { motion as Motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
];

export default function About() {
  return (
    <section id="sobre" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Sobre</p>
            <h2>Desenvolvimento web com atenção à experiência</h2>
            <p className="section-subtitle">
              Interfaces e aplicações web pensadas para serem claras, rápidas e
              consistentes em diferentes telas.
            </p>
          </AnimatedSection>
        </div>

        <div className="about-grid">
          <AnimatedSection className="about-image">
            <img src={profileImage} alt="Luiz Felipe" loading="lazy" decoding="async" />
          </AnimatedSection>

          <div className="about-content">
            <AnimatedSection>
              <Card className="about-card" glow>
                <h3>Perfil profissional</h3>
                <p>
                  Sou Luiz Felipe e desenvolvo projetos web combinando
                  fundamentos de frontend, componentes React e cuidado visual.
                  Gosto de transformar referências e necessidades em páginas
                  funcionais, responsivas e fáceis de navegar.
                </p>
                <div className="about-highlights">
                  <span>Frontend</span>
                  <span>Interfaces responsivas</span>
                  <span>React</span>
                </div>
              </Card>
            </AnimatedSection>

            <Motion.div
              className="skills-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Motion.div key={skill.name} variants={fadeUp}>
                    <Card className="skill-card">
                      <div className="skill-header">
                        <Icon />
                        <span>{skill.name}</span>
                      </div>
                    </Card>
                  </Motion.div>
                );
              })}
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
