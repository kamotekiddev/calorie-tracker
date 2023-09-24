import React, { ReactNode } from "react";
import GeneralLayout from "@/components/layouts/GeneralLayout";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <GeneralLayout>{children}</GeneralLayout>;
}

export default Layout;
