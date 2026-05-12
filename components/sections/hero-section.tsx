"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircleMore, PhoneCall, Sparkles, Zap } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { productCategories } from "@/lib/catalog";
import { businessInfo, copy } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type FeaturedCategory = {
  id: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  items: string[];
};

export function HeroSection() {
  const { locale } = useLanguage();
  const hero = copy.hero[locale];

  const getCategory = (id: string) => productCategories.find((category) => category.id === id);

  const homeAppliances = getCategory("home-appliances");
  const lightingProducts = getCategory("lighting-products");
  const switchesAccessories = getCategory("switches-accessories");
  const commonElectrical = getCategory("common-electrical-appliances");
  const wiringAccessories = getCategory("wiring-accessories");
  const furniture = getCategory("furniture");

  const featuredCategories = [
    homeAppliances && {
      id: "home-appliances",
      title: { en: "Home Appliances", hi: "होम अप्लायंसेस" },
      description: homeAppliances.description,
      items: homeAppliances.items,
    },
    lightingProducts &&
      switchesAccessories && {
        id: "lighting-switches",
        title: { en: "Lighting & Switches", hi: "लाइटिंग और स्विचेस" },
        description: {
          en: "Lighting products, modular switches, sockets, regulators, and fitting accessories.",
          hi: "लाइटिंग प्रोडक्ट्स, मॉड्यूलर स्विचेस, सॉकेट, रेगुलेटर और फिटिंग एक्सेसरीज़।",
        },
        items: [...lightingProducts.items, ...switchesAccessories.items],
      },
    commonElectrical &&
      wiringAccessories && {
        id: "wires-electrical-supplies",
        title: { en: "Wires & Electrical Supplies", hi: "वायर्स और इलेक्ट्रिकल सप्लाई" },
        description: {
          en: "Wires, cables, conduits, backup essentials, and practical electrical utility products.",
          hi: "वायर, केबल, कंड्युट, पावर बैकअप और रोज़मर्रा की इलेक्ट्रिकल यूटिलिटी वस्तुएँ।",
        },
        items: [...wiringAccessories.items, ...commonElectrical.items],
      },
    furniture && {
      id: "furniture",
      title: furniture.title,
      description: furniture.description,
      items: furniture.items,
    },
  ].filter(Boolean) as FeaturedCategory[];

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(29,155,255,0.24),_transparent_30%),radial-gradient(circle_at_80%_15%,_rgba(94,242,255,0.24),_transparent_22%),linear-gradient(180deg,_transparent,_rgba(29,155,255,0.05))]" />
      <div className="absolute inset-0 bg-grid bg-[size:54px_54px] opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
          >
            <Sparkles className="h-4 w-4" />
            {hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-7xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href={businessInfo.phoneLink}>
                <PhoneCall className="h-4 w-4" />
                {hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={businessInfo.whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircleMore className="h-4 w-4" />
                {hero.secondaryCta}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {hero.stats.map((stat) => (
              <Card key={stat.label} className="border-white/10 bg-white/5 p-5">
                <p className="font-display text-lg font-semibold text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute -left-8 top-16 hidden h-28 w-28 rounded-[2rem] border border-primary/20 bg-primary/10 blur-sm lg:block" />
            <div className="absolute -right-6 top-0 hidden h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl lg:block" />

            <Card className="relative overflow-hidden border-primary/20 bg-white/10 p-7">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(29,155,255,0.18),transparent_45%,rgba(94,242,255,0.16))]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">
                      {locale === "en" ? "Premium Retail Experience" : "प्रीमियम रिटेल अनुभव"}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                      {locale === "en" ? "Electronics. Electricals. Utility." : "इलेक्ट्रॉनिक्स। इलेक्ट्रिकल्स। यूटिलिटी।"}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {featuredCategories.map((category, index) => (
                    <Dialog key={category.id}>
                      <DialogTrigger asChild>
                        <motion.button
                          type="button"
                          initial={{ opacity: 0, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                          className="flex items-center justify-between rounded-[22px] border border-white/10 bg-slate-950/45 px-5 py-4 text-left transition hover:border-primary/25 hover:bg-slate-950/65"
                        >
                          <span className="font-medium text-foreground">{category.title[locale]}</span>
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </motion.button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[85vh] max-w-3xl p-6 sm:p-8">
                        <div className="flex max-h-[calc(85vh-3rem)] flex-col space-y-5">
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-primary">
                              {locale === "en" ? "Category Details" : "कैटेगरी डिटेल्स"}
                            </p>
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

                <div className="mt-8 rounded-[22px] border border-white/10 bg-background/80 p-5">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {locale === "en"
                      ? "A trusted local store that pairs genuine products with practical support and a polished customer experience."
                      : "एक विश्वसनीय स्थानीय स्टोर जो असली प्रोडक्ट्स, व्यावहारिक सहायता और सुसज्जित ग्राहक अनुभव प्रदान करता है।"}
                  </p>
                  <Link href="#gallery" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {locale === "en" ? "Explore the gallery" : "गैलरी देखें"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
