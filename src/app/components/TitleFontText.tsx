import React from 'react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
});

export interface TitleFontTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function TitleFontText({ className, children, ...props }: TitleFontTextProps) {
    return (
        <span {...props} className={`${pacifico.className} ${className}`}>
            {children}
        </span>
    );
}
