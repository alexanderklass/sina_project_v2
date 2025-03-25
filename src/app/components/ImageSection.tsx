import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface ImageSectionProps extends ImageProps {
    src: StaticImageData;
    alt: string;
    isStartOfPage?: boolean;
    color?: string;
    vertical: boolean;
}

export default function ImageSection({ src, alt, isStartOfPage, color, vertical }: ImageSectionProps) {
    return (
        <div
            className={`${isStartOfPage && 'mt-[56px] lg:mt-0'} ${color} w-full h-full flex py-5 xl:py-0 px-5 lg:px-0 items-center justify-center`}
        >
            <Image
                placeholder={'blur'}
                alt={alt}
                src={src}
                className={`${vertical ? 'sm:max-w-[450px] 2xl:max-w-[500px]' : 'sm:max-w-[450px] 2xl:max-w-[800px]'} rounded-xl ring-1 ring-black`}
            />
        </div>
    );
}
