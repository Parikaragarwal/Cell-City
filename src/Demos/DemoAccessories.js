
import {
  Zap,
  Wifi,
  Camera,
  Mic,
  Headphones,
  Shield,
  Move3D,
  Watch,
  Gamepad2,
  Package
} from "lucide-react"; 


const demoAccessories = [
  {
    id: 1,
    brand: "Samsung",
    name: "Samsung Product 1",
    type: "Power Essentials",
    image: "https://example.com/images/samsung-1.jpg",
    price: "40759",
    originalPrice: "44471",
    features: [
      { text: "Fast Charging", type: "charging", icon: Zap },
      { text: "USB-C Port", type: "port", icon: Wifi }
    ],
    colors: [
      { name: "Blue", hex: "#0000FF", available: true },
      { name: "Gray", hex: "#808080", available: true },
      { name: "Red", hex: "#FF0000", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 2,
    brand: "Sony",
    name: "Sony Product 2",
    type: "Protection Gear",
    image: "https://example.com/images/sony-2.jpg",
    price: "4761",
    originalPrice: "7319",
    features: [
      { text: "Water Resistant", type: "feature", icon: Shield },
      { text: "Shock Absorbent", type: "feature", icon: Shield }
    ],
    colors: [
      { name: "Black", hex: "#000000", available: true },
      { name: "Gray", hex: "#808080", available: true },
      { name: "Green", hex: "#008000", available: true }
    ],
    stockStatus: "out-of-stock",
    hasOffer: true
  },
  {
    id: 3,
    brand: "JBL",
    name: "JBL Product 3",
    type: "Mounts & Holders",
    image: "https://example.com/images/jbl-3.jpg",
    price: "21705",
    originalPrice: "23128",
    features: [
      { text: "360° Rotation", type: "feature", icon: Move3D },
      { text: "Easy Installation", type: "feature", icon: Move3D }
    ],
    colors: [
      { name: "Red", hex: "#FF0000", available: true },
      { name: "Black", hex: "#000000", available: true },
      { name: "Yellow", hex: "#FFFF00", available: false }
    ],
    stockStatus: "low-stock",
    hasOffer: true
  },
  {
    id: 4,
    brand: "Anker",
    name: "Anker Product 4",
    type: "Smart Devices",
    image: "https://example.com/images/anker-4.jpg",
    price: "26912",
    originalPrice: "27048",
    features: [
      { text: "Heart Rate Monitor", type: "feature", icon: Watch },
      { text: "GPS Enabled", type: "feature", icon: Watch }
    ],
    colors: [
      { name: "Red", hex: "#FF0000", available: true },
      { name: "Yellow", hex: "#FFFF00", available: false },
      { name: "Black", hex: "#000000", available: true }
    ],
    stockStatus: "low-stock",
    hasOffer: true
  },
  {
    id: 5,
    brand: "Logitech",
    name: "Logitech Product 5",
    type: "Photography Tools",
    image: "https://example.com/images/logitech-5.jpg",
    price: "27427",
    originalPrice: "31936",
    features: [
      { text: "Tripod Included", type: "feature", icon: Camera },
      { text: "Lightweight", type: "feature", icon: Camera }
    ],
    colors: [
      { name: "Blue", hex: "#0000FF", available: true },
      { name: "Red", hex: "#FF0000", available: true },
      { name: "Black", hex: "#000000", available: true }
    ],
    stockStatus: "out-of-stock",
    hasOffer: true
  },
  {
    id: 6,
    brand: "Canon",
    name: "Canon Product 6",
    type: "Gaming Gear",
    image: "https://example.com/images/canon-6.jpg",
    price: "40862",
    originalPrice: "45410",
    features: [
      { text: "RGB Lighting", type: "feature", icon: Gamepad2 },
      { text: "High Precision", type: "feature", icon: Gamepad2 }
    ],
    colors: [
      { name: "Yellow", hex: "#FFFF00", available: false },
      { name: "White", hex: "#FFFFFF", available: true },
      { name: "Black", hex: "#000000", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 7,
    brand: "boAt",
    name: "boAt Product 7",
    type: "Utilities & Misc",
    image: "https://example.com/images/boat-7.jpg",
    price: "38447",
    originalPrice: "41637",
    features: [
      { text: "Durable Material", type: "feature", icon: Package },
      { text: "Easy to Clean", type: "feature", icon: Package }
    ],
    colors: [
      { name: "Yellow", hex: "#FFFF00", available: false },
      { name: "Gray", hex: "#808080", available: true },
      { name: "Red", hex: "#FF0000", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 8,
    brand: "Spigen",
    name: "Spigen Product 8",
    type: "Audio Accessories",
    image: "https://example.com/images/spigen-8.jpg",
    price: "19962",
    originalPrice: "22501",
    features: [
      { text: "Noise Cancellation", type: "feature", icon: Mic },
      { text: "Bluetooth 5.0", type: "connectivity", icon: Wifi }
    ],
    colors: [
      { name: "White", hex: "#FFFFFF", available: true },
      { name: "Black", hex: "#000000", available: true },
      { name: "Gray", hex: "#808080", available: true }
    ],
    stockStatus: "low-stock",
    hasOffer: true
  },
  {
    id: 9,
    brand: "Portronics",
    name: "Portronics Product 9",
    type: "Power Essentials",
    image: "https://example.com/images/portronics-9.jpg",
    price: "12923",
    originalPrice: "15758",
    features: [
      { text: "Compact Design", type: "feature", icon: Zap },
      { text: "Fast Charging", type: "charging", icon: Zap }
    ],
    colors: [
      { name: "Black", hex: "#000000", available: true },
      { name: "Gray", hex: "#808080", available: true },
      { name: "White", hex: "#FFFFFF", available: true }
    ],
    stockStatus: "low-stock",
    hasOffer: true
  },
  {
    id: 10,
    brand: "Amazon",
    name: "Amazon Product 10",
    type: "Protection Gear",
    image: "https://example.com/images/amazon-10.jpg",
    price: "17994",
    originalPrice: "22229",
    features: [
      { text: "Water Resistant", type: "feature", icon: Shield },
      { text: "Genuine Leather", type: "material", icon: Mic }
    ],
    colors: [
      { name: "Blue", hex: "#0000FF", available: true },
      { name: "Yellow", hex: "#FFFF00", available: false },
      { name: "Green", hex: "#008000", available: true }
    ],
    stockStatus: "out-of-stock",
    hasOffer: true
  },
  {
    id: 11,
    brand: "Razer",
    name: "Razer Product 11",
    type: "Mounts & Holders",
    image: "https://example.com/images/razer-11.jpg",
    price: "16459",
    originalPrice: "20712",
    features: [
      { text: "Easy Installation", type: "feature", icon: Move3D },
      { text: "360° Rotation", type: "feature", icon: Move3D }
    ],
    colors: [
      { name: "Yellow", hex: "#FFFF00", available: false },
      { name: "Red", hex: "#FF0000", available: true },
      { name: "Black", hex: "#000000", available: true }
    ],
    stockStatus: "low-stock",
    hasOffer: true
  },
  {
    id: 12,
    brand: "Fitbit",
    name: "Fitbit Product 12",
    type: "Smart Devices",
    image: "https://example.com/images/fitbit-12.jpg",
    price: "23039",
    originalPrice: "25506",
    features: [
      { text: "Waterproof", type: "feature", icon: Watch },
      { text: "GPS Enabled", type: "feature", icon: Watch }
    ],
    colors: [
      { name: "Green", hex: "#008000", available: true },
      { name: "Blue", hex: "#0000FF", available: true },
      { name: "Gray", hex: "#808080", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 13,
    brand: "GoPro",
    name: "GoPro Product 13",
    type: "Photography Tools",
    image: "https://example.com/images/gopro-13.jpg",
    price: "14669",
    originalPrice: "16161",
    features: [
      { text: "4K Video", type: "feature", icon: Camera },
      { text: "Lightweight", type: "feature", icon: Camera }
    ],
    colors: [
      { name: "Red", hex: "#FF0000", available: true },
      { name: "Green", hex: "#008000", available: true },
      { name: "Yellow", hex: "#FFFF00", available: false }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 14,
    brand: "HyperX",
    name: "HyperX Product 14",
    type: "Gaming Gear",
    image: "https://example.com/images/hyperx-14.jpg",
    price: "29670",
    originalPrice: "31382",
    features: [
      { text: "RGB Lighting", type: "feature", icon: Gamepad2 },
      { text: "Ergonomic Design", type: "feature", icon: Gamepad2 }
    ],
    colors: [
      { name: "White", hex: "#FFFFFF", available: true },
      { name: "Green", hex: "#008000", available: true },
      { name: "Blue", hex: "#0000FF", available: true }
    ],
    stockStatus: "low-stock",
    hasOffer: true
  },
  {
    id: 15,
    brand: "Apple",
    name: "Apple Product 15",
    type: "Utilities & Misc",
    image: "https://example.com/images/apple-15.jpg",
    price: "35826",
    originalPrice: "38591",
    features: [
      { text: "Multi-purpose", type: "feature", icon: Package },
      { text: "Durable Material", type: "feature", icon: Package }
    ],
    colors: [
      { name: "Green", hex: "#008000", available: true },
      { name: "Black", hex: "#000000", available: true },
      { name: "White", hex: "#FFFFFF", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 16,
    brand: "Samsung",
    name: "Samsung Product 16",
    type: "Audio Accessories",
    image: "https://example.com/images/samsung-16.jpg",
    price: "2830",
    originalPrice: "5816",
    features: [
      { text: "Bluetooth 5.0", type: "connectivity", icon: Wifi },
      { text: "Immersive Bass", type: "audio", icon: Headphones }
    ],
    colors: [
      { name: "Blue", hex: "#0000FF", available: true },
      { name: "White", hex: "#FFFFFF", available: true },
      { name: "Red", hex: "#FF0000", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 17,
    brand: "Sony",
    name: "Sony Product 17",
    type: "Power Essentials",
    image: "https://example.com/images/sony-17.jpg",
    price: "49730",
    originalPrice: "54630",
    features: [
      { text: "Fast Charging", type: "charging", icon: Zap },
      { text: "USB-C Port", type: "port", icon: Wifi }
    ],
    colors: [
      { name: "Green", hex: "#008000", available: true },
      { name: "Gray", hex: "#808080", available: true },
      { name: "Red", hex: "#FF0000", available: true }
    ],
    stockStatus: "out-of-stock",
    hasOffer: true
  },
  {
    id: 18,
    brand: "JBL",
    name: "JBL Product 18",
    type: "Protection Gear",
    image: "https://example.com/images/jbl-18.jpg",
    price: "23304",
    originalPrice: "24791",
    features: [
      { text: "Genuine Leather", type: "material", icon: Mic },
      { text: "Shock Absorbent", type: "feature", icon: Shield }
    ],
    colors: [
      { name: "Black", hex: "#000000", available: true },
      { name: "Yellow", hex: "#FFFF00", available: false },
      { name: "Blue", hex: "#0000FF", available: true }
    ],
    stockStatus: "out-of-stock",
    hasOffer: true
  },
  {
    id: 19,
    brand: "Anker",
    name: "Anker Product 19",
    type: "Mounts & Holders",
    image: "https://example.com/images/anker-19.jpg",
    price: "57929",
    originalPrice: "58808",
    features: [
      { text: "Easy Installation", type: "feature", icon: Move3D },
      { text: "Strong Grip", type: "feature", icon: Move3D }
    ],
    colors: [
      { name: "Black", hex: "#000000", available: true },
      { name: "Green", hex: "#008000", available: true },
      { name: "Blue", hex: "#0000FF", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  },
  {
    id: 20,
    brand: "Logitech",
    name: "Logitech Product 20",
    type: "Smart Devices",
    image: "https://example.com/images/logitech-20.jpg",
    price: "53166",
    originalPrice: "55798",
    features: [
      { text: "GPS Enabled", type: "feature", icon: Watch },
      { text: "Waterproof", type: "feature", icon: Watch }
    ],
    colors: [
      { name: "Green", hex: "#008000", available: true },
      { name: "Yellow", hex: "#FFFF00", available: false },
      { name: "Gray", hex: "#808080", available: true }
    ],
    stockStatus: "in-stock",
    hasOffer: true
  }
];


export default demoAccessories;
