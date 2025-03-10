import Image from 'next/image';
import FontText from '@/app/components/FontText';
import profilePicStock from '@/assets/images/woman-stock.jpg';
import penStock from '@/assets/images/pen-stock.jpg';
import TitleFontText from '@/app/components/TitleFontText';

export default function Home() {
    return (
        <main className={`h-full`}>
            <section className={'w-full h-[800px] flex items-center justify-center flex-row'}>
                <div
                    className={
                        'w-full h-full pt-32 animate-fade-right duration-500 bg-[#F5EFE7] flex items-center justify-center'
                    }
                >
                    <Image
                        alt={'close up from woman'}
                        className={'rounded-xl ring-2 ring-black'}
                        src={profilePicStock}
                        width={400}
                    />
                </div>
                <div className={'w-full pt-32 flex animate-fade-left duration-500 items-center justify-center'}>
                    <div className={'space-y-5 flex flex-col items-center justify-center w-[600px]'}>
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
            </section>

            <section
                className={'bg-[#DCE4C9] w-full h-[800px] flex items-center justify-center flex-row-reverse px-20'}
            >
                <div className={'w-full flex items-center justify-center'}>
                    <Image
                        alt={'close up from woman'}
                        className={'rounded-xl ring-2 ring-black'}
                        src={penStock}
                        width={800}
                    />
                </div>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <div className={'w-[600px] flex flex-col items-center justify-center space-y-5'}>
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
            </section>

            <section className={'bg-[#F5EFE7] w-full h-[800px] flex items-center justify-center flex-row px-20'}>
                <div className={'w-full flex items-center justify-center'}>
                    <Image
                        alt={'close up from woman'}
                        className={'rounded-xl ring-2 ring-black'}
                        src={penStock}
                        width={800}
                    />
                </div>
                <div className={'w-full flex items-center justify-center'}>
                    <div className={'w-[600px] flex flex-col items-center justify-center space-y-5'}>
                        <TitleFontText className={'self-start text-3xl'}>Über mich</TitleFontText>
                        <FontText className={'w-[600px]'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur
                            ducimus ea enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus
                            quas tempora ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            dolore expedita quas veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem
                            et facilis ipsa itaque magnam natus soluta ut!
                        </FontText>
                    </div>
                </div>
            </section>
        </main>
    );
}
