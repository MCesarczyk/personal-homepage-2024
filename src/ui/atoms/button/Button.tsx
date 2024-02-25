import { type ComponentProps, type ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ComponentProps<"button"> & LinkProps) => (
  <button
    {...props}
    className="inline-flex items-center text-sm sm:text-base md:text-lg lg:text-xl py-2 md:py-3 px-3 md:px-4 w-full justify-center rounded text-white bg-blue-800 dark:bg-blue-600 hover:bg-blue-600 active:bg-blue-600 hover:scale-105 active:scale-100 transition-all duration-300"
  >
    {children}
  </button>
);
