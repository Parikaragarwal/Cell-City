import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../../../Appwrite/service";
import config from "../../../config";
import BestSellerCard from "../../../Components/BestSellerCard";

const EditBestSeller = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    ram: "",
    storage: "",
    tag: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await appwriteService.getDocument(config.bestsellersCollectionId, id);
      if (data) {
        setProduct(data);
        setForm({
          name: data.name || "",
          image: data.image || "",
          price: data.price || "",
          ram: data.ram || "",
          storage: data.storage || "",
          tag: data.tag || ""
        });
      }
    };
    fetchProduct();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.image.trim()) newErrors.image = 'Image URL is required';
    if (!form.price.trim()) newErrors.price = 'Price is required';
    if (!form.ram.trim()) newErrors.ram = 'RAM is required';
    if (!form.storage.trim()) newErrors.storage = 'Storage is required';
    
    if (form.image.length > 1000) {
      newErrors.image = 'Image URL exceeds 1000 characters. Consider using a URL shortener like bit.ly, tinyurl.com, or shorturl.at';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, image: value }));
    
    // Clear image error when user starts typing
    if (errors.image) {
      setErrors(prev => ({ ...prev, image: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const success = await appwriteService.updateDocument(config.bestsellersCollectionId, id, form);
    setLoading(false);
    
    if (success) {
      alert("Bestseller updated successfully!");
      navigate("/"); // Go back to home or admin panel
    } else {
      alert("Failed to update. Try again.");
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent mr-3"></div>
            <span className="text-white text-lg">Loading product details...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-6 items-start">
        {/* Form Section */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/20">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Edit Bestseller
            </h1>
            <p className="text-gray-300 mt-1 text-sm">Update product information</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div className="space-y-1">
              <label className="text-white font-medium text-sm">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                value={form.name}
                onChange={handleChange}
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
                  ({form.image.length}/1000)
                </span>
              </label>
              <textarea
                name="image"
                placeholder="Enter image URL"
                value={form.image}
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
                  {form.image.length > 1000 && (
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
                  name="price"
                  placeholder="$999"
                  value={form.price}
                  onChange={handleChange}
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
                  name="ram"
                  placeholder="8GB"
                  value={form.ram}
                  onChange={handleChange}
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
                  name="storage"
                  placeholder="256GB"
                  value={form.storage}
                  onChange={handleChange}
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
                name="tag"
                placeholder="e.g., Gaming, Business, Student"
                value={form.tag}
                onChange={handleChange}
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
                  Updating...
                </div>
              ) : (
                'Save Changes'
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
            <p className="text-gray-300 mt-1 text-sm">See how your updated product will look</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="max-w-sm mx-auto">
              <BestSellerCard product={{ $id: id, ...form }} isPreview={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBestSeller;