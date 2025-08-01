import React, { useState, useEffect, useRef } from 'react';
import Loader from "../Loader"
import { Search, X, Smartphone, Zap, Star } from 'lucide-react';

const MobileSearchBar = ({ 
  products = [], 
  onSearchResults, 
  placeholder = "Search mobiles by brand, model, or features...",
  className = "" 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Debounced search effect
  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchTerm.trim()) {
        performSearch(searchTerm);
        generateSuggestions(searchTerm);
      } else {
        setSearchResults([]);
        setSuggestions([]);
        setShowSuggestions(false);
        if (onSearchResults) {
          onSearchResults([]);
        }
      }
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(delayedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, products]);

  const performSearch = (term) => {
    const lowercaseTerm = term.toLowerCase();
    
    const filtered = products.filter(product => {
      // Search in brand
      if (product.brand.toLowerCase().includes(lowercaseTerm)) return true;
      
      // Search in model
      if (product.model.toLowerCase().includes(lowercaseTerm)) return true;
      
      // Search in features
      if (product.features.some(feature => 
        feature.text.toLowerCase().includes(lowercaseTerm)
      )) return true;
      
      // Search in specs
      if (product.specs.ram.toLowerCase().includes(lowercaseTerm)) return true;
      if (product.specs.storage.toLowerCase().includes(lowercaseTerm)) return true;
      if (product.specs.display.toLowerCase().includes(lowercaseTerm)) return true;
      
      // Search in colors
      if (product.colors.some(color => 
        color.name.toLowerCase().includes(lowercaseTerm)
      )) return true;
      
      return false;
    });
    
    setSearchResults(filtered);
    if (onSearchResults) {
      onSearchResults(filtered);
    }
  };

  const generateSuggestions = (term) => {
    if (term.length < 2) {
      setSuggestions([]);
      return;
    }

    const lowercaseTerm = term.toLowerCase();
    const suggestionSet = new Set();
    
    products.forEach(product => {
      // Brand suggestions
      if (product.brand.toLowerCase().includes(lowercaseTerm)) {
        suggestionSet.add({ type: 'brand', value: product.brand, icon: Smartphone });
      }
      
      // Model suggestions
      if (product.model.toLowerCase().includes(lowercaseTerm)) {
        suggestionSet.add({ type: 'model', value: `${product.brand} ${product.model}`, icon: Smartphone });
      }
      
      // Feature suggestions
      product.features.forEach(feature => {
        if (feature.text.toLowerCase().includes(lowercaseTerm)) {
          suggestionSet.add({ type: 'feature', value: feature.text, icon: feature.icon });
        }
      });
      
      // Specs suggestions
      if (product.specs.ram.toLowerCase().includes(lowercaseTerm)) {
        suggestionSet.add({ type: 'spec', value: `${product.specs.ram} RAM`, icon: Zap });
      }
      if (product.specs.storage.toLowerCase().includes(lowercaseTerm)) {
        suggestionSet.add({ type: 'spec', value: `${product.specs.storage} Storage`, icon: Zap });
      }
    });
    
    setSuggestions(Array.from(suggestionSet).slice(0, 6));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(true);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.value);
    setShowSuggestions(false);
    searchInputRef.current?.focus();
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setSuggestions([]);
    setShowSuggestions(false);
    if (onSearchResults) {
      onSearchResults([]);
    }
    searchInputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      searchInputRef.current?.blur();
    }
  };

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={20} className="text-gray-400" />
        </div>
        
        <input
          ref={searchInputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm.length >= 2 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
        />
        
        {/* Loading Spinner */}
        
        
        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>
      {isSearching && (<Loader/>)}
      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden z-50 shadow-2xl"
        >
          <div className="p-2 space-y-1">
            {suggestions.map((suggestion, index) => {
              const IconComponent = suggestion.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-emerald-500/10 rounded-lg transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <IconComponent size={16} className="text-emerald-400 group-hover:text-emerald-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-white group-hover:text-emerald-300 transition-colors">
                      {suggestion.value}
                    </span>
                    <span className="ml-2 text-xs text-gray-400 capitalize">
                      {suggestion.type}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Search Results Count */}
          {searchResults.length > 0 && (
            <div className="border-t border-gray-700/50 px-4 py-2 bg-gray-800/50">
              <span className="text-xs text-gray-400">
                {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
              </span>
            </div>
          )}
        </div>
      )}

      {/* Mobile Search Stats */}
      <div className="flex items-center justify-between mt-2 px-1">
        <div className="text-xs text-gray-400">
          {searchTerm && (
            <span>
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"
            </span>
          )}
        </div>
        
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

export default MobileSearchBar;