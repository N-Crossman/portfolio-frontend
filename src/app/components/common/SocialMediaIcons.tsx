import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaRegFolder } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";

const socialLinks = [
    { href: "/", icon: <IoHomeOutline />, label: "Home" },
    { href: "UPDATE: About me section", icon: <VscAccount />, label: "About" },
    { href: "UPDATE: Projects section", icon: <FaRegFolder />, label: "Projects" },
    { href: "UPDATE: Contact section", icon: <GrContact />, label: "Contact" },
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
          className="text-black hover:text-green-400 hover:scale-110 transform transition-all duration-300 text-2xl dark:text-white dark:hover:text-green-400"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}