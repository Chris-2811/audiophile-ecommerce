import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "active:border-green valid:ring-primary flex h-[3.5rem] w-full rounded-md border border-slate-200 bg-transparent px-6 py-2 text-sm font-bold tracking-[-0.25px] outline-none focus:ring-[1px] md:w-[309px]",
          className,
        )}
        required
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
