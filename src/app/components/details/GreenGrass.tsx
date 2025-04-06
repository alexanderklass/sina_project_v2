import Image from 'next/image';
import green_grass from '@/app/assets/images/home/green-gras.png';

export default function GreenGrass() {
    return (
        <Image
            className={'absolute hidden lg:flex lg:max-w-[450px] max-w-[700px] -bottom-32 lg:left-[5%] xl:left-[0%]'}
            src={green_grass}
            alt={'grass'}
        />
    );
}
