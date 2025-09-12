"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Avoid hydration mismatch by rendering a neutral placeholder until mounted */}
      {!mounted ? (
        <span className="inline-block h-4 w-4" />
      ) : isDark ? (
        <Sun className="size-4 dark:text-white" />
      ) : (
        <Moon className="size-4 dark:text-white" />
      )}
    </Button>
  );
}
