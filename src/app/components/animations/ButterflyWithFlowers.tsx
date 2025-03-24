import Animation from '@/app/components/Animation';
import flower_butterfly_animation from '@/app/assets/animations/flower-butterfly-animation.json';
import React from 'react';

export default function ButterflyWithFlowers() {
    return (
        <div className={'absolute bottom-0 hidden lg:flex right-36 w-[250px] 2xl:w-[350px]'}>
            <Animation animationData={flower_butterfly_animation} loop={true} />
        </div>
    );
}
