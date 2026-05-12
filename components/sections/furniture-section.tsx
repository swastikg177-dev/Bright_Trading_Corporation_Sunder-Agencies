"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { furnitureShowcase } from "@/lib/catalog";

export function FurnitureSection() {
  const { locale } = useLanguage();

  return (
    <section id="furniture" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow={locale === "en" ? "Furniture Collection" : "फर्नीचर कलेक्शन"}
          title={
            locale === "en"
              ? "Furniture now joins our electronics and electrical range."
              : "अब हमारे स्टोर में इलेक्ट्रॉनिक्स और इलेक्ट्रिकल्स के साथ फर्नीचर भी उपलब्ध है।"
          }
          body={
            locale === "en"
              ? "From beds and wardrobes to sofas, office chairs, and storage solutions, the store now offers practical furniture choices for homes and workspaces."
              : "बेड, वार्डरोब, सोफा, ऑफिस चेयर और स्टोरेज सॉल्यूशंस तक, अब स्टोर में घर और ऑफिस के लिए फर्नीचर विकल्प भी उपलब्ध हैं।"
          }
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {furnitureShowcase.map((item, index) => (
          <Reveal key={item.src} delay={index * 0.05}>
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 p-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white">{item.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.description[locale]}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
