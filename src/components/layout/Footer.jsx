import SocialButtons from "../ui/SocialButtons";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "O que faço", href: "#frames" },
  { label: "Stack", href: "#stack" },
  { label: "Destaque", href: "#destaque" },
  { label: "Processo", href: "#dashboard" },
  { label: "Projetos", href: "#projetos" },
  { label: "GitHub", href: "#github" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-kicker">DESENVOLVIMENTO WEB</span>
          <h3 className="footer-logo">Luiz Felipe</h3>
          <p className="footer-text">
            Crio sites e aplicações web com atenção à clareza visual,
            responsividade e aos detalhes de uso.
          </p>
        </div>

        <nav className="footer-navigation" aria-label="Navegação do rodapé">
          <h4>Navegue pelo portfólio</h4>
          <div className="footer-links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <nav className="footer-connect" aria-label="Redes sociais">
          <h4>Conecte-se</h4>
          <p className="footer-connect-text">Acompanhe meu trabalho e projetos.</p>
          <SocialButtons className="footer-socials" showLabels />
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>Feito com cuidado, do primeiro detalhe ao último.</span>
          <p>© {new Date().getFullYear()} Luiz Felipe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
