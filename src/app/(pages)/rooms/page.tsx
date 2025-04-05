'use client';
import React from 'react';
import TopPanel from '@/app/components/TopPanel';
import Tabs from '@/app/components/Tabs';
import { impressions } from '@/app/constants/rooms';
import Image from 'next/image';
import TitleFontText from '@/app/components/TitleFontText';

export default function Rooms() {
    return (
        <main className={'h-full w-full'}>
            <TopPanel
                title={'Unsere Räumlichkeiten'}
                text={
                    'Entdecken Sie die liebevoll gestalteten Räume, in denen unsere Kinder spielen, lernen und wachsen.'
                }
            />

            <section className={'bg-pastel-beige w-full py-20 flex items-center justify-center'}>
                <Tabs />
            </section>
            <section
                className={
                    'flex flex-col items-center gap-y-10 py-20 xl:w-[1200px] px-5 xl:px-0 justify-center mx-auto'
                }
            >
                <div>
                    <TitleFontText className={'text-[#5a8f7b] text-3xl'}>Impressionen</TitleFontText>
                </div>
                <div className={'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid'}>
                    {impressions.map((impression, index) => (
                        <div
                            className={
                                'overflow-hidden relative rounded-lg transition-all shadow-md hover:shadow-lg w-full h-fit'
                            }
                            key={index}
                        >
                            <Image className={'object-cover'} src={impression} alt={`Room${index}`} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
