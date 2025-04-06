import FontText from '@/app/components/FontText';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    href?: string;
    className?: string;
    text: string;
    icon?: React.ReactNode;
    newTab?: boolean;
}

export default function Button({ text, href, className, icon, newTab, ...props }: ButtonProps) {
    return href !== '#' ? (
        <Link
            {...props}
            target={newTab ? '_blank' : '_self'}
            href={href || '#'}
            className={`${className} ${icon && 'gap-x-2'} flex flex-row items-center justify-center cursor-pointer transition-all rounded-md sm:px-4 px-1 py-1 sm:py-2`}
        >
            {icon}
            <FontText>{text}</FontText>
        </Link>
    ) : (
        <button
            {...props}
            className={`cursor-pointer transition-all ${icon && 'gap-x-2'} items-center justify-center flex flex-row rounded-md px-4 py-2`}
        >
            {icon}
            {text}
        </button>
    );
}
