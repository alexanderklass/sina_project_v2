'use client';
import React, { useState } from 'react';
import NavButton from '@/app/components/NavButton';
import SocialMedia from '@/app/components/SocialMedia';
import Logo from '@/app/components/Logo';
import BurgerMenuButton from '@/app/components/BurgerMenuButton';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav
            className={`z-20 w-full ${isOpen ? 'h-full lg:h-auto' : 'h-[48px] lg:h-auto'} fixed top-0 lg:stick  duration-300 bg-[#FFF8F0]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FFF8F0]/80 border-b border-gray-300  transition-all overflow-hidden lg:items-center lg:justify-center flex flex-col lg:flex-row md:py-2 xl:py-2 xl:p-5 md:px-5`}
        >
            <div className={'flex flex-col h-full lg:flex-row items-center justify-between lg:w-[1400px]'}>
                <div
                    className={
                        'flex flex-row items-center justify-center gap-x-5 lg:gap-x-0 md:justify-between w-full lg:w-auto'
                    }
                >
                    <Logo />
                    <BurgerMenuButton handleClick={handleBurgerMenu} isOpen={isOpen} />
                </div>

                <div
                    className={`py-2 lg:py-0 px-10 ${isOpen ? 'h-full justify-center flex' : 'hidden'} z-20 lg:px-0 transition-all duration-300 lg:flex flex-col items-center xl:items-baseline space-y-3 lg:space-y-0 lg:flex-row lg:space-x-5`}
                >
                    <NavButton label={'Startseite'} href={'/home'}>
                        Start
                    </NavButton>
                    <NavButton label={'Unsere Räumlichkeiten'} href={'/rooms'}>
                        Räumlichkeiten
                    </NavButton>
                    <NavButton label={'Unser Garten'} href={'/garden'}>
                        Garten
                    </NavButton>
                    <NavButton label={'Unser Konzept'} href={'/concept'}>
                        Konzeption
                    </NavButton>
                    <NavButton href={'/impressum'}>Impressum</NavButton>
                </div>
                <SocialMedia />
            </div>
        </nav>
    );
}
