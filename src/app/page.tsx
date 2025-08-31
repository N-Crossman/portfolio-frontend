export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-5xl font-extrabold mb-8">
        {"Hi, I'm Noah 👋"}
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-300 pb-2">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          {"I'm Noah, a junior full-stack developer building clean, efficient web applications."}
          Currently focusing on Python, Django, React, and Next.js.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-300 pb-2">
          Tech Stack
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Python / Django / Django REST Framework</li>
          <li>JavaScript / TypeScript / React / Next.js</li>
          <li>MySQL / SQL</li>
          <li>Docker</li>
          <li>C#</li>
          <li>HTML / CSS / Tailwind CSS</li>
        </ul>
      </section>
    </main>
  );
}
