"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = (theme ?? resolvedTheme) === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full dark:text-white"
    >
      {/* until mounted, render a neutral placeholder to avoid hydration mismatch */}
      {!mounted ? (
        <Moon className="size-4 opacity-0 dark:text-white" />
      ) : isDark ? (
        <Sun className="size-4 dark:text-white" />
      ) : (
        <Moon className="size-4 dark:text-white" />
      )}
    </Button>
  );
}
