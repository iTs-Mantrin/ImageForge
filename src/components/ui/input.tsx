import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn("h-11 w-full rounded-full border border-input bg-background/70 px-4 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring", className)}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";
