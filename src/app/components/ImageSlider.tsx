import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
interface ImageSliderProps {
    imageList: any;
}

export default function ImageSlider({ imageList }: ImageSliderProps) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className={'block rounded-lg lg:hidden px-5'}>
            <Slider className={'my-5'} {...settings}>
                {imageList.map((image: any, index: number) => (
                    <Image
                        className={'w-full mt-[56px] ring-1 ring-black rounded-lg'}
                        key={index}
                        src={image}
                        alt={'picture'}
                    />
                ))}
            </Slider>
        </div>
    );
}
