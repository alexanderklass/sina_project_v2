import React from 'react';
import type { Metadata } from 'next';
import BasicLayout from '@/app/components/BasicLayout';

export interface ILayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Unser Garten – Sina's Schmetterlinge",
    description: 'Entdecke unseren naturnahen Garten für Kinder: Spiel, Naturerfahrung und Abenteuer bei Sina\'s Schmetterlinge in Harrislee.',
    keywords: 'Garten, Natur, Kinder, Spielen, Harrislee, Kindertagespflege, Sinas Schmetterlinge',
    openGraph: {
        title: "Unser Garten – Sina's Schmetterlinge",
        description: 'Naturnaher Garten für Kinder in Harrislee – Spiel, Spaß und Naturerfahrung.',
        url: 'https://www.sinas-schmetterlinge.de/garden',
        siteName: "Sina's Schmetterlinge",
        locale: 'de_DE',
        type: 'website',
    },
};

export default function GardenLayout({ children }: Readonly<ILayout>) {
    return <BasicLayout>{children}</BasicLayout>;
}
