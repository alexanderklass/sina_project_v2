import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import { GiButterfly } from 'react-icons/gi';
import React from 'react';

interface TopPanelProps {
    title: string;
    text: string;
}

export default function TopPanel({ title, text }: TopPanelProps) {
    return (
        <div
            className={
                'lg:mt-[53px] mt-[48px] bg-[#F8F4E8] gap-y-6 py-20 px-5 lg:px-0 flex flex-col relative items-center justify-center'
            }
        >
            <TitleFontText className={'text-4xl text-[#5a8f7b]'}>{title}</TitleFontText>
            <FontText className={'text-xl text-gray-700 lg:text-center'}>{text}</FontText>
            <GiButterfly
                className={
                    'absolute  text-[#e8edda] lg:h-[100px] lg:w-[100px] w-[50px] h-[50px] top-2 right-2 -rotate-45'
                }
            />
        </div>
    );
}
