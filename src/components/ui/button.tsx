import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2 disabled:opacity-50 border border-transparent rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:size-4 font-medium text-sm whitespace-nowrap transition-all duration-300 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow hover:bg-none hover:bg-transparent hover:border-primary",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline:
          "border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-sm hover:bg-none hover:bg-transparent hover:border-white hover:text-white",
        ghost: "hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "hover:no-underline shadow-[inset_0_0_10px_rgba(124,58,237,0.8),0_0_10px_rgba(124,58,237,0.8)] border-primary text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
      hoverStyle: {
        default: "",
        scale: "hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hoverStyle: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
