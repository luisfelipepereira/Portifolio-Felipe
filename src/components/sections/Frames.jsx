import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { fadeUp, stagger } from "../../utils/animations";
import { motion } from "framer-motion";

const frames = [
  {
    tag: "Automacao",
    title: "Fluxos inteligentes",
    description: "Automatize processos e conecte dados em tempo real.",
  },
  {
    tag: "Design",
    title: "Experiencias premium",
    description: "Interfaces fluidas com foco em conversao e usabilidade.",
  },
  {
    tag: "Performance",
    title: "Velocidade maxima",
    description: "Arquitetura otimizada para escalar com seguranca.",
  },
  {
    tag: "Dados",
    title: "Insights acionaveis",
    description: "Dashboards com indicadores que guiam decisoes.",
  },
];

function FrameCard({ tag, title, description }) {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <div
      className="frame-card"
      onMouseMove={handleMove}
      onMouseLeave={() => setCoords({ x: 50, y: 50 })}
      style={{ "--x": `${coords.x}%`, "--y": `${coords.y}%` }}
    >
      <span className="frame-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Frames() {
  return (
    <section id="frames" className="section section-frames">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Frames</p>
            <h2>Interatividade que surpreende</h2>
            <p className="section-subtitle">
              Componentes com efeitos customizados em JavaScript para criar
              experiencias memoraveis.
            </p>
          </AnimatedSection>
        </div>

        <motion.div
          className="frames-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {frames.map((frame) => (
            <motion.div key={frame.title} variants={fadeUp}>
              <FrameCard {...frame} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
