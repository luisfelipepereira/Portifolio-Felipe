import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Inicio", id: "inicio" },
  { name: "Sobre", id: "sobre" },
  { name: "Projetos", id: "projetos" },
  { name: "Contato", id: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  // detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="container nav">

        {/* LOGO */}
        <h2 className="logo">Luiz Felipe | DEV</h2>

        {/* MENU DESKTOP */}
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
            >
              {link.name}
              <span className="underline"></span>
            </a>
          ))}
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MENU MOBILE */}
      <motion.div
        className="mobile-menu"
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
      >
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </header>
  );
}