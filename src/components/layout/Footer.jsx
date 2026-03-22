import SocialButtons from "../ui/SocialButtons";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Destaque", href: "#destaque" },
  { label: "Projetos", href: "#projetos" },
  { label: "GitHub", href: "#github" },
  { label: "Frames", href: "#frames" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-logo">Luiz Felipe</h3>
          <p className="footer-text">
            Desenvolvedor Full Stack focado em produtos digitais escalaveis,
            interfaces premium e performance real.
          </p>
        </div>

        <div>
          <h4>Atalhos</h4>
          <div className="footer-links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>Conecte-se</h4>
          <SocialButtons className="footer-socials" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>(c) 2026 Luiz Felipe | Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
