// app/layout.tsx
import './styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Fashion AI Experience',
  description: 'Conversational fashion shopping powered by AI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}