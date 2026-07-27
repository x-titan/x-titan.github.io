import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Blur from "@/components/app/blur";
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
      <Blur />
    </div>
  );
}
