import React from 'react';
import ColorSection from '@/app/components/ColorSection';
import garden_butterfly from '@/app/assets/images/garden/garden-butterfly-on-leaf.jpg';
import garden_flower from '@/app/assets/images/garden/garden-flower-pot.jpg';
import garden_water from '@/app/assets/images/garden/garden-water-flower.jpg';
import ImageSection from '@/app/components/ImageSection';
import TextSection from '@/app/components/TextSection';
import GrassWithButterfly from '@/app/components/animations/GrassWithButterfly';
import ButterflyWithFlowers from '@/app/components/animations/ButterflyWithFlowers';

export default function Garden() {
    return (
        <main className={'h-full'}>
            <ColorSection direction={'col-reverse'}>
                <TextSection color={'bg-white'} title={'Abenteuer und Entdeckungen'}>
                    Der Garten der Kindertagespflege bietet den Kindern eine vielfältige und spannende Umgebung, in der
                    sie sich frei entfalten können.
                </TextSection>
                <GrassWithButterfly />
                <ImageSection
                    vertical={true}
                    isStartOfPage={true}
                    color={'bg-pastel-green'}
                    src={garden_butterfly}
                    alt={'garden'}
                />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <ImageSection vertical={false} src={garden_flower} alt={'garden flower'} />
                <TextSection title={'Spiel und Spaß'}>
                    Über die Terrasse gelangen wir direkt in den Garten, der mit zahlreichen Spielangeboten und
                    ausreichend Platz zum Toben, Spielen und Entdecken gestaltet ist. Ein Sandkasten lädt die Kinder zum
                    Buddeln und kreativen Bauen ein, während die Matschküche besonders an warmen Tagen für viel Spaß und
                    Abenteuer sorgt.
                </TextSection>
                <ButterflyWithFlowers />
            </ColorSection>

            <ColorSection direction={'col-reverse'} color={'bg-[#F0DBC5]'}>
                <TextSection title={'Bewegung für kleine Entdecker'}>
                    Eine Rutsche sowie weitere altersgerechte Spielgeräte bieten zusätzliche Bewegungsmöglichkeiten und
                    fördern die motorische Entwicklung der Kinder.
                </TextSection>
                <ImageSection vertical={false} src={garden_water} alt={'Garden Flower'} />
            </ColorSection>
        </main>
    );
}
