import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../../Appwrite/service";
import config from "../../../config";
import BestSellerCard from "../../../Components/BestSellerCard";

const AddBestSeller = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');
  const [tag, setTag] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!image.trim()) newErrors.image = 'Image URL is required';
    if (!price.trim()) newErrors.price = 'Price is required';
    if (!ram.trim()) newErrors.ram = 'RAM is required';
    if (!storage.trim()) newErrors.storage = 'Storage is required';
    
    if (image.length > 1000) {
      newErrors.image = 'Image URL exceeds 1000 characters. Consider using a URL shortener like bit.ly, tinyurl.com, or shorturl.at';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Your original handleSubmit logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const data = { name, image, price, ram, storage, tag };
    const result = await appwriteService.createDocument(config.bestsellersCollectionId, data);
    setLoading(false);
    
    if (result) {
      alert('Bestseller added successfully!');
      navigate('/'); // Or wherever you list products
    } else {
      alert('Failed to add bestseller.');
    }
  };

  const handleImageChange = (e) => {
    const value = e.target.value;
    setImage(value);
    
    // Clear image error when user starts typing
    if (errors.image) {
      setErrors(prev => ({ ...prev, image: '' }));
    }
  };

  const productPreview = {
    name,
    image,
    price, // Direct price instead of nested in specs
    ram,
    storage,
    tag,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-6 items-start">
        {/* Form Section */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/20">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Add New Bestseller
            </h1>
            <p className="text-gray-300 mt-1 text-sm">Create a new product entry</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div className="space-y-1">
              <label className="text-white font-medium text-sm">Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm ${
                  errors.name ? 'border-red-400' : 'border-white/20 focus:border-emerald-400'
                }`}
                required
              />
              {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
            </div>

            {/* Image URL */}
            <div className="space-y-1">
              <label className="text-white font-medium text-sm">
                Image URL 
                <span className="text-gray-400 text-xs ml-2">
                  ({image.length}/1000)
                </span>
              </label>
              <textarea
                placeholder="Enter image URL"
                value={image}
                onChange={handleImageChange}
                rows={2}
                className={`w-full px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none text-sm ${
                  errors.image ? 'border-red-400' : 'border-white/20 focus:border-emerald-400'
                }`}
                required
              />
              {errors.image && (
                <div className="text-red-400 text-xs">
                  <p>{errors.image}</p>
                  {image.length > 1000 && (
                    <p className="mt-1">
                      Recommended: 
                      <a href="https://bit.ly" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">bit.ly</a>,
                      <a href="https://tinyurl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">tinyurl.com</a>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Price and Specs Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-white font-medium text-sm">Price</label>
                <input
                  type="text"
                  placeholder="$999"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm ${
                    errors.price ? 'border-red-400' : 'border-white/20 focus:border-emerald-400'
                  }`}
                  required
                />
                {errors.price && <p className="text-red-400 text-xs">{errors.price}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-white font-medium text-sm">RAM</label>
                <input
                  type="text"
                  placeholder="8GB"
                  value={ram}
                  onChange={(e) => setRam(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm ${
                    errors.ram ? 'border-red-400' : 'border-white/20 focus:border-emerald-400'
                  }`}
                  required
                />
                {errors.ram && <p className="text-red-400 text-xs">{errors.ram}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-white font-medium text-sm">Storage</label>
                <input
                  type="text"
                  placeholder="256GB"
                  value={storage}
                  onChange={(e) => setStorage(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm ${
                    errors.storage ? 'border-red-400' : 'border-white/20 focus:border-emerald-400'
                  }`}
                  required
                />
                {errors.storage && <p className="text-red-400 text-xs">{errors.storage}</p>}
              </div>
            </div>

            {/* Tag */}
            <div className="space-y-1">
              <label className="text-white font-medium text-sm">Tag (Optional)</label>
              <input
                type="text"
                placeholder="e.g., Gaming, Business, Student"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                  Adding...
                </div>
              ) : (
                'Add Bestseller'
              )}
            </button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/20">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Live Preview
            </h2>
            <p className="text-gray-300 mt-1 text-sm">See how your product will look</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            {name || image || price || ram || storage ? (
              <div className="max-w-sm mx-auto">
                <BestSellerCard product={productPreview} isPreview={true} />
              </div>
            ) : (
              <div className="text-center text-gray-400 py-8">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm">Fill in the form to see your product preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBestSeller;