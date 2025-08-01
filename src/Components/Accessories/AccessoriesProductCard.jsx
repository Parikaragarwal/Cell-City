import React, { useState } from 'react';
import { Zap, Wifi, Camera, Check, Tag, ShoppingCart, Heart } from 'lucide-react';
import { useSelector } from 'react-redux';
import appwriteService from '../../Appwrite/service';
import config from '../../config';

const AccessoriesProductCard = ({ product, compact = false }) => {
  const [hoveredColor, setHoveredColor] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const collectionId= config.accessoriesCollectionId;


  const {
    id,
    brand,
    name,
    image,
    price,
    originalPrice,
    features = [],
    colors = [],
    type,
    stockStatus = "in-stock",
    hasOffer = false
  } = product;

  const getStockStatusDisplay = () => {
    switch (stockStatus) {
      case 'in-stock':
        return { text: 'In Stock', color: 'text-emerald-500', bg: 'bg-emerald-900/30' };
      case 'low-stock':
        return { text: 'Low Stock', color: 'text-amber-500', bg: 'bg-amber-900/30' };
      case 'out-of-stock':
        return { text: 'Out of Stock', color: 'text-red-500', bg: 'bg-red-900/30' };
      default:
        return { text: 'In Stock', color: 'text-emerald-500', bg: 'bg-emerald-900/30' };
    }
  };

  const stockDisplay = getStockStatusDisplay();
  const visibleFeatures = features.slice(0, compact ? 1 : 2);

  // Mobile-first responsive sizing
  const cardWidth = compact ? 'max-w-[160px] min-w-[160px]' : 'max-w-[220px] min-w-[220px]';
  const cardHeight = compact ? 'min-h-[240px] max-h-[260px]' : 'min-h-[350px] max-h-[400px]';
  const imageHeight = compact ? 'h-[110px]' : 'h-[160px]';
  const padding = compact ? 'p-2.5' : 'p-3';
  const titleTextSize = compact ? 'text-sm' : 'text-base';
  const detailTextSize = compact ? 'text-xs' : 'text-xs';
  const priceTextSize = compact ? 'text-base' : 'text-lg';
  const badgeTextSize = compact ? 'text-[0.55rem]' : 'text-[0.65rem]';
  const featureIconSize = compact ? 8 : 10;
  const colorDotSize = compact ? 'w-3 h-3' : 'w-4 h-4';

  // Calculate discount percentage
  const discountPercent = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative">
      {/* Main Card */}
      <div className={`bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl hover:shadow-emerald-500/20 hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-800 overflow-hidden w-full ${cardWidth} ${cardHeight} relative cursor-pointer`}>
        
        {/* Gradient Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Hero Image Section */}
        <div className={`relative ${imageHeight} bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden`}>
          {/* Top Feature Badge */}
          {visibleFeatures[0] && (
            <div className={`absolute top-2 left-2 z-10 px-2 py-0.5 bg-emerald-500 text-white ${badgeTextSize} font-medium rounded-full shadow-lg animate-pulse`}>
              {visibleFeatures[0].text}
            </div>
          )}
          
          {/* Offer Badge with Discount */}
          {hasOffer && discountPercent > 0 && (
            <div className={`absolute top-2 right-2 z-10 px-2 py-0.5 bg-gradient-to-r from-red-500 to-pink-500 text-white ${badgeTextSize} font-bold rounded-full shadow-lg flex items-center gap-1`}>
              <Tag size={featureIconSize} />
              {discountPercent}% OFF
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className={`absolute bottom-2 right-2 z-10 p-1.5 rounded-full transition-all duration-300 ${
              isFavorited 
                ? 'bg-red-500/80 text-white' 
                : 'bg-black/40 text-white hover:bg-black/60'
            } backdrop-blur-sm`}
          >
            <Heart size={compact ? 12 : 14} className={isFavorited ? 'fill-current' : ''} />
          </button>
          
          {/* Product Image */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-t-2xl">
            <img
              src={image}
              alt={`${brand} ${name}`}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          
          {/* Image Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className={`${padding} space-y-2`}>
          
          {/* Color Options */}
          {colors.length > 0 && (
            <div className="flex items-center gap-1">
              {colors.slice(0, compact ? 3 : 4).map((color, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredColor(color.name)}
                  onMouseLeave={() => setHoveredColor(null)}
                >
                  <div
                    className={`${colorDotSize} rounded-full border-2 cursor-pointer transition-all duration-300 ${
                      color.available 
                        ? 'border-gray-500 hover:border-emerald-400 hover:scale-125 shadow-lg hover:shadow-emerald-400/30' 
                        : 'border-gray-600 opacity-30 cursor-not-allowed'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  {hoveredColor === color.name && !compact && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-1.5 py-0.5 bg-emerald-500 text-white text-xs rounded whitespace-nowrap z-20 shadow-xl">
                      {color.name}
                    </div>
                  )}
                </div>
              ))}
              {colors.length > (compact ? 3 : 4) && (
                <div className={`${colorDotSize} rounded-full border-2 border-gray-600 bg-gray-700 flex items-center justify-center`}>
                  <span className="text-gray-300 text-xs font-bold">+{colors.length - (compact ? 3 : 4)}</span>
                </div>
              )}
            </div>
          )}

          {/* Product Title */}
          <div className="space-y-0.5">
            <h3 className={`${titleTextSize} font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2`}>
              {brand} {name}
            </h3>
            <p className={`${detailTextSize} text-gray-300 truncate`}>
              {type}
            </p>
          </div>

          {/* Features */}
          {visibleFeatures.length > 0 && (
            <div className="flex items-center gap-1 flex-wrap">
              {visibleFeatures.map((feature, index) => {
                const IconComponent = feature.icon || Wifi;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-1 px-1.5 py-0.5 bg-gray-800 border border-gray-700 rounded-full ${detailTextSize} text-gray-300 hover:bg-emerald-900/50 hover:text-emerald-400 hover:border-emerald-500 transition-all duration-300`}
                  >
                    <IconComponent size={featureIconSize} />
                    {compact ? '' : feature.text}
                  </div>
                );
              })}
            </div>
          )}

          {/* Price Section */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`${priceTextSize} font-bold text-emerald-400`}>₹{price}</span>
              {originalPrice && (
                <span className={`${detailTextSize} text-gray-500 line-through`}>₹{originalPrice}</span>
              )}
            </div>
            
            {/* Stock Status */}
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${detailTextSize} font-medium ${stockDisplay.color} ${stockDisplay.bg}`}>
              <Check size={featureIconSize} />
              {stockDisplay.text}
            </div>
          </div>

        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/10 via-transparent to-emerald-400/10 blur-xl"></div>
        </div>
      </div>

      {/* Floating Animation Dots */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '300ms' }}></div>
      {isAdmin && (
  <div className="mt-2 flex justify-center gap-3">
    <button
      onClick={async () => {
        const confirmDelete = window.confirm("Delete this product?");
        if (confirmDelete) {
          const success = await appwriteService.deleteDocument(collectionId, product.id);
          if (success) {
            alert("Product deleted successfully.");
            window.location.reload(); // optional: better to refetch instead of reload later
          } else {
            alert("Failed to delete. Please try again.");
          }
        }
      }}
      className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded shadow"
    >
      Delete
    </button>

    <button
  onClick={() => {
    window.location.href = `/admin/edit/accessories/${id}`;
  }}
  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded shadow"
>
  Edit
</button>
  </div>
)}
    </div>
  );
};


export default AccessoriesProductCard;