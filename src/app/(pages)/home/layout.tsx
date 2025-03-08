import React from 'react';
import type { Metadata } from 'next';

export interface ILayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Sina's Schmetterlinge",
    description: "Startseite von Sina's schmetterlinge",
};

export default function Layout({ children }: Readonly<ILayout>) {
    return <body className={`antialiased`}>{children}</body>;
}
