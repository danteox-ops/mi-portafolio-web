"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-border/40 bg-secondary/50 flex items-center justify-center text-muted-foreground">
        <Sun className="w-4 h-4 opacity-50" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full border border-border/60 bg-secondary/60 hover:bg-secondary flex items-center justify-center text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-architectural-wood"
      aria-label="Cambiar modo oscuro / claro"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-architectural-wood transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-foreground/80 transition-transform duration-300" />
      )}
    </motion.button>
  );
}
