import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { businessInfo } from "@/lib/content";

const schema = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: businessInfo.name,
  telephone: businessInfo.phoneDisplay,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lakheran Tola, Burhar",
    addressLocality: "Burhar",
    addressRegion: "Madhya Pradesh",
    postalCode: "484110",
    addressCountry: "IN",
  },
  url: "https://bright-trading-corporation.vercel.app",
  sameAs: [businessInfo.mapsLink, businessInfo.whatsappLink],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="relative min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <WhyChooseUsSection />
          <ContactSection />
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
