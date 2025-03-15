import React from 'react';
import type { Metadata } from 'next';
import BasicLayout from '@/app/components/BasicLayout';

export interface ILayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Sina's Schmetterlinge",
    description: "Räumlichkeiten Seite von Sina's schmetterlinge",
};

export default function RoomsLayout({ children }: Readonly<ILayout>) {
    return <BasicLayout>{children}</BasicLayout>;
}
