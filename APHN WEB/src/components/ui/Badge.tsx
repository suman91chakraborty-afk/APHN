import React from "react";
import clsx from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase",
        {
          "bg-primary-100 text-primary-900": variant === "primary",
          "bg-accent-100 text-accent-600": variant === "secondary",
          "bg-emerald-100 text-emerald-800": variant === "success",
          "bg-amber-100 text-amber-800": variant === "warning",
          "bg-rose-100 text-rose-800": variant === "danger",
          "bg-slate-100 text-slate-700": variant === "neutral",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
