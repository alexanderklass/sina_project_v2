import React from 'react';
import FontText from '@/app/components/FontText';

interface CardProps {
    title: string;
    text: string;
    color?: string;
    icon: React.ReactNode;
}

export default function Card({ title, text, icon, color = 'bg-white' }: CardProps) {
    return (
        <div
            className={`flex flex-col p-5 rounded-xl space-y-3 w-full xl:w-[400px] transition-all ${color} drop-shadow-md hover:drop-shadow-xl`}
        >
            <div className={'bg-[#5a8f7b]/20 self-start rounded-full p-2 text-[#5a8f7b]'}>{icon}</div>
            <FontText className={'text-2xl text-[#5a8f7b]'}>{title}</FontText>
            <FontText className={'text-gray-800'}>{text}</FontText>
        </div>
    );
}
