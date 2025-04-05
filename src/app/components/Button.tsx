import FontText from '@/app/components/FontText';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    href?: string;
    className?: string;
    text: string;
}

export default function Button({ text, href, className, ...props }: ButtonProps) {
    return href !== '#' ? (
        <Link
            {...props}
            href={href || '#'}
            className={`${className} cursor-pointer transition-all rounded-md px-4 py-2`}
        >
            <FontText>{text}</FontText>
        </Link>
    ) : (
        <button {...props} className={'cursor-pointer transition-all rounded-md px-4 py-2'}>
            {text}
        </button>
    );
}
