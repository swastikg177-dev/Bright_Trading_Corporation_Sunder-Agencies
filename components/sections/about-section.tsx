"use client";

import { CheckCircle2 } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { copy } from "@/lib/content";

export function AboutSection() {
  const { locale } = useLanguage();
  const about = copy.about[locale];

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} body={about.body} />
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.08}>
            <Card className="bg-white/6 p-7">
              <p className="font-display text-xl font-semibold text-foreground">{about.cardTitle}</p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{about.cardBody}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="grid gap-4 sm:grid-cols-2">
              {about.highlights.map((item) => (
                <Card key={item} className="bg-white/5 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm font-medium leading-6 text-foreground">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
