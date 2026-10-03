import { motion as Motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { fadeUp, stagger } from "../../utils/animations";

const steps = [
  { number: "01", title: "Ideia", description: "Alinhar objetivo, público e conteúdo." },
  { number: "02", title: "Arquitetura", description: "Definir estrutura, navegação e componentes." },
  { number: "03", title: "Desenvolvimento", description: "Construir a experiência e suas interações." },
  { number: "04", title: "Testes", description: "Revisar fluxos, responsividade e acabamento." },
  { number: "05", title: "Deploy", description: "Preparar a versão final para publicação." },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="section">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Processo</p>
            <h2>Uma boa entrega começa com um processo claro.</h2>
          </AnimatedSection>
        </div>

        <Motion.div
          className="process-timeline"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step) => (
            <Motion.div className="process-step" key={step.number} variants={fadeUp}>
              <span className="process-number">{step.number}</span>
              <span className="process-node" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
