import { useEffect, useState } from "react";
import {
  FaUsers,
  FaBookOpen,
} from "react-icons/fa6";
import AnimatedSection from "../ui/AnimatedSection";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ContactButton from "../ui/ContactButton";
import { slideIn } from "../../utils/animations";
import { SOCIAL_LINKS } from "../../utils/social";
import profileImage from "../../assets/images/profile.png";

const USERNAME = "luisfelipepereira";

const fallbackProfile = {
  name: "Luiz Felipe",
  bio: "Perfil e repositórios públicos no GitHub.",
  avatar_url: profileImage,
  public_repos: null,
  followers: null,
  following: null,
};

export default function GithubSection() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    const loadGithub = async () => {
      try {
        const profileResponse = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );

        if (!profileResponse.ok) {
          throw new Error("GitHub request failed");
        }

        const profileData = await profileResponse.json();

        if (isMounted) {
          setProfile(profileData);
          setStatus("ready");
        }
      } catch {
        if (isMounted) {
          setStatus("error");
        }
      }
    };

    loadGithub();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="section section-github">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">GitHub / Open Source</p>
            <h2>Encontre meus projetos e código</h2>
            <p className="section-subtitle">
              Consulte meu perfil e os repositórios públicos diretamente no GitHub.
            </p>
          </AnimatedSection>
        </div>

        <div className="github-showcase">
          <AnimatedSection
            className="github-profile"
            variants={slideIn("left", 80)}
          >
            <Card className="github-card" glow>
              <div className="github-avatar">
                <img src={profile.avatar_url || profileImage} alt={`Foto de ${profile.name || "Luiz Felipe"}`} />
              </div>
              <div>
                <h3>{profile.name}</h3>
                <p className="github-bio">{profile.bio}</p>
              </div>
              <div className="github-stats">
                <div>
                  <FaBookOpen />
                  <span>{profile.public_repos ?? "—"}</span>
                  <small>Repositórios</small>
                </div>
                <div>
                  <FaUsers />
                  <span>{profile.followers ?? "—"}</span>
                  <small>Seguidores</small>
                </div>
                <div>
                  <FaUsers />
                  <span>{profile.following ?? "—"}</span>
                  <small>Seguindo</small>
                </div>
              </div>
              <div className="github-actions">
                <Button
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver GitHub
                </Button>
                <ContactButton>Iniciar projeto</ContactButton>
              </div>
              {status === "error" && (
                <p className="github-note">
                  Nao foi possivel carregar dados ao vivo. Veja meu perfil
                  diretamente.
                </p>
              )}
            </Card>
          </AnimatedSection>
          <AnimatedSection className="terminal-panel" delay={0.12}>
            <div className="terminal-topbar"><span /><span /><span /><small>terminal — visualização ilustrativa</small></div>
            <div className="terminal-code" aria-label="Exemplo visual de comandos de desenvolvimento, não são registros reais">
              <p><span>$</span> npm run build</p>
              <p className="terminal-muted">✓ Build concluído</p>
              <p><span>$</span> git push origin main</p>
              <p className="terminal-muted">↗ Código enviado ao repositório</p>
              <p><span>$</span> <i className="terminal-cursor" /></p>
            </div>
            <p className="terminal-caption">Uma representação visual do fluxo de desenvolvimento. Não corresponde a uma execução em tempo real.</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
