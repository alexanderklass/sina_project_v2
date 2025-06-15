import React from 'react';
import TopPanel from '@/app/components/TopPanel';
import FontText from '@/app/components/FontText';
import Image from 'next/image';
import IconSubText from '@/app/components/IconSubText';
import welcome from '@/app/assets/images/rooms/welcome-schild.jpg';
import { LuHeart } from 'react-icons/lu';
import { LuBrain } from 'react-icons/lu';
import { LuUsersRound } from 'react-icons/lu';
import { LuClock4 } from 'react-icons/lu';
import { LuFlower } from 'react-icons/lu';
import TitleFontText from '@/app/components/TitleFontText';
import Card from '@/app/components/Card';
import IconText from '@/app/components/IconText';

export default function Concept() {
    return (
        <main className={'h-full'}>
            <TopPanel
                title={'Pädagogisches Konzept'}
                text={'Unsere Grundsätze und Leitlinien für eine liebevolle und fördernde Betreuung.'}
            />
            <section className={'bg-pastel-beige w-full py-20 flex justify-center items-center'}>
                <div
                    className={
                        'flex flex-col xl:flex-row items-center gap-x-8 gap-y-5 xl:gap-y-0 justify-start px-5 xl:px-0 xl:w-[1000px]'
                    }
                >
                    <div className={'flex flex-col gap-y-6 xl:w-[500px] text-gray-700'}>
                        <FontText className={'text-[#5a8f7b] text-2xl font-bold'}>
                            Unsere pädagogischen Grundsätze
                        </FontText>
                        <FontText>
                            Meine pädagogische Arbeit orientiert sich an den Bildungsleitlinien des Landes
                            Schleswig-Holstein und ist inspiriert von der Montessori-Pädagogik: Das freie Spiel, die
                            Selbsttätigkeit und die Freude am Entdecken stehen bei uns im Mittelpunkt.
                        </FontText>
                        <FontText>
                            Bei Treffen mit anderen Tagesmüttern – ob auf dem Spielplatz oder bei Spaziergängen im Wald
                            – können die Kinder miteinander spielen und neue Kontakte knüpfen. Auch wir nutzen die Zeit,
                            um uns auszutauschen, Erfahrungen zu teilen und neue Impulse für unseren Betreuungsalltag zu
                            gewinnen.
                        </FontText>
                        <FontText>
                            Mit dem Lastenrad und dem Bollerwagen machen wir regelmäßig kleine Ausflüge – zum Beispiel
                            zum nahegelegenen Familienzentrum. Die Kinder genießen die Fahrt und freuen sich auf das
                            Spielen vor Ort. Dort gibt es viel Raum zum Entdecken, Spielen und um andere Kinder zu
                            treffen.
                        </FontText>
                        <FontText>
                            Die Kindertagespflege bietet durch ihre familiäre Atmosphäre und kleine Gruppengröße mit bis
                            zu 5 Kindern im Alter von 1-3 Jahren ideale Voraussetzungen für eine individuelle Betreuung
                            und Förderung. In meiner Arbeit orientiere ich mich an verschiedenen pädagogischen Ansätzen
                            und integriere Elemente, die den Bedürfnissen der Kinder entsprechen.
                        </FontText>
                        <div className={'flex flex-col gap-y-2'}>
                            <IconSubText
                                icon={<LuHeart className={'text-[#FF9D5C] text-xl'} />}
                                text={'Bindungsorientierte Eingewöhnung und Betreuung'}
                            />
                            <IconSubText
                                icon={<LuBrain className={'text-[#5a8f7b] text-xl'} />}
                                text={'Ganzheitliche Förderung aller Entwicklungsbereiche'}
                            />
                            <IconSubText
                                icon={<LuUsersRound className={'text-[#5a8f7b] text-xl'} />}
                                text={'Soziales Lernen in der Gemeinschaft'}
                            />
                            <IconSubText
                                icon={<LuClock4 className={'text-[#FF9D5C] text-xl'} />}
                                text={'Strukturierter Tagesablauf mit Ritualen'}
                            />
                        </div>
                    </div>
                    <div
                        className={
                            'xl:w-[500px] xl:h-[400px] w-full h-[200px] self-start overflow-hidden rounded-xl shadow-md relative'
                        }
                    >
                        <Image src={welcome} className={'object-cover'} fill alt={'concept'} />
                    </div>
                </div>
            </section>

            <section className={'bg-white w-full py-20 flex justify-center items-center'}>
                <div className={'flex flex-col items-center justify-center gap-y-10 px-5 xl:px-0'}>
                    <TitleFontText className={'text-3xl text-[#5a8f7b]'}>Unsere Schwerpunkte</TitleFontText>
                    <div
                        className={
                            'flex flex-col xl:flex-row items-center xl:gap-x-5 gap-x-0 gap-y-5 xl:gap-y-0 justify-center'
                        }
                    >
                        <Card
                            title={'Sprachförderung'}
                            color={'bg-pastel-beige'}
                            text={
                                'Durch Gespräche, Lieder, Reime und Bilderbücher unterstütze ich die Sprachentwicklung der Kinder aktiv im Alltag.'
                            }
                            icon={<LuHeart className={'text-3xl'} />}
                        />

                        <Card
                            title={'Bewegung & Motorik'}
                            color={'bg-pastel-beige'}
                            text={
                                'Tägliche Bewegungsangebote drinnen und draußen fördern die motorische Entwicklung und das Körperbewusstsein.'
                            }
                            icon={<LuBrain className={'text-3xl'} />}
                        />

                        <Card
                            title={'Kreativität'}
                            color={'bg-pastel-beige'}
                            text={
                                'Vielfältige Materialien und Angebote zum Malen, Basteln und Gestalten regen die Fantasie und Kreativität an.'
                            }
                            icon={<LuFlower className={'text-3xl'} />}
                        />
                    </div>
                </div>
            </section>

            <section className={'bg-[#F8F4E8] w-full py-20 flex flex-col items-center justify-center'}>
                <div className={'flex flex-col items-center justify-center gap-y-5 xl:w-[1000px]'}>
                    <TitleFontText className={'text-[#5a8f7b] text-3xl'}>Unsere Werte</TitleFontText>
                    <FontText className={'text-gray-700 text-xl text-center'}>
                        Diese Grundwerte prägen unseren täglichen Umgang miteinander und bilden das Fundament unserer
                        pädagogischen Arbeit.
                    </FontText>
                </div>
                <div
                    className={
                        'grid xl:grid-cols-4 grid-cols-2 mt-10 xl:gap-x-10 gap-x-5 gap-y-5 xl:gap-y-0 justify-center items-center'
                    }
                >
                    <IconText icon={<LuUsersRound />} text={'Respekt'} />
                    <IconText icon={<LuHeart />} text={'Vertrauen'} />
                    <IconText icon={<LuFlower />} text={'Geborgenheit'} />
                    <IconText icon={<LuBrain />} text={'Individualität'} />
                </div>
            </section>
        </main>
    );
}
