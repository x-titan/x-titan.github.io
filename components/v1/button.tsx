"use client"

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import "./button.css";

export const buttonVariants = cva("button", {
  variants: {
    _type: {
      icon: "icon",
      text: "text",
    },
    _variant: {
      filled: "filled",
      outline: "outline",
      secondary: "secondary",
    },
  },
  defaultVariants: {
    _type: "text",
    _variant: "filled",
  },
});

export function Button({
  className,
  _type,
  _variant,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      slot="button"
      className={cn(buttonVariants({ _type, _variant, className }))}
      {...props}
    />
  );
}
