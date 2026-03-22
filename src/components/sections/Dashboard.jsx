import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import Card from "../ui/Card";
import { fadeUp, stagger } from "../../utils/animations";

const stats = [
  { label: "Projetos entregues", value: "+12" },
  { label: "Clientes atendidos", value: "+8" },
  { label: "Tempo medio de entrega", value: "4-6 semanas" },
  { label: "Satisfacao", value: "98%" },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="section">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">Dashboard</p>
            <h2>Resultados que sustentam confianca</h2>
          </AnimatedSection>
        </div>

        <motion.div
          className="dashboard-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Card className="stat-card" glow>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
