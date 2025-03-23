import playRoom1 from '@/app/assets/images/rooms/play-room-1.jpg';
import playRoom2 from '@/app/assets/images/rooms/play-room-2.jpg';
import Image from 'next/image';

export default function Collage() {
    return (
        <div className={'mt-[56px] lg:mt-0 px-0 lg:px-5 flex flex-col w-full md:space-y-1 items-center justify-center'}>
            <div className={'flex flex-row w-full items-center justify-center md:space-x-1'}>
                <Image
                    className={`md:rounded-xl max-w-[50%] md:border-2 self-end border-black ring-1 ring-black`}
                    src={playRoom1}
                    alt={'play room 1'}
                    placeholder={'blur'}
                />
                <Image
                    className={`md:rounded-xl md:border-2 max-w-[50%] md:border-black ring-1 ring-black`}
                    src={playRoom2}
                    alt={'play room 2'}
                    placeholder={'blur'}
                />
            </div>
            <div className={'flex flex-row md:space-x-1 w-full items-center justify-center'}>
                <Image
                    className={`md:rounded-xl md:border-2 max-w-[50%] md:border-black ring-1 ring-black`}
                    src={playRoom2}
                    alt={'play room 2'}
                    placeholder={'blur'}
                />
                <Image
                    className={`md:rounded-xl max-w-[50%] md:border-2 self-start md:border-black ring-1 ring-black`}
                    src={playRoom1}
                    alt={'play room 1'}
                    placeholder={'blur'}
                />
            </div>
        </div>
    );
}
