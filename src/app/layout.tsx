import './globals.css';
import Footer from "./components/layout/Footer"

export const metadata = {
  title: "Noah's Portfolio",
  description: "Junior full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-white">
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}