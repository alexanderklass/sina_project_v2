import React from 'react';
import ColorSection from '@/app/components/ColorSection';
import TitleFontText from '@/app/components/TitleFontText';
import FontText from '@/app/components/FontText';
import Image from 'next/image';

import garden_butterfly from '@/app/assets/images/garden-butterfly-on-leaf.jpg';
import garden_flower from '@/app/assets/images/garden-flower-pot.jpg';
import garden_water from '@/app/assets/images/garden-water-flower.jpg';

export default function Garden() {
    return (
        <main className={'h-full'}>
            <ColorSection direction={'row'}>
                <div className={'flex items-center justify-center w-full h-full bg-white'}>
                    <div className={'max-w-[500px] flex flex-col items-center justify-center space-y-5'}>
                        <TitleFontText className={'self-start text-3xl'}>Über mich</TitleFontText>
                        <FontText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur
                            ducimus ea enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus
                            quas tempora ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            dolore expedita quas veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem
                            et facilis ipsa itaque magnam natus soluta ut!
                        </FontText>
                    </div>
                </div>
                <div className={'w-full h-full bg-pastel-green flex items-center justify-center'}>
                    <Image
                        className={'rounded-xl ring-2 ring-black'}
                        width={500}
                        src={garden_butterfly}
                        alt={'garden'}
                    />
                </div>
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <div className={'w-full h-full flex items-center justify-center'}>
                    <Image className={'rounded-xl ring-2 ring-black'} width={700} src={garden_flower} alt={'garden'} />
                </div>
                <div className={'flex items-center justify-center w-full h-full'}>
                    <div className={'max-w-[500px] flex flex-col items-center justify-center space-y-5'}>
                        <TitleFontText className={'self-start text-3xl'}>Über mich</TitleFontText>
                        <FontText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur
                            ducimus ea enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus
                            quas tempora ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            dolore expedita quas veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem
                            et facilis ipsa itaque magnam natus soluta ut!
                        </FontText>
                    </div>
                </div>
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-[#F0DBC5]'}>
                <div className={'flex items-center justify-center w-full h-full'}>
                    <div className={'max-w-[500px] flex flex-col items-center justify-center space-y-5'}>
                        <TitleFontText className={'self-start text-3xl'}>Über mich</TitleFontText>
                        <FontText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur
                            ducimus ea enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus
                            quas tempora ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            dolore expedita quas veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem
                            et facilis ipsa itaque magnam natus soluta ut!
                        </FontText>
                    </div>
                </div>
                <div className={'w-full h-full flex items-center justify-center'}>
                    <Image className={'rounded-xl ring-2 ring-black'} width={500} src={garden_water} alt={'garden'} />
                </div>
            </ColorSection>
        </main>
    );
}
