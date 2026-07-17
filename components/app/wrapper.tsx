import type React from "react";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-muted p-4 sm:p-6 lg:p-12">
      {children}
    </div>
  );
}
