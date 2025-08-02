"use client"
import { Tv, Wind, Speaker, Puzzle, CheckCircle } from "lucide-react";
import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import appwriteService from "../../../Appwrite/service" // Assuming path is correct
import config from "../../../config" // Assuming path is correct
import Loader from "../../../Components/Loader" // Assuming path is correct
import ElectronicsProductCard from "../../../Components/Electronics/ElectronicsProductCard";


const AddElectronic = () => {
    const electronicTypes = {
        smart_tv: "Smart TV",
        ac: "AC",
        speaker: "Speaker",
        extras: "Extras",
    };

    const {
        register, handleSubmit, control, reset, watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            brand: "", name: "", type: "smart_tv", image: "",
            price: "", originalPrice: "", hasOffer: false, stockStatus: "in-stock",
            specs: [{ key: "", value: "" }],
            features: [{ text: "" }],
        },
    });

    const [loading, setLoading] = useState(false);
    const watchedValues = watch();

    const { fields: specFields, append: appendSpec, remove: removeSpec } = useFieldArray({ control, name: "specs" });
    const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({ control, name: "features" });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const parsedData = {
                brand: data.brand,
                name: data.name,
                type: data.type,
                image: data.image,
                price: Number(data.price),
                originalPrice: Number(data.originalPrice || null),
                hasOffer: data.hasOffer === "true" || data.hasOffer === true,
                stockStatus: data.stockStatus,
                specs: JSON.stringify(Object.fromEntries(data.specs.filter(s => s.key && s.value).map(s => [s.key, s.value]))),
                features: JSON.stringify(data.features.filter(f => f.text)),
            };
            // NOTE: Replace 'config.electronicsCollectionId' with your actual collection ID
            await appwriteService.createDocument(config.electronicsCollectionId, parsedData);
            reset();
        } catch (error) {
            console.error("Failed to submit electronic:", error);
        } finally {
            setLoading(false);
        }
    };

    const previewData = {
        brand: watchedValues.brand,
        name: watchedValues.name,
        type: electronicTypes[watchedValues.type],
        image: watchedValues.image,
        specs: (watchedValues.specs || []).filter(s => s.key && s.value),
        features: (watchedValues.features || []).filter(f => f.text),
        price: watchedValues.price ? Number(watchedValues.price) : 0,
        originalPrice: watchedValues.originalPrice ? Number(watchedValues.originalPrice) : 0,
        shopData: {
            stockStatus: watchedValues.stockStatus,
            hasOffer: watchedValues.hasOffer === "true" || watchedValues.hasOffer === true,
        },
    };

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 min-h-screen">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-3">Add New Electronic</h1>
                    <p className="text-slate-300">Fill in the details to create a new electronic product listing.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                            
                            <div className="form-section">
                                <h3 className="form-header">Basic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="form-label">Brand</label>
                                        <input {...register("brand", { required: "Brand is required" })} className="input-style" placeholder="e.g. Sony" />
                                        {errors.brand && <p className="error-message">⚠️ {errors.brand.message}</p>}
                                    </div>
                                    <div>
                                        <label className="form-label">Product Name</label>
                                        <input {...register("name", { required: "Name is required" })} className="input-style" placeholder="e.g. Bravia 4K TV" />
                                        {errors.name && <p className="error-message">⚠️ {errors.name.message}</p>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="form-label">Image URL</label>
                                        <input {...register("image", { required: "Image URL is required" })} className="input-style" placeholder="https://..." />
                                        {errors.image && <p className="error-message">⚠️ {errors.image.message}</p>}
                                    </div>
                                    <div>
                                        <label className="form-label">Price (₹)</label>
                                        <input type="number" {...register("price", { required: "Price is required" })} className="input-style" placeholder="e.g. 79999" />
                                        {errors.price && <p className="error-message">⚠️ {errors.price.message}</p>}
                                    </div>
                                    <div>
                                        <label className="form-label">Original Price (Optional)</label>
                                        <input type="number" {...register("originalPrice")} className="input-style" placeholder="e.g. 89999" />
                                    </div>
                                    <div>
                                        <label className="form-label">Product Type</label>
                                        <select {...register("type")} className="input-style">
                                            {Object.entries(electronicTypes).map(([key, value]) => (
                                                <option key={key} value={key} className="bg-slate-800">{value}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="form-label">Offer Status</label>
                                        <select {...register("hasOffer")} className="input-style">
                                            <option value={false} className="bg-slate-800">No Offer</option>
                                            <option value={true} className="bg-slate-800">Active Offer</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="form-label">Stock Status</label>
                                        <select {...register("stockStatus")} className="input-style">
                                            <option value="in-stock" className="bg-slate-800">In Stock</option>
                                            <option value="low-stock" className="bg-slate-800">Low Stock</option>
                                            <option value="out-of-stock" className="bg-slate-800">Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="form-header">Specifications</h3>
                                    <button type="button" onClick={() => appendSpec({ key: "", value: "" })} className="btn-add">Add Spec</button>
                                </div>
                                <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                                    {specFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4 items-center">
                                            <input {...register(`specs.${index}.key`)} placeholder="e.g. Screen Size" className="flex-1 input-style" />
                                            <input {...register(`specs.${index}.value`)} placeholder="e.g. 55-inch" className="flex-1 input-style" />
                                            <button type="button" onClick={() => removeSpec(index)} className="btn-remove">🗑️</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="form-section">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="form-header">Features (Text Only)</h3>
                                    <button type="button" onClick={() => appendFeature({ text: "" })} className="btn-add">Add Feature</button>
                                </div>
                                <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                                    {featureFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4 items-center">
                                            <input {...register(`features.${index}.text`)} placeholder="e.g. Dolby Atmos Support" className="flex-1 input-style" />
                                            <button type="button" onClick={() => removeFeature(index)} className="btn-remove">🗑️</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6">
                                <button type="submit" disabled={loading} className="w-full btn-submit">
                                    {loading ? <Loader text="Creating..." /> : '⚡ Add Electronic'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <h3 className="text-lg font-bold text-white mb-4 text-center">Live Preview</h3>
                            <ElectronicsProductCard preview={true} product={previewData} />
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .form-section { background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1.5rem; }
                .form-header { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 1.5rem; }
                .form-label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: #6ee7b7; }
                .input-style { width: 100%; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.75rem; padding: 0.75rem 1rem; color: white; transition: all 0.3s; }
                .input-style:focus { outline: none; box-shadow: 0 0 0 2px #3b82f6; border-color: #3b82f6; }
                .btn-add { background-image: linear-gradient(to right, #3b82f6, #8b5cf6); color: white; padding: 0.5rem 1rem; border-radius: 0.75rem; font-weight: 600; transition: all 0.3s; }
                .btn-add:hover { transform: scale(1.05); }
                .btn-remove { color: #f87171; padding: 0.75rem; border-radius: 0.75rem; transition: all 0.3s; }
                .btn-remove:hover { background-color: rgba(248,113,113,0.1); transform: scale(1.1); }
                .btn-submit { width: 100%; background-image: linear-gradient(to right, #10b981, #3b82f6, #8b5cf6); color: white; padding: 1rem 2rem; border-radius: 1rem; font-weight: 700; font-size: 1.125rem; transition: all 0.3s; }
                .btn-submit:hover { transform: scale(1.02); }
                .error-message { color: #f87171; font-size: 0.875rem; margin-top: 0.25rem; }
            `}</style>
        </div>
    );
}

export default AddElectronic;
