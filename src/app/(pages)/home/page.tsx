'use client';
import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import ColorSection from '@/app/components/ColorSection';

import penStock from '@/app/assets/images/home/pen-stock.jpg';
import profilePicStock from '@/app/assets/images/home/woman-stock.jpg';

import React from 'react';
import TextSection from '@/app/components/TextSection';
import ImageSection from '@/app/components/ImageSection';
import GreenButterfly from '@/app/components/details/GreenButterfly';
import PinkButterfly from '@/app/components/details/PinkButterfly';

export default function Home() {
    return (
        <main>
            <ColorSection direction={'col-reverse'}>
                <ImageSection
                    vertical={true}
                    color={'bg-pastel-beige'}
                    src={profilePicStock}
                    alt={'close up from woman'}
                />
                <div
                    className={
                        'mt-[56px] lg:mt-0 w-full h-full flex flex-col items-center justify-center py-5 md:py-0 px-5 sm:px-0'
                    }
                >
                    <div className={'space-y-5 flex flex-col items-center justify-center max-w-[500px]'}>
                        <TitleFontText className={'self-start text-3xl'}>Über mich</TitleFontText>
                        <FontText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur
                            ducimus ea enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus
                            quas tempora ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            dolore expedita quas veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem
                            et facilis ipsa itaque magnam natus soluta ut!
                        </FontText>
                        <button
                            type={'button'}
                            className={
                                'self-start ring-2 cursor-pointer rounded-xl bg-white  ring-black p-2 hover:bg-black hover:text-white duration-300'
                            }
                        >
                            <FontText>Anfragen unter 0123/45678910</FontText>
                        </button>
                    </div>
                </div>
            </ColorSection>

            <ColorSection direction={'col-reverse'} color={'bg-pastel-green'}>
                <TextSection title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <ImageSection vertical={false} src={penStock} alt={'kid hand writing a picute'} />
                <GreenButterfly />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <ImageSection vertical={false} src={penStock} alt={'kid hand writing a picute'} />
                <TextSection title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <PinkButterfly />
            </ColorSection>
        </main>
    );
}
