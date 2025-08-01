import React from "react";
import { Zap, Headphones, Shield, Watch, Camera, Gamepad2, Package, Move3D } from "lucide-react";

const ACCESSORY_TYPES = [
  { label: "Audio Accessories", icon: Headphones },
  { label: "Power Essentials", icon: Zap },
  { label: "Protection Gear", icon: Shield },
  { label: "Mounts & Holders", icon: Move3D },
  { label: "Smart Devices", icon: Watch },
  { label: "Photography Tools", icon: Camera },
  { label: "Gaming Gear", icon: Gamepad2 },
  { label: "Utilities & Misc", icon: Package },
];
// Mi Samsung Panasonic
//Ac Hier
//Racket

const AccessoriesFilterContent = ({
  priceRange,
  setPriceRange,
  selectedTypes,
  setSelectedTypes,
  toggleSelect
}) => {
  return (
    <div className="space-y-6">
      
      {/* 🎯 Price Range */}
      <div className="space-y-3">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          Price Range
        </h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="50000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-1"
          />
          <div className="flex justify-between text-sm bg-gray-800/50 rounded-lg p-2">
            <span className="text-emerald-400 font-medium">₹{priceRange[0]}</span>
            <span className="text-gray-400">to</span>
            <span className="text-emerald-400 font-medium">₹{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* 🎛️ Accessory Type Selector */}
      <div className="space-y-3">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full" />
          Accessory Type
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {ACCESSORY_TYPES.map((type) => {
            const isSelected = selectedTypes.includes(type.label);
            const Icon = type.icon;
            return (
              <label
                key={type.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() =>
                    toggleSelect(selectedTypes, setSelectedTypes, type.label)
                  }
                  className="sr-only"
                />
                <Icon size={16} />
                <span className="text-sm font-medium">{type.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesFilterContent;
