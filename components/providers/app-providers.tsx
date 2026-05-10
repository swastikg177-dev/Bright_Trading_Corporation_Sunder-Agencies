"use client";

import * as React from "react";

import { LanguageProvider } from "@/components/providers/language-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="btc-theme">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
