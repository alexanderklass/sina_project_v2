import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={'h-full'} lang="de">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
