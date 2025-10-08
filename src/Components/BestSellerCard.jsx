"use client"

import { MemoryStickIcon, HardDrive, Pencil, Trash2 } from "lucide-react" // Using Lucide React icons
import { useSelector } from "react-redux" // Assuming Redux setup is external and correct
import appwriteService from "../Appwrite/service"; // Backend logic, kept commented as per previous instruction
import config from "../config"; // Backend logic, kept commented as per previous instruction

const BestSellerCard = ({ product, isPreview = false }) => {
  const { $id, name, image, price, ram, storage, tag } = product
  const isAdmin = useSelector((state) => state.auth.isAdmin)
  const collectionId = config.bestsellersCollectionId; // Kept for context, but not directly used in JSX styling

  return (
    <div className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col w-full h-[380px] border border-zinc-700 hover:border-zinc-600 transform hover:scale-[1.02] hover:z-10">
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-purple-500 transition-all duration-500 pointer-events-none"></div>

      {/* IMAGE SECTION */}
      <div className="relative w-full h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 flex items-center justify-center overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=180&width=200&query=product"} // Fallback placeholder image
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 max-w-[90%] max-h-[90%] drop-shadow-lg"
        />
        {tag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg animate-pulse-slow">
              {tag}
            </span>
          </div>
        )}
        {/* Overlay for subtle effect on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* CONTENT SECTION */}
      <div className="w-full flex-1 p-4 flex flex-col justify-between relative">
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-white transition-all duration-300 line-clamp-2">
            {name}
          </h3>
          <p className="text-zinc-400 text-xs italic mt-1">Experience performance and style</p>
        </div>

        <div className="space-y-1 mt-2">
          <div className="flex items-center gap-2">
            <MemoryStickIcon className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-zinc-300 text-sm">
              RAM: <span className="text-white font-medium">{ram}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-zinc-300 text-sm">
              Storage: <span className="text-white font-medium">{storage}</span>
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center mt-3">
          <div className="flex flex-col text-center">
            <span className="text-emerald-400 font-bold text-2xl">₹{price}</span>
            <span className="text-zinc-500 text-xs">Best Price</span>
          </div>
        </div>

        {isAdmin && !isPreview && (
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={async () => {
                const confirmDelete = window.confirm("Delete this product?")
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
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded-md shadow-md transition-colors duration-300 transform hover:scale-105"
            >
              <Trash2 className="w-3 h-3 mr-1" /> Delete
            </button>
            <button
              onClick={() => {
                window.location.href = `/admin/edit/bestseller/${$id}`; // Kept as-is
              }}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-md shadow-md transition-colors duration-300 transform hover:scale-105"
            >
              <Pencil className="w-3 h-3 mr-1" /> Edit
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BestSellerCard
