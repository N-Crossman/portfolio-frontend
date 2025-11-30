
export default function QuickLinks() {
    const links = [
        { name: "About", url: "#about" },
        { name: "Projects", url: "#projects" },
        { name: "Skills", url: "#skills" },
        { name: "Contact", url: "#contact" },
        { name: "GitHub", url: "https://github.com/N-Crossman", external: true },
        { name: "LinkedIn", url: "https://linkedin.com/in/noah-crossman", external: true },
    ];

    return (
    <div className=" text-white w-fit mx-auto">
      <h2 className=" text-black dark:text-white text-lg font-bold dark:font-semibold mb-3 text-center">Quick Links</h2>
      <div className="grid grid-cols-2 gap-4 justify-center">
        {links.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black dark:text-white hover:text-green-400 dark:hover:text-green-400"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.url}
                className="p-2 text-black dark:text-white hover:text-green-400 dark:hover:text-green-400"
              >
                {link.name}
              </a>
            )
        ))}
      </div>
    </div>
  );
}