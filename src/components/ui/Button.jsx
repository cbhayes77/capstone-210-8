import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      iconOnly,
      disabled = false,
      className = "",
      as = "button",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px]";

    const variants = {
      primary: "bg-white text-black hover:opacity-90 active:opacity-80",
      secondary:
        "ring-1 ring-white/30 text-white hover:bg-white/10 active:bg-white/20",
      link: "text-white underline underline-offset-4 hover:opacity-80 active:opacity-60",
    };

    const sizes = {
      sm: {
        button: iconOnly ? "p-2" : "px-4 py-2 text-sm",
        icon: "w-4 h-4",
        gap: "gap-2",
      },
      md: {
        button: iconOnly ? "p-3" : " px-6 py-3",
        icon: "w-5 h-5",
        gap: "gap-2",
      },
      lg: {
        button: iconOnly ? "p-4" : "px-8 py-4 text-lg",
        icon: "w-6 h-6",
        gap: "gap-3",
      },
    };

    const disabledStyles = disabled
      ? "hover:opacity-50 active:opacity-50 hover:bg-opacity-100"
      : "";

    const iconClasses = sizes[size].icon;

    const renderIcon = (icon) => {
      if (!icon) return null;
      if (typeof icon === "string") {
        return <span className={iconClasses}></span>;
      }
      return <span aria-hidden="true">{icon}</span>;
    };

    const Component = as;

    const buttonClasses = [
      baseStyles,
      variants[variant],
      sizes[size].button,
      iconOnly ? "" : sizes[size].gap,
      disabledStyles,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {leftIcon && renderIcon(leftIcon)}
        {!iconOnly && children}
        {rightIcon && renderIcon(rightIcon)}
        {iconOnly && renderIcon(iconOnly)}
      </Component>
    );
  }
);
Button.displayName = "Button";
export default Button;
