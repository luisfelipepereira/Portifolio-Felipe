import { FaArrowUp } from "react-icons/fa6";
import { AnimatePresence, motion as Motion } from "framer-motion";
import useScroll from "../../hooks/useScroll";

export default function BackToTop() {
  const visible = useScroll(640);

  const returnToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <Motion.button
          className="back-to-top"
          type="button"
          onClick={returnToTop}
          aria-label="Voltar ao início da página"
          initial={{ opacity: 0, y: 10, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.94 }}
          transition={{ duration: 0.18 }}
        >
          <FaArrowUp aria-hidden="true" />
        </Motion.button>
      )}
    </AnimatePresence>
  );
}
