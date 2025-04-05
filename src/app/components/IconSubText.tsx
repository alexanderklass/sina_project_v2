import React from 'react';
import FontText from '@/app/components/FontText';
interface IconSubTextProps {
    icon: React.ReactNode;
    text: string;
}

export default function IconSubText({ icon, text }: IconSubTextProps) {
    return (
        <div className={'flex flex-row gap-x-2 items-start'}>
            {icon}
            <FontText className={'text-gray-700'}>{text}</FontText>
        </div>
    );
}
