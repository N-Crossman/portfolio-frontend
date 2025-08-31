import './globals.css';

export const metadata = {
  title: "Noah's Portfolio",
  description: "Junior full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}