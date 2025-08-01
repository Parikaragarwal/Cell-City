import React, { useState } from 'react';
import { Wifi, Zap, Camera, Check, Tag,Battery,Smartphone,CheckCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import appwriteService from '../../Appwrite/service';
import config from '../../config';

const MobileProductCard = ({ product,preview=false, compact = false }) => {
  const [hoveredColor, setHoveredColor] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const collectionId = config.mobilesCollectionId; 
  const altimg="https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";


  const data = product 
  const { id, brand,fiveG, model ,price,originalPrice, image, specs, colors, features, shopData } = data;

  const getStockStatusDisplay = () => {
    switch(shopData.stockStatus) {
      case 'in-stock':
        return { text: 'In Stock', color: 'text-emerald-500', bg: 'bg-emerald-50' };
      case 'low-stock':
        return { text: 'Low Stock', color: 'text-amber-500', bg: 'bg-amber-50' };
      case 'out-of-stock':
        return { text: 'Out of Stock', color: 'text-red-500', bg: 'bg-red-50' };
      default:
        return { text: 'In Stock', color: 'text-emerald-500', bg: 'bg-emerald-50' };
    }
  };

  const iconMap = {
    Wifi: Wifi,
    Zap: Zap,
    Camera: Camera,
    Battery: Battery,
    Smartphone: Smartphone,
    Default: CheckCircle, // A fallback icon
  };

  const stockStatus = getStockStatusDisplay();

  const cardWidth = compact? 'max-w-[200px]' : 'max-w-[240px]'
  const cardHeight = compact ? 'min-h-[260px] max-h-[290px]' : 'min-h-[360px] max-h-[410px]';
  const imageHeight = compact ? 'h-[140px]' : 'h-[180px]';
  const padding = compact ? 'p-3' : 'p-4';
  const titleTextSize = compact ? 'text-base' : 'text-lg';
  const detailTextSize = compact ? 'text-xs' : 'text-sm';
  const priceTextSize = compact ? 'text-lg' : 'text-xl';
  const featureIconSize = compact ? 10 : 12;
  const featureTextSize = compact ? 'text-xs' : 'text-xs';
  const badgeTextSize = compact ? 'text-[0.6rem]' : 'text-xs';
  const colorDotSize = compact ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className="group relative">
      <div className={`bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl hover:shadow-emerald-500/20 hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-800 overflow-hidden w-full ${cardWidth} ${cardHeight} relative cursor-pointer`}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className={`relative ${imageHeight} bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden`}>
          {fiveG && (
  <div className={`absolute top-3 left-3 z-10 px-2 py-1 bg-blue-500 text-white ${badgeTextSize} font-bold rounded-full shadow-lg flex items-center gap-1`}>
    <Wifi size={featureIconSize - 2} />
    5G
  </div>
)}
          {shopData.hasOffer && (
            <div className={`absolute top-3 right-3 z-10 px-2 py-1 bg-red-500 text-white ${badgeTextSize} font-bold rounded-full shadow-lg flex items-center gap-1`}>
              <Tag size={featureIconSize - 2} />
              OFFER
            </div>
          )}
          <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-t-2xl">
            <img
              src={image || altimg}
              alt={`${brand} ${model}`}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-lg ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className={`${padding} space-y-2`}> {/* Reduced space-y */}
          {/* Color Options */}
          <div className="flex items-center gap-1"> {/* Reduced gap */}
            {colors.map((color, index) => (
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
                {hoveredColor === color.name && (
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 px-1 py-[2px] bg-emerald-500 text-white text-xs rounded whitespace-nowrap z-20 shadow-xl"> {/* Adjusted padding and font size */}
                    {color.name}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Product Title */}
          <div className="space-y-0.5"> {/* Reduced space-y */}
            <h3 className={`${titleTextSize} font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 truncate`}>
              {brand} {model}
            </h3>
            <p className={`${detailTextSize} text-gray-300 truncate`}>
              {specs.ram} • {specs.storage} • {specs.display}
            </p>
          </div>
          <div className="flex items-center gap-2"> {/* Reduced gap */}
             {/* Replace the old map with this new one */}
  {features.slice(0, compact ? 1 : 2).map((feature, index) => {
    const IconComponent = iconMap[feature.icon] || iconMap.Default;

    return (
      <div
        key={index}
        className={`flex items-center gap-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-full ${featureTextSize} ...`}
      >
        <IconComponent size={featureIconSize} />
        {feature.text}
      </div>
    );
  })}
          </div>
          <div className="space-y-1"> {/* Reduced space-y */}
            <div className="flex items-center gap-2">
              <span className={`${priceTextSize} font-bold text-emerald-400`}>₹{price?price:specs.price}</span>
              {originalPrice?originalPrice:specs.originalPrice && (
                <span className={`${detailTextSize} text-gray-500 line-through`}>₹{specs.originalPrice}</span>
              )}
            </div>
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${detailTextSize} font-medium ${stockStatus.color} ${stockStatus.bg === 'bg-emerald-50' ? 'bg-emerald-900/30' : stockStatus.bg === 'bg-amber-50' ? 'bg-amber-900/30' : 'bg-red-900/30'}`}>
              <Check size={featureIconSize - 2} />
              {stockStatus.text}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/10 via-transparent to-emerald-400/10 blur-xl"></div>
        </div>
        
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '300ms' }}></div>
{(isAdmin && !preview) && (
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
    window.location.href = `/admin/edit/mobiles/${id}`;
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

export default MobileProductCard;