import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
