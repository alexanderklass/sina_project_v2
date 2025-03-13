import React from 'react';
import FontText from './FontText';
import TitleFontText from '@/app/components/TitleFontText';
import Image from 'next/image';
import flyerKids from '@/app/assets/images/footer-kids.png';

export default function Footer() {
    return (
        <footer className={'bg-white h-[250px] flex relative w-full p-5 flex-row items-center justify-center'}>
            <div className={`w-full flex items-center translate-x-28 space-y-5 justify-center flex-col`}>
                <TitleFontText className={'text-2xl'}>Impressum</TitleFontText>
                <FontText className={'w-[350px]'}>
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
            <div className={'w-full flex items-center justify-center ring-2 ring-black rounded-xl h-full'}>KARTE</div>
        </footer>
    );
}
