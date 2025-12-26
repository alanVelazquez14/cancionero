"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, ArrowLeft } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  // Inicializar modo según html
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        
        {/* Izquierda: volver o título */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
            >
              <ArrowLeft size={18} />
              Volver
            </button>
          )}

          {isHome && (
            <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
              Cancionero Folclórico
            </h1>
          )}
        </div>

        {/* Derecha: toggle theme */}
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
