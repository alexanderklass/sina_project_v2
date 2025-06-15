import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import React from 'react';

interface BurgerMenuButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    isOpen: boolean;
    handleClick: () => void;
}

export default function BurgerMenuButton({ isOpen, handleClick }: BurgerMenuButtonProps) {
    return (
        <button onClick={handleClick} className={'cursor-pointer lg:hidden'}>
            {isOpen ? (
                <IoClose className={'animate-fade'} size={35} />
            ) : (
                <RxHamburgerMenu className={'animate-fade'} size={35} />
            )}
        </button>
    );
}
