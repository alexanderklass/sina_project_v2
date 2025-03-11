'use client';
import React from 'react';
import NavButton from '@/app/components/NavButton';
import TitleFontText from '@/app/components/TitleFontText';
import FontText from '@/app/components/FontText';
import butterFlyAnimation from '@/app/assets/animations/butterfly-animation.json';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Header() {
    return (
        <nav className={`z-10 items-center absolute top-0 w-full justify-between flex flex-row p-5 px-20`}>
            <div className={'flex flex-row items-center justify-center'}>
                <div className={'space-y-1 flex flex-col items-center justify-center'}>
                    <TitleFontText className={'text-2xl'}>Sina's Schmetterlinge</TitleFontText>
                    <FontText>KINDERTAGESPFLEGE</FontText>
                </div>
                <div className={'w-12'}>
                    <Lottie animationData={butterFlyAnimation} loop={true} />
                </div>
            </div>
            <div className={'flex flex-row space-x-10'}>
                <NavButton href={'/home'}>Startseite</NavButton>
                <NavButton>Räumlichkeiten</NavButton>
                <NavButton>Garten</NavButton>
                <NavButton>Konzeption</NavButton>
                <NavButton href={'/impressum'}>Impressum</NavButton>
            </div>
        </nav>
    );
}
