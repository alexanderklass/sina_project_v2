'use client';
import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import ColorSection from '@/app/components/ColorSection';
import { GiButterfly } from 'react-icons/gi';
import React from 'react';
import ImageSection from '@/app/components/ImageSection';
import GreenGrass from '@/app/components/details/GreenGrass';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import profilePicStock from '@/app/assets/images/home/woman-stock.jpg';
import { IoLocationOutline } from 'react-icons/io5';
import { PiFlowerLight } from 'react-icons/pi';
import { IoMailOutline } from 'react-icons/io5';

export default function Home() {
    return (
        <main>
            <ColorSection direction={'row'} isStartOfPage={true}>
                <ImageSection
                    isStartOfPage={true}
                    vertical={true}
                    color={'bg-pastel-beige'}
                    src={profilePicStock}
                    alt={'close up from woman'}
                />
                <div className={'w-full h-full flex flex-col items-center justify-center py-5 md:py-0 px-5 sm:px-0'}>
                    <div className={'space-y-5 flex flex-col items-center justify-center max-w-[500px]'}>
                        <TitleFontText className={'self-start text-3xl 2xl:text-4xl text-[#5a8f7b]'}>
                            Sina's Schmetterlinge
                        </TitleFontText>
                        <FontText className={'self-start text-xl font-bold text-[#5a8f7b]'}>KINDERTAGESPFLEGE</FontText>
                        <FontText className={'text-base 2xl:text-xl text-gray-800'}>
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
                </div>
                <GreenGrass />
            </ColorSection>

            <section className={'bg-pastel-green relative flex items-center justify-center'}>
                <div className={'flex flex-col space-y-10 py-20 items-center justify-center w-[650px]'}>
                    <TitleFontText className={'text-center text-3xl text-[#5a8f7b]'}>Herzlich Willkommen</TitleFontText>
                    <FontText className={'text-center text-base 2xl:text-xl text-gray-800'}>
                        Mein Name ist Sina ich bin X Jahre alt. Zu meiner Familie gehören mein Mann Tino und unsere
                        Kinder Milan und Anissa. Während meiner Elternzeit entschied ich mich, meinen Traum zu
                        verwirklichen: eine eigene Kindertagespflege.
                    </FontText>
                    <FontText className={'text-center text-base 2xl:text-xl text-gray-800'}>
                        Mit viel Freude und Herz begleite ich Kinder auf ihrem Weg, zeige ihnen die Welt in all ihren
                        Farben und fördere sie individuell. Meine Pflegeerlaubnis vom Jugendamt habe ich im Oktober 2024
                        erhalten.
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
                <GiButterfly className={'absolute text-[#b5c690] h-[100px] w-[100px] bottom-2 left-2'} />
                <GiButterfly className={'absolute  text-[#b5c690] h-[100px] w-[100px] top-2 right-2 -rotate-45'} />
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
