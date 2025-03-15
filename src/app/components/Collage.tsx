import playRoom1 from '@/app/assets/images/play-room-1.jpg';
import playRoom2 from '@/app/assets/images/play-room-2.jpg';
import Image from 'next/image';

export default function Collage() {
    return (
        <div className={'flex flex-col w-full space-y-1 items-center justify-center'}>
            <div className={'flex flex-row w-full items-center justify-center space-x-1'}>
                <Image
                    className={'rounded-xl border-2 self-end border-black'}
                    width={450}
                    src={playRoom1}
                    alt={'play room 1'}
                />
                <Image className={'rounded-xl border-2 border-black'} width={550} src={playRoom2} alt={'play room 2'} />
            </div>
            <div className={'flex flex-row space-x-1 w-full items-center justify-center'}>
                <Image className={'rounded-xl border-2 border-black'} width={550} src={playRoom2} alt={'play room 2'} />
                <Image
                    className={'rounded-xl border-2 self-start border-black'}
                    width={450}
                    src={playRoom1}
                    alt={'play room 1'}
                />
            </div>
        </div>
    );
}
