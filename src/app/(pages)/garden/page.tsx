import React from 'react';
import ColorSection from '@/app/components/ColorSection';
import TitleFontText from '@/app/components/TitleFontText';
import FontText from '@/app/components/FontText';
import Image from 'next/image';
import Animation from '@/app/components/Animation';
import garden_butterfly from '@/app/assets/images/garden/garden-butterfly-on-leaf.jpg';
import garden_flower from '@/app/assets/images/garden/garden-flower-pot.jpg';
import garden_water from '@/app/assets/images/garden/garden-water-flower.jpg';
import grass from '@/app/assets/images/garden/grass.png';
import butterfly_flying_animation from '@/app/assets/animations/yellow-butterfly-animation.json';
import flower_butterfly_animation from '@/app/assets/animations/flower-butterfly-animation.json';
import ImageSection from '@/app/components/ImageSection';

export default function Garden() {
    return (
        <main className={'h-full'}>
            <ColorSection direction={'col-reverse'}>
                <div className={'flex relative items-center justify-center w-full h-full bg-white'}>
                    <div className={'max-w-[500px] flex flex-col items-center justify-center space-y-5'}>
                        <TitleFontText className={'self-start text-3xl'}>Über mich</TitleFontText>
                        <FontText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur
                            ducimus ea enim esse eum illo illum inventore modi, mollitia nemo neque officia possimusnm
                            quas tempora ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            dolore expedita quas veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem
                            et facilis ipsa itaque magnam natus soluta ut!
                        </FontText>
                    </div>
                    <div className={'absolute bottom-0 w-full'}>
                        <Image className={'saturate-50'} src={grass} alt={'cartoon grass on the ground'} />
                    </div>
                    <div className={'absolute bottom-10 left-[30%]'}>
                        <Animation animationData={butterfly_flying_animation} loop={true} />
                    </div>
                </div>
                <ImageSection isStartOfPage={true} color={'bg-pastel-green'} src={garden_butterfly} alt={'garden'} />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <div className={'w-full h-full flex items-center justify-center'}>
                    <Image
                        placeholder={'blur'}
                        className={'rounded-xl ring-2 ring-black w-[550px] 2xl:w-[700px]'}
                        width={700}
                        src={garden_flower}
                        alt={'garden'}
                    />
                </div>
                <div className={'flex relative items-center justify-center w-full h-full'}>
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
                    <div className={'absolute bottom-0 right-36 w-[250px] 2xl:w-[350px]'}>
                        <Animation animationData={flower_butterfly_animation} loop={true} />
                    </div>
                </div>
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-[#F0DBC5]'}>
                <div className={'flex items-center relative justify-center w-full h-full'}>
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
                    <Image
                        placeholder={'blur'}
                        className={'rounded-xl ring-2 ring-black w-[400px] 2xl:w-[500px]'}
                        width={500}
                        src={garden_water}
                        alt={'garden'}
                    />
                </div>
            </ColorSection>
        </main>
    );
}
