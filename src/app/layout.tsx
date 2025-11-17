import './globals.css';
import Footer from "./components/layout/Footer"
import ThemeProvider from './components/layout/ThemeProvider';
import StarsBackground from './components/layout/StarsBackground';

export const metadata = {
  title: "Noah's Portfolio",
  description: "Junior full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <StarsBackground>
          {children}
          <Footer />
          </StarsBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}