import React from 'react';
import Link from 'next/link';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function SocialMedia() {
    return (
        <div className={'flex flex-row items-center gap-x-1 mb-5 lg:mb-0 justify-center'}>
            <Link href={'#'} className={'cursor-pointer'}>
                <FiFacebook className={'lg:w-[23px] lg:h-[23px] w-[40px] h-[40px]'} />
            </Link>
            <Link href={'#'} className={'cursor-pointer'}>
                <AiOutlineInstagram className={'lg:w-[28px] lg:h-[28px] w-[45px] h-[45px]'} />
            </Link>
        </div>
    );
}
