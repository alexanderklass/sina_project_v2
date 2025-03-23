import React from 'react';
import TitleFontText from '@/app/components/TitleFontText';
import FontText from '@/app/components/FontText';

interface TextGridProps {
    title: string;
    children: React.ReactNode;
    extraChildren?: React.ReactNode;
    isStartOfPage?: boolean;
    color?: string;
}

export default function TextSection({ title, children, extraChildren, isStartOfPage, color }: TextGridProps) {
    return (
        <div
            className={`${isStartOfPage && 'mt-[56px] lg:mt-0'} ${color} w-full h-full flex items-center justify-center py-5 md:py-0 px-5 sm:px-0`}
        >
            <div className={'max-w-[500px] flex flex-col items-center justify-center space-y-5'}>
                <TitleFontText className={'self-start text-3xl'}>{title}</TitleFontText>
                <FontText>{children}</FontText>
            </div>
            {extraChildren}
        </div>
    );
}
