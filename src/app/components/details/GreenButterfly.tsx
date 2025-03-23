import React from 'react';
import butterflyGreen from '@/app/assets/images/home/butterfly-green.png';
import Image from 'next/image';

export default function GreenButterfly() {
    return (
        <Image
            placeholder={'blur'}
            className={'absolute right-6 bottom-[44%] md:left-10 md:bottom-10 w-[50px] md:w-[150px] 2xl:w-[200px]'}
            src={butterflyGreen}
            alt={'green butterfly'}
        />
    );
}
