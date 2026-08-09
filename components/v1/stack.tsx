"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const StackVariants = cva("stack", {
  variants: {
    orientation: {
      horizontal: "row",
      vertical: "col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export function Stack({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof StackVariants>) {
  return (
    <div
      role="group"
      data-slot="stack"
      data-orientation={orientation}
      className={cn(StackVariants({ orientation }), className)}
      {...props}
    />
  );
}
