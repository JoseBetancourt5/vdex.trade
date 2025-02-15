import { cva, type VariantProps } from "class-variance-authority";
import { JSX } from "react";

import { cn } from "@/lib/utils";

// ------------------------------ Heading ------------------------------
const headingVariants = cva("text-foreground scroll-m-20", {
  variants: {
    variant: {
      h1: "font-extrabold",
      h2: "font-bold",
      h3: "font-semibold",
      h4: "font-medium",
      h5: "font-medium",
      h6: "font-medium",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg md:text-xl",
      xl: "text-xl md:text-2xl",
      "2xl": "text-2xl md:text-3xl",
      "3xl": "text-3xl md:text-4xl",
      "4xl": "text-4xl md:text-5xl",
      "5xl": "text-5xl md:text-6xl",
      hero: "text-6xl md:text-7xl",
    },
  },
  compoundVariants: [
    {
      variant: "h1",
      size: "4xl",
      class: "tracking-tighter",
    },
    {
      variant: "h2",
      size: "3xl",
    },
    {
      variant: "h3",
      size: "2xl",
    },
    {
      variant: "h4",
      size: "xl",
    },
    {
      variant: "h5",
      size: "lg",
    },
    {
      variant: ["h2", "h3", "h4"],
      class: "tracking-tight",
    },
  ],
  defaultVariants: {
    variant: "h2",
    size: "xl",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType;
}

function Heading({ className, variant, size, as: Component, ...props }: HeadingProps) {
  const Tag = Component || (variant as keyof JSX.IntrinsicElements) || "h2";
  return <Tag className={cn(headingVariants({ variant, size, className }))} {...props} />;
}

// ------------------------------ Text ------------------------------
const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      p: "leading-7",
      span: "",
      lead: "text-muted-foreground",
      muted: "text-muted-foreground",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg md:text-xl",
      xl: "text-xl md:text-2xl",
    },
  },
  compoundVariants: [
    {
      variant: "lead",
      size: "lg",
      class: "font-normal",
    },
    {
      variant: "muted",
      size: "sm",
      class: "font-medium",
    },
  ],
  defaultVariants: {
    variant: "p",
    size: "base",
  },
});

interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

function Text({ className, variant, size, as: Component = "p", ...props }: TextProps) {
  return <Component className={cn(textVariants({ variant, size, className }))} {...props} />;
}

// ------------------------------ Blockquote ------------------------------
const blockquoteVariants = cva("border-l-2 text-foreground italic", {
  variants: {
    size: {
      base: "text-base",
      lg: "text-lg md:text-xl",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

function Blockquote({
  className,
  size,
  ...props
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement> & VariantProps<typeof blockquoteVariants>) {
  return <blockquote className={cn(blockquoteVariants({ size, className }))} {...props} />;
}

// ------------------------------ Code ------------------------------
const codeVariants = cva("bg-muted rounded font-mono font-semibold", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

function Code({
  className,
  size,
  ...props
}: React.HTMLAttributes<HTMLElement> & VariantProps<typeof codeVariants>) {
  return <code className={cn(codeVariants({ size, className }))} {...props} />;
}

// ------------------------------ Exports ------------------------------
export { Heading, Text, Blockquote, Code };
