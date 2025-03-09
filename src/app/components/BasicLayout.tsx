import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export interface BasicLayoutProps {
    children: React.ReactNode;
}

export default function BasicLayout({ children }: BasicLayoutProps) {
    return (
        <div className={'antialiased'}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
