import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverAccent?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverAccent = true,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden transition-all duration-300",
        {
          "hover:-translate-y-1 hover:shadow-lg hover:border-t-4 hover:border-t-accent-500":
            hoverAccent,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
