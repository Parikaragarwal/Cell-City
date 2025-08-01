import React from 'react';

const StoreVisit = () => {
return (
 <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 p-4 rounded-xl border border-emerald-500/30">
                  <h3 className="text-white font-bold text-sm mb-2">🏪 Visit Our Store</h3>
                  <p className="text-gray-300 text-xs mb-3">Experience before you buy! Touch, feel, and test all devices in person.</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span>✓</span>
                      <span>Instant hands-on experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span>✓</span>
                      <span>Expert assistance & demos</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span>✓</span>
                      <span>Exclusive in-store discounts</span>
                    </div>
                  </div>
                  <button className="w-full bg-emerald-500 text-black py-2 rounded-lg font-medium text-xs mt-3 hover:bg-emerald-400 transition-colors">
                    Get Store Location
                  </button>
                </div>
);
};

export default StoreVisit;