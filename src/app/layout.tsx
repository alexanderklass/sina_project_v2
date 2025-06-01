import './globals.css';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.sinas-schmetterlinge.de'),
    title: "Sina's Schmetterlinge",
    description: 'Liebevolle und individuelle Kinderbetreuung in familiärer Atmosphäre.',
    keywords:
        'Schmetterlinge, Kindertagespflege, Kindertagespflege Harrislee, Kindertagespflege Flensburg, Sinas Schmetterlinge, Sina Schmetterlinge, Kindertagesbetreuung, Kinder, Pflege, Betreuung',
    authors: [{ name: 'Sina' }],
    creator: 'Sina',
    publisher: "Sina's Schmetterlinge",
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: "Sina's Schmetterlinge",
        description: 'Liebevolle und individuelle Kinderbetreuung in familiärer Atmosphäre.',
        url: 'https://www.sinas-schmetterlinge.de/home',
        siteName: "Sina's Schmetterlinge",
        locale: 'de_DE',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
            <body>
                <Suspense fallback={null}>{children}</Suspense>
            </body>
        </html>
    );
}
