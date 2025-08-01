"use client"
import { Wifi, Zap, Camera, CheckCircle, Smartphone, Battery, Mic, Headphones, Shield, Move3D, Watch, Gamepad2, Package } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../../../Appwrite/service"; // Assuming path is correct
import config from "../../../config"; // Assuming path is correct
import Loader from "../../../Components/Loader"; // Assuming path is correct
import tinycolor from 'tinycolor2';
import AccessoryProductCard from "../../../Components/Accessories/AccessoriesProductCard";

const EditAccessory = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const iconMap = {
        Zap: Zap, Wifi: Wifi, Camera: Camera, Mic: Mic, Headphones: Headphones,
        Shield: Shield, Move3D: Move3D, Watch: Watch, Gamepad2: Gamepad2,
        Package: Package, Default: CheckCircle,
    };

    const accessoryTypes = {
        audio_accessories: "Audio Accessories",
        power_essentials: "Power Essentials",
        protection_gear: "Protection Gear",
        mounts_holders: "Mounts & Holders",
        smart_devices: "Smart Devices",
        photography_tools: "Photography Tools",
        gaming_gear: "Gaming Gear",
        utilities_misc: "Utilities & Misc",
    };

    const {
        register, handleSubmit, control, reset, watch, setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            brand: "", name: "", type: "power_essentials", image: "",
            price: "", originalPrice: "", hasOffer: false, stockStatus: "in-stock",
            colors: [{ name: "", hex: "#000000" }],
            features: [{ text: "", icon: "Default" }],
        },
    });

    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const watchedValues = watch();

    useEffect(() => {
        const fetchAccessoryData = async () => {
            try {
                const accessoryData = await appwriteService.getDocument(config.accessoriesCollectionId, id);
                if (accessoryData) {
                    const formattedData = {
                        ...accessoryData,
                        colors: JSON.parse(accessoryData.colors || '[]'),
                        features: JSON.parse(accessoryData.features || '[]'),
                    };
                    reset(formattedData);
                } else {
                    navigate('/404');
                }
            } catch (error) {
                console.error("Failed to fetch accessory data:", error);
            } finally {
                setIsFetching(false);
            }
        };
        fetchAccessoryData();
    }, [id, reset, navigate]);

    const { fields: colorFields, append: appendColor, remove: removeColor } = useFieldArray({ control, name: "colors" });
    const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({ control, name: "features" });

    const handleColorNameChange = (event, index) => {
        const nameInput = event.target.value;
        const color = tinycolor(nameInput);
        if (color.isValid()) {
            setValue(`colors.${index}.hex`, color.toHexString());
        }
    };

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
                colors: JSON.stringify(data.colors.filter(c => c.name && c.hex)),
                features: JSON.stringify(data.features.filter(f => f.text)),
            };
            const updatedDocument = await appwriteService.updateDocument(config.accessoriesCollectionId, id, parsedData);
            if(updatedDocument) {
                navigate('/accessories'); // Navigate back to the list on success
            }
        } catch (error) {
            console.error("Failed to update accessory:", error);
        } finally {
            setLoading(false);
        }
    };

    const previewData = {
        brand: watchedValues.brand,
        name: watchedValues.name,
        type: accessoryTypes[watchedValues.type],
        image: watchedValues.image,
        colors: (watchedValues.colors || []).filter(c => c.name && c.hex),
        features: (watchedValues.features || []).filter(f => f.text),
        price: watchedValues.price ? Number(watchedValues.price) : 0,
        originalPrice: watchedValues.originalPrice ? Number(watchedValues.originalPrice) : 0,
        shopData: {
            stockStatus: watchedValues.stockStatus,
            hasOffer: watchedValues.hasOffer === "true" || watchedValues.hasOffer === true,
        },
    };
    
    if (isFetching) {
        return (
            <div className="flex justify-center items-center h-screen bg-slate-900">
                <Loader text="Loading Accessory Data..." />
            </div>
        );
    }

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 min-h-screen">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-3">Edit Accessory</h1>
                    <p className="text-slate-300">Update the details for this accessory listing.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                            
                            {/* Basic Information */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-6">Basic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-emerald-300 mb-2">Brand</label>
                                        <input {...register("brand", { required: "Brand is required" })} className="w-full input-style" placeholder="e.g. Samsung" />
                                        {errors.brand && <p className="text-red-400 text-sm mt-1">⚠️ {errors.brand.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-emerald-300 mb-2">Accessory Name</label>
                                        <input {...register("name", { required: "Name is required" })} className="w-full input-style" placeholder="e.g. Galaxy Buds Pro" />
                                        {errors.name && <p className="text-red-400 text-sm mt-1">⚠️ {errors.name.message}</p>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-semibold text-emerald-300 mb-2">Image URL</label>
                                        <input {...register("image", { required: "Image URL is required" })} className="w-full input-style" placeholder="https://..." />
                                        {errors.image && <p className="text-red-400 text-sm mt-1">⚠️ {errors.image.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-300 mb-2">Price (₹)</label>
                                        <input type="number" {...register("price", { required: "Price is required" })} className="w-full input-style" placeholder="e.g. 4999" />
                                        {errors.price && <p className="text-red-400 text-sm mt-1">⚠️ {errors.price.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-300 mb-2">Original Price (Optional)</label>
                                        <input type="number" {...register("originalPrice")} className="w-full input-style" placeholder="e.g. 6999" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-purple-300 mb-2">Accessory Type</label>
                                        <select {...register("type")} className="w-full input-style">
                                            {Object.entries(accessoryTypes).map(([key, value]) => (
                                                <option key={key} value={key} className="bg-slate-800">{value}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-orange-300 mb-2">Offer Status</label>
                                        <select {...register("hasOffer")} className="w-full input-style">
                                            <option value={false} className="bg-slate-800">No Offer</option>
                                            <option value={true} className="bg-slate-800">Active Offer</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-semibold text-green-300 mb-2">Stock Status</label>
                                        <select {...register("stockStatus")} className="w-full input-style">
                                            <option value="in-stock" className="bg-slate-800">In Stock</option>
                                            <option value="low-stock" className="bg-slate-800">Low Stock</option>
                                            <option value="out-of-stock" className="bg-slate-800">Out of Stock</option>
                                        </select>
                                    </div>
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
                                            <input {...register(`colors.${index}.name`)} placeholder="e.g. Phantom Black" className="flex-1 input-style" onChange={(e) => handleColorNameChange(e, index)} />
                                            <input type="color" {...register(`colors.${index}.hex`)} className="w-14 h-12 p-1 input-style cursor-pointer" />
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
                                    {featureFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4 items-center">
                                            <input {...register(`features.${index}.text`)} placeholder="e.g. Fast Charging" className="flex-1 input-style" />
                                            <select {...register(`features.${index}.icon`)} className="input-style">
                                                {Object.keys(iconMap).map(iconName => <option key={iconName} value={iconName} className="bg-slate-800">{iconName}</option>)}
                                            </select>
                                            <button type="button" onClick={() => removeFeature(index)} className="btn-remove">🗑️</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6">
                                <button type="submit" disabled={loading} className="w-full btn-submit">
                                    {loading ? <Loader text="Saving Changes..." /> : '💾 Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Preview Section */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <h3 className="text-lg font-bold text-white mb-4 text-center">Live Preview</h3>
                            <AccessoryProductCard product={previewData} />
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .input-style {
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.75rem;
                    padding: 0.75rem 1rem;
                    color: white;
                    transition: all 0.3s;
                }
                .input-style:focus {
                    outline: none;
                    ring: 2px;
                    ring-color: #10b981;
                    border-color: #10b981;
                }
                .btn-add {
                    background-image: linear-gradient(to right, #3b82f6, #8b5cf6);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.75rem;
                    font-weight: 600;
                    transition: all 0.3s;
                }
                .btn-add:hover {
                    transform: scale(1.05);
                }
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
                    background-image: linear-gradient(to right, #10b981, #3b82f6, #8b5cf6);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 1rem;
                    font-weight: 700;
                    font-size: 1.125rem;
                    transition: all 0.3s;
                }
                .btn-submit:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </div>
    );
}

export default EditAccessory;
