"use client";

import * as React from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function ColorsDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <div className="grid grid-cols-6 gap-3">
          {[
            "--background",
            "--foreground",
            "--primary",
            "--secondary",
            "--muted",
            "--accent",
            "--border",
            "--chart-1",
            "--chart-2",
            "--chart-3",
            "--chart-4",
            "--chart-5",
          ].map((variant) => (
            <div
              key={variant}
              className="flex flex-col flex-wrap items-center gap-2"
            >
              <div
                className="relative aspect-square w-full rounded-lg bg-(--color) after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
                style={
                  {
                    "--color": `var(${variant})`,
                  } as React.CSSProperties
                }
              />
              <div className="hidden max-w-14 truncate font-mono text-[0.60rem] md:block">
                {variant}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
