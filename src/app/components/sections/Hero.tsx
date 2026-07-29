import Image from "next/image"
import ThemeToggle from "../common/ThemeToggle";

export default function Hero() {
    return (
      <section id="about" className="relative flex flex-col lg:flex-row items-start justify-between text-left py-16 px-6 max-w-7xl mx-auto lg:mr-auto lg:ml-64 gap-8 lg:gap-16">
      <div className="fixed top-4 right-6 z-[99999] scale-110 sm:scale-100">
        <ThemeToggle />
      </div>
      <div className="flex-1 max-w-2xl">
      <h1 className="mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
        About Me
      </h1>
      <p className="mt-6 text-base sm:text-lg text-black dark:text-gray-300">
       I&lsquo;m Noah, a full-stack developer based in Calgary, Alberta. My stack centers on TypeScript, React, and Next.js on the frontend, with backend work in Python and FastAPI. I build and ship full-stack applications end to end, from architecture and API design to deployment, and I&lsquo;ve contributed to open-source projects with merged PRs in production codebases. 
       </p>
      <p className="mt-6 text-base sm:text-lg text-black dark:text-gray-300">
       Before development, I spent 8 years in operations and team management. That background shaped how I approach my work: I communicate clearly, take ownership of what I build, and know how to stay focused and deliver when the pressure is on.
      </p>
      <p className="mt-6 text-base sm:text-lg text-black dark:text-gray-300">
       When I’m not coding, you’ll find me out in the Alberta wilderness, involved in various sports, or digging into something new I’ve been meaning to build.
      </p>
      </div>
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-black dark:border-neutral-200 shadow-lg flex-shrink-0 lg:mt-32">
        <Image
          src="/images/ProfilePic.jpg"
          alt="Noah's Profile Picture"
          fill
          priority
          sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}