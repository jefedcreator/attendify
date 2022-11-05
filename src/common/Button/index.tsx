import React from "react";
import Link from "next/link";

type ButtonProps = {
  label: string;
  className: string;
  onClick?: () => void;
};
function Button({ label, className, onClick, ...props }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`outline-none border-opacity-30 p-4 rounded-lg ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
