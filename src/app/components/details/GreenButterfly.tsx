import React from 'react';
import butterflyGreen from '@/app/assets/images/home/green-butterfly.png';
import Image from 'next/image';

export default function GreenButterfly() {
    return (
        <Image
            placeholder={'blur'}
            className={
                'absolute right-6 bottom-[44%] md:left-10 md:bottom-10 w-[50px] md:w-[150px] rotate-[30deg] 2xl:w-[300px]'
            }
            src={butterflyGreen}
            alt={'green butterfly'}
        />
    );
}
