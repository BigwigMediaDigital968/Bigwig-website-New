"use client";
import Link from "next/link";
import React from "react";

interface ButtonFillProps {
  text: React.ReactNode;
  type?: "button" | "submit" | "reset"; // <-- ADD THIS
  href?: string;
  onClick?: () => void;
  className?: string;
  aos?: string;
  aosDelay?: string;
  variant?: "dark" | "light"; // "light" = for use on white backgrounds
}

const ButtonFill: React.FC<ButtonFillProps> = ({
  text,
  type = "button", // <-- DEFAULT to button
  href,
  onClick,
  className = "",
  aos,
  aosDelay,
  variant = "dark",
}) => {
  const c =
    variant === "light"
      ? { text: "text-[#011C40]", border: "border-[#011C40]", hover: "group-hover:text-[#26658C]" }
      : { text: "text-[#A7EBF2]", border: "border-[#A7EBF2]", hover: "group-hover:text-[#A7EBF2]" };

  const buttonContent = (
    <button
      type={type} // <-- IMPORTANT
      onClick={onClick}
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={`relative flex items-center border hover:border-0 cursor-pointer justify-center px-6 py-2 text-sm md:text-base font-semibold uppercase ${c.text} group overflow-hidden rounded-lg ${c.border} transition-colors duration-300 ${className}`}
    >
      {/* Borders */}
      <div className={`absolute bottom-0 left-0 h-0 border-l-2 ${c.border} transition-all duration-300 group-hover:h-full pointer-events-none`}></div>
      <div className={`absolute top-0 left-0 w-0 border-t-2 ${c.border} transition-all duration-300 delay-100 group-hover:w-full pointer-events-none`}></div>
      <div className={`absolute top-0 right-0 h-0 border-r-2 ${c.border} transition-all duration-300 delay-200 group-hover:h-full pointer-events-none`}></div>
      <div className={`absolute bottom-0 right-0 w-0 border-b-2 ${c.border} transition-all duration-300 delay-300 group-hover:w-full pointer-events-none`}></div>

      <span className={`relative z-10 transition-colors duration-300 ${c.hover}`}>
        {text}
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default ButtonFill;
