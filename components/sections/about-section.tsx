"use client";

import { CheckCircle2 } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { productCategories } from "@/lib/catalog";
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
              {productCategories.map((category) => (
                <Dialog key={category.id}>
                  <DialogTrigger asChild>
                    <button type="button" className="text-left">
                      <Card className="bg-white/5 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/10">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium leading-6 text-foreground">{category.title[locale]}</p>
                            <p className="mt-1 text-xs leading-6 text-muted-foreground">{category.description[locale]}</p>
                          </div>
                        </div>
                      </Card>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] max-w-3xl p-6 sm:p-8">
                    <div className="flex max-h-[calc(85vh-3rem)] flex-col space-y-5">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-primary">{about.eyebrow}</p>
                        <DialogTitle className="mt-3">{category.title[locale]}</DialogTitle>
                        <DialogDescription className="mt-3">{category.description[locale]}</DialogDescription>
                      </div>
                      <div className="grid max-h-[50vh] gap-3 overflow-y-auto pr-2 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
