"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; // Предполагается, что кнопка shadcn уже установлена

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Предотвращает расхождение UI при статическом рендеринге
  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return <Button variant="outline" size="icon" disabled className="w-9 h-9" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Переключить тему"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}