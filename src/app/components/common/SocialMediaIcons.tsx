import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { href: "https://github.com/N-Crossman", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/noah-crossman", icon: <FaLinkedin />, label: "LinkedIn" },
];

export default function SocialIcons() {
    return (
     <div className="flex items-center gap-6">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white hover:text-white transition-colors duration-300 text-2xl"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}