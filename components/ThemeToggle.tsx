'use client';

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MonitorIcon as DesktopComputerIcon  } from 'lucide-react';

const themes = ['light', 'system', 'dark'] as const;
type Theme = typeof themes[number];

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem('theme') as Theme) || 'system';
    if (themes.includes(stored)) {
      setTheme(stored);
    }
    applyTheme(stored);
  }, []);

  function applyTheme(value: Theme) {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    if (value === 'system') {
      const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', dark);
    } else {
      root.classList.toggle('dark', value === 'dark');
    }
  }

  function handleClick(nextIndex: number) {
    const next = themes[nextIndex % themes.length];
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2 border border-neutral-300 dark:border-neutral-600 rounded-full p-1 bg-white dark:bg-black">
      {themes.map((t, i) => {
        const Icon = t === 'light' ? SunIcon : t === 'dark' ? MoonIcon : DesktopComputerIcon;
        const isActive = theme === t;
        return (
          <button
            key={t}
            aria-label={t}
            onClick={() => handleClick(i)}
            className={`p-2 rounded-full transition-colors ${
              isActive ? 'bg-neutral-200 dark:bg-neutral-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
          >
            <Icon className={`h-5 w-5 ${isActive ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`} />
          </button>
        );
      })}
    </div>
  );
}
