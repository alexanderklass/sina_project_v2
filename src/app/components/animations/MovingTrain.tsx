import React from 'react';
import Animation from '@/app/components/Animation';
import toy_animation from '@/app/assets/animations/toy-animation.json';
import { motion } from 'framer-motion';

export default function MovingTrain() {
    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '80vw' }}
            transition={{ duration: 15, ease: 'linear' }}
            className={'absolute left-0 bottom-[0%] md:-bottom-10 2xl:-bottom-16 w-12 md:w-52 2xl:w-80'}
        >
            <Animation animationData={toy_animation} />
        </motion.div>
    );
}
