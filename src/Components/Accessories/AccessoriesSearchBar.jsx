import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Smartphone, Zap, Wifi, Camera, Mic } from 'lucide-react';
import Loader from '../Loader'; // Assuming you have a Loader component

const AccessoriesSearchBar = ({
products = [],
onSearchResults,
placeholder = "Search accessories by brand, name, features, or color...",
className = ""
}) => {
const [searchTerm, setSearchTerm] = useState('');
const [isSearching, setIsSearching] = useState(false);
const [showSuggestions, setShowSuggestions] = useState(false);
const [searchResults, setSearchResults] = useState([]);
const [suggestions, setSuggestions] = useState([]);

const searchInputRef = useRef(null);
const suggestionsRef = useRef(null);

useEffect(() => {
    const delay = setTimeout(() => {
    if (searchTerm.trim()) {
        performSearch(searchTerm);
        generateSuggestions(searchTerm);
    } else {
        setSearchResults([]);
        setSuggestions([]);
        setShowSuggestions(false);
        onSearchResults?.([]);
    }
    setIsSearching(false);
    }, 300);
    return () => clearTimeout(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchTerm, products]);

const performSearch = (term) => {
    const keyword = term.toLowerCase();
    const results = products.filter((product) => {
    return (
        product.brand.toLowerCase().includes(keyword) ||
        product.name.toLowerCase().includes(keyword) ||
        product.type.toLowerCase().includes(keyword) ||
        product.features.some(f => f.text.toLowerCase().includes(keyword)) ||
        product.colors.some(c => c.name.toLowerCase().includes(keyword))
    );
    });
    setSearchResults(results);
    onSearchResults?.(results);
};

const generateSuggestions = (term) => {
    const keyword = term.toLowerCase();
    const set = new Set();
    const result = [];

    products.forEach(p => {
    if (p.brand.toLowerCase().includes(keyword)) set.add(p.brand);
    if (p.name.toLowerCase().includes(keyword)) set.add(p.name);
    if (p.type.toLowerCase().includes(keyword)) set.add(p.type);
    p.features.forEach(f => {
        if (f.text.toLowerCase().includes(keyword)) set.add(f.text);
    });
    p.colors.forEach(c => {
        if (c.name.toLowerCase().includes(keyword)) set.add(c.name);
    });
    });

    Array.from(set).slice(0, 6).forEach(value => {
    result.push({
        value,
        icon: Zap
    });
    });

    setSuggestions(result);
};

const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setSuggestions([]);
    setShowSuggestions(false);
    onSearchResults?.([]);
};

return (
    <div className={`relative w-full ${className}`}>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search size={20} className="text-gray-400" />
        </div>

        <input
        ref={searchInputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsSearching(true);
            setShowSuggestions(true);
        }}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
        />

        

        {searchTerm && (
        <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
        >
            <X size={20} />
        </button>
        )}
    </div>
    
    {isSearching && <Loader />}

    {showSuggestions && suggestions.length > 0 && (
        <div
        ref={suggestionsRef}
        className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden z-50 shadow-2xl"
        >
        <div className="p-2 space-y-1">
            {suggestions.map((sug, i) => (
            <button
                key={i}
                onClick={() => {
                setSearchTerm(sug.value);
                setShowSuggestions(false);
                searchInputRef.current?.focus();
                }}
                className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-emerald-500/10 rounded-lg transition-colors group"
            >
                <sug.icon size={16} className="text-emerald-400 group-hover:text-emerald-300" />
                <span className="text-white group-hover:text-emerald-300">{sug.value}</span>
            </button>
            ))}
        </div>
        </div>
    )}

    <div className="flex items-center justify-between mt-2 px-1">
        {searchTerm && (
        <span className="text-xs text-gray-400">
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"
        </span>
        )}
        {searchTerm && (
        <button
            onClick={clearSearch}
            className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
        >
            Clear search
        </button>
        )}
    </div>
    </div>
);
};

export default AccessoriesSearchBar;
