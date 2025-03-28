'use client';
import React, { useState } from 'react';
import NavButton from '@/app/components/NavButton';
import SocialMedia from '@/app/components/SocialMedia';
import Logo from '@/app/components/Logo';
import BurgerMenuButton from '@/app/components/BurgerMenuButton';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleBurgerMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsFocused(false);
        }, 200);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <nav
            className={`z-20 w-full ${isOpen && isFocused ? 'h-full lg:h-auto' : 'h-[56px] md:h-[70px] lg:h-auto'} fixed top-0 lg:static bg-white duration-300  border-b border-gray-300 shadow-md lg:shadow-none transition-all overflow-hidden lg:items-center lg:justify-between flex flex-col lg:flex-row md:py-2 xl:py-2 xl:p-5 md:px-5`}
        >
            <div className={'flex flex-row items-center justify-around md:justify-between w-full lg:w-auto'}>
                <Logo />
                <BurgerMenuButton
                    handleClick={handleBurgerMenu}
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                    isOpen={isOpen}
                    isFocused={isFocused}
                />
            </div>

            <div
                className={`py-2 lg:py-0 px-10 ${isOpen && isFocused ? 'h-full justify-center flex' : 'hidden'} z-20 lg:px-0 transition-all duration-300 lg:flex flex-col items-center xl:items-baseline space-y-3 lg:space-y-0 lg:flex-row lg:space-x-10`}
            >
                <NavButton href={'/home'}>Start</NavButton>
                <NavButton href={'/rooms'}>Räumlichkeiten</NavButton>
                <NavButton href={'/garden'}>Garten</NavButton>
                <NavButton href={'/concept'}>Konzeption</NavButton>
                <NavButton href={'/impressum'}>Impressum</NavButton>
            </div>
            <SocialMedia />
        </nav>
    );
}
