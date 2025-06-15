import React from 'react';
import Image from 'next/image';
import TopPanel from '@/app/components/TopPanel';

import gardenShowcase from '@/app/assets/images/garden/garden-showcase.jpg';
import zwerge from '@/app/assets/images/garden/zwerge.jpg';
import sandkasten_closeup from '@/app/assets/images/garden/sandkasten-closeup.jpg';
import matschkueche from '@/app/assets/images/garden/matschkueche.jpg';
import hochbeet from '@/app/assets/images/garden/hochbeet.jpg';
import schlachfecke from '@/app/assets/images/garden/schlafecke.jpg';
import lastenrad from '@/app/assets/images/garden/lastenrad.jpg';

import FontText from '@/app/components/FontText';
import { LuSunMedium } from 'react-icons/lu';
import { LuLeaf } from 'react-icons/lu';
import { LuDroplets } from 'react-icons/lu';
import { LuCloud } from 'react-icons/lu';
import { GiButterfly } from 'react-icons/gi';
import TitleFontText from '@/app/components/TitleFontText';
import Card from '@/app/components/Card';
import GardenNote from '@/app/components/GardenNote';
export default function Garden() {
    return (
        <main className={'h-full'}>
            <TopPanel
                title={'Unser Garten'}
                text={'Ein naturnaher Raum zum Entdecken, Spielen und Wachsen unter freiem Himmel.'}
            />
            <section className={'flex flex-col items-center bg-pastel-beige justify-center py-10 px-5 xl:px-0'}>
                <div
                    className={
                        'relative overflow-hidden rounded-xl shadow-xl w-full xl:w-[1400px] xl:h-[500px] h-[300px] mx-auto'
                    }
                >
                    <Image src={gardenShowcase} alt={'Garden'} layout="fill" objectFit="cover" />
                </div>

                <div className={'flex flex-col xl:flex-row xl:w-[1400px] gap-y-10 xl:gap-y-0 gap-x-10 mt-20'}>
                    <div className={'flex flex-col space-y-8 text-gray-700 w-full'}>
                        <FontText className={'text-[#5a8f7b] text-3xl'}>Naturerfahrung für alle Sinne</FontText>
                        <FontText>
                            Unser Garten ist mehr als nur ein Spielplatz – er ist ein Ort des Lernens, der Entdeckung
                            und der Naturverbundenheit. Hier können die Kinder die Jahreszeiten erleben, Pflanzen beim
                            Wachsen beobachten und die Vielfalt der Natur mit allen Sinnen erfahren.
                        </FontText>
                        <FontText>
                            Wir legen großen Wert auf einen naturnahen Garten, der den Kindern vielfältige Bewegungs-
                            und Sinneserfahrungen ermöglicht. Vom Matschen mit Wasser und Erde bis hin zum Beobachten
                            von Insekten – hier gibt es immer etwas Neues zu entdecken.
                        </FontText>
                        <div className={'grid grid-cols-2 gap-4'}>
                            <div className={'flex flex-row gap-x-2 items-start'}>
                                <LuSunMedium className={'text-[#FF9D5C] text-2xl'} />
                                <FontText>Sonnige und schattige Bereiche</FontText>
                            </div>
                            <div className={'flex flex-row gap-x-2 items-start'}>
                                <LuLeaf className={'text-[#5a8f7b] text-2xl'} />
                                <FontText>Heimische Pflanzen und Kräuter</FontText>
                            </div>
                            <div className={'flex flex-row gap-x-2 items-start'}>
                                <LuDroplets className={'text-[#5a8f7b] text-2xl'} />
                                <FontText>Wasserspielbereich</FontText>
                            </div>
                            <div className={'flex flex-row gap-x-2 items-start'}>
                                <LuCloud className={'text-[#FF9D5C] text-2xl'} />
                                <FontText>Wetterfeste Spielmöglichkeiten</FontText>
                            </div>
                        </div>
                    </div>
                    <div className={'grid md:grid-cols-3 gap-4 w-full items-center'}>
                        <div className={'relative overflow-hidden rounded-xl shadow-xl w-full h-[200px]'}>
                            <Image className={'object-cover'} fill src={sandkasten_closeup} alt={'garden'} />
                        </div>
                        <div className={'relative overflow-hidden rounded-xl shadow-xl w-full h-[200px]'}>
                            <Image className={'object-cover'} fill src={zwerge} alt={'garden'} />
                        </div>
                        <div className={'relative overflow-hidden rounded-xl shadow-xl w-full h-[200px]'}>
                            <Image className={'object-cover'} fill src={hochbeet} alt={'garden'} />
                        </div>
                        <div className={'relative overflow-hidden rounded-xl shadow-xl w-full h-[200px]'}>
                            <Image className={'object-cover'} fill src={schlachfecke} alt={'garden'} />
                        </div>
                        <div className={'relative overflow-hidden rounded-xl shadow-xl w-full h-[200px]'}>
                            <Image className={'object-cover'} fill src={matschkueche} alt={'garden'} />
                        </div>
                        <div className={'relative overflow-hidden rounded-xl shadow-xl w-full h-[200px]'}>
                            <Image className={'object-cover'} fill src={lastenrad} alt={'garden'} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={'bg-white py-20 flex flex-col gap-y-10 items-center justify-center px-5 xl:px-0'}>
                <TitleFontText className={'text-[#5a8f7b] text-3xl'}>Unser Garten bietet</TitleFontText>
                <div className={'flex flex-col xl:flex-row gap-x-5 gap-y-5 xl:gap-y-0'}>
                    <Card
                        title={'Spielbereich'}
                        text={'Sandkasten und Rutsche für vielfältige Bewegungserfahrungen.'}
                        color={'bg-pastel-beige'}
                        icon={<GiButterfly size={40} />}
                    />
                    <Card
                        title={'Gartenbeet'}
                        text={'Eigenes Gemüse- und Kräuterbeet, das die Kinder mitgestalten und pflegen dürfen.'}
                        color={'bg-pastel-beige'}
                        icon={<LuLeaf size={40} />}
                    />
                    <Card
                        title={'Naturerfahrung'}
                        text={'Insektenhotel, Vogelhäuschen und Beobachtungsstationen für kleine Naturforscher.'}
                        color={'bg-pastel-beige'}
                        icon={<LuSunMedium size={40} />}
                    />
                </div>
            </section>

            <section
                className={'flex flex-col items-center justify-center bg-pastel-beige px-5 xl:px-0 py-20 gap-y-10'}
            >
                <TitleFontText className={'text-[#5a8f7b] text-3xl'}>Aktivitäten im Jahreslauf</TitleFontText>
                <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'}>
                    <GardenNote
                        subTextArray={['Samen säen', 'Blumen pflanzen', 'Ostereiersuche', 'Frühlingsblumen beobachten']}
                        title={'Frühling'}
                        color={'bg-green-100'}
                    />
                    <GardenNote
                        subTextArray={['Wasserspiele', 'Picknick im Freien', 'Gemüse ernten', 'Barfuß-Pfad erkunden']}
                        title={'Sommer'}
                        color={'bg-yellow-100'}
                    />
                    <GardenNote
                        subTextArray={['Blätter sammeln', 'Kastanien basteln', 'Apfelernte', 'Laternenfest']}
                        title={'Herbst'}
                        color={'bg-orange-100'}
                    />
                    <GardenNote
                        subTextArray={[
                            'Schneemänner bauen',
                            'Vogelfütterung',
                            'Tierspuren entdecken',
                            'Winterruhe beobachten',
                        ]}
                        title={'Winter'}
                        color={'bg-blue-100'}
                    />
                </div>
            </section>
        </main>
    );
}
