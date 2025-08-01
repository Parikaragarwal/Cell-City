import React, { useEffect, useState ,useMemo} from "react";
import { Filter, X } from "lucide-react";
import AccessoriesProductCard from "../Components/Accessories/AccessoriesProductCard";
import AccessoriesSearchBar from "../Components/Accessories/AccessoriesSearchBar";
import AccessoriesFilterContent from "../Components/Accessories/AccessoriesFilterContent";
import useIsMobile from "../Hooks/useIsMobile";
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query';
import { getAccessories } from "../Appwrite/service"; // Make sure path is correct
import Loader from "../Components/Loader"; 


const Accessories = () => {
  const [filtered, setFiltered] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useIsMobile();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

const { data: fetchedAccessories, isLoading, isError, error } = useQuery({
    queryKey: ['accessories'],
    queryFn: getAccessories
  });

const accessories = useMemo(() => {
    if (!fetchedAccessories) return [];
    return fetchedAccessories.filter((p) => p.shopData.stockStatus !== "out-of-stock");
  }, [fetchedAccessories]);


  useEffect(() => {
    const baseProducts = isSearchActive ? searchResults : accessories;
    let result = [...baseProducts];
    result = result.filter((p) => {
      const price = parseInt(p.price);
      const inPrice = price >= priceRange[0] && price <= priceRange[1];
      const matchType = selectedTypes.length ? selectedTypes.includes(p.type) : true;
      return inPrice && matchType;
    });
    setFiltered(result);
  }, [accessories, priceRange, selectedTypes, isSearchActive, searchResults]);

  const toggleSelect = (arr, setFn, val) => {
    setFn(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const clearFilters = () => {
    setPriceRange([0, 50000]);
    setSelectedTypes([]);
    setSearchResults([]);
    setIsSearchActive(false);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setIsSearchActive(results.length > 0);
  };

  const activeFiltersCount = selectedTypes.length;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader text="Fetching Accessories..." />
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_50%)]" />

      <div className="relative z-10 p-4 lg:p-6">
        <AccessoriesSearchBar
          products={accessories}
          onSearchResults={handleSearchResults}
          className="mb-6"
        />

        <div className="max-w-7xl mx-auto ml-0 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Desktop Filters */}
          <aside className="hidden lg:block sticky top-24 w-[330px] bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 ">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-bold text-lg">Filters</h2>
                {activeFiltersCount > 0 && (
                  <button onClick={clearFilters} className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
                    Clear All
                  </button>
                )}
              </div>

              <AccessoriesFilterContent
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
                toggleSelect={toggleSelect}
              />
            </div>
          </aside>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end">
              <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl max-h-[70vh] overflow-y-auto border-t border-gray-700/50">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-white font-bold text-lg">Filters</h2>
                    <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-white transition-colors">
                      <X size={24} />
                    </button>
                  </div>

                  <AccessoriesFilterContent
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedTypes={selectedTypes}
                    setSelectedTypes={setSelectedTypes}
                    toggleSelect={toggleSelect}
                  />

                  <div className="flex gap-3">
                    <button onClick={clearFilters} className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors">
                      Clear All
                    </button>
                    <button onClick={() => setShowFilters(false)} className="flex-1 bg-emerald-500 text-black py-3 rounded-xl font-medium hover:bg-emerald-400 transition-colors">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Section */}
          <section className="space-y-8 ml-10">
            <div className="mb-8 px-2">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-white">
                  Mobile <span className="text-emerald-400">Accessories</span>
                </h1>
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
                >
                  <Filter size={20} /> Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </button>
                {isAdmin && (
  <button
    onClick={() => window.location.href = "/admin/add/accessories"}
    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow transition-transform hover:scale-105"
  >
    ➕ Add Accessory
  </button>
)}

              </div>
              <p className="text-gray-400">Browse must-have add-ons and tech accessories for your mobile devices.</p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter size={32} className="text-gray-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">No accessories found</h3>
                <p className="text-gray-400 mb-4">Try adjusting your filters to see more results</p>
                <button
                  onClick={clearFilters}
                  className="bg-emerald-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-8">
                {filtered.map((item) => (
                  <AccessoriesProductCard key={item.id} product={item} compact={isMobile} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
