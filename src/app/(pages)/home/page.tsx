'use client';
import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import { GiButterfly } from 'react-icons/gi';
import React from 'react';
import Image from 'next/image';
import GreenGrass from '@/app/components/details/GreenGrass';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import portraitImage from '@/app/assets/images/home/sina-portrait.jpg';
import { IoLocationOutline } from 'react-icons/io5';
import { PiFlowerLight } from 'react-icons/pi';
import { IoMailOutline } from 'react-icons/io5';

export default function Home() {
    return (
        <main>
            <section
                className={
                    'flex flex-col bg-pastel-beige gap-y-10 xl:gap-y-0 gap-x-20 xl:flex-row py-10 md:py-32 items-center justify-center'
                }
            >
                <div
                    className={
                        'h-full flex flex-col-reverse relative lg:flex-row items-center justify-center lg:gap-x-20 gap-y-10 lg:gap-y-0 py-5 md:py-0 px-5 sm:px-0'
                    }
                >
                    <div className={'space-y-5 flex flex-col items-center justify-center md:w-[550px]'}>
                        <TitleFontText className={'self-start text-3xl 2xl:text-4xl text-[#5a8f7b]'}>
                            Sina's Schmetterlinge
                        </TitleFontText>
                        <FontText className={'self-start text-xl font-bold text-[#5a8f7b]'}>KINDERTAGESPFLEGE</FontText>
                        <FontText className={'text-base xl:text-md text-gray-800'}>
                            Ein Ort, an dem Kinder ihre Flügel entfalten können. Liebevolle Betreuung in familiärer
                            Atmosphäre für die Kleinsten.
                        </FontText>
                        <div className={'flex flex-row gap-x-5 self-start'}>
                            <Button
                                className={'bg-[#5a8f7b] text-white hover:bg-[#5a8f7b]/80'}
                                text={'Kontakt aufnehmen'}
                            />
                            <Button
                                href={'/concept'}
                                className={'ring-[#5a8f7b] text-[#5a8f7b] hover:bg-[#5a8f7b]/20 ring-2'}
                                text={'Mehr erfahren'}
                            />
                        </div>
                    </div>
                    <GreenGrass />
                    <div className={'h-full flex items-center justify-center'}>
                        <div
                            className={
                                'xl:h-[500px] h-[400px] w-[300px] xl:w-[400px] ring-8 ring-white relative overflow-hidden rounded-xl shadow-2xl'
                            }
                        >
                            <Image
                                src={portraitImage}
                                className={'object-cover'}
                                loading="lazy"
                                fill
                                alt={'Sinas Schmetterlinge Portrait Foto'}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={'bg-white relative flex items-center px-5 lg:px-0 justify-center'}>
                <div className={'flex flex-col space-y-10 py-20 items-center justify-center w-full xl:w-[650px]'}>
                    <TitleFontText className={'text-center text-3xl text-[#5a8f7b]'}>
                        Kindertagespflege mit Herz - bei Sina
                    </TitleFontText>
                    <FontText className={'text-center text-base 2xl:text-lg text-gray-800'}>
                        Mein Name ist Sina ich bin 34 Jahre alt, liebevolle Mutter von zwei wunderbaren Kindern - einem
                        Jungen und einem Mädchen. Mit meiner Erfahrung als Mama und große Leidenschaft für die Arbeit
                        mit Kindern biete ich eine liebevolle, familiäre und individuelle Betreuung für die Kleinsten.
                    </FontText>

                    <button
                        type={'button'}
                        className={
                            'cursor-pointer transition-all hover:bg-[#FF9D5C]/80 bg-[#FF9D5C] text-white rounded-md px-4 py-2'
                        }
                    >
                        <FontText>Anfragen unter 01234/5678910</FontText>
                    </button>
                </div>
                <GiButterfly
                    className={'absolute text-[#b5c690]/30 h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] bottom-2 left-2'}
                />
                <GiButterfly
                    className={
                        'absolute  text-[#b5c690]/30 h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] top-2 right-2 -rotate-45'
                    }
                />
            </section>

            <section
                className={
                    'bg-pastel-beige px-5 xl:px-0 flex flex-col space-y-10 py-20 w-full items-center justify-center'
                }
            >
                <TitleFontText className={'text-center text-3xl text-[#5a8f7b]'}>Unsere Angebote</TitleFontText>
                <div
                    className={
                        'flex flex-col lg:flex-row space-y-5 lg:space-y-0 xl:space-x-8 gap-x-2 items-center justify-center'
                    }
                >
                    <Card
                        icon={<IoLocationOutline size={50} />}
                        title={'Räumlichkeiten'}
                        text={'Kindgerechte und sichere Räume zum Spielen, Lernen und Entdecken.'}
                    />
                    <Card
                        icon={<PiFlowerLight size={50} />}
                        title={'Garten'}
                        text={'Ein naturnaher Garten mit vielen Möglichkeiten zum Toben und Erforschen.'}
                    />
                    <Card
                        icon={<IoMailOutline size={50} />}
                        title={'Konzeption'}
                        text={'Pädagogisches Konzept mit Fokus auf individuelle Förderung und Entwicklung.'}
                    />
                </div>
            </section>
        </main>
    );
}
