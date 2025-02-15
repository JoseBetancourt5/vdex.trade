import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn("grid grid-cols-12 gap-4 mx-auto ", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "col-span-12 md:col-span-6",
        "overflow-hidden",
        "flex flex-col",
        "p-6 md:p-8",
        "bg-black/50",
        "border border-white/10",
        "rounded-[48px]",
        className
      )}
      style={{
        backgroundImage: `url("/card_bg_image.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};
