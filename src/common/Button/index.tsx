import React from "react";
import Link from "next/link";
import { Url } from "url";

type ButtonProps = {
  label: string;
  className: string;
  onClick?: () => void;
  href?: string;
};
function Button({ label, className, href, onClick, ...props }: ButtonProps) {
  return (
    <a className="w-0 md:w-[30%] lg:w-[30%]" href={href}>
    <button
      onClick={onClick}
      className={`outline-none border-opacity-30 p-4 rounded-lg ${className}`}
      {...props}
    >
      {label}
    </button>
    </a>
  );
}

export default Button;
