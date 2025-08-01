// src/components/Button.jsx
const VARIANTS = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white",
    ghost: "bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-100/10",
    dark: "bg-zinc-800 text-white hover:bg-zinc-700",
};

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
    disabled = false,
    loading = false,
}) => {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={`
            px-4 py-2 rounded-md font-medium transition-colors duration-200
            ${VARIANTS[variant]}
            ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
            ${className}
            `}
            >
    {loading ? "Loading..." : children}
    
    </button>
);
};

export default Button;
