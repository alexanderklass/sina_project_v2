'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export interface AnimationProps {
    animationData: any;
    loop?: boolean;
}

export default function Animation({ animationData, loop }: AnimationProps) {
    return <Lottie animationData={animationData} loop={loop} />;
}
