import FontText from '@/app/components/FontText';
import React from 'react';

interface IconTextProps {
    icon: React.ReactNode;
    text: string;
}

export default function IconText({ icon, text }: IconTextProps) {
    return (
        <div className={'flex flex-col gap-y-5'}>
            <div className={'text-3xl p-3 bg-white rounded-full shadow-md self-center text-[#5a8f7b]'}>{icon}</div>
            <FontText className={'text-[#5a8f7b] text-center text-2xl'}>{text}</FontText>
        </div>
    );
}
