"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, MoonStar, PhoneCall, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { businessInfo, copy } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { locale, toggleLocale } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const navItems = copy.nav[locale];
  const isDark = resolvedTheme === "dark";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/75 backdrop-blur-2xl">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-sm font-semibold text-primary shadow-glow">
            BT
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-[0.14em] text-primary">
              BRIGHT TRADERS | SUNDAR AGENCIES
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-white/10"
          >
            <span className={cn("transition", locale === "en" ? "text-primary" : "text-muted-foreground")}>EN</span>
            <span className="text-muted-foreground">/</span>
            <span className={cn("transition", locale === "hi" ? "text-primary" : "text-muted-foreground")}>हिं</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:border-primary/40 hover:bg-white/10"
          >
            {mounted ? (
              isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />
            ) : (
              <div className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <Button asChild>
            <a href={businessInfo.phoneLink}>
              <PhoneCall className="h-4 w-4" />
              {locale === "en" ? "Call Store" : "कॉल करें"}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-medium text-foreground transition hover:border-primary/40 hover:bg-white/10"
          >
            <span className={cn("transition", locale === "en" ? "text-primary" : "text-muted-foreground")}>EN</span>
            <span className="text-muted-foreground">/</span>
            <span className={cn("transition", locale === "hi" ? "text-primary" : "text-muted-foreground")}>हिं</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:border-primary/40 hover:bg-white/10"
          >
            {mounted ? (
              isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />
            ) : (
              <div className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-12 flex flex-col gap-8">
                <div>
                  <p className="font-display text-lg font-semibold text-white">{businessInfo.shortName}</p>
                </div>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link href={item.href} className="text-lg font-medium text-white/90 transition hover:text-white">
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <a href={businessInfo.phoneLink}>
                    <PhoneCall className="h-4 w-4" />
                    {locale === "en" ? "Call Now" : "अभी कॉल करें"}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
