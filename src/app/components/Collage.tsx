import playRoom1 from '@/app/assets/images/rooms/play-room-1.jpg';
import playRoom2 from '@/app/assets/images/rooms/play-room-2.jpg';
import Image from 'next/image';
import SlideInAnimation from '@/app/components/SlideInAnimation';

export default function Collage() {
    return (
        <SlideInAnimation>
            <div
                className={
                    'mt-[56px] lg:mt-0 px-0 lg:px-5 flex flex-col w-full md:space-y-6 items-center justify-center'
                }
            >
                <div className={'flex flex-row w-full items-center justify-center md:space-x-6'}>
                    <Image
                        className={`md:rounded-xl max-w-[50%] lg:max-w-[45%] xl:max-w-[40%] self-end ring-8 ring-white`}
                        src={playRoom1}
                        alt={'play room 1'}
                        placeholder={'blur'}
                    />
                    <Image
                        className={`md:rounded-xl max-w-[50%] lg:max-w-[55%] xl:max-w-[50%] ring-8 ring-white`}
                        src={playRoom2}
                        alt={'play room 2'}
                        placeholder={'blur'}
                    />
                </div>
                <div className={'flex flex-row md:space-x-6 w-full items-center justify-center'}>
                    <Image
                        className={`md:rounded-xl max-w-[50%] lg:max-w-[55%] xl:max-w-[50%] ring-8 ring-white`}
                        src={playRoom2}
                        alt={'play room 2'}
                        placeholder={'blur'}
                    />
                    <Image
                        className={`md:rounded-xl max-w-[50%] lg:max-w-[45%] xl:max-w-[40%] self-start ring-8 ring-white`}
                        src={playRoom1}
                        alt={'play room 1'}
                        placeholder={'blur'}
                    />
                </div>
            </div>
        </SlideInAnimation>
    );
}
