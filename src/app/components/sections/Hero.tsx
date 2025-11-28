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
        Hello! I&rsquo;m Noah, a full-stack developer based in Calgary, Alberta who loves solving complex problems and building scalable applications. I hold a diploma in Full Stack Web Development from the University of Alberta and I&rsquo;m an active open source contributor.
      </p>
      <p className="mt-6 text-base sm:text-lg text-black dark:text-gray-300">
        My background managing teams in fast-paced environments has taught me to communicate clearly, solve problems efficiently, and lead by example. I thrive in collaborative settings where I can both contribute technically and elevate those around me.
      </p>
      <p className="mt-6 text-base sm:text-lg text-black dark:text-gray-300">
        When I&rsquo;m not coding, you can find me enjoying the beautiful Alberta wilderness, contributing to open source, or exploring new technologies.
      </p>
      </div>
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-500 shadow-lg flex-shrink-0 lg:mt-32">
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