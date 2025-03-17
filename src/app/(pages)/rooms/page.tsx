'use client';
import React from 'react';
import ColorSection from '@/app/components/ColorSection';
import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import Collage from '@/app/components/Collage';
import Animation from '@/app/components/Animation';
import toy_animation from '@/app/assets/animations/toy-animation.json';

import { motion } from 'framer-motion';

export default function Rooms() {
    return (
        <main className={'h-full'}>
            <ColorSection direction={'row'}>
                <div className={'w-full h-full flex items-center justify-center bg-pastel-beige'}>
                    <Collage />
                </div>
                <div className={'w-full flex bg-pastel-pink h-full flex-col items-center justify-center'}>
                    <div className={'max-w-[500px] flex flex-col items-center justify-center space-y-5'}>
                        <TitleFontText className={'self-start text-3xl'}>Über mich</TitleFontText>
                        <FontText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur
                            ducimus ea enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus
                            quas tempora ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            dolore expedita quas veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem
                            et facilis ipsa itaque magnam natus soluta ut!
                        </FontText>
                    </div>
                </div>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '80vw' }}
                    transition={{ duration: 15, ease: 'linear' }}
                    className={'absolute left-0 -bottom-10 2xl:-bottom-16 w-52 2xl:w-80'}
                >
                    <Animation animationData={toy_animation} />
                </motion.div>
            </ColorSection>
        </main>
    );
}
