"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircleMore } from "lucide-react";

import { businessInfo, copy } from "@/lib/content";
import { useLanguage } from "@/components/providers/language-provider";

export function SiteFooter() {
  const { locale } = useLanguage();
  const footer = copy.footer[locale];
  const navItems = copy.nav[locale];

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div>
            <p className="font-display text-2xl font-semibold">{businessInfo.shortName}</p>
            <p className="text-sm text-white/60">Sunder Agencies</p>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70">{footer.description}</p>
        </div>

        <div className="space-y-4">
          <p className="font-display text-lg font-semibold">{footer.quickLinks}</p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm text-white/70">
          <a href={businessInfo.phoneLink} className="flex items-start gap-3 transition hover:text-white">
            <Phone className="mt-0.5 h-4 w-4" />
            <span>{businessInfo.phoneDisplay}</span>
          </a>
          <a href={businessInfo.whatsappLink} className="flex items-start gap-3 transition hover:text-white">
            <MessageCircleMore className="mt-0.5 h-4 w-4" />
            <span>WhatsApp</span>
          </a>
          <a href={businessInfo.emailLink} className="flex items-start gap-3 transition hover:text-white">
            <Mail className="mt-0.5 h-4 w-4" />
            <span>{businessInfo.email}</span>
          </a>
          <a
            href={businessInfo.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 transition hover:text-white"
          >
            <MapPin className="mt-0.5 h-4 w-4" />
            <span>{businessInfo.address}</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        Copyright © {new Date().getFullYear()} {businessInfo.name}. {footer.rights}
      </div>
    </footer>
  );
}
