import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import Link from 'next/link';

export default function SocialMedia() {
    return (
        <div className={'flex flex-row items-center mb-5 lg:mb-0 justify-center'}>
            <Link href={'#'} className={'cursor-pointer'}>
                <FaSquareFacebook className={'lg:w-[30.5px] lg:h-[30.5px] w-[40px] h-[40px]'} />
            </Link>
            <Link href={'#'} className={'cursor-pointer'}>
                <AiFillTikTok className={'lg:w-[35px] lg:h-[35px] w-[45px] h-[45px]'} />
            </Link>
        </div>
    );
}
