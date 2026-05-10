import { MessageCircleMore } from "lucide-react";

import { businessInfo } from "@/lib/content";

export function FloatingWhatsApp() {
  return (
    <a
      href={businessInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:bg-primary/90"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
