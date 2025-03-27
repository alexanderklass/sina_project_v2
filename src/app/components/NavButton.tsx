'use client';
import { Josefin_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';
import React from 'react';
import FontText from '@/app/components/FontText';
import Link from 'next/link';

export interface NavButtonProps {
    children: React.ReactNode;
    href?: string;
}

const josefin_sans = Josefin_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function NavButton({ children, href }: NavButtonProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    const handleScrollToBottom = (event: React.MouseEvent) => {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    return (
        <>
            {href === '/impressum' ? (
                // Bei einem speziellen Fall wie "/impressum", führe ein Scroll-Event aus.
                <button
                    onClick={handleScrollToBottom}
                    className={`${josefin_sans.className} group relative font-bold cursor-pointer`}
                >
                    <FontText className={'text-2xl lg:text-base'}>{children}</FontText>
                    <div
                        className={`${isActive ? 'w-full' : ''} w-0 absolute transition-all duration-300 h-1 group-hover:w-full rounded-full bg-black`}
                    ></div>
                </button>
            ) : (
                <Link
                    href={href || '#'}
                    className={`${josefin_sans.className} group relative font-bold cursor-pointer`}
                >
                    <FontText className={'text-2xl lg:text-base'}>{children}</FontText>
                    <div
                        className={`${isActive ? 'w-full' : ''} w-0 absolute transition-all duration-300 h-1 group-hover:w-full rounded-full bg-black`}
                    ></div>
                </Link>
            )}
        </>
    );
}
