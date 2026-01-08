import './globals.css';
import Footer from "./components/layout/Footer"
import ThemeProvider from './components/layout/ThemeProvider';
import BackgroundSwitcher from './components/layout/BackgroundSwitcher';
import Header from './components/layout/Header';

export const metadata = {
  title: "Noah Crossman | Portfolio",
  description: "Junior full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <BackgroundSwitcher>
            {children}
            <Footer />
          </BackgroundSwitcher>
        </ThemeProvider>
      </body>
    </html>
  );
}