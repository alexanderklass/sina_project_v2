'use client';
import React from 'react';
import ColorSection from '@/app/components/ColorSection';
import Collage from '@/app/components/Collage';
import TextSection from '@/app/components/TextSection';
import MovingTrain from '@/app/components/animations/MovingTrain';
import ImageSlider from '@/app/components/ImageSlider';
import playRoom1 from '@/app/assets/images/rooms/play-room-1.jpg';
import playRoom2 from '@/app/assets/images/rooms/play-room-2.jpg';

export default function Rooms() {
    const list = [playRoom2, playRoom1, playRoom2, playRoom1];

    return (
        <main className={'h-full'}>
            <div className={'mt-[80px] lg:mt-0'}>
                <ImageSlider imageList={list} />
            </div>
            <ColorSection direction={'row'}>
                <div className={'w-full h-full hidden lg:flex items-center justify-center bg-pastel-beige'}>
                    <Collage />
                </div>
                <TextSection color={'bg-pastel-pink'} title={'Ein Ort zum Wohlfühlen'}>
                    Unsere Kindertagespflege bietet helle, freundliche Räume, in denen sich Kinder geborgen fühlen. Eine
                    liebevolle Spielecke, altersgerechte Materialien und kreative Bereiche laden zum Entdecken, Spielen
                    und Lernen ein. Hier finden die Kleinen Raum für Bewegung, Fantasie und ruhige Momente – in einer
                    Umgebung voller Sicherheit und Geborgenheit.
                </TextSection>
                <MovingTrain />
            </ColorSection>
        </main>
    );
}
