import React from 'react';
import type { Metadata } from 'next';
import BasicLayout from '@/app/components/BasicLayout';

export interface ILayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Sina's Schmetterlinge",
    description: "Konzept von Sina's Schmetterlinge",
};

export default function ConceptLayout({ children }: Readonly<ILayout>) {
    return <BasicLayout>{children}</BasicLayout>;
}
