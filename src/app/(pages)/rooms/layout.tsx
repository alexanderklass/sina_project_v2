import React from 'react';
import type { Metadata } from 'next';
import BasicLayout from '@/app/components/BasicLayout';

export interface ILayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Unser Garten – Sina's Schmetterlinge",
    description: 'Räumlichkeiten für die Kinder spielerisch gestaltet bei Sina\'s Schmetterlinge in Harrislee.',
    keywords: 'Spielbereich, Spiele, Toben, Spielen, Kinder, Essbereich, Schlafen, Ruhebereich, Harrislee, Kindertagespflege, Sinas Schmetterlinge',
    openGraph: {
        title: "Unsere Räumlichkeiten – Sina's Schmetterlinge",
        description: 'Naturnaher Garten für Kinder in Harrislee – Spiel, Spaß und Naturerfahrung.',
        url: 'https://www.sinas-schmetterlinge.de/rooms',
        siteName: "Sina's Schmetterlinge",
        locale: 'de_DE',
        type: 'website',
    },
};

export default function RoomsLayout({ children }: Readonly<ILayout>) {
    return <BasicLayout>{children}</BasicLayout>;
}
