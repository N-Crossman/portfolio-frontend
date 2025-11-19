import SocialIcons from "../common/SocialMediaIcons";

export default function Header() {
    return (
      <header className="w-full fixed left-0 bottom-6 lg:top-0 lg:bottom-auto z-50 pt-4 px-4 pointer-events-none">
        <div className="max-w-sm mx-auto">
            <div className="relative backdrop-blur-xl bg-black/5 dark:bg-white/10 border dark:border-white/20 border-black/5 rounded-3xl px-6 py-3 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/5 dark:from-white/5 via-transparent to-transparent pointer-events-none" />
                <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
              <SocialIcons />
            </div>
            </div>
        </div>
      </header>
    );
}