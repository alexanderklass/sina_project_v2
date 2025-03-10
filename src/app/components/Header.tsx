import React from 'react';
import NavButton from '@/app/components/NavButton';
import logo from '@/assets/images/Sina-logo.jpeg';
import Image from 'next/image';

export default function Header() {
    return (
        <nav className={`items-center absolute top-0 w-full justify-between flex flex-row p-5 px-20`}>
            <Image
                className={'rounded-xl z-20'}
                src={logo}
                alt={'Sinas Schmetterlinge Logo'}
                width={200}
                height={100}
            />
            <div className={'flex flex-row space-x-10'}>
                <NavButton href={'/home'}>Startseite</NavButton>
                <NavButton href={'/about'}>Räumlichkeiten</NavButton>
                <NavButton href={'/about'}>Garten</NavButton>
                <NavButton>Konzeption</NavButton>
                <NavButton href={'/impressum'}>Impressum</NavButton>
            </div>
        </nav>
    );
}
