import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from '@/provider/AuthProvider';
import QueryProvider from '@/provider/QueryProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'WiseBites',
    description:
        'Discover WiseBites, the calorie tracker app that helps you make informed and healthier food choices. Get personalized nutrition insights and expert guidance to reach your dietary goals. Start your journey to wiser eating today!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AuthProvider>
                    <QueryProvider>
                        {children}
                        <Toaster />
                    </QueryProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
