import * as React from "react";
import { cva } from "class-variance-authority";
import { CircleX } from "lucide-react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        bocesPrimary:
          "border-transparent bg-bocesPrimary text-bocesPrimary-foreground shadow hover:bg-bocesPrimary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asCloseButton = false,
  children,
  ...props
}) {
  if (asCloseButton) {
    return (
      <button className={cn(badgeVariants({ variant }), className)} {...props}>
        <div className="flex items-center justify-center gap-1">
          {children}
          {asCloseButton && <CircleX size="14px" />}
        </div>
      </button>
    );
  }

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
