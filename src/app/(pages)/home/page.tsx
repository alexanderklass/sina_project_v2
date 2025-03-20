'use client';
import Image from 'next/image';
import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import ColorSection from '@/app/components/ColorSection';

import branch from '@/app/assets/images/home/branch.png';
import penStock from '@/app/assets/images/home/pen-stock.jpg';
import profilePicStock from '@/app/assets/images/home/woman-stock.jpg';
import butterflyGreen from '@/app/assets/images/home/butterfly-green.png';
import butterflyPink from '@/app/assets/images/home/butterfly-pink.png';
import React from 'react';

export default function Home() {
    return (
        <main>
            <ColorSection direction={'row'}>
                <div className={'w-full h-full bg-pastel-beige flex items-center justify-center'}>
                    <Image
                        placeholder={'blur'}
                        alt={'close up from woman'}
                        className={'rounded-xl w-[400px] 2xl:w-[500px] ring-2 ring-black'}
                        src={profilePicStock}
                    />
                </div>
                <div className={'w-full h-full p-5 flex flex-col items-center justify-center'}>
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
                <Image
                    className={'absolute scale-x-[-1] w-[300px] 2xl:w-[500px] -rotate-[50deg] right-2 -bottom-10'}
                    src={branch}
                    alt={'branch with leafs'}
                />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-green'}>
                <div className={'w-full flex flex-col items-center justify-center'}>
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
                <div className={'w-full flex items-center justify-center'}>
                    <Image
                        placeholder={'blur'}
                        alt={'close up from woman'}
                        className={'rounded-xl ring-2 w-[600px] 2xl:w-[800px] ring-black'}
                        src={penStock}
                    />
                </div>
                <Image
                    placeholder={'blur'}
                    className={'absolute left-10 bottom-10 w-[150px] 2xl:w-[200px]'}
                    src={butterflyGreen}
                    alt={'green butterfly'}
                />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <div className={'w-full flex items-center justify-center'}>
                    <Image
                        placeholder={'blur'}
                        alt={'close up from woman'}
                        className={'rounded-xl ring-2 w-[600px] 2xl:w-[800px] ring-black'}
                        src={penStock}
                    />
                </div>
                <div className={'w-full flex items-center justify-center'}>
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
                <Image
                    placeholder={'blur'}
                    className={'absolute right-10 bottom-10 w-[150px] 2xl:w-[200px]'}
                    src={butterflyPink}
                    alt={'pink butterfly'}
                />
            </ColorSection>
        </main>
    );
}
