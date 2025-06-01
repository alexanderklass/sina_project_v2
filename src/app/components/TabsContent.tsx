import Image from 'next/image';
import TabsSubText from '@/app/components/TabsSubText';
import TabsMainText from '@/app/components/TabsMainText';
import { motion } from 'framer-motion';
interface TabsContentProps {
    mainTextTitle: string;
    mainText: string;
    subTextArray: string[];
    image: any;
    active: boolean;
}

export default function TabsContent({ mainText, mainTextTitle, subTextArray, image, active }: TabsContentProps) {
    const initial = { opacity: 0, x: 300 };
    const exit = { opacity: 0, x: -300 };
    const animate = { opacity: 1, x: 0 };
    return (
        <motion.div
            key={mainTextTitle}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 items-center w-full justify-center`}
        >
            <div className={'relative w-full h-[300px] lg:w-[500px] lg:h-[400px] shadow-lg rounded-xl overflow-hidden'}>
                <Image className={'object-cover rounded-xl'} src={image} fill alt={'room'} />
            </div>
            <div className={'flex flex-col lg:w-[500px] gap-y-5'}>
                <TabsMainText text={mainText} title={mainTextTitle} />
                <div className={'flex flex-col gap-y-2'}>
                    {subTextArray?.map((subText, index) => <TabsSubText key={index} text={subText} />)}
                </div>
            </div>
        </motion.div>
    );
}
