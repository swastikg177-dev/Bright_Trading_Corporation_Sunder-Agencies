"use client";

import type { ReactNode } from "react";
import { Mail, MessageCircleMore, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { businessInfo, contactNumbers } from "@/lib/content";

export function EnquiryDialog({
  trigger,
  locale,
}: {
  trigger: ReactNode;
  locale: "en" | "hi";
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">
              {locale === "en" ? "Order & Enquiry" : "ऑर्डर और पूछताछ"}
            </p>
            <DialogTitle className="text-3xl">
              {locale === "en" ? "Choose how you want to reach us" : "हमसे संपर्क का तरीका चुनें"}
            </DialogTitle>
            <DialogDescription>
              {locale === "en"
                ? "Call directly, start a WhatsApp chat, or send an email for product availability, ordering, and quotations."
                : "प्रोडक्ट उपलब्धता, ऑर्डर और कोटेशन के लिए सीधे कॉल करें, व्हाट्सऐप करें या ईमेल भेजें।"}
            </DialogDescription>
          </div>

          <div className="grid gap-4">
            {contactNumbers.map((number) => (
              <div
                key={number.display}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primary/80">{number.label}</p>
                    <p className="mt-2 font-display text-xl font-semibold text-white">{number.display}</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="secondary">
                      <a href={number.tel}>
                        <Phone className="h-4 w-4" />
                        {locale === "en" ? "Call Now" : "अभी कॉल करें"}
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={number.whatsapp} target="_blank" rel="noreferrer">
                        <MessageCircleMore className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-white/60">{locale === "en" ? "Email" : "ईमेल"}</p>
                <a href={businessInfo.emailLink} className="font-medium text-white transition hover:text-primary">
                  {businessInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
