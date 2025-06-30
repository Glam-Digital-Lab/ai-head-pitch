'use client';

import React, { useEffect, useState } from 'react';

interface Dot {
  cx: number;
  cy: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [dots, setDots] = useState<Dot[] | null>(null);

  useEffect(() => {
    // Genera i 30 punti e setta lo stato
    const generated: Dot[] = Array.from({ length: 30 }, () => ({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setDots(generated);
  }, []);

  // Prima del mount non renderizziamo niente → SSR e client combaciano
  if (!dots) return null;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={`${dot.cx}%`}
          cy={`${dot.cy}%`}
          r="2"
          fill="currentColor"
          className="opacity-50"
        >
          <animate
            attributeName="r"
            values="1;3;1"
            dur="4s"
            begin={`${dot.delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.2;0.8;0.2"
            dur="4s"
            begin={`${dot.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      <path
        d="M10,20 L30,40 M50,60 L70,80 M20,80 L80,20"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        filter="url(#blur)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0;0.5;0"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}