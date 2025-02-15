import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Whether to center the content verticallyn */
  centerContent?: boolean;
}

/**
 * A reusable section component with consistent spacing and container width
 * @example
 * <Section>
 *   <h1>Content</h1>
 * </Section>
 *
 * // With vertical centering
 * <Section centerContent>
 *   <h1>Centered Content</h1>
 * </Section>
 */
export function Section({ children, className, centerContent = false, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "w-full container mx-auto px-4 py-12 md:py-24",
        centerContent && "flex flex-col justify-center items-center",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
