import TitleFontText from '@/app/components/TitleFontText';
import Animation from '@/app/components/Animation';
import butterFlyAnimation from '@/app/assets/animations/butterfly-animation.json';
import React from 'react';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href={'/home'} className={'flex md:w-auto cursor-pointer flex-row items-center justify-center'}>
            <div className={'space-y-1 flex flex-col items-center justify-center'}>
                <TitleFontText className={'text-lg text-[#5A8F7B]'}>Sina's Schmetterlinge</TitleFontText>
            </div>
            <div className={'md:w-9 w-11'}>
                <Animation animationData={butterFlyAnimation} loop={true} />
            </div>
        </Link>
    );
}
