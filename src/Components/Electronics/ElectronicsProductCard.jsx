import React, { useState } from 'react';
import { Check, Heart, Tag } from 'lucide-react';
import { useSelector } from 'react-redux';
import appwriteService from '../../Appwrite/service';
import config from '../../config';

const ElectronicsProductCard = ({ product,preview=false, compact = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const collectionId=config.electronicsCollectionId;
  const altimg="https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";



const {
  id,
  brand,
  name,
  image,
  price,
  originalPrice,
  features = [],
  specs = [],
  type,
  shopData = {} // Destructure shopData
} = product;

const { stockStatus = "in-stock", hasOffer = false } = shopData;
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
  const discountPercent = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const cardWidth = compact ? 'max-w-[160px] min-w-[170px]' : 'max-w-[220px] min-w-[220px]';
  const cardHeight = compact ? 'min-h-[240px] max-h-[290px]' : 'min-h-[350px] max-h-[400px]';
  const imageHeight = compact ? 'h-[110px]' : 'h-[160px]';
  const padding = compact ? 'p-2.5' : 'p-3';
  const titleTextSize = compact ? 'text-sm' : 'text-base';
  const detailTextSize = compact ? 'text-xs' : 'text-xs';
  const priceTextSize = compact ? 'text-base' : 'text-lg';
  const badgeTextSize = compact ? 'text-[0.55rem]' : 'text-[0.65rem]';
  const iconSize = compact ? 8 : 10;

  return (
    <div className="group relative">
      <div className={`bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden cursor-pointer ${cardWidth} ${cardHeight}`}>
        
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image */}
        <div className={`relative ${imageHeight} bg-gradient-to-br from-gray-800 to-gray-900`}>
          {/* Offer Badge */}
          {hasOffer && discountPercent > 0 && (
            <div className={`absolute top-2 right-2 z-10 px-2 py-0.5 bg-gradient-to-r from-red-500 to-pink-500 text-white ${badgeTextSize} font-bold rounded-full shadow-lg flex items-center gap-1`}>
              <Tag size={iconSize} />
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

          <img
            src={image || altimg}
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

        {/* Content */}
        <div className={`${padding} space-y-2`}>
          <div className="space-y-0.5">
            <h3 className={`${titleTextSize} font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2`}>
              {brand} {name}
            </h3>
            <p className={`${detailTextSize} text-gray-300 truncate`}>
              {type}
            </p>
          </div>

          {/* Specs */}
          {specs.length > 0 && (
  <div className="flex items-center gap-1 flex-wrap">
    {specs.slice(0, compact ? 1 : 2).map((spec, i) => (
      <div
        key={i}
        className={`px-1.5 py-0.5 bg-gray-800 border border-gray-700 rounded-full ${detailTextSize} text-gray-300`}
      >
        {/* This now correctly displays the key and value */}
        <span className="font-semibold text-gray-100">{spec.key}:</span> {spec.value}
      </div>
    ))}
  </div>
)}


          {/* Features with icons */}
{features.length > 0 && (
  <div className="flex items-center gap-1 flex-wrap">
    {features.slice(0, compact ? 2 : 3).map((feature, index) => (
      <div
        key={index}
        className={`flex items-center gap-1 px-1.5 py-0.5 bg-gray-800 border border-gray-700 rounded-full ${detailTextSize} text-gray-300`}
      >
        {/* This now only renders the feature text */}
        {feature.text}
      </div>
    ))}
  </div>
)}


          {/* Price + Stock */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`${priceTextSize} font-bold text-emerald-400`}>₹{price}</span>
              {originalPrice && (
                <span className={`${detailTextSize} text-gray-500 line-through`}>₹{originalPrice}</span>
              )}
            </div>
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${detailTextSize} font-medium ${stockDisplay.color} ${stockDisplay.bg}`}>
              <Check size={iconSize} />
              {stockDisplay.text}
            </div>
          </div>
        </div>
      </div>
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
    window.location.href = `/admin/edit/electronics/${id}`;
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

export default ElectronicsProductCard;
