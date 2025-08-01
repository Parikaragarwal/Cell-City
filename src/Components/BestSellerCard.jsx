// src/components/BestSellerCard.jsx
import { Star } from "lucide-react";
import { useSelector } from "react-redux";
import appwriteService from "../Appwrite/service";
import config from "../config";

const BestSellerCard = ({ product, isPreview = false }) => {
  const { $id, name, image, price, ram, storage, tag } = product;
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const collectionId = config.bestsellersCollectionId;

  return (
    <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col w-full h-[350px] border border-zinc-700 hover:border-zinc-600 transform hover:scale-[1.02]">
      
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[180px] bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 max-w-[90%] max-h-[90%]"
        />
        {tag && (
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full shadow-lg">
              {tag}
            </span>
          </div>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="w-full h-[170px] p-4 flex flex-col justify-between relative">
        <div className="space-y-1">
          <h3 className="text-base font-bold leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-white transition-all duration-300 line-clamp-2">
            {name}
          </h3>
          <p className="text-zinc-400 text-xs italic">
            Experience performance and style
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
            <span className="text-zinc-300 text-xs">RAM: <span className="text-white font-medium">{ram}</span></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <span className="text-zinc-300 text-xs">Storage: <span className="text-white font-medium">{storage}</span></span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col text-center">
            <span className="text-emerald-400 font-bold text-lg">
              ₹{price}
            </span>
            <span className="text-zinc-500 text-xs">Best Price</span>
          </div>
        </div>

        {isAdmin && !isPreview && (
          <div className="flex justify-center gap-3 mb-5 mt-1">
            <button
              onClick={async () => {
                const confirmDelete = window.confirm("Delete this product?");
                if (confirmDelete) {
                  const success = await appwriteService.deleteDocument(collectionId, $id);
                  if (success) {
                    alert("Product deleted successfully.");
                    window.location.reload();
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
                window.location.href = `/admin/edit/bestseller/${$id}`;
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded shadow"
            >
              Edit
            </button>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BestSellerCard;
