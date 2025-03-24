import Image from 'next/image';
import grass from '@/app/assets/images/garden/grass.png';
import Animation from '@/app/components/Animation';
import butterfly_flying_animation from '@/app/assets/animations/yellow-butterfly-animation.json';
import React from 'react';

export default function GrassWithButterfly() {
    return (
        <div className={'absolute bottom-0  left-0 hidden lg:flex w-[300px] lg:w-[450px] xl:w-[650px] 2xl:w-[50%]'}>
            <div className={'absolute bottom-0'}>
                <Image className={'saturate-50'} src={grass} alt={'cartoon grass on the ground'} />
            </div>
            <div className={'absolute  md:w-auto bottom-10 left-[30%]'}>
                <Animation animationData={butterfly_flying_animation} loop={true} />
            </div>
        </div>
    );
}
