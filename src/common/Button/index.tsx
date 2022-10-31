import React from "react";
import Link from "next/link";

type ButtonProps = {
  label: string;
  className: string;
};
function Button({ label, className, ...props }: ButtonProps) {
  return (
    <button className={`outline-none border-opacity-30 p-4 rounded-lg ${className}`}  {...props}>
      {label}
    </button>
  );
}

export default Button;
