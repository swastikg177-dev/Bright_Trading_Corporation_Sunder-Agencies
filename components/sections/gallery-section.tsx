"use client";

import Image from "next/image";
import { Expand } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { copy, galleryItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const { locale } = useLanguage();
  const gallery = copy.gallery[locale];

  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} body={gallery.body} align="center" />
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.04} y={18}>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "group relative mb-5 block w-full overflow-hidden rounded-[28px] border border-white/10 bg-card/80 text-left shadow-glass backdrop-blur-xl",
                      item.size === "portrait" ? "aspect-[4/5]" : item.size === "square" ? "aspect-square" : "aspect-[5/4]",
                    )}
                    aria-label={gallery.preview}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                      <p className="max-w-[80%] text-sm font-medium text-white">{item.alt[locale]}</p>
                      <div className="rounded-full border border-white/15 bg-white/10 p-3 text-white transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <Expand className="h-4 w-4" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="overflow-hidden p-2">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px]">
                    <Image
                      src={item.src}
                      alt={item.alt[locale]}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
