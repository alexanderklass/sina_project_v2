import React from 'react';
import NavButton from '@/app/components/NavButton';

export default function Header() {
    return (
        <nav className={`items-center absolute top-0 w-full justify-between flex flex-row p-5 px-20`}>
            <div>LOGO</div>
            <div className={'flex flex-row space-x-10'}>
                <NavButton href={'/home'}>Startseite</NavButton>
                <NavButton>Über mich</NavButton>
                <NavButton>Konzeption</NavButton>
                <NavButton href={'/impressum'}>Impressum</NavButton>
            </div>
        </nav>
    );
}
