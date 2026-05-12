export type ProductCategory = {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  items: string[];
};

export type FurnitureShowcaseItem = {
  src: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
};

export type BrandCollection = {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  logos: Array<{
    src: string;
    name: string;
  }>;
};

export const productCategories: ProductCategory[] = [
  {
    id: "home-appliances",
    title: { en: "Home Appliances", hi: "होम अप्लायंसेस" },
    description: {
      en: "Kitchen and everyday home solutions for comfort, convenience, and smarter daily living.",
      hi: "आराम, सुविधा और बेहतर दैनिक जीवन के लिए किचन और घरेलू उपयोग के उत्पाद।",
    },
    items: [
      "Refrigerator / Fridge",
      "Microwave Oven",
      "OTG Oven",
      "Mixer Grinder",
      "Juicer",
      "Induction Cooktop",
      "Gas Stove",
      "Electric Kettle",
      "Toaster",
      "Sandwich Maker",
      "Rice Cooker",
      "Air Fryer",
      "Dishwasher",
      "Chimney",
      "Water Purifier",
      "Coffee Maker",
      "Blender",
      "Food Processor",
    ],
  },
  {
    id: "cleaning-appliances",
    title: { en: "Cleaning Appliances", hi: "क्लीनिंग अप्लायंसेस" },
    description: {
      en: "Efficient cleaning and garment-care products that save time and effort at home.",
      hi: "घर की सफाई और कपड़ों की देखभाल के लिए समय बचाने वाले उपयोगी उत्पाद।",
    },
    items: [
      "Washing Machine",
      "Vacuum Cleaner",
      "Steam Mop",
      "Floor Cleaner",
      "Clothes Dryer",
      "Iron",
      "Garment Steamer",
    ],
  },
  {
    id: "cooling-heating-appliances",
    title: { en: "Cooling & Heating Appliances", hi: "कूलिंग और हीटिंग अप्लायंसेस" },
    description: {
      en: "Season-ready climate appliances for cooling, airflow, hot water, and indoor comfort.",
      hi: "मौसम के अनुसार कूलिंग, एयरफ्लो, गर्म पानी और आराम के लिए अप्लायंसेस।",
    },
    items: [
      "Air Conditioner (AC)",
      "Air Cooler",
      "Ceiling Fan",
      "Table Fan",
      "Exhaust Fan",
      "Room Heater",
      "Geyser / Water Heater",
      "Humidifier",
      "Air Purifier",
    ],
  },
  {
    id: "entertainment-appliances",
    title: { en: "Entertainment Appliances", hi: "एंटरटेनमेंट अप्लायंसेस" },
    description: {
      en: "Home entertainment systems for immersive viewing, listening, and family enjoyment.",
      hi: "बेहतर देखने और सुनने के अनुभव के लिए घरेलू एंटरटेनमेंट सिस्टम।",
    },
    items: ["Television (TV)", "Home Theatre", "Speaker System", "Soundbar", "Projector"],
  },
  {
    id: "personal-care-appliances",
    title: { en: "Personal Care Appliances", hi: "पर्सनल केयर अप्लायंसेस" },
    description: {
      en: "Daily grooming and wellness devices designed for convenience and modern personal care.",
      hi: "सुविधाजनक और आधुनिक व्यक्तिगत देखभाल के लिए उपयोगी ग्रूमिंग उत्पाद।",
    },
    items: [
      "Hair Dryer",
      "Hair Straightener",
      "Electric Shaver",
      "Trimmer",
      "Electric Toothbrush",
      "Massager",
    ],
  },
  {
    id: "smart-home-appliances",
    title: { en: "Smart Home Appliances", hi: "स्मार्ट होम अप्लायंसेस" },
    description: {
      en: "Connected products for smart control, home security, and more efficient living.",
      hi: "स्मार्ट कंट्रोल, सुरक्षा और बेहतर जीवनशैली के लिए कनेक्टेड प्रोडक्ट्स।",
    },
    items: [
      "Smart TV",
      "Smart Lights",
      "Smart Door Lock",
      "Smart Speaker",
      "Robot Vacuum Cleaner",
      "Smart Security Camera",
    ],
  },
  {
    id: "common-electrical-appliances",
    title: { en: "Common Electrical Appliances", hi: "कॉमन इलेक्ट्रिकल अप्लायंसेस" },
    description: {
      en: "Power backup and utility essentials for homes, shops, and everyday electrical needs.",
      hi: "घरों, दुकानों और रोज़मर्रा की जरूरतों के लिए पावर और यूटिलिटी उत्पाद।",
    },
    items: ["Inverter", "Stabilizer", "Extension Board", "Emergency Light", "UPS", "Door Bell"],
  },
  {
    id: "lighting-products",
    title: { en: "Lighting Products", hi: "लाइटिंग प्रोडक्ट्स" },
    description: {
      en: "Decorative, architectural, and utility lighting for homes, offices, and outdoor spaces.",
      hi: "घर, ऑफिस और आउटडोर उपयोग के लिए सजावटी और उपयोगी लाइटिंग उत्पाद।",
    },
    items: [
      "LED Bulb",
      "Tube Light",
      "LED Panel Light",
      "COB Light",
      "Downlight",
      "Spot Light",
      "Track Light",
      "Flood Light",
      "Street Light",
      "High Bay Light",
      "Rope Light",
      "Strip Light",
      "Decorative Light",
      "Chandelier",
      "Pendant Light",
      "Wall Light",
      "Gate Light",
      "Garden Light",
      "Emergency Light",
      "Night Lamp",
      "Sensor Light",
      "Solar Light",
      "Torch Light",
    ],
  },
  {
    id: "switches-accessories",
    title: { en: "Switches & Electrical Accessories", hi: "स्विचेस और इलेक्ट्रिकल एक्सेसरीज़" },
    description: {
      en: "Reliable switches, sockets, safety devices, and fitting accessories for every installation.",
      hi: "हर इंस्टॉलेशन के लिए विश्वसनीय स्विच, सॉकेट, सेफ्टी और फिटिंग एक्सेसरीज़।",
    },
    items: [
      "Modular Switch",
      "Piano Switch",
      "Bell Switch",
      "Fan Regulator",
      "Dimmer",
      "Socket",
      "USB Socket",
      "Plug Top",
      "Extension Board",
      "Spike Guard",
      "Switch Board",
      "Distribution Board (DB)",
      "MCB",
      "RCCB / ELCB",
      "Isolator",
      "Changeover Switch",
      "Indicator",
      "Door Bell",
      "Junction Box",
      "Concealed Box",
      "Surface Box",
      "PVC Box",
      "Switch Plate",
      "Holder",
      "Ceiling Rose",
      "Connector Strip",
    ],
  },
  {
    id: "wiring-accessories",
    title: { en: "Wiring Accessories", hi: "वायरिंग एक्सेसरीज़" },
    description: {
      en: "Essential wiring and cable-management products for neat, safe, and durable electrical work.",
      hi: "सुरक्षित, साफ और टिकाऊ इलेक्ट्रिकल वर्क के लिए जरूरी वायरिंग और केबल उत्पाद।",
    },
    items: [
      "Electrical Wire",
      "Flexible Wire",
      "Cable",
      "Cable Tie",
      "PVC Tape",
      "Insulation Tape",
      "Conduit Pipe",
      "PVC Channel",
      "Lugs",
      "Thimble",
      "Ferrule",
      "Cable Gland",
    ],
  },
  {
    id: "furniture",
    title: { en: "Furniture", hi: "फर्नीचर" },
    description: {
      en: "Functional and stylish furniture for bedrooms, living rooms, study spaces, and offices.",
      hi: "बेडरूम, लिविंग रूम, स्टडी और ऑफिस के लिए उपयोगी और स्टाइलिश फर्नीचर।",
    },
    items: [
      "King Size Bed",
      "Queen Size Bed",
      "Sofa Set",
      "Recliner",
      "Sofa",
      "Center Table",
      "Side Table",
      "Console Table",
      "Bookshelf",
      "Wardrobe",
      "Dressing Table",
      "Bedside Table",
      "Office Chair",
      "Executive Chair",
      "Computer Table",
      "Office Desk",
      "Filing Cabinet",
      "Chest of Drawers",
      "Study Table",
      "Study Chair",
      "Wooden Almirah",
      "Wooden Cabinet",
      "Plastic Chair",
      "Plastic Table",
      "Steel Rack",
      "Steel Almirah",
    ],
  },
];

export const furnitureShowcase: FurnitureShowcaseItem[] = [
  {
    src: "/images/furniture/beds.jpeg",
    title: { en: "Bedroom Furniture", hi: "बेडरूम फर्नीचर" },
    description: {
      en: "Beds, wardrobes, dressing units, and bedside pieces curated for comfort and storage.",
      hi: "बेड, वार्डरोब, ड्रेसिंग यूनिट और बेडसाइड फर्नीचर आराम और स्टोरेज के लिए।",
    },
  },
  {
    src: "/images/furniture/sofa.jpeg",
    title: { en: "Living Room Seating", hi: "लिविंग रूम सीटिंग" },
    description: {
      en: "Sofas, recliners, and center tables that bring style and comfort to everyday spaces.",
      hi: "सोफा, रिक्लाइनर और सेंटर टेबल जो घर में आराम और स्टाइल जोड़ते हैं।",
    },
  },
  {
    src: "/images/furniture/office-chair.jpeg",
    title: { en: "Office & Study Furniture", hi: "ऑफिस और स्टडी फर्नीचर" },
    description: {
      en: "Office chairs, study tables, executive desks, and practical work-from-home essentials.",
      hi: "ऑफिस चेयर, स्टडी टेबल, एग्जीक्यूटिव डेस्क और वर्क-फ्रॉम-होम के लिए जरूरी फर्नीचर।",
    },
  },
  {
    src: "/images/furniture/almira.jpeg",
    title: { en: "Storage Solutions", hi: "स्टोरेज सॉल्यूशंस" },
    description: {
      en: "Steel almirahs, wooden cabinets, racks, and organized storage for home and office use.",
      hi: "स्टील अलमारी, वुडन कैबिनेट, रैक और घर-ऑफिस के लिए व्यवस्थित स्टोरेज विकल्प।",
    },
  },
  {
    src: "/images/furniture/dinning-table.jpeg",
    title: { en: "Dining & Utility Tables", hi: "डाइनिंग और यूटिलिटी टेबल" },
    description: {
      en: "Dining, console, side, and utility table options designed for practical daily use.",
      hi: "डाइनिंग, कंसोल, साइड और यूटिलिटी टेबल के व्यावहारिक विकल्प।",
    },
  },
];

export const brandCollections: BrandCollection[] = [
  {
    id: "large-home-appliances",
    title: { en: "Large Home Appliance Brands", hi: "लार्ज होम अप्लायंस ब्रांड्स" },
    description: {
      en: "Trusted refrigerator, washing machine, television, AC, and large-appliance brands available at the store.",
      hi: "रेफ्रिजरेटर, वॉशिंग मशीन, टीवी, एसी और बड़े अप्लायंस के विश्वसनीय ब्रांड।",
    },
    logos: [
      { src: "/images/brand-logo/large-home-appliances/bosh.png", name: "Bosch" },
      { src: "/images/brand-logo/large-home-appliances/godrej.png", name: "Godrej" },
      { src: "/images/brand-logo/large-home-appliances/haier.png", name: "Haier" },
      { src: "/images/brand-logo/large-home-appliances/ifb.png", name: "IFB" },
      { src: "/images/brand-logo/large-home-appliances/lg.png", name: "LG" },
      { src: "/images/brand-logo/large-home-appliances/panasonic.png", name: "Panasonic" },
      { src: "/images/brand-logo/large-home-appliances/samsung.png", name: "Samsung" },
      { src: "/images/brand-logo/large-home-appliances/voltas.png", name: "Voltas" },
      { src: "/images/brand-logo/large-home-appliances/whirlpool.png", name: "Whirlpool" },
    ],
  },
  {
    id: "kitchen-appliances",
    title: { en: "Kitchen Appliance Brands", hi: "किचन अप्लायंस ब्रांड्स" },
    description: {
      en: "Popular kitchen and small-appliance brands for cooking, preparation, and utility needs.",
      hi: "कुकिंग, तैयारी और यूटिलिटी जरूरतों के लिए लोकप्रिय किचन और छोटे अप्लायंस ब्रांड्स।",
    },
    logos: [
      { src: "/images/brand-logo/kitchen-appliances/butterfly.png", name: "Butterfly" },
      { src: "/images/brand-logo/kitchen-appliances/philips.png", name: "Philips" },
      { src: "/images/brand-logo/kitchen-appliances/pigeon.png", name: "Pigeon" },
      { src: "/images/brand-logo/kitchen-appliances/prestige.png", name: "Prestige" },
      { src: "/images/brand-logo/kitchen-appliances/wonderchef.png", name: "Wonderchef" },
    ],
  },
  {
    id: "fans-lighting-electricals",
    title: { en: "Fans, Lighting & Electrical Brands", hi: "फैन, लाइटिंग और इलेक्ट्रिकल ब्रांड्स" },
    description: {
      en: "Recognized fan, lighting, and electrical brands for switches, fittings, and utility products.",
      hi: "स्विच, फिटिंग और यूटिलिटी प्रोडक्ट्स के लिए विश्वसनीय फैन, लाइटिंग और इलेक्ट्रिकल ब्रांड्स।",
    },
    logos: [
      { src: "/images/brand-logo/fans-lighting-electricals/crompton.png", name: "Crompton" },
      { src: "/images/brand-logo/fans-lighting-electricals/havells.png", name: "Havells" },
      { src: "/images/brand-logo/fans-lighting-electricals/orient-electric.png", name: "Orient Electric" },
      { src: "/images/brand-logo/fans-lighting-electricals/syska-led.png", name: "Syska LED" },
      { src: "/images/brand-logo/fans-lighting-electricals/usha.png", name: "Usha" },
    ],
  },
];
