import React from 'react';
import SlideInAnimation from '@/app/components/SlideInAnimation';

export interface ColorSectionProps {
    children?: React.ReactNode;
    direction: 'col' | 'row' | 'col-reverse';
    color?: string;
    isStartOfPage?: boolean;
}

export default function ColorSection({ children, direction, color, isStartOfPage, ...props }: ColorSectionProps) {
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
        <SlideInAnimation>
            <section
                {...props}
                className={`${handleDirection()} ${color} ${isStartOfPage && 'mt-[64px] lg:mt-0'} flex w-full h-full md:h-screen relative items-center justify-center`}
            >
                {children}
            </section>
        </SlideInAnimation>
    );
}
