import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import useScroll from "../../hooks/useScroll";
import useScrollSpy from "../../hooks/useScrollSpy";
import SocialButtons from "../ui/SocialButtons";
import logoFelipe from "../../assets/images/logo-felipe-transparent.png";

const links = [
  { name: "Inicio", id: "inicio" },
  { name: "Sobre", id: "sobre" },
  { name: "O que faço", id: "frames" },
  { name: "Stack", id: "stack" },
  { name: "Projetos", id: "projetos" },
  { name: "GitHub", id: "github" },
  { name: "Contato", id: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(24);
  const sectionIds = useMemo(() => links.map((link) => link.id), []);
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);

  return (
    <Motion.header
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="container nav">
        <a href="#inicio" className="logo">
          <img src={logoFelipe} alt="Logo Felipe Dev" />
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link"
              data-active={active === link.id}
              aria-current={active === link.id ? "page" : undefined}
            >
              <span>{link.name}</span>
              {active === link.id && (
                <Motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <SocialButtons className="nav-socials" />

        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <Motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <Motion.aside
              id="mobile-menu"
              className="mobile-panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-header">
                <span className="mobile-title">Menu</span>
                <button
                  className="close-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                >
                  <span />
                  <span />
                </button>
              </div>

              <div className="mobile-links">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <SocialButtons className="mobile-socials" />
            </Motion.aside>
          </>
        )}
      </AnimatePresence>
    </Motion.header>
  );
}
