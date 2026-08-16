import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        {
          // Primary: orange fill, white text, subtle lift
          "bg-accent-500 text-white hover:bg-accent-600 hover:-translate-y-0.5 shadow-md hover:shadow-lg":
            variant === "primary",
          // Secondary: deep-blue outline, fills on hover
          "border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white":
            variant === "secondary",
          // Outline: accent orange border, text accent, fills on hover
          "border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white":
            variant === "outline",
          // Text: link look
          "text-primary-900 hover:text-accent-600 px-0 py-0": variant === "text",
        },
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-base": size === "md",
          "px-7 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
