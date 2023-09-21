import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

import Header from "./_components/Header";
import getCurrentlyUsedPlan from "@/actions/getCurrentlyUsePlan";

type DashboardLayoutProps = {
  children: ReactNode;
};

async function Layout({ children }: DashboardLayoutProps) {
  const { currenlyUsedPlan, error } = await getCurrentlyUsedPlan();

  if (!error && !currenlyUsedPlan) redirect("/plans/create-plan");

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
