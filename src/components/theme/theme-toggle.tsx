"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server cannot read the visitor's system theme or localStorage preference.
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="flex size-11 items-center justify-center text-foreground transition-colors hover:bg-subtle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Dark mode"
      aria-pressed={mounted ? isDark : undefined}
      title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Change color theme"}
    >
      <SunIcon className="size-[21px] dark:hidden" />
      <MoonIcon className="hidden size-[21px] dark:block" />
    </button>
  );
}
