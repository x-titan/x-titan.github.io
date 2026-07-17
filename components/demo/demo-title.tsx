"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "../app/theme-toggle";

export function DemoTitle() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Style Overview</CardTitle>
        <CardDescription className="line-clamp-2">
          Designers love packing quirky glyphs into test phrases. This is a
          preview of the typography styles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ThemeToggle/>
      </CardContent>
    </Card>
  );
}
