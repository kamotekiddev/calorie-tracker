import React, { ReactNode } from 'react';
import Header from './Header';

type GeneralLayoutProps = {
    children: ReactNode;
};

function GeneralLayout({ children }: GeneralLayoutProps) {
    return (
        <div className='h-screen grid grid-rows-[auto_1fr] overflow-auto'>
            <Header />
            {children}
        </div>
    );
}

export default GeneralLayout;
