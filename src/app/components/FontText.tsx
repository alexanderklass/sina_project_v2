import { Josefin_Sans } from 'next/font/google';
import React from 'react';

const josefin_sans = Josefin_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export interface FontTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function FontText({ className, children, ...props }: FontTextProps) {
    return (
        <text className={`${josefin_sans.className} ${className}`} {...props}>
            {children}
        </text>
    );
}
