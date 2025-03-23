import React from 'react';

export interface ColorSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    direction: 'col' | 'row' | 'col-reverse';
    color?: string;
}

export default function ColorSection({ children, direction, color, ...props }: ColorSectionProps) {
    const handleDirection = () => {
        switch (direction) {
            case 'col':
                return 'flex-col';
            case 'row':
                return 'flex-col lg:flex-row';
            case 'col-reverse':
                return 'flex-col-reverse xl:flex-row';
        }
    };
    return (
        <section
            {...props}
            className={`${handleDirection()} ${color} flex w-full h-full md:h-screen relative items-center justify-center`}
        >
            {children}
        </section>
    );
}
