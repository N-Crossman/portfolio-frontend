import Image from "next/image"
import ThemeToggle from "../common/ThemeToggle";

export default function Hero() {
    return (
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="absolute top-4 right-6 z-[9999] scale-110 sm:scale-100">
        <ThemeToggle />
      </div>
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mt-8 rounded-full overflow-hidden border-4 border-blue-400 dark:border-blue-500 shadow-lg">
        <Image
          src="/images/ProfilePic.jpg"
          alt="Noah's Profile Picture"
          fill
          priority
          sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 208px"
          className="object-cover object-top"
        />
      </div>

      <h1 className="mt-10 text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white">
        Hi, I’m Noah 👋
      </h1>

      <p className="mt-6 max-w-xl text-base sm:text-lg text-black dark:text-gray-300">
        I’m a junior software developer passionate about building modern, responsive, and clean web experiences.
      </p>
    </section>
  );
} 