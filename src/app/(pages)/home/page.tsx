'use client';
import Image from 'next/image';
import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import ColorSection from '@/app/components/ColorSection';

import branch from '@/app/assets/images/branch.png';
import penStock from '@/app/assets/images/pen-stock.jpg';
import profilePicStock from '@/app/assets/images/woman-stock.jpg';
import butterflyGreen from '@/app/assets/images/butterfly-green.png';
import butterflyPink from '@/app/assets/images/butterfly-pink.png';

export default function Home() {
    return (
        <main>
            <ColorSection direction={'row'}>
                <div className={'w-full h-full pt-32 bg-pastel-beige flex items-center justify-center'}>
                    <Image
                        alt={'close up from woman'}
                        className={'rounded-xl w-full max-w-[500px] ring-2 ring-black'}
                        src={profilePicStock}
                    />
                </div>
                <div className={'w-full h-full p-5 flex items-center justify-center'}>
                    <div className={'space-y-5 flex flex-col items-center justify-center max-w-[500px]'}>
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
                    className={
                        'absolute scale-x-[-1] w-[] md:w-[300px] lg:w-[500px] -rotate-[50deg] right-2 -bottom-10'
                    }
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
                        alt={'close up from woman'}
                        className={'rounded-xl ring-2 ring-black'}
                        src={penStock}
                        width={800}
                    />
                </div>
                <Image
                    width={200}
                    height={200}
                    className={'absolute left-10 bottom-10 '}
                    src={butterflyGreen}
                    alt={'green butterfly'}
                />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <div className={'w-full flex items-center justify-center'}>
                    <Image
                        alt={'close up from woman'}
                        className={'rounded-xl ring-2 ring-black'}
                        src={penStock}
                        width={800}
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
                    width={300}
                    height={300}
                    className={'absolute right-10 bottom-10 '}
                    src={butterflyPink}
                    alt={'pink butterfly'}
                />
            </ColorSection>
        </main>
    );
}
