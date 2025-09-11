import classNames from "classnames";

export const Button = ({ className = "", children, onClick, variant = "normal", ...props }) => {
    const baseClasses =
        "inline-flex lg:py-landing-sm py-landing-xs lg:px-6 px-4 rounded cursor-pointer elevation transition-colors duration-200";

    const normal = "bg-red-300 text-white border border-primary";

    const outline = "bg-transparent text-primary border border-primary";

    const variantClasses = variant === "outline" ? outline : normal;
    return (
        <button className={classNames(baseClasses, variantClasses, classNames)} onClick={onClick} {...props}>
            {children}
        </button>
    );
};
