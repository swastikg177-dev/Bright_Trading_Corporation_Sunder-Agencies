"use client";

import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { businessInfo, copy } from "@/lib/content";

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
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.phone}</p>
                    <a href={businessInfo.phoneLink} className="font-medium text-foreground transition hover:text-primary">
                      {businessInfo.phoneDisplay}
                    </a>
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

            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={businessInfo.whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircleMore className="h-4 w-4" />
                {contact.whatsapp}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="overflow-hidden border-primary/20 p-2">
            <div className="overflow-hidden rounded-[24px] border border-white/10">
              <iframe
                title={contact.map}
                src={businessInfo.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[460px] w-full"
              />
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
