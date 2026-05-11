"use client";

import { ArrowUpRight, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { businessInfo, contactNumbers, copy } from "@/lib/content";

export function ContactSection() {
  const { locale } = useLanguage();
  const contact = copy.contact[locale];

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal>
          <div className="space-y-8">
            <SectionHeading eyebrow={contact.eyebrow} title={contact.title} body={contact.body} />

            <div className="grid gap-4">
              <Card className="bg-white/6 p-5">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div className="w-full">
                    <p className="text-sm text-muted-foreground">{locale === "en" ? "Phone Numbers" : contact.phone}</p>
                    <div className="mt-3 grid gap-3">
                      {contactNumbers.map((number) => (
                        <div
                          key={number.display}
                          className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-primary/80">{number.label}</p>
                            <a
                              href={number.tel}
                              className="mt-1 block font-medium text-foreground transition hover:text-primary"
                            >
                              {number.display}
                            </a>
                          </div>
                          <div className="flex gap-2">
                            <Button asChild variant="secondary" className="h-9 px-4 text-xs">
                              <a href={number.tel}>
                                <Phone className="h-3.5 w-3.5" />
                                {locale === "en" ? "Call" : "कॉल"}
                              </a>
                            </Button>
                            <Button asChild className="h-9 px-4 text-xs">
                              <a href={number.whatsapp} target="_blank" rel="noreferrer">
                                <MessageCircleMore className="h-3.5 w-3.5" />
                                WhatsApp
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="bg-white/6 p-5">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.email}</p>
                    <a href={businessInfo.emailLink} className="font-medium text-foreground transition hover:text-primary">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="bg-white/6 p-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.address}</p>
                    <a
                      href={businessInfo.mapsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium leading-7 text-foreground transition hover:text-primary"
                    >
                      {businessInfo.address}
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {contactNumbers.map((number) => (
                <Button asChild size="lg" className="w-full sm:w-auto" key={number.display}>
                  <a href={number.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircleMore className="h-4 w-4" />
                    {locale === "en" ? `WhatsApp ${number.display}` : `व्हाट्सऐप ${number.display}`}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="overflow-hidden border-primary/20 p-2">
            <a
              href={businessInfo.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(29,155,255,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 transition hover:border-primary/35"
            >
              <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-20" />
              <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:scale-110" />
              <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />

              <div className="relative flex min-h-[444px] flex-col justify-between">
                <div className="space-y-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-glow">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.22em] text-primary">{contact.map}</p>
                    <h3 className="font-display text-3xl font-semibold text-foreground">
                      {locale === "en" ? "Find our shop instantly" : "दुकान तुरंत खोजें"}
                    </h3>
                    <p className="max-w-xl text-base leading-8 text-muted-foreground">{businessInfo.address}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    {locale === "en" ? "Tap to get directions to the shop" : "दुकान तक रास्ता पाने के लिए टैप करें"}
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition group-hover:-translate-y-0.5">
                    {locale === "en" ? "Open in Google Maps" : "Google Maps में खोलें"}
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
