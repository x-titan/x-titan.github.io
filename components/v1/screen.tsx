"use client";

import "./screen.css";

export function Screen({
  width,
  height,
  children,
}: ScreenProps & { children: React.ReactNode }) {
  return (
    <div
      id="screen"
      style={{
        width: width ?? "100%",
        height: height ?? "100%",
      }}
    >
      {children}
    </div>
  );
}

export interface ScreenProps {
  width?: number;
  height?: number;
}
