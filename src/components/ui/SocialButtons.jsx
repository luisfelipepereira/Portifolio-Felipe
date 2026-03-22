import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SOCIAL_LINKS } from "../../utils/social";

const socials = [
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: FaLinkedinIn,
  },
];

export default function SocialButtons({ className = "" }) {
  return (
    <div className={`social-buttons ${className}`.trim()}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="social-button"
            aria-label={social.label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
