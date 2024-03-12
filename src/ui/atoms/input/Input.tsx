import { type ComponentProps } from "react";

export const Input = ({ ...props }: ComponentProps<"input">) => {
  return (
    <input
      className="px-4 py-2 rounded outline-offset-0 border-2 text-black border-black dark:border-white"
      {...props}
    />
  );
};
