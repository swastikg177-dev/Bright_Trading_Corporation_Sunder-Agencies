export type Locale = "en" | "hi";

export type GalleryItem = {
  src: string;
  alt: {
    en: string;
    hi: string;
  };
  size: "portrait" | "landscape" | "square";
};

export const businessInfo = {
  name: "Bright Trading Corporation | Sunder Agencies",
  shortName: "Bright Trading Corporation",
  phoneDisplay: "+91 8973419111",
  phoneLink: "tel:+918973419111",
  whatsappLink: "https://wa.me/918973419111",
  email: "Sanjaykdodwani@gmail.com",
  emailLink: "mailto:Sanjaykdodwani@gmail.com",
  address: "Lakheran Tola, Burhar, Madhya Pradesh 484110, India",
  mapsLink: "https://maps.app.goo.gl/jsnpXic2Nc2HJUWW8?g_st=iw",
  mapsEmbed:
    "https://www.google.com/maps?q=Lakheran%20Tola%2C%20Burhar%2C%20Madhya%20Pradesh%20484110%2C%20India&z=15&output=embed",
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/bright-trading-corporation-main-store-interior.jpeg",
    alt: {
      en: "Main store interior with electronics displays",
      hi: "इलेक्ट्रॉनिक्स डिस्प्ले के साथ मुख्य स्टोर इंटीरियर",
    },
    size: "landscape",
  },
  {
    src: "/images/gallery/bright-trading-corporation-home-appliances-and-electrical-products-section.jpeg",
    alt: {
      en: "Home appliances and electrical products section",
      hi: "होम अप्लायंसेस और इलेक्ट्रिकल प्रोडक्ट्स सेक्शन",
    },
    size: "portrait",
  },
  {
    src: "/images/gallery/bright-trading-corporation-fans-and-electrical-appliances-display.jpeg",
    alt: {
      en: "Fans and electrical appliances display",
      hi: "फैन और इलेक्ट्रिकल अप्लायंसेस डिस्प्ले",
    },
    size: "portrait",
  },
  {
    src: "/images/gallery/bright-trading-corporation-electronics-sales-counter-and-product-wall.jpeg",
    alt: {
      en: "Electronics sales counter and product wall",
      hi: "इलेक्ट्रॉनिक्स सेल्स काउंटर और प्रोडक्ट वॉल",
    },
    size: "landscape",
  },
  {
    src: "/images/gallery/refrigerator-showcase-1.jpeg",
    alt: {
      en: "Premium refrigerator showcase",
      hi: "प्रीमियम रेफ्रिजरेटर शोकेस",
    },
    size: "portrait",
  },
  {
    src: "/images/gallery/television-showcase-1.jpeg",
    alt: {
      en: "Television display section",
      hi: "टेलीविजन डिस्प्ले सेक्शन",
    },
    size: "landscape",
  },
  {
    src: "/images/gallery/washing-machine-showcase.jpeg",
    alt: {
      en: "Washing machine range on display",
      hi: "वॉशिंग मशीन रेंज डिस्प्ले पर",
    },
    size: "portrait",
  },
  {
    src: "/images/gallery/airconditioner-showcasing.jpeg",
    alt: {
      en: "Air conditioner product showcase",
      hi: "एयर कंडीशनर प्रोडक्ट शोकेस",
    },
    size: "landscape",
  },
];

export const copy = {
  nav: {
    en: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
    hi: [
      { label: "होम", href: "#home" },
      { label: "हमारे बारे में", href: "#about" },
      { label: "गैलरी", href: "#gallery" },
      { label: "क्यों चुनें", href: "#why-us" },
      { label: "संपर्क", href: "#contact" },
    ],
  },
  hero: {
    en: {
      badge: "Trusted Electronics & Electrical Store in Burhar",
      title: "Premium electronics, dependable electricals, and everyday essentials under one roof.",
      subtitle:
        "Bright Trading Corporation | Sunder Agencies brings together home appliances, lighting, switches, wires, and trusted electronic products with a polished local buying experience.",
      primaryCta: "Call Now",
      secondaryCta: "WhatsApp",
      stats: [
        { value: "Local Trust", label: "Built on service-first relationships" },
        { value: "Wide Range", label: "Electronics, electricals, appliances" },
        { value: "Fast Support", label: "Quick assistance on phone and WhatsApp" },
      ],
    },
    hi: {
      badge: "बुरहार की विश्वसनीय इलेक्ट्रॉनिक्स और इलेक्ट्रिकल दुकान",
      title: "एक ही जगह पर प्रीमियम इलेक्ट्रॉनिक्स, भरोसेमंद इलेक्ट्रिकल्स और रोजमर्रा की ज़रूरी चीज़ें।",
      subtitle:
        "Bright Trading Corporation | Sunder Agencies में आपको होम अप्लायंसेस, लाइटिंग, स्विचेस, वायर और विश्वसनीय इलेक्ट्रॉनिक प्रोडक्ट्स एक आधुनिक और भरोसेमंद खरीदारी अनुभव के साथ मिलते हैं।",
      primaryCta: "अभी कॉल करें",
      secondaryCta: "व्हाट्सऐप",
      stats: [
        { value: "स्थानीय भरोसा", label: "सेवा-आधारित संबंधों पर बना विश्वास" },
        { value: "विस्तृत रेंज", label: "इलेक्ट्रॉनिक्स, इलेक्ट्रिकल्स, अप्लायंसेस" },
        { value: "फास्ट सपोर्ट", label: "फोन और व्हाट्सऐप पर तुरंत सहायता" },
      ],
    },
  },
  about: {
    en: {
      eyebrow: "About the Store",
      title: "A modern neighborhood destination for electronics and electrical buying.",
      body:
        "Serving families, homeowners, and daily shoppers in Burhar, Bright Trading Corporation | Sunder Agencies offers dependable electronics products, electrical supplies, home appliances, wires, switches, lighting products, and daily utility essentials. Built on years of local trust, we focus on trusted guidance, practical pricing, and customer satisfaction that keeps people returning.",
      highlights: [
        "Electronics products",
        "Electrical supplies",
        "Home appliances",
        "Wires and cables",
        "Switches and fittings",
        "Lighting products",
        "Daily utility products",
      ],
      cardTitle: "Built for confidence",
      cardBody:
        "From quick utility purchases to larger appliance decisions, customers rely on us for clear recommendations and genuine service.",
    },
    hi: {
      eyebrow: "दुकान के बारे में",
      title: "इलेक्ट्रॉनिक्स और इलेक्ट्रिकल खरीदारी के लिए आपका आधुनिक स्थानीय भरोसेमंद स्टोर।",
      body:
        "बुरहार के परिवारों, गृहस्वामियों और रोजमर्रा के ग्राहकों की सेवा करते हुए, Bright Trading Corporation | Sunder Agencies में इलेक्ट्रॉनिक्स प्रोडक्ट्स, इलेक्ट्रिकल सप्लाई, होम अप्लायंसेस, वायर, स्विचेस, लाइटिंग प्रोडक्ट्स और दैनिक उपयोग की ज़रूरी वस्तुएँ उपलब्ध हैं। वर्षों के स्थानीय भरोसे पर बने इस स्टोर का ध्यान भरोसेमंद मार्गदर्शन, उचित कीमत और ग्राहक संतुष्टि पर है।",
      highlights: [
        "इलेक्ट्रॉनिक्स प्रोडक्ट्स",
        "इलेक्ट्रिकल सप्लाई",
        "होम अप्लायंसेस",
        "वायर और केबल्स",
        "स्विचेस और फिटिंग्स",
        "लाइटिंग प्रोडक्ट्स",
        "दैनिक उपयोग की वस्तुएँ",
      ],
      cardTitle: "भरोसे के लिए तैयार",
      cardBody:
        "छोटी दैनिक खरीद से लेकर बड़े अप्लायंस फैसलों तक, ग्राहक हम पर स्पष्ट सलाह और सच्ची सेवा के लिए भरोसा करते हैं।",
    },
  },
  gallery: {
    en: {
      eyebrow: "Product Gallery",
      title: "Inside the store: appliances, displays, and real product variety.",
      body:
        "A curated look at the in-store experience, highlighting premium appliances, electronics displays, and accessible product organization.",
      preview: "Preview image",
    },
    hi: {
      eyebrow: "प्रोडक्ट गैलरी",
      title: "दुकान के अंदर: अप्लायंसेस, डिस्प्ले और वास्तविक प्रोडक्ट विविधता।",
      body:
        "स्टोर के अंदर के अनुभव की झलक, जहाँ प्रीमियम अप्लायंसेस, इलेक्ट्रॉनिक्स डिस्प्ले और व्यवस्थित प्रोडक्ट रेंज दिखाई देती है।",
      preview: "छवि देखें",
    },
  },
  whyUs: {
    en: {
      eyebrow: "Why Choose Us",
      title: "Premium buying confidence for every household need.",
      items: [
        {
          title: "Genuine Products",
          body: "Reliable electronics and electrical products from trusted brands and distributors.",
        },
        {
          title: "Best Pricing",
          body: "Value-focused pricing that balances affordability with dependable quality.",
        },
        {
          title: "Trusted Local Shop",
          body: "A familiar Burhar destination known for approachable service and local trust.",
        },
        {
          title: "Quality Service",
          body: "Helpful guidance, attentive support, and a store experience built around clarity.",
        },
        {
          title: "Fast Customer Support",
          body: "Quick assistance through call and WhatsApp for product questions and availability.",
        },
        {
          title: "Wide Product Range",
          body: "Everything from appliances and televisions to wires, switches, lighting, and more.",
        },
      ],
    },
    hi: {
      eyebrow: "क्यों चुनें",
      title: "हर घरेलू ज़रूरत के लिए प्रीमियम खरीदारी भरोसा।",
      items: [
        {
          title: "असली प्रोडक्ट्स",
          body: "विश्वसनीय ब्रांड्स और डिस्ट्रीब्यूटर्स से भरोसेमंद इलेक्ट्रॉनिक्स और इलेक्ट्रिकल प्रोडक्ट्स।",
        },
        {
          title: "बेहतर कीमत",
          body: "ऐसी वैल्यू-फोकस्ड कीमतें जो किफ़ायत और गुणवत्ता दोनों का संतुलन बनाती हैं।",
        },
        {
          title: "विश्वसनीय स्थानीय दुकान",
          body: "बुरहार की एक परिचित दुकान, जो सहज सेवा और स्थानीय भरोसे के लिए जानी जाती है।",
        },
        {
          title: "क्वालिटी सर्विस",
          body: "सहायक मार्गदर्शन, ध्यानपूर्वक सहायता और स्पष्ट अनुभव पर आधारित सेवा।",
        },
        {
          title: "फास्ट कस्टमर सपोर्ट",
          body: "प्रोडक्ट जानकारी और उपलब्धता के लिए कॉल और व्हाट्सऐप पर तेज़ सहायता।",
        },
        {
          title: "विस्तृत प्रोडक्ट रेंज",
          body: "अप्लायंसेस और टीवी से लेकर वायर, स्विचेस, लाइटिंग और बहुत कुछ।",
        },
      ],
    },
  },
  contact: {
    en: {
      eyebrow: "Contact",
      title: "Visit, call, or message us for product availability and assistance.",
      body:
        "Whether you need a quick electrical item, a home appliance, or help choosing the right product, we’re ready to assist.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      whatsapp: "WhatsApp Chat",
      map: "Store location map",
    },
    hi: {
      eyebrow: "संपर्क",
      title: "प्रोडक्ट उपलब्धता और सहायता के लिए हमसे मिलें, कॉल करें या मैसेज करें।",
      body:
        "चाहे आपको कोई जल्दी का इलेक्ट्रिकल आइटम चाहिए, कोई होम अप्लायंस, या सही प्रोडक्ट चुनने में मदद, हम सहायता के लिए तैयार हैं।",
      phone: "फोन",
      email: "ईमेल",
      address: "पता",
      whatsapp: "व्हाट्सऐप चैट",
      map: "स्टोर लोकेशन मैप",
    },
  },
  footer: {
    en: {
      description:
        "A trusted local destination for electronics, electrical supplies, home appliances, lighting, and utility products in Burhar.",
      quickLinks: "Quick Links",
      rights: "All rights reserved.",
    },
    hi: {
      description:
        "बुरहार में इलेक्ट्रॉनिक्स, इलेक्ट्रिकल सप्लाई, होम अप्लायंसेस, लाइटिंग और उपयोगी उत्पादों के लिए आपका विश्वसनीय स्थानीय स्टोर।",
      quickLinks: "त्वरित लिंक",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },
};
