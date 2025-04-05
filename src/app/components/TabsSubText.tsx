import React from 'react';
import { GiButterfly } from 'react-icons/gi';
import FontText from '@/app/components/FontText';

interface TabsSubTextProps {
    text: string;
}

function TabsSubText({ text }: TabsSubTextProps) {
    return (
        <div className={'flex flex-row gap-x-1'}>
            <GiButterfly className={'text-[#FF9D5C]'} size={20} />
            <FontText className={'text-gray-700'}>{text}</FontText>
        </div>
    );
}

export default TabsSubText;
