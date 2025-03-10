import AppFooter from "@/components/AppFooter";
import Header from "@/components/Header";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <AppFooter />
    </main>
  );
};

export default RootLayout;
