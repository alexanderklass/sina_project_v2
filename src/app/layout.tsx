import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
            <body className={`antialiased overflow-x-hidden flex-1`}>{children}</body>
        </html>
    );
}
