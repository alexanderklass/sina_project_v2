import React from 'react';
import butterflyPink from '@/app/assets/images/home/butterfly-pink.png';
import Image from 'next/image';

export default function PinkButterfly() {
    return (
        <Image
            placeholder={'blur'}
            className={'absolute  right-6 bottom-[44%] md:right-10 md:bottom-10 w-[50px] md:w-[150px] 2xl:w-[200px]'}
            src={butterflyPink}
            alt={'pink butterfly'}
        />
    );
}
