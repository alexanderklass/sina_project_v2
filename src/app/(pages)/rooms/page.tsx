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
    const list = [playRoom2, playRoom1];

    return (
        <main className={'h-full'}>
            <div className={'bg-pastel-beige h-full'}>
                <ImageSlider imageList={list} />
            </div>
            <ColorSection direction={'row'}>
                <div className={'w-full h-full hidden lg:flex items-center justify-center bg-pastel-beige'}>
                    <Collage />
                </div>
                <TextSection color={'bg-pastel-pink'} title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <MovingTrain />
            </ColorSection>
        </main>
    );
}
