'use client';
import React from 'react';
import ColorSection from '@/app/components/ColorSection';
import Collage from '@/app/components/Collage';
import TextSection from '@/app/components/TextSection';
import MovingTrain from '@/app/components/animations/MovingTrain';

export default function Rooms() {
    return (
        <main className={'h-full'}>
            <ColorSection direction={'row'}>
                <div className={'w-full h-full flex items-center justify-center bg-pastel-beige'}>
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
