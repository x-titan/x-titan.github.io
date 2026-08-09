"use client";

import { cn } from "@/lib/utils";
import "./radio-group.css"

export function RadioGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="radio-group"
      className={cn("radio-group", className)}
      {...props}
    />
  );
}

export function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div>
      <input
        data-slot="radio-group-item"
        className={cn("radio-item", className)}
        type="radio"
        {...props}
      />
    </div>
  );
}
