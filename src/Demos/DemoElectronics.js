import { Wifi, Zap, Speaker, Tv2, ThermometerSnowflake, Fan } from "lucide-react";

const demoElectronics = [
  // Smart TVs
  {
    id: "tv-mi-001",
    brand: "Mi",
    name: "Mi 4A Horizon Edition 43-inch",
    image: "/images/electronics/mi_tv.jpg",
    price: 24999,
    originalPrice: 29999,
    type: "Smart TV",
    stockStatus: "in-stock",
    hasOffer: true,
    features: [
      { icon: Tv2, text: "Full HD" },
      { icon: Wifi, text: "WiFi + PatchWall" }
    ],
    specs: [
      { key: "Screen Size", value: "43 inches" },
      { key: "Resolution", value: "1920x1080" },
      { key: "OS", value: "Android TV" }
    ]
  },
  {
    id: "tv-samsung-002",
    brand: "Samsung",
    name: "Samsung Crystal 4K UHD",
    image: "/images/electronics/samsung_4k.jpg",
    price: 34999,
    originalPrice: 45999,
    type: "Smart TV",
    stockStatus: "low-stock",
    hasOffer: true,
    features: [
      { icon: Tv2, text: "4K UHD" },
      { icon: Wifi, text: "Tizen OS" }
    ],
    specs: [
      { key: "Screen Size", value: "50 inches" },
      { key: "Resolution", value: "3840x2160" }
    ]
  },
  {
    id: "tv-panasonic-003",
    brand: "Panasonic",
    name: "Panasonic 32 Inch HD LED",
    image: "/images/electronics/panasonic_tv.jpg",
    price: 15999,
    originalPrice: 18999,
    type: "Smart TV",
    stockStatus: "in-stock",
    hasOffer: false,
    features: [
      { icon: Tv2, text: "HD Ready" }
    ],
    specs: [
      { key: "Screen Size", value: "32 inches" },
      { key: "OS", value: "Linux-based" }
    ]
  },

  // ACs
  {
    id: "ac-haier-001",
    brand: "Haier",
    name: "Haier 1.5 Ton 5 Star Inverter Split AC",
    image: "/images/electronics/haier_ac.jpg",
    price: 35990,
    originalPrice: 41990,
    type: "AC",
    stockStatus: "in-stock",
    hasOffer: true,
    features: [
      { icon: ThermometerSnowflake, text: "Frost Clean" },
      { icon: Zap, text: "Inverter Tech" }
    ],
    specs: [
      { key: "Cooling Capacity", value: "1.5 Ton" },
      { key: "Energy Rating", value: "5 Star" }
    ]
  },
  {
    id: "ac-haier-002",
    brand: "Haier",
    name: "Haier 1 Ton 3 Star AC",
    image: "/images/electronics/haier_ac_small.jpg",
    price: 28990,
    originalPrice: null,
    type: "AC",
    stockStatus: "low-stock",
    hasOffer: false,
    features: [
      { icon: Fan, text: "Turbo Mode" }
    ],
    specs: [
      { key: "Cooling Capacity", value: "1 Ton" },
      { key: "Warranty", value: "1+6 years" }
    ]
  },

  // Bluetooth Speakers
  {
    id: "bt-boat-001",
    brand: "boAt",
    name: "boAt Stone 650",
    image: "/images/electronics/boat_speaker.jpg",
    price: 1499,
    originalPrice: 1999,
    type: "Speaker",
    stockStatus: "in-stock",
    hasOffer: true,
    features: [
      { icon: Speaker, text: "10W Stereo" },
      { icon: Wifi, text: "Bluetooth 5.0" }
    ],
    specs: [
      { key: "Battery Life", value: "7 hrs" },
      { key: "Water Resistance", value: "IPX5" }
    ]
  },
  {
    id: "bt-sony-002",
    brand: "Sony",
    name: "Sony SRS-XB13",
    image: "/images/electronics/sony_speaker.jpg",
    price: 3999,
    originalPrice: 4999,
    type: "Speaker",
    stockStatus: "in-stock",
    hasOffer: true,
    features: [
      { icon: Speaker, text: "Extra Bass" }
    ],
    specs: [
      { key: "Battery Life", value: "16 hrs" },
      { key: "Charging", value: "USB-C" }
    ]
  },

  // Random Gadgets (Extras)
  {
    id: "gadget-mosquito-001",
    brand: "HIT",
    name: "HIT Anti Mosquito Racket",
    image: "/images/electronics/hit_racket.jpg",
    price: 899,
    originalPrice: null,
    type: "Extras",
    stockStatus: "in-stock",
    hasOffer: false,
    features: [
      { icon: Zap, text: "Electric Kill Grid" }
    ],
    specs: [
      { key: "Battery", value: "Rechargeable" },
      { key: "Safety", value: "Triple Layer Net" }
    ]
  },
  {
    id: "gadget-smartplug-001",
    brand: "Wipro",
    name: "Wipro Smart Plug 16A",
    image: "/images/electronics/wipro_plug.jpg",
    price: 1299,
    originalPrice: 1599,
    type: "Extras",
    stockStatus: "in-stock",
    hasOffer: true,
    features: [
      { icon: Wifi, text: "Wi-Fi Enabled" }
    ],
    specs: [
      { key: "Load", value: "16A" },
      { key: "Voice Assistant", value: "Alexa, Google" }
    ]
  }
];

export default demoElectronics;
