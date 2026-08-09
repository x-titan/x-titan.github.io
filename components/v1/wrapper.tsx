"use client";

import type React from "react";
import "./wrapper.css";
import { cn } from "@/lib/utils";

export function Wrapper({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("wrapper", className)} {...props}></div>;
}
