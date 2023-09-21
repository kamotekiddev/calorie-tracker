import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

import Header from "./_components/Header";
import getUserPlans from "@/actions/getUserPlans";

type DashboardLayoutProps = {
  children: ReactNode;
};

async function Layout({ children }: DashboardLayoutProps) {
  const { plans, error } = await getUserPlans();

  if (!error && !plans?.length) redirect("/plans/create-plan");

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
