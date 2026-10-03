import { createElement } from "react";
import { motion as Motion } from "framer-motion";
import { FaCode, FaCompassDrafting, FaLayerGroup } from "react-icons/fa6";
import { FiLayout, FiServer } from "react-icons/fi";
import AnimatedSection from "../ui/AnimatedSection";
import { fadeUp, stagger } from "../../utils/animations";

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces responsivas e componentes React com atenção a cada estado.",
    icon: FiLayout,
  },
  {
    number: "02",
    title: "Backend",
    description: "Lógica de aplicação, APIs e integração entre interface e serviços.",
    icon: FiServer,
  },
  {
    number: "03",
    title: "UI / UX",
    description: "Hierarquia, navegação e interações pensadas para pessoas reais.",
    icon: FaCompassDrafting,
  },
  {
    number: "04",
    title: "Sistemas web",
    description: "Experiências completas que conectam interface, dados e funcionalidades.",
    icon: FaLayerGroup,
  },
];

function CapabilityCard({ number, title, description, icon: CapabilityIcon }) {
  return (
    <article className="frame-card capability-card">
      <div className="capability-topline"><span>{number}</span>{createElement(CapabilityIcon, { "aria-hidden": true })}</div>
      <div className="capability-copy"><p className="frame-tag">Área de atuação</p><h3>{title}</h3><p>{description}</p></div>
      <FaCode className="capability-mark" aria-hidden="true" />
    </article>
  );
}

export default function Frames() {
  return (
    <section id="frames" className="section section-frames">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">O que eu faço</p>
            <h2>Transformo ideias em produtos digitais.</h2>
            <p className="section-subtitle">
              Da primeira tela às funcionalidades que fazem uma aplicação funcionar.
            </p>
          </AnimatedSection>
        </div>

        <Motion.div
          className="frames-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilities.map((capability) => (
            <Motion.div key={capability.title} variants={fadeUp}>
              <CapabilityCard {...capability} />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
