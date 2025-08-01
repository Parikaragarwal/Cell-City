import { Wifi, Zap, Camera } from "lucide-react";

const demoProducts = [
  // APPLE
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 15 Pro",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "128GB", price: "79999", originalPrice: "89999", display: "6.1 inch" },
    colors: [
      { name: "Natural Titanium", hex: "#8D8D93", available: true },
      { name: "Blue Titanium", hex: "#395B64", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "Wireless Charging", show: true, icon: Zap },
      { type: "camera", text: "Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.8,
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "256GB", price: "99999", originalPrice: "109999", display: "6.7 inch" },
    colors: [
      { name: "Black Titanium", hex: "#1C1C1E", available: true },
      { name: "White Titanium", hex: "#F2F2F7", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "MagSafe Charging", show: true, icon: Zap },
      { type: "camera", text: "Quad Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: false },
    rating: 4.9,
  },
  {
    id: 3,
    brand: "Apple",
    model: "iPhone 14",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop",
    specs: { ram: "6GB", storage: "128GB", price: "59999", originalPrice: "69999", display: "6.1 inch" },
    colors: [
      { name: "Red", hex: "#FF3B30", available: true },
      { name: "Blue", hex: "#007AFF", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "Fast Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "low-stock", hasOffer: true },
    rating: 4.5,
  },
  {
    id: 4,
    brand: "Apple",
    model: "iPhone 14 Plus",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop",
    specs: { ram: "6GB", storage: "256GB", price: "69999", originalPrice: "79999", display: "6.7 inch" },
    colors: [
      { name: "Purple", hex: "#A259F7", available: true },
      { name: "Starlight", hex: "#F3F3F3", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "Wireless Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: false },
    rating: 4.6,
  },

  // SAMSUNG
  {
    id: 5,
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=600&fit=crop",
    specs: { ram: "12GB", storage: "256GB", price: "89999", originalPrice: null, display: "6.8 inch" },
    colors: [
      { name: "Phantom Black", hex: "#1C1C1E", available: true },
      { name: "Phantom Silver", hex: "#C7C7CC", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "Fast Charging", show: true, icon: Zap },
      { type: "camera", text: "Quad Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "low-stock", hasOffer: false },
    rating: 4.6,
  },
  {
    id: 6,
    brand: "Samsung",
    model: "Galaxy S24",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "128GB", price: "74999", originalPrice: "79999", display: "6.2 inch" },
    colors: [
      { name: "Graphite", hex: "#535353", available: true },
      { name: "Lime", hex: "#C7E876", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "Fast Charging", show: true, icon: Zap },
      { type: "camera", text: "Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.5,
  },
  {
    id: 7,
    brand: "Samsung",
    model: "Galaxy A55",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "128GB", price: "29999", originalPrice: "34999", display: "6.6 inch" },
    colors: [
      { name: "Awesome Blue", hex: "#3B82F6", available: true },
      { name: "Awesome Black", hex: "#111827", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "25W Charging", show: true, icon: Zap },
      { type: "camera", text: "Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.3,
  },
  {
    id: 8,
    brand: "Samsung",
    model: "Galaxy Z Flip5",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "256GB", price: "79999", originalPrice: "84999", display: "6.7 inch" },
    colors: [
      { name: "Lavender", hex: "#C084FC", available: true },
      { name: "Mint", hex: "#6EE7B7", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "Fast Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "low-stock", hasOffer: false },
    rating: 4.4,
  },

  // ONEPLUS
  {
    id: 9,
    brand: "OnePlus",
    model: "12 Pro",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop",
    specs: { ram: "16GB", storage: "512GB", price: "65999", originalPrice: null, display: "6.7 inch" },
    colors: [
      { name: "Flowy Emerald", hex: "#10B981", available: true },
      { name: "Silky Black", hex: "#1C1C1E", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "100W Charging", show: true, icon: Zap },
      { type: "camera", text: "Hasselblad Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "out-of-stock", hasOffer: false },
    rating: 4.7,
  },
  {
    id: 10,
    brand: "OnePlus",
    model: "12",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop",
    specs: { ram: "12GB", storage: "256GB", price: "59999", originalPrice: "64999", display: "6.7 inch" },
    colors: [
      { name: "Arctic White", hex: "#F3F4F6", available: true },
      { name: "Volcanic Black", hex: "#232323", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "80W Charging", show: true, icon: Zap },
      { type: "camera", text: "Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.6,
  },
  {
    id: 11,
    brand: "OnePlus",
    model: "Nord 4",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "128GB", price: "29999", originalPrice: "34999", display: "6.5 inch" },
    colors: [
      { name: "Blue Marble", hex: "#60A5FA", available: true },
      { name: "Gray Ash", hex: "#6B7280", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "65W Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: false },
    rating: 4.2,
  },
  {
    id: 12,
    brand: "OnePlus",
    model: "Nord CE 4 Lite",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "256GB", price: "21999", originalPrice: "24999", display: "6.7 inch" },
    colors: [
      { name: "Pastel Lime", hex: "#A3E635", available: true },
      { name: "Chromatic Gray", hex: "#6B7280", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "67W Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.1,
  },

  // VIVO
  {
    id: 13,
    brand: "Vivo",
    model: "X100 Pro",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop",
    specs: { ram: "12GB", storage: "256GB", price: "54999", originalPrice: "59999", display: "6.78 inch" },
    colors: [
      { name: "Asteroid Black", hex: "#1C1C1E", available: true },
      { name: "Sunset Orange", hex: "#FF6B35", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "120W Charging", show: true, icon: Zap },
      { type: "camera", text: "Zeiss Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.4,
  },
  {
    id: 14,
    brand: "Vivo",
    model: "V30 Pro",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop",
    specs: { ram: "12GB", storage: "512GB", price: "39999", originalPrice: "44999", display: "6.78 inch" },
    colors: [
      { name: "Andaman Blue", hex: "#3B82F6", available: true },
      { name: "Classic Black", hex: "#232323", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "80W Charging", show: true, icon: Zap },
      { type: "camera", text: "Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: false },
    rating: 4.3,
  },
  {
    id: 15,
    brand: "Vivo",
    model: "T3 5G",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "128GB", price: "17999", originalPrice: "19999", display: "6.67 inch" },
    colors: [
      { name: "Cosmic Blue", hex: "#2563EB", available: true },
      { name: "Mystic Black", hex: "#232323", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "44W Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.0,
  },

  // NOTHING
  {
    id: 16,
    brand: "Nothing",
    model: "Phone 2",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "128GB", price: "44999", originalPrice: null, display: "6.7 inch" },
    colors: [
      { name: "White", hex: "#FFFFFF", available: true },
      { name: "Dark Gray", hex: "#4B5563", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "Wireless Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: false },
    rating: 4.3,
  },
  {
    id: 17,
    brand: "Nothing",
    model: "Phone 2a",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=600&fit=crop",
    specs: { ram: "12GB", storage: "256GB", price: "34999", originalPrice: "39999", display: "6.7 inch" },
    colors: [
      { name: "Black", hex: "#111111", available: true },
      { name: "Milk", hex: "#F5F5F5", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "45W Charging", show: true, icon: Zap },
      { type: "camera", text: "Dual Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "low-stock", hasOffer: false },
    rating: 4.2,
  },

  // INFINIX
  {
    id: 18,
    brand: "Infinix",
    model: "Zero 30",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop",
    specs: { ram: "8GB", storage: "256GB", price: "24999", originalPrice: "29999", display: "6.78 inch" },
    colors: [
      { name: "Golden Hour", hex: "#F59E0B", available: true },
      { name: "Rome Green", hex: "#059669", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "68W Charging", show: true, icon: Zap },
      { type: "camera", text: "Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.1,
  },

  // REALME
  {
    id: 19,
    brand: "Realme",
    model: "GT 6",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop",
    specs: { ram: "12GB", storage: "256GB", price: "34999", originalPrice: "39999", display: "6.78 inch" },
    colors: [
      { name: "Mirror Silver", hex: "#C0C0C0", available: true },
      { name: "Racing Yellow", hex: "#FFD600", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "120W Charging", show: true, icon: Zap },
      { type: "camera", text: "Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: true },
    rating: 4.3,
  },

  // XIAOMI
  {
    id: 20,
    brand: "Xiaomi",
    model: "13 Pro",
    fiveG: true,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop",
    specs: { ram: "12GB", storage: "512GB", price: "69999", originalPrice: "74999", display: "6.73 inch" },
    colors: [
      { name: "Ceramic White", hex: "#F8F9FA", available: true },
      { name: "Ceramic Black", hex: "#212121", available: true },
    ],
    features: [
      { type: "connectivity", text: "5G", show: true, icon: Wifi },
      { type: "charging", text: "120W Charging", show: true, icon: Zap },
      { type: "camera", text: "Leica Triple Camera", show: true, icon: Camera },
    ],
    shopData: { stockStatus: "in-stock", hasOffer: false },
    rating: 4.5,
  },
];

export default demoProducts;
