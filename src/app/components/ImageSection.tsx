import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface ImageSectionProps extends ImageProps {
    src: StaticImageData;
    alt: string;
    isStartOfPage?: boolean;
    color?: string;
}

export default function ImageSection({ src, alt, isStartOfPage, color }: ImageSectionProps) {
    return (
        <div
            className={`${isStartOfPage && 'mt-[56px] md:mt-[140px] lg:mt-0'} ${color} w-full h-full flex my-5 lg:my-0 px-5 lg:px-0 items-center justify-center`}
        >
            <Image
                placeholder={'blur'}
                alt={alt}
                src={src}
                className={'rounded-xl ring-2 sm:max-w-[400px] 2xl:w-[800px] my-5 lg:my-0 ring-black'}
            />
        </div>
    );
}
