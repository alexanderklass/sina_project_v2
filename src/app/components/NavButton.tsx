'use client';
import { Josefin_Sans } from 'next/font/google';
import React from 'react';
import { useRouter } from 'next/navigation';

export interface NavButtonProps {
    children: React.ReactNode;
    href?: string;
}

const josefin_sans = Josefin_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function NavButton({ children, href }: NavButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        }
    };
    return (
        <button onClick={handleClick} className={`${josefin_sans.className} font-bold cursor-pointer`}>
            {children}
        </button>
    );
}
