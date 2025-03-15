import React from 'react';
import NavButton from '@/app/components/NavButton';
import TitleFontText from '@/app/components/TitleFontText';
import FontText from '@/app/components/FontText';
import Animation from '@/app/components/Animation';
import butterFlyAnimation from '@/app/assets/animations/butterfly-animation.json';

export default function Header() {
    return (
        <nav
            className={`z-10 items-center w-full absolute top-0 md:justify-between flex flex-row py-7 px-10 md:p-5 md:px-20`}
        >
            <div className={'flex w-full md:w-auto flex-row items-center justify-center'}>
                <div className={'space-y-1 flex flex-col items-center justify-center'}>
                    <TitleFontText className={'md:text-2xl text-xl'}>Sina's Schmetterlinge</TitleFontText>
                    <FontText className={'md:text-base text-md'}>KINDERTAGESPFLEGE</FontText>
                </div>
                <div className={'md:w-12 w-[60px]'}>
                    <Animation animationData={butterFlyAnimation} loop={true} />
                </div>
            </div>
            <div className={'md:flex hidden flex-row space-x-10'}>
                <NavButton href={'/home'}>Startseite</NavButton>
                <NavButton href={'/rooms'}>Räumlichkeiten</NavButton>
                <NavButton href={'/garden'}>Garten</NavButton>
                <NavButton href={'/concept'}>Konzeption</NavButton>
                <NavButton href={'/impressum'}>Impressum</NavButton>
            </div>
        </nav>
    );
}
