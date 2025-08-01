import React from "react";
import { Wifi } from "lucide-react";

const RAM_OPTIONS = ["4GB", "6GB", "8GB", "12GB", "16GB","24GB"];
const STORAGE_OPTIONS = ["64GB", "128GB", "256GB", "512GB", "1TB",">1TB"];

const FilterContent = ({ 
    priceRange, 
    setPriceRange, 
    selectedRAM, 
    setSelectedRAM, 
    selectedStorage, 
    setSelectedStorage, 
    fiveGOnly, 
    setFiveGOnly, 
    toggleSelect 
}) => {
return (
    <div className="space-y-6"> {/* Increased space-y for more vertical separation */}
      {/* Price Range */}
    <div className="space-y-3">
        <h3 className="text-white font-semibold flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
        Price Range
        </h3>
        <div className="space-y-3">
        <div className="relative">
            <input
            type="range"
            min="0"
            max="300000"
            step="1000"
            value={priceRange[0]}
            onChange={e => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
            <input
            type="range"
            min="0"
            max="300000"
            step="1000"
            value={priceRange[1]}
            onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb mt-1"
            />
        </div>
        <div className="flex justify-between text-sm bg-gray-800/50 rounded-lg p-2">
            <span className="text-emerald-400 font-medium">₹{priceRange[0].toLocaleString()}</span>
            <span className="text-gray-400">to</span>
            <span className="text-emerald-400 font-medium">₹{priceRange[1].toLocaleString()}</span>
        </div>
        </div>
    </div>

      {/* RAM Options */}
    <div className="space-y-3">
        <h3 className="text-white font-semibold flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        RAM
        </h3>
        <div className="grid grid-cols-2 gap-3"> {/* Increased gap for more space between items */}
        {RAM_OPTIONS.map(ram => (
            <label key={ram} className={`flex items-center justify-center px-4 py-2  rounded-lg  border transition-all duration-200 ${
            selectedRAM.includes(ram) 
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' 
                : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50'
            }`}>
            <input
                type="checkbox"
                checked={selectedRAM.includes(ram)}
                onChange={() => toggleSelect(selectedRAM, setSelectedRAM, ram)}
                className="sr-only"
            />
            <span className="text-sm font-medium">{ram}</span>
            </label>
        ))}
        </div>
    </div>

      {/* Storage Options */}
    <div className="space-y-3">
        <h3 className="text-white font-semibold flex items-center gap-2">
        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
        Storage
        </h3>
        <div className="grid grid-cols-2 gap-3"> {/* Increased gap for more space between items */}
        {STORAGE_OPTIONS.map(storage => (
            <label key={storage} className={`flex items-center justify-center px-4 py-2  rounded-lg  border transition-all duration-200 ${
            selectedStorage.includes(storage) 
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' 
                : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50'
            }`}>
            <input
                type="checkbox"
                checked={selectedStorage.includes(storage)}
                onChange={() => toggleSelect(selectedStorage, setSelectedStorage, storage)}
                className="sr-only"
            />
            <span className="text-sm font-medium">{storage}</span>
            </label>
        ))}
        </div>
    </div>

      {/* 5G Filter */}
    <div className="space-y-3">
        <h3 className="text-white font-semibold flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
        Connectivity
        </h3>
        <label className={`flex items-center justify-center space-x-2 cursor-pointer group px-4 py-2  rounded-lg border transition-all duration-200 ${
          fiveGOnly 
            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' 
            : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50'
        }`}>
        <input
            type="checkbox"
            checked={fiveGOnly}
            onChange={() => setFiveGOnly(!fiveGOnly)}
            className="sr-only"
        />
        <Wifi size={16} />
        <span className="font-medium">5G Only</span>
        </label>
    </div>
    </div>
);
};

export default FilterContent;