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

const USERNAME = "luisfelipepereira";

const fallbackProfile = {
  name: "Luiz Felipe",
  bio: "Desenvolvedor Full Stack",
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  public_repos: 0,
  followers: 0,
  following: 0,
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
      } catch (error) {
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

  const languages =
    profile?.language || "JavaScript / TypeScript";

  return (
    <section id="github" className="section section-github">
      <div className="container">
        <div className="section-heading">
          <AnimatedSection>
            <p className="section-tag">GitHub / Open Source</p>
            <h2>Contribuicoes reais e projetos de alto nivel</h2>
            <p className="section-subtitle">
              Uma visao direta do meu trabalho no GitHub, repositorios em
              destaque e principais tecnologias.
            </p>
          </AnimatedSection>
        </div>

        <div className="github-grid github-grid-single">
          <AnimatedSection
            className="github-profile"
            variants={slideIn("left", 80)}
          >
            <Card className="github-card" glow>
              <div className="github-avatar">
                <img src={profile.avatar_url} alt={profile.name} />
              </div>
              <div>
                <h3>{profile.name}</h3>
                <p className="github-bio">{profile.bio}</p>
              </div>
              <div className="github-stats">
                <div>
                  <FaBookOpen />
                  <span>{profile.public_repos}</span>
                  <small>Repos</small>
                </div>
                <div>
                  <FaUsers />
                  <span>{profile.followers}</span>
                  <small>Followers</small>
                </div>
                <div>
                  <FaUsers />
                  <span>{profile.following}</span>
                  <small>Seguindo</small>
                </div>
              </div>
              <div className="github-languages">
                <span>{languages}</span>
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
        </div>
      </div>
    </section>
  );
}
