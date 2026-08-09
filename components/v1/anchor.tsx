"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";
import "./anchor.css"

export function Anchor({
  className,
  _type,
  _variant,
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof buttonVariants>) {
  return (
    <a
      className={cn(buttonVariants({ _type, _variant, className }))}
      {...props}
    />
  );
}
