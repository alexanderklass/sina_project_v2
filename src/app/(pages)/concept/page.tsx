import React from 'react';
import ColorSection from '@/app/components/ColorSection';
import TextSection from '@/app/components/TextSection';
import ExtraInfo from '@/app/components/ExtraInfo';

export default function Concept() {
    return (
        <main className={'h-full'}>
            <ColorSection direction={'row'}>
                <TextSection isStartOfPage={true} color={'bg-white'} title={'Concept'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum et laboriosam maiores
                    quia reprehenderit rerum? Ad assumenda blanditiis corporis deleniti ipsam quibusdam quisquam sunt
                    vel voluptatibus! Eos, eum, voluptate!
                </TextSection>
                <TextSection color={'bg-pastel-blue'} title={'Concept'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum et laboriosam maiores
                    quia reprehenderit rerum? Ad assumenda blanditiis corporis deleniti ipsam quibusdam quisquam sunt
                    vel voluptatibus! Eos, eum, voluptate!
                </TextSection>
            </ColorSection>

            <ExtraInfo />
        </main>
    );
}
