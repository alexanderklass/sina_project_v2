import React from 'react';

export interface ColorSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    direction: 'col' | 'row';
    color?: string;
}

export default function ColorSection({ children, direction, color, ...props }: ColorSectionProps) {
    const handleDirection = () => {
        switch (direction) {
            case 'col':
                return 'flex-col';
            case 'row':
                return 'flex-col xl:flex-row';
        }
    };
    return (
        <section
            {...props}
            className={`${handleDirection()} ${color} flex w-full h-screen relative items-center justify-center`}
        >
            {children}
        </section>
    );
}
