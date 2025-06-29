// app/layout.tsx
import './styles/globals.css'; // Assicurati che Tailwind sia qui
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Fashion AI Experience',
  description: 'Conversational fashion shopping powered by AI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">GDL AI Conversational Ecommerce</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-blue-500 transition">Contact</a>
          </nav>
        </header>

        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            The Future of Fashion is Conversational
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 max-w-2xl mb-8">
            Move beyond traditional websites. Delight your customers with AI-powered shopping experiences.
          </p>
          
          <a
  href="#presentation"
  className="text-lg px-6 py-3 bg-white text-black rounded animate-fade-in-up delay-1000"
>
  Explore the Demo Presentation
</a>
        </section>

        <section className="min-h-screen overflow-x-hidden">
          {children}
        </section>

        <footer className="border-t border-neutral-800 px-6 py-4 text-sm text-center text-neutral-500">
          &copy; {new Date().getFullYear()} GDL AI Conversational Ecommerce
        </footer>
      </body>
    </html>
  );
}