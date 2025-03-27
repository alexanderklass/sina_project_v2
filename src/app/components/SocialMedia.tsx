import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';

export default function SocialMedia() {
    return (
        <div className={'flex flex-row items-center justify-center'}>
            <button className={'cursor-pointer'}>
                <FaSquareFacebook size={30.5} />
            </button>
            <button className={'cursor-pointer'}>
                <AiFillTikTok size={35} />
            </button>
        </div>
    );
}
