import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="hero">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Luiz Felipe</h1>
      </motion.div>
      <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
>

</motion.h1>

    </section>
  );
}