import React, { useEffect, useState, useMemo} from "react";
import {Wifi,Zap,Camera,Filter,X,ChevronDown,Star,Heart,ShoppingCart} from "lucide-react";
import MobileProductCard from "../Components/Mobiles/MobileProductCard";
import MobileSearchBar from "../Components/Mobiles/MobileSearchBar";
import FilterContent from "../Components/Mobiles/FilterContent";
import StoreVisit from "../Components/StoreVisit";
import useIsMobile from "../Hooks/useIsMobile";
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query';
import { getMobiles } from "../Appwrite/service";
import Loader from "../Components/Loader"; 

 // defaults to 640px breakpoint

const Mobiles = () => {
  const [filtered, setFiltered] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedRAM, setSelectedRAM] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [fiveGOnly, setFiveGOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const isMobile = useIsMobile();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const BRANDS = [...new Set(filtered.map(p => p.brand))].sort();
  const { data: fetchedMobiles, isLoading, isError, error } = useQuery({
    queryKey: ['mobiles'],
    queryFn: getMobiles
  });
  const mobiles = useMemo(() => {
  if (!fetchedMobiles) return [];
  return fetchedMobiles.filter(
    (p) => p.shopData.stockStatus !== "out-of-stock"
  );
}, [fetchedMobiles]);

  useEffect(() => {
    const baseProducts = isSearchActive ? searchResults : mobiles;
    let result = [...baseProducts];
    result = result.filter((p) => {
      const price = parseInt(p.price);
      const inPrice = price >= priceRange[0] && price <= priceRange[1];
      const matchRAM = selectedRAM.length
        ? selectedRAM.includes(p.specs.ram)
        : true;
      const matchStorage = selectedStorage.length
        ? selectedStorage.includes(p.specs.storage)
        : true;
      const match5G = fiveGOnly ? p.fiveG : true;
      return inPrice && matchRAM && matchStorage && match5G;
    });
    setFiltered(result);
  }, [mobiles,priceRange,selectedRAM,selectedStorage,fiveGOnly,isSearchActive,searchResults,]);

  const toggleSelect = (arr, setFn, val) => {
    setFn(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const clearFilters = () => {
    setPriceRange([0, 500000]);
    setSelectedRAM([]);
    setSelectedStorage([]);
    setFiveGOnly(false);
    setSearchResults([]);
    setIsSearchActive(false);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setIsSearchActive(results.length > 0);
  };

  const activeFiltersCount =
    selectedRAM.length + selectedStorage.length + (fiveGOnly ? 1 : 0);

      if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader text="Fetching Mobiles..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-400 p-8 bg-red-900/20 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Error Fetching Data</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 p-4 lg:p-6">
        {/* Header */}

        <MobileSearchBar
          products={mobiles}
          onSearchResults={handleSearchResults}
          className="mb-6"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 ml-3 mr-3">
          {/* Desktop Filters */}
          <aside className="hidden lg:block sticky top-24 w-[280px] bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-bold text-lg">Filters</h2>
                {activeFiltersCount > 0 && (
                  <button onClick={clearFilters}
                    className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <FilterContent
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedRAM={selectedRAM}
                setSelectedRAM={setSelectedRAM}
                selectedStorage={selectedStorage}
                setSelectedStorage={setSelectedStorage}
                fiveGOnly={fiveGOnly}
                setFiveGOnly={setFiveGOnly}
                toggleSelect={toggleSelect}
                className="w-full"
              />

              {/* Store Visit Incentive */}
              <StoreVisit />
            </div>
          </aside>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end">
              <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl max-h-[70vh] overflow-y-auto border-t border-gray-700/50">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-white font-bold text-lg">Filters</h2>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <FilterContent
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedRAM={selectedRAM}
                    setSelectedRAM={setSelectedRAM}
                    selectedStorage={selectedStorage}
                    setSelectedStorage={setSelectedStorage}
                    fiveGOnly={fiveGOnly}
                    setFiveGOnly={setFiveGOnly}
                    toggleSelect={toggleSelect}
                  />

                  {/* Store Visit Incentive for Mobile */}
                  <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 p-4 rounded-xl border border-emerald-500/30">
                    <h3 className="text-white font-bold text-sm mb-2">
                      🏪 Visit Our Store
                    </h3>
                    <p className="text-gray-300 text-xs mb-3">
                      Experience before you buy! Touch, feel, and test all
                      devices in person.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                      <div className="flex items-center gap-1 text-emerald-400">
                        <span>✓</span>
                        <span>Hands-on experience</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400">
                        <span>✓</span>
                        <span>Expert assistance</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400">
                        <span>✓</span>
                        <span>Exclusive discounts</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400">
                        <span>✓</span>
                        <span>Instant availability</span>
                      </div>
                    </div>
                    <button className="w-full bg-emerald-500 text-black py-2 rounded-lg font-medium text-xs hover:bg-emerald-400 transition-colors">
                      Get Store Location
                    </button>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={clearFilters}
                      className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex-1 bg-emerald-500 text-black py-3 rounded-xl font-medium hover:bg-emerald-400 transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Section */}
          <section className="space-y-8">
            <div className="max-w-7xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-white">
                  Premium <span className="text-emerald-400">Mobiles</span>
                </h1>
                {/* Mobile Filter Toggle Button */}
                <button
                  className="lg:hidden bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter size={20} />
                  Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </button>
                {isAdmin && (
  <button
    onClick={() => window.location.href = "/admin/add/mobiles"}
    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow transition-transform hover:scale-105"
  >
    ➕ Add Mobile
  </button>
)}
              </div>
              <p className="text-gray-400">
                Discover the latest smartphones with cutting-edge technology
              </p>
            </div>
            {/* Results Counter */}
            <div className="flex items-center justify-between">
              {/* Store Visit CTA */}
              <div className="hidden sm:block">
                <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
                  📍 Visit Store for Best Deals
                </button>
              </div>
            </div>

            {/* Brand Sections */}
            {BRANDS.map((brand) => {
              const brandMobiles = filtered.filter((m) => m.brand === brand);
              if (brandMobiles.length === 0) return null;

              return (
                <div key={brand} className="space-y-4">
                  <h2 className="text-xl lg:text-2xl font-bold text-emerald-400 flex items-center gap-2">
                    {brand}
                    <span className="text-gray-400 text-sm font-normal">
                      ({brandMobiles.length})
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                    {brandMobiles.map((mobile) => (
                      <MobileProductCard
                        key={mobile.id}
                        product={mobile}
                        compact={isMobile}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* No Results */}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter size={32} className="text-gray-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  No products found
                </h3>
                <p className="text-gray-400 mb-4">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-emerald-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Mobiles;
