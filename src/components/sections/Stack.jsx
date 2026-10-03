import { createElement } from "react";
import { motion as Motion } from "framer-motion";
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiVite,
} from "react-icons/si";
import { FaWandMagicSparkles } from "react-icons/fa6";
import AnimatedSection from "../ui/AnimatedSection";
import { fadeUp, stagger } from "../../utils/animations";

const tools = [
  { name: "React", category: "Interface", description: "Componentes e interfaces da aplicação.", icon: SiReact },
  { name: "JavaScript", category: "Linguagem", description: "Interações e comportamento da interface.", icon: SiJavascript },
  { name: "HTML", category: "Estrutura", description: "Marcação semântica do conteúdo.", icon: SiHtml5 },
  { name: "CSS", category: "Estilo", description: "Layouts responsivos e identidade visual.", icon: SiCss },
  { name: "Vite", category: "Ferramenta", description: "Servidor de desenvolvimento e build do projeto.", icon: SiVite },
  { name: "Framer Motion", category: "Animação", description: "Transições e movimento entre componentes.", icon: FaWandMagicSparkles },
];

export default function Stack() {
  return (
    <section id="stack" className="section section-stack">
      <div className="container">
        <div className="section-heading stack-heading">
          <AnimatedSection>
            <p className="section-tag">Stack</p>
            <h2>Ferramentas que fazem parte do meu processo</h2>
            <p className="section-subtitle">
              Tecnologias presentes na construção deste portfólio e das interfaces web.
            </p>
          </AnimatedSection>
          <span className="stack-index" aria-hidden="true">01 — 06</span>
        </div>

        <Motion.div
          className="stack-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tools.map(({ name, category, description, icon: ToolIcon }, index) => (
            <Motion.article className="stack-item" key={name} variants={fadeUp}>
              <span className="stack-item-number">0{index + 1}</span>
              {createElement(ToolIcon, { className: "stack-item-icon", "aria-hidden": true })}
              <div className="stack-item-copy">
                <span>{category}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <span className="stack-item-arrow" aria-hidden="true">↗</span>
            </Motion.article>
          ))}
        </Motion.div>

        <div className="dev-environment">
          <div className="dev-environment-heading">
            <span>AMBIENTE DE DESENVOLVIMENTO</span>
            <span>Frentes conectadas no processo</span>
          </div>
          <div className="dev-environment-grid">
            {["Frontend", "Backend", "Database", "API", "UI / UX", "Deploy"].map((area, index) => (
              <div className="environment-item" key={area}>
                <span>0{index + 1}</span>
                <strong>{area}</strong>
                <i aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
