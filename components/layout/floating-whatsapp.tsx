import { MessageCircleMore } from "lucide-react";

import { EnquiryDialog } from "@/components/ui/enquiry-dialog";

export function FloatingWhatsApp() {
  return (
    <EnquiryDialog
      locale="en"
      trigger={
        <button
          type="button"
          aria-label="Open enquiry options"
          className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:bg-primary/90"
        >
          <MessageCircleMore className="h-6 w-6" />
        </button>
      }
    />
  );
}
