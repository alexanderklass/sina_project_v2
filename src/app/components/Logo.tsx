import TitleFontText from '@/app/components/TitleFontText';
import FontText from '@/app/components/FontText';
import Animation from '@/app/components/Animation';
import butterFlyAnimation from '@/app/assets/animations/butterfly-animation.json';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Logo() {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/home');
    };

    return (
        <div onClick={handleLogoClick} className={'flex md:w-auto cursor-pointer flex-row items-center justify-center'}>
            <div className={'space-y-1 flex flex-col items-center justify-center'}>
                <TitleFontText className={'md:text-2xl text-xl'}>Sina's Schmetterlinge</TitleFontText>
                <FontText className={'md:text-base text-md'}>KINDERTAGESPFLEGE</FontText>
            </div>
            <div className={'md:w-12 w-11'}>
                <Animation animationData={butterFlyAnimation} loop={true} />
            </div>
        </div>
    );
}
