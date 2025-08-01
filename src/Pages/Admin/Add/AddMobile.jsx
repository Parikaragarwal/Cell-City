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
    });

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
        Default: CheckCircle,
    };

    const [loading, setLoading] = useState(false);
    const watchedValues = watch();

    const { fields: colorFields, append: appendColor, remove: removeColor } = useFieldArray({ control, name: "colors" });
    const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({ control, name: "features" });

    const onSubmit = async (data) => {
        setLoading(true);
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
                    Object.fromEntries(data.specs.map(({ key, value }) => [key, value]))
                ),
                colorsJSON: JSON.stringify(data.colors.filter((c) => c.name && c.hex)),
                featuresJSON: JSON.stringify(data.features.filter(f => f.text)),
            };
            await appwriteService.createDocument(config.mobilesCollectionId, parsedData);
            reset();
        } catch (error) {
            console.error("Failed to submit mobile:", error);
        } finally {
            setLoading(false);
        }
    };

    const previewData = {
        $id: "preview_id",
        brand: watchedValues.brand,
        model: watchedValues.model,
        image: watchedValues.image,
        specs: Object.fromEntries(
            (watchedValues.specs || []).map(({ key, value }) => [key, value])
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
    };

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 min-h-screen">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-3">Add New Mobile Product</h1>
                    <p className="text-slate-300">Create a stunning mobile product listing with real-time preview.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                            
                            {/* Basic Information */}
                            <div className="form-section">
                                <h3 className="form-header">Basic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    <div>
                                        <label className="form-label text-emerald-300">Brand</label>
                                        <input {...register("brand", { required: "Brand is required" })} className="input-field" placeholder="e.g. Apple" />
                                        {errors.brand && <p className="error-message">⚠️ {errors.brand.message}</p>}
                                    </div>
                                    <div>
                                        <label className="form-label text-emerald-300">Model</label>
                                        <input {...register("model", { required: "Model is required" })} className="input-field" placeholder="e.g. iPhone 15 Pro" />
                                        {errors.model && <p className="error-message">⚠️ {errors.model.message}</p>}
                                    </div>
                                    <div>
                                        <label className="form-label text-emerald-300">Price (₹)</label>
                                        <input type="number" {...register("price", { required: "Price is required" })} className="input-field" placeholder="e.g. 129900" />
                                        {errors.price && <p className="error-message">⚠️ {errors.price.message}</p>}
                                    </div>
                                    <div>
                                        <label className="form-label text-blue-300">Original Price (Optional)</label>
                                        <input type="number" {...register("originalPrice")} className="input-field" placeholder="e.g. 139900" />
                                    </div>
                                    <div className="md:col-span-2 xl:col-span-3">
                                        <label className="form-label text-cyan-300">Image URL</label>
                                        <input {...register("image", { required: "Image URL is required" })} className="input-field" placeholder="https://..." />
                                        {errors.image && <p className="error-message">⚠️ {errors.image.message}</p>}
                                    </div>
                                    <div>
                                        <label className="form-label text-purple-300">5G Support</label>
                                        <select {...register("fiveG")} className="input-field">
                                            <option value="true" className="bg-slate-800">✅ Yes</option>
                                            <option value="false" className="bg-slate-800">❌ No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="form-label text-orange-300">Offer Status</label>
                                        <select {...register("hasOffer")} className="input-field">
                                            <option value={false} className="bg-slate-800">🚫 No Offer</option>
                                            <option value={true} className="bg-slate-800">🏷️ Active Offer</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="form-label text-green-300">Stock Status</label>
                                        <select {...register("stockStatus")} className="input-field">
                                            <option value="in-stock" className="bg-slate-800">✅ In Stock</option>
                                            <option value="out-of-stock" className="bg-slate-800">❌ Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="form-section">
                                <h3 className="form-header">Specifications</h3>
                                <div className="space-y-4">
                                    <div className="spec-row">
                                        <input value="RAM" readOnly className="spec-key" />
                                        <input {...register("specs.0.value", { required: "RAM is required" })} placeholder="e.g. 8GB" className="spec-value" />
                                    </div>
                                    {errors.specs?.[0]?.value && <p className="error-message">⚠️ {errors.specs[0].value.message}</p>}
                                    <div className="spec-row">
                                        <input value="Storage" readOnly className="spec-key" />
                                        <input {...register("specs.1.value", { required: "Storage is required" })} placeholder="e.g. 128GB" className="spec-value" />
                                    </div>
                                    {errors.specs?.[1]?.value && <p className="error-message">⚠️ {errors.specs[1].value.message}</p>}
                                    <div className="spec-row">
                                        <input value="Display" readOnly className="spec-key" />
                                        <input {...register("specs.2.value", { required: "Display is required" })} placeholder="e.g. 6.1-inch OLED" className="spec-value" />
                                    </div>
                                    {errors.specs?.[2]?.value && <p className="error-message">⚠️ {errors.specs[2].value.message}</p>}
                                </div>
                            </div>

                            {/* Colors */}
<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-bold text-white">Colors</h3>
    <button type="button" onClick={() => appendColor({ name: "", hex: "#000000" })} className="btn-add">Add Color</button>
  </div>
  <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
    {colorFields.map((field, index) => (
      <div key={field.id} className="flex gap-4 items-center">
        <input
          {...register(`colors.${index}.name`)}
          placeholder="e.g. Phantom Black"
          className="flex-1 input-field"
          onChange={(e) => handleColorNameChange(e, index)}
        />
        <div className="flex items-center gap-2">
          <input
            type="color"
            {...register(`colors.${index}.hex`)}
             defaultValue="#000000"
            className="w-12 h-12 rounded-lg border border-white/20 cursor-pointer"
          />
          <span className="text-xs text-white">{watch(`colors.${index}.hex`)}</span>
        </div>
        <button type="button" onClick={() => removeColor(index)} className="btn-remove">🗑️</button>
      </div>
    ))}
  </div>
</div>


                            {/* Features */}
<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-bold text-white">Features</h3>
    <button type="button" onClick={() => appendFeature({ text: "", icon: "Default" })} className="btn-add">Add Feature</button>
  </div>
  <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
    {featureFields.map((field, index) => {
      const iconName = watch(`features.${index}.icon`);
      const IconComponent = iconMap[iconName] || iconMap.Default;

      return (
        <div key={field.id} className="flex items-center gap-3">
          <input
            {...register(`features.${index}.text`)}
            placeholder="e.g. Fast Charging"
            className="flex-grow input-field"
          />
          <select
            {...register(`features.${index}.icon`)}
            className="text-sm input-field w-10"
          >
            {Object.keys(iconMap).map(icon => (
              <option key={icon} value={icon} className="bg-slate-800">{icon}</option>
            ))}
          </select>
          <IconComponent className="w-5 h-5 text-emerald-400" />
          <button type="button" onClick={() => removeFeature(index)} className="btn-remove">🗑️</button>
        </div>
      );
    })}
  </div>
</div>

                            <div className="pt-6">
                                <button type="submit" disabled={loading} className="btn-submit">
                                    {loading ? <Loader text="Creating..." /> : '🚀 Add Mobile Product'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Preview Section */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <h3 className="text-lg font-bold text-white mb-4 text-center">Live Preview</h3>
                            <MobileProductCard product={previewData} preview={true} />
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .form-section {
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }
                .form-header {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 1.5rem;
                }
                .form-label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                .input-field {
                    width: 100%;
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.75rem;
                    padding: 0.75rem 1rem;
                    color: white;
                    transition: all 0.3s;
                }
                .input-field:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px #10b981;
                    border-color: #10b981;
                }
                .spec-row {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .spec-key {
                    flex-basis: 40%;
                    padding: 0.75rem 1rem;
                    background-color: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 0.75rem;
                    color: #6ee7b7; /* emerald-300 */
                    font-weight: 600;
                    cursor: default;
                }
                .spec-value {
                    flex-basis: 60%;
                    padding: 0.75rem 1rem;
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.75rem;
                    color: white;
                }
                .btn-add {
                    background-image: linear-gradient(to right, #3b82f6, #8b5cf6);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.75rem;
                    font-weight: 600;
                    transition: all 0.3s;
                }
                .btn-add:hover { transform: scale(1.05); }
                .btn-remove {
                    color: #f87171;
                    padding: 0.75rem;
                    border-radius: 0.75rem;
                    transition: all 0.3s;
                }
                .btn-remove:hover {
                    background-color: rgba(248, 113, 113, 0.1);
                    transform: scale(1.1);
                }
                .btn-submit {
                    width: 100%;
                    background-image: linear-gradient(to right, #10b981, #3b82f6, #8b5cf6);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 1rem;
                    font-weight: 700;
                    font-size: 1.125rem;
                    transition: all 0.3s;
                }
                .btn-submit:hover { transform: scale(1.02); }
                .error-message {
                    color: #f87171; /* red-400 */
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                }
            `}</style>
        </div>
    )
}
export default AddMobile;
