import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import AnimatedSection from "../ui/AnimatedSection";
import Card from "../ui/Card";
import profileImage from "../../assets/images/profile.png";
import { stagger, fadeUp } from "../../utils/animations";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 92, icon: SiHtml5 },
  { name: "CSS", level: 90, icon: SiCss },
  { name: "JavaScript", level: 88, icon: SiJavascript },
  { name: "React (estudando)", level: 70, icon: SiReact },
  { name: "Node.js (estudando)", level: 68, icon: SiNodedotjs },
  { name: "Python (estudando)", level: 62, icon: SiPython },
  { name: "Java (estudando)", level: 58, icon: FaJava },
];

export default function About() {
  return (
    <section id="sobre" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Sobre</p>
            <h2>Experiencia full stack orientada a resultados</h2>
            <p className="section-subtitle">
              Construo produtos digitais com arquitetura moderna, performance e
              foco total em conversao e experiencia do usuario.
            </p>
          </AnimatedSection>
        </div>

        <div className="about-grid">
          <AnimatedSection className="about-image">
            <img src={profileImage} alt="Luiz Felipe" />
          </AnimatedSection>

          <div className="about-content">
            <AnimatedSection>
              <Card className="about-card" glow>
                <h3>Perfil profissional</h3>
                <p>
                  Especialista em desenvolver sistemas escalaveis, interfaces
                  premium e integracoes robustas. Trabalho com metodologias
                  ageis, comunicacao clara e foco em entregas de alto impacto.
                </p>
                <div className="about-highlights">
                  <span>Arquitetura moderna</span>
                  <span>Performance real</span>
                  <span>UX orientada a conversao</span>
                </div>
              </Card>
            </AnimatedSection>

            <motion.div
              className="skills-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={skill.name} variants={fadeUp}>
                    <Card className="skill-card">
                      <div className="skill-header">
                        <Icon />
                        <span>{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <span style={{ width: `${skill.level}%` }} />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
