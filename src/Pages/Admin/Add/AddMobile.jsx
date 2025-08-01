"use client"
import { Wifi, Zap, Camera, CheckCircle, Smartphone, Battery } from "lucide-react";
import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import appwriteService from "../../../Appwrite/service"
import config from "../../../config"
import Loader from "../../../Components/Loader"
import MobileProductCard from "../../../Components/Mobiles/MobileProductCard"
import tinycolor from 'tinycolor2'; 

const AddMobile=() =>{
const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
} = useForm({
    defaultValues: {
    brand: "",
    model: "",
    price: "",
    originalPrice: "",
    image: "",
    fiveG: true,
    hasOffer: false,
    stockStatus: "in-stock",
    specs: [
    { key: "ram", value: "" },
    { key: "storage", value: "" },
    { key: "display", value: "" },
    ],
    colors: [{ name: "", hex: "#000000" }],
    features: [{ text: "", icon: "Default" }], 
    },
})

const handleColorNameChange = (event, index) => {
const nameInput = event.target.value;
const color = tinycolor(nameInput);
if (color.isValid()) {
    const hexValue = color.toHexString();
    setValue(`colors.${index}.hex`, hexValue);
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
const [loading, setLoading] = useState(false)
const watchedValues = watch()

const { fields: colorFields, append: appendColor, remove: removeColor } = useFieldArray({ control, name: "colors" })
const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
} = useFieldArray({ control, name: "features" })

const onSubmit = async (data) => {
    setLoading(true)
    try {
    const parsedData = {
        brand: data.brand,
        model: data.model,
        price: Number(data.price),
        originalPrice: Number(data.originalPrice || null),
        image: data.image,
        fiveG: data.fiveG === "true" || data.fiveG === true,
        hasOffer: data.hasOffer === "true" || data.hasOffer === true,
        stockStatus: data.stockStatus,
        specsJSON: JSON.stringify(
            Object.fromEntries(data.specs.filter((spec) => spec.key && spec.value).map(({ key, value }) => [key, value])),
        ),
        colorsJSON: JSON.stringify(data.colors.filter((c) => c.name && c.hex)),
        featuresJSON: JSON.stringify(data.features.filter(f => f.text)),
    }
    await appwriteService.createDocument(config.mobilesCollectionId, parsedData)
    reset()
    } catch (error) {
        console.error("Failed to submit mobile:", error)
    } finally {
        setLoading(false)
    }
}

const previewData = {
    $id: "preview_id",
    brand: watchedValues.brand,
    model: watchedValues.model,
    image: watchedValues.image,
    specs: Object.fromEntries(
    (watchedValues.specs || []).filter((spec) => spec?.key && spec?.value).map(({ key, value }) => [key, value]),
    ),
    colors: (watchedValues.colors || []).filter((c) => c.name && c.hex),
    features: (watchedValues.features || []).filter(f => f.text),
    price: watchedValues.price ? Number(watchedValues.price) : 0,
    originalPrice: watchedValues.originalPrice ? Number(watchedValues.originalPrice) : 0,
    shopData: {
    stockStatus: watchedValues.stockStatus,
    hasOffer: watchedValues.hasOffer === "true" || watchedValues.hasOffer === true,
    },
    fiveG: watchedValues.fiveG === "true" || watchedValues.fiveG === true,
}

return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 min-h-[calc(100vh-120px)]">
      {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
        style={{ animationDelay: "4s" }}
        ></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl">📱</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent mb-3">
            Add New Mobile Product
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Create a stunning mobile product listing with real-time preview
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
        <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-y-auto h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Information */}
                <div className="group">
                <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10">
                    <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">📱</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Basic Information</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-emerald-300 mb-2">Brand</label>
                        <input
                        {...register("brand", { required: true })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        placeholder="e.g. Apple"
                        />
                        {errors.brand && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                            <span>⚠️</span>Brand is required
                        </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-emerald-300 mb-2">Model</label>
                        <input
                        {...register("model", { required: true })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        placeholder="e.g. iPhone 15 Pro"
                        />
                        {errors.model && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                            <span>⚠️</span>Model is required
                        </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-emerald-300 mb-2">Price (₹)</label>
                        <input
                        type="number"
                        {...register("price", { required: true })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        placeholder="e.g. 129900"
                        />
                        {errors.price && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                            <span>⚠️</span>Price is required
                        </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-blue-300 mb-2">
                        Original Price (Optional)
                        </label>
                        <input
                        type="number"
                        {...register("originalPrice")}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        placeholder="e.g. 139900"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-purple-300 mb-2">5G Support</label>
                        <select
                        {...register("fiveG")}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        >
                        <option value="true" className="bg-slate-800">
                            ✅ Yes
                        </option>
                        <option value="false" className="bg-slate-800">
                            ❌ No
                        </option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-orange-300 mb-2">Offer Status</label>
                        <select
                        {...register("hasOffer")}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        >
                        <option value={false} className="bg-slate-800">
                            🚫 No Offer
                        </option>
                        <option value={true} className="bg-slate-800">
                            🏷️ Active Offer
                        </option>
                        </select>
                    </div>

                    <div className="md:col-span-2 xl:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-cyan-300 mb-2">Image URL</label>
                        <input
                        {...register("image", { required: true })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        placeholder="https://example.com/image.jpg"
                        />
                        {errors.image && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                            <span>⚠️</span>Image URL is required
                        </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-green-300 mb-2">Stock Status</label>
                        <select
                        {...register("stockStatus")}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                        >
                        <option value="in-stock" className="bg-slate-800">
                            ✅ In Stock
                        </option>
                        <option value="out-of-stock" className="bg-slate-800">
                            ❌ Out of Stock
                        </option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>

                {/* Specifications */}
    <div className="group">
    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-white">Specifications</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent max-w-xs"></div>
        </div>

    {/* Static list of 3 compulsory fields */}
    <div className="space-y-4">
        {/* RAM Field */}
        <div className="flex gap-4 items-center">
        <div className="flex-1 grid grid-cols-5 gap-4">
        <input
            value="RAM"
            readOnly
            className="col-span-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-emerald-300 font-semibold cursor-default"
        />
        <input
            {...register("specs.0.value", { required: "RAM is required" })}
            placeholder="e.g. 8GB"
            className="col-span-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
        />
        </div>
    </div>
    {errors.specs?.[0]?.value && <p className="text-red-400 text-sm -mt-2 ml-1">⚠️ {errors.specs[0].value.message}</p>}

      {/* Storage Field */}
    <div className="flex gap-4 items-center">
        <div className="flex-1 grid grid-cols-5 gap-4">
        <input
            value="Storage"
            readOnly
            className="col-span-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-emerald-300 font-semibold cursor-default"
        />
        <input
            {...register("specs.1.value", { required: "Storage is required" })}
            placeholder="e.g. 128GB"
            className="col-span-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
        />
        </div>
    </div>
    {errors.specs?.[1]?.value && <p className="text-red-400 text-sm -mt-2 ml-1">⚠️ {errors.specs[1].value.message}</p>}


      {/* Display Field */}
    <div className="flex gap-4 items-center">
        <div className="flex-1 grid grid-cols-5 gap-4">
        <input
            value="Display"
            readOnly
            className="col-span-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-emerald-300 font-semibold cursor-default"
        />
        <input
            {...register("specs.2.value", { required: "Display is required" })}
            placeholder="e.g. 6.1-inch OLED"
            className="col-span-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
        />
        </div>
    </div>
    {errors.specs?.[2]?.value && <p className="text-red-400 text-sm -mt-2 ml-1">⚠️ {errors.specs[2].value.message}</p>}

    </div>
</div>
</div>

                {/* Colors */}
                <div className="group">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">🎨</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Colors</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent max-w-xs"></div>
                    </div>
                    <button
                        type="button"
                        onClick={() => appendColor({ name: "", hex: "#000000" })}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        <span className="text-lg">+</span> Add Color
                    </button>
                    </div>

                    <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                    {colorFields.map((field, index) => (
        <div key={field.id} className="flex gap-4 items-center group/item">
        <div className="flex-1 flex gap-4 items-center">
            {/* Name input with the new onChange handler */}
            <input
            {...register(`colors.${index}.name`)}
            placeholder="Type color name (e.g., 'sky blue')"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white ..."
            onChange={(e) => handleColorNameChange(e, index)}
            />
            <div className="relative">
              {/* The color picker will now update automatically */}
            <input
                type="color"
                {...register(`colors.${index}.hex`)}
                className="w-14 h-12 p-1 bg-white/5 border border-white/10 rounded-xl cursor-pointer ..."
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none"></div>
            </div>
        </div>
        <button
            type="button"
            onClick={() => removeColor(index)}
            className="p-3 text-red-400 hover:text-red-300 ..."
        >
            🗑️
        </button>
        </div>
    ))}
                    </div>
                </div>
                </div>

                {/* Features */}
                <div className="group">
                <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10">
                    <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">✨</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Features</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent max-w-xs"></div>
                    </div>
                    <button
                        type="button"
                        onClick={() => appendFeature({ text: "", icon: "Default" })}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        <span className="text-lg">+</span> Add Feature
                    </button>
                    </div>

                    <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
    {featureFields.map((field, index) => (
        <div key={field.id} className="flex gap-4 items-center group/item">

          {/* New Input for Text */}
        <input
            {...register(`features.${index}.text`)}
            placeholder="e.g. A17 Bionic Chip"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white ..."
        />

          {/* New Dropdown for Icon */}
        <select
            {...register(`features.${index}.icon`)}
            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 ..."
        >
            {Object.keys(iconMap).map((iconName) => (
            <option key={iconName} value={iconName} className="bg-slate-800">
                {iconName}
            </option>
            ))}
        </select>

        <button
            type="button"
            onClick={() => removeFeature(index)}
            className="p-3 text-red-400 hover:text-red-300 ..."
        >
            🗑️
        </button>
        </div>
    ))}
    </div>
                </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">
                    {loading ? (
                        <div className="flex items-center gap-3">
                        <Loader size="sm" text="Creating..." />
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                        <span className="text-xl">🚀</span>
                        Add Mobile Product
                        </div>
                    )}
                    </span>
                </button>
                </div>
            </form>
            </div>
        </div>

          {/* Preview Section */}
        <div className="lg:col-span-1 flex flex-col h-full">
            {/* Preview Header */}
            <div className="flex items-center justify-between mb-4 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">👁️</span>
                </div>
                <h3 className="text-lg font-bold text-white">Live Preview</h3>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/30">
                LIVE
                </span>
            </div>
            </div>

            {/* Preview Card Container */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex-1 flex flex-col shadow-lg">
            <div className="transform scale-90 origin-top flex-shrink-0 mb-4">
                <MobileProductCard product={previewData} preview={true}/>
            </div>

              {/* Stats Section */}
            <div className="space-y-4 flex-1">
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">📊</span>
                    <h4 className="font-semibold text-white">Quick Stats</h4>
                </div>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                    <span className="text-slate-300">Specifications:</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                        {Object.keys(previewData.specs || {}).length}
                    </span>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="text-slate-300">Colors:</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                        {(previewData.colors || []).length}
                    </span>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="text-slate-300">Features:</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">
                        {(previewData.features || []).length}
                    </span>
                    </div>
                </div>
                </div>

                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🔍</span>
                    <h4 className="font-semibold text-white">Status</h4>
                </div>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                    <span className="text-slate-300">Stock:</span>
                    <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${previewData.shopData?.stockStatus === "in-stock" ? "bg-emerald-400" : "bg-red-400"}`}
                        ></div>
                        <span
                          className={`text-xs font-semibold capitalize ${previewData.shopData?.stockStatus === "in-stock" ? "text-emerald-400" : "text-red-400"}`}
                        >
                        {previewData.shopData?.stockStatus || "in-stock"}
                        </span>
                    </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-slate-300">5G:</span>
                    <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${previewData.fiveG ? "bg-blue-400" : "bg-slate-400"}`}
                        ></div>
                        <span
                          className={`text-xs font-semibold ${previewData.fiveG ? "text-blue-400" : "text-slate-400"}`}
                        >
                        {previewData.fiveG ? "Enabled" : "Disabled"}
                        </span>
                    </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-slate-300">Offer:</span>
                    <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${previewData.shopData?.hasOffer ? "bg-yellow-400" : "bg-slate-400"}`}
                        ></div>
                        <span
                          className={`text-xs font-semibold ${previewData.shopData?.hasOffer ? "text-yellow-400" : "text-slate-400"}`}
                        >
                        {previewData.shopData?.hasOffer ? "Active" : "Inactive"}
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

      {/* Custom Scrollbar Styles */}
    <style>{`
        .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #10b981, #3b82f6);
        border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #059669, #2563eb);
        }
    `}</style>
    </div>
)
}
export default AddMobile;