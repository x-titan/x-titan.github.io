import { Wrapper } from "@/components/v1/wrapper";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper >
      {children}
    </Wrapper>
  );
}
