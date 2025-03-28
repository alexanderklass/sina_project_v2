import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdArrowLeft } from 'react-icons/md';
import SlideInAnimation from '@/app/components/SlideInAnimation';

interface ImageSliderProps {
    imageList: any;
}

export default function ImageSlider({ imageList }: ImageSliderProps) {
    const CustomPrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <motion.div
                className="absolute rounded-l-lg h-full flex items-center z-10 bg-black/30 transform cursor-pointer"
                onClick={onClick}
            >
                <MdArrowLeft className="text-white" size={40} />
            </motion.div>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <motion.div
                className="absolute flex rounded-r-lg items-center right-0 bg-black/30 h-full top-0 z-10 transform cursor-pointer"
                onClick={onClick}
            >
                <MdArrowLeft className="text-white rotate-180" size={40} />
            </motion.div>
        );
    };

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <SlideInAnimation>
            <div className={'block rounded-lg lg:hidden px-3 relative'}>
                <Slider className={'mb-5 rounded-lg'} {...settings}>
                    {imageList.map((image: any, index: number) => (
                        <Image
                            className={'w-full relative ring-1 ring-black rounded-lg'}
                            key={index}
                            src={image}
                            alt={'picture'}
                        />
                    ))}
                </Slider>
            </div>
        </SlideInAnimation>
    );
}
