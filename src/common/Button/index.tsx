import React from "react";
import Link from "next/link";
import { Url } from "url";

type ButtonProps = {
  label: string;
  className: string;
  onClick?: () => void;
  href?:string
};
function Button({ label, className,href, onClick, ...props }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`outline-none border-opacity-30 p-4 rounded-lg ${className}`}
      {...props}
    >
     <a href={href}>{label}</a>
    </button>
  );
}

export default Button;
