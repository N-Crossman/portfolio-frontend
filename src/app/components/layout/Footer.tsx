import SocialMediaIcons from "../common/SocialMediaIcons"

export default function Footer() {
    return (
      <footer className="w-full bg-neutral-900 text-white border-t border-neutral-800 fixed bottom-0 left-0">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3">
        <p className="text-sm">&copy; {new Date().getFullYear()}. All rights reserved.</p>
        <SocialMediaIcons />
      </div>
    </footer>
  );
}