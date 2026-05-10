"use client";

import { BadgeCheck, HandCoins, Headset, ShieldCheck, Store, SwatchBook } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { copy } from "@/lib/content";

const icons = [ShieldCheck, HandCoins, Store, BadgeCheck, Headset, SwatchBook];

export function WhyChooseUsSection() {
  const { locale } = useLanguage();
  const whyUs = copy.whyUs[locale];

  return (
    <section id="why-us" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} align="center" />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {whyUs.items.map((item, index) => {
          const Icon = icons[index];

          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card className="group h-full border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-glow transition duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
