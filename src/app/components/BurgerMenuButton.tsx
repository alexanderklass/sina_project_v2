import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import React from 'react';

interface BurgerMenuButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    isOpen: boolean;
    isFocused: boolean;
    handleClick: () => void;
    handleBlur: () => void;
    handleFocus: () => void;
}

export default function BurgerMenuButton({
    isOpen,
    isFocused,
    handleClick,
    handleBlur,
    handleFocus,
}: BurgerMenuButtonProps) {
    return (
        <button onFocus={handleFocus} onClick={handleClick} onBlur={handleBlur} className={'cursor-pointer lg:hidden'}>
            {isOpen && isFocused ? (
                <IoClose className={'animate-fade'} size={35} />
            ) : (
                <RxHamburgerMenu className={'animate-fade'} size={35} />
            )}
        </button>
    );
}
