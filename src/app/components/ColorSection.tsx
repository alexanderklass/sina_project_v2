'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface ColorSectionProps {
    children?: React.ReactNode;
    direction: 'col' | 'row' | 'col-reverse';
    color?: string;
}

export default function ColorSection({ children, direction, color, ...props }: ColorSectionProps) {
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
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
                damping: 8,
                mass: 0.75,
            },
        },
    };

    const handleDirection = () => {
        switch (direction) {
            case 'col':
                return 'flex-col';
            case 'row':
                return 'flex-col lg:flex-row';
            case 'col-reverse':
                return 'flex-col-reverse lg:flex-row';
        }
    };
    return (
        <motion.div
            ref={ref}
            variants={variants}
            animate={controls}
            initial="hidden"
            {...props}
            className={`${handleDirection()} ${color} flex w-full h-full md:h-screen relative items-center justify-center`}
        >
            {children}
        </motion.div>
    );
}
