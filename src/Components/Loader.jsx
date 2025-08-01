// src/components/Loader.jsx
const Loader = ({ size = "md", text = "" }) => {
    const sizes = {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-4",
        lg: "h-10 w-10 border-[5px]",
    };
    
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4">
        <div
        className={`
            ${sizes[size]}
            border-emerald-500 
            border-t-transparent 
            rounded-full 
            animate-spin
            `}
            />
            
    {text && <p className="text-zinc-400 text-sm">{text}</p>}
    </div>
);
};

export default Loader;
