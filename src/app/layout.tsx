import './globals.css';
import Footer from "./components/layout/Footer"
import ThemeProvider from './components/layout/ThemeProvider';

export const metadata = {
  title: "Noah's Portfolio",
  description: "Junior full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}