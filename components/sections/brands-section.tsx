"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandCollections } from "@/lib/catalog";

export function BrandsSection() {
  const { locale } = useLanguage();

  return (
    <section id="brands" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(94,242,255,0.08),_transparent_18%),linear-gradient(180deg,transparent,rgba(29,155,255,0.03),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={locale === "en" ? "Brand Portfolio" : "ब्रांड पोर्टफोलियो"}
            title={
              locale === "en"
                ? "Trusted brands across appliances, lighting, and electrical categories."
                : "अप्लायंसेस, लाइटिंग और इलेक्ट्रिकल्स में उपलब्ध विश्वसनीय ब्रांड।"
            }
            body={
              locale === "en"
                ? "A curated mix of recognized brands available in-store across major product categories."
                : "मुख्य प्रोडक्ट कैटेगरी में स्टोर पर उपलब्ध पहचाने हुए और विश्वसनीय ब्रांड्स।"
            }
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {brandCollections.map((collection, index) => (
            <Reveal key={collection.id} delay={index * 0.06}>
              <Card className="h-full border-white/10 bg-white/5 p-7">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">{collection.title[locale]}</p>
                  <p className="text-sm leading-7 text-muted-foreground">{collection.description[locale]}</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {collection.logos.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex min-h-24 items-center justify-center rounded-[20px] border border-white/10 bg-white px-4 py-3"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={120}
                        height={48}
                        className="h-auto max-h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
