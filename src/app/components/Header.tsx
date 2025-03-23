'use client';
import React from 'react';
import NavButton from '@/app/components/NavButton';
import TitleFontText from '@/app/components/TitleFontText';
import FontText from '@/app/components/FontText';
import Animation from '@/app/components/Animation';
import butterFlyAnimation from '@/app/assets/animations/butterfly-animation.json';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleBurgerMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav
            className={`z-10 w-full ${isOpen ? 'h-[250px] md:h-auto' : 'h-[56px] md:h-auto'} fixed top-0 md:static bg-white duration-300 shadow-md transition-all overflow-hidden md:items-center md:justify-between flex flex-col md:flex-row md:py-2 xl:py-7 xl:p-5 md:px-20`}
        >
            <div className={'flex flex-row items-center justify-around md:justify-between w-full 2xl:w-auto'}>
                <div className={'flex md:w-auto flex-row items-center justify-center'}>
                    <div className={'space-y-1 flex flex-col items-center justify-center'}>
                        <TitleFontText className={'md:text-2xl text-xl'}>Sina's Schmetterlinge</TitleFontText>
                        <FontText className={'md:text-base text-md'}>KINDERTAGESPFLEGE</FontText>
                    </div>
                    <div className={'md:w-12 w-11'}>
                        <Animation animationData={butterFlyAnimation} loop={true} />
                    </div>
                </div>
                <button onClick={handleBurgerMenu} className={'cursor-pointer md:hidden'}>
                    {isOpen ? (
                        <IoClose className={'animate-fade'} size={35} />
                    ) : (
                        <RxHamburgerMenu className={'animate-fade'} size={35} />
                    )}
                </button>
            </div>

            <div
                className={`py-2 md:py-0 px-10 md:px-0 h-0 transition-all duration-300 flex flex-col items-start xl:items-baseline space-y-3 xl:space-y-0 md:flex-row md:space-x-10`}
            >
                <NavButton href={'/home'}>Startseite</NavButton>
                <NavButton href={'/rooms'}>Räumlichkeiten</NavButton>
                <NavButton href={'/garden'}>Garten</NavButton>
                <NavButton href={'/concept'}>Konzeption</NavButton>
                <NavButton href={'/impressum'}>Impressum</NavButton>
            </div>
        </nav>
    );
}
