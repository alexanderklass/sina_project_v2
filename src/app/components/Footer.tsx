'use client';
import React from 'react';
import TitleFontText from '@/app/components/TitleFontText';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { LuPhone } from 'react-icons/lu';
import { LuHouse } from 'react-icons/lu';
import { LuMailPlus } from 'react-icons/lu';
import { LuClock5 } from 'react-icons/lu';
import { LuMapPin } from 'react-icons/lu';

import flyerKids from '@/app/assets/images/footer-kids.png';
import IconSubText from '@/app/components/IconSubText';
import Button from '@/app/components/Button';
const Map = dynamic(() => import('@/app/components/map/MyMap'), { ssr: false });

export default function Footer() {
    return (
        <footer
            className={
                'bg-[#fff8f0] flex -z-0 space-y-5 lg:space-y-0 flex-col lg:flex-row relative w-full p-5 items-center justify-around'
            }
        >
            <Image
                className={'lg:flex place-self-end hidden'}
                width={250}
                src={flyerKids}
                alt={'3 kids walking faced forwards'}
            />
            <div className={`flex w-full items-center space-y-5 justify-center flex-col`}>
                <div className={'text-gray-700 p-2 flex flex-col items-start justify-center gap-y-4'}>
                    <TitleFontText className={'text-2xl text-[#5a8f7b]'}>Impressum</TitleFontText>
                    <div className={'flex flex-col gap-y-2'}>
                        <IconSubText
                            icon={<LuHouse className={'text-lg text-[#FF9D5C]'} />}
                            text={'Mustermann straße 123'}
                        />
                        <IconSubText icon={<LuPhone className={'text-lg text-[#FF9D5C]'} />} text={'01234/56789'} />
                        <IconSubText
                            icon={<LuMailPlus className={'text-lg text-[#FF9D5C]'} />}
                            text={'mustermann@example.com'}
                        />
                        <IconSubText
                            icon={<LuClock5 className={'text-lg text-[#FF9D5C]'} />}
                            text={'Mo-Fr: 7:30 - 16:30 Uhr'}
                        />
                        <Button
                            newTab={true}
                            href={
                                'https://www.google.com/maps/place/Harrislee/@54.8119025,9.3557059,14z/data=!3m1!4b1!4m6!3m5!1s0x47b35d2274485cd9:0x4248963c6583010!8m2!3d54.8075608!4d9.3943621!16zL20vMGN0ajc2?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D'
                            }
                            className={'bg-[#5a8f7b] text-white hover:bg-[#5a8f7b]/80'}
                            icon={<LuMapPin className={'text-white text-lg self-start'} />}
                            text={'Wegbeschreibung'}
                        />
                    </div>
                </div>
            </div>
            <div className={'w-full flex items-center justify-center shadow-2xl overflow-hidden rounded-xl h-full'}>
                <Map />
            </div>
        </footer>
    );
}
