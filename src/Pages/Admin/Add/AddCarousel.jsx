import React, { useState } from 'react';
import appwriteService from '../../../Appwrite/service'; // adjust path if needed
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

const AddCarousel = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !subtitle || !image) {
      alert('All fields are required!');
      return;
    }
    if (image.length > 500) {
      alert('URL too long - use a URL Shortener!');
      return;
    }
    setLoading(true);
    const data = { title, subtitle, image };
    const result = await appwriteService.createDocument(config.carouselCollectionId, data);
    setLoading(false);
    if (result) {
      alert('Carousel item added successfully!');
      navigate('/'); // Redirect wherever appropriate
    } else {
      alert('Failed to add carousel item.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex justify-center items-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>
      
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl w-full max-w-lg shadow-2xl relative z-10 transform hover:scale-105 transition-all duration-300"
      >
        {/* Header with gradient text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Add Carousel Item
          </h1>
          <p className="text-gray-400 text-sm">Create stunning carousel content</p>
        </div>

        {/* Image URL Input */}
        <div className="mb-6 group">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Image URL
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:bg-gray-800/70"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Title Input */}
        <div className="mb-6 group">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter carousel title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:bg-gray-800/70"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Subtitle Input */}
        <div className="mb-8 group">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subtitle
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter carousel subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:bg-gray-800/70"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
            loading
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }`}
        >
          <span className="flex items-center justify-center">
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Adding...
              </>
            ) : (
              'Add Carousel'
            )}
          </span>
        </button>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-t-2xl"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </form>
    </div>
  );
};

export default AddCarousel;