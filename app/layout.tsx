import './styles/globals.css';
import type { ReactNode } from 'react';
import ThemeToggle from '../components/ThemeToggle'; 
import AnimatedBackground from '../components/AnimatedBackground';

export const metadata = {
  title: 'Fashion AI Experience',
  description: 'Conversational fashion shopping powered by AI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white font-sans transition-colors">
        <AnimatedBackground />
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur border-b border-neutral-300 dark:border-neutral-800 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">GDL AI Conversational Ecommerce</h1>
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-blue-500 transition">Contact</a>
            <ThemeToggle />
          </div>
        </header>

        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            The Future of Ecommerce is Conversational
          </h1>
          <p className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8">
            <span><b>Move beyond traditional websites</b></span> <br></br>Delight your customers with AI-powered shopping experiences.
          </p>
          <a
            href="#presentation"
            className="text-lg px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded animate-fade-in-up delay-1000"
          >
            Explore the Demo Presentation
          </a>
        </section>

        <section className="min-h-screen overflow-x-hidden">
          {children}
        </section>

        <footer className="border-t border-neutral-300 dark:border-neutral-800 px-6 py-4 text-sm text-center text-neutral-600 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} GDL AI Conversational Ecommerce
        </footer>
      </body>
    </html>
  );
}