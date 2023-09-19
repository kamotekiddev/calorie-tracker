import React, { ReactNode } from "react";
import Header from "./_components/Header";

type DashboardLayoutProps = {
  children: ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
