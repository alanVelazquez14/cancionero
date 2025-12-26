"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, ArrowLeft } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    document.documentElement.classList.toggle("dark");
    setDarkMode(newMode);
    // Opcional: Guardar preferencia
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              onClick={() => router.back()}
              className="group flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Volver
            </button>
          )}

          {isHome && (
            <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Cancionero Folclórico
            </h1>
          )}
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition-all active:scale-95"
        >
          {darkMode ? (
            <Sun size={19} className="text-yellow-500 fill-yellow-500/10" />
          ) : (
            <Moon size={19} className="text-indigo-600 fill-indigo-600/10" />
          )}
        </button>
      </div>
    </header>
  );
}