import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative flex min-h-screen flex-col">{children}</div>;
}
