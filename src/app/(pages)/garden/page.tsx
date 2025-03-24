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
                <TextSection color={'bg-white'} title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimusnm quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <GrassWithButterfly />
                <ImageSection isStartOfPage={true} color={'bg-pastel-green'} src={garden_butterfly} alt={'garden'} />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <ImageSection src={garden_flower} alt={'garden flower'} />
                <TextSection title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <ButterflyWithFlowers />
            </ColorSection>

            <ColorSection direction={'col-reverse'} color={'bg-[#F0DBC5]'}>
                <TextSection title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <ImageSection src={garden_water} alt={'Garden Flower'} />
            </ColorSection>
        </main>
    );
}
