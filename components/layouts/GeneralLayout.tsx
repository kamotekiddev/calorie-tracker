import React, { ReactNode } from 'react';
import Header from './Header';

type GeneralLayoutProps = {
    children: ReactNode;
};

function GeneralLayout({ children }: GeneralLayoutProps) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default GeneralLayout;
