'use client';
import React from 'react';
import FontText from './FontText';
import TitleFontText from '@/app/components/TitleFontText';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import flyerKids from '@/app/assets/images/footer-kids.png';
const Map = dynamic(() => import('@/app/components/map/MyMap'), { ssr: false });

export default function Footer() {
    return (
        <footer
            className={
                'bg-white flex space-y-5 xl: flex-col lg:flex-row relative w-full p-5 items-center justify-center'
            }
        >
            <div className={`w-full z-10 flex items-center space-y-5 justify-center flex-col`}>
                <TitleFontText className={'text-2xl'}>Impressum</TitleFontText>
                <FontText className={'lg:w-[350px] w-auto'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut blanditiis consectetur
                    eveniet, ex incidunt iste, libero maiores neque nesciunt, repellat similique suscipit totam! Aut
                    enim ex expedita omnis quos.
                </FontText>
            </div>
            <Image
                className={'absolute bottom-0 left-0'}
                width={250}
                src={flyerKids}
                alt={'3 kids walking faced forwards'}
            />
            <div
                className={
                    'w-full flex items-center justify-center ring-2 overflow-hidden ring-black rounded-xl h-full'
                }
            >
                <Map />
            </div>
        </footer>
    );
}
