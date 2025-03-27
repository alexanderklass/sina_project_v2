import Image from 'next/image';
import green_grass from '@/app/assets/images/home/green-gras.png';

export default function GreenGrass() {
    return (
        <Image
            className={'absolute hidden lg:flex lg:max-w-[500px] max-w-[700px] bottom-0 right-[0%]'}
            src={green_grass}
            alt={'grass'}
        />
    );
}
