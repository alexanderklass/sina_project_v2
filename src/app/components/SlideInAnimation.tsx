'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SlideInAnimationProps {
    children?: React.ReactNode;
}

export default function SlideInAnimation({ children }: SlideInAnimationProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 150 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100,
                damping: 8,
                mass: 0.75,
            },
        },
    };

    return (
        <motion.div ref={ref} variants={variants} animate={controls} initial={'hidden'}>
            {children}
        </motion.div>
    );
}
