import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

import getUserPlans from '@/actions/getUserPlans';
import GeneralLayout from '@/components/layouts/GeneralLayout';

type DashboardLayoutProps = {
    children: ReactNode;
};

async function Layout({ children }: DashboardLayoutProps) {
    const { plans, error } = await getUserPlans();

    if (!error && !plans?.length) redirect('/setup-plan');

    return <GeneralLayout>{children}</GeneralLayout>;
}

export default Layout;
