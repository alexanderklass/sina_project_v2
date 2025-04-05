import FontText from '@/app/components/FontText';
import { GiButterfly } from 'react-icons/gi';
interface GardenNoteProps {
    color: string;
    title: string;
    subTextArray: string[];
}

export default function GardenNote({ color, title, subTextArray }: GardenNoteProps) {
    return (
        <div
            className={`${color} flex flex-col gap-y-3 items-start justify-center shadow-md rounded-xl p-5 w-full xl:w-[240px] h-[240px]`}
        >
            <FontText className={'text-[#5a8f7b] text-xl font-bold'}>{title}</FontText>
            {subTextArray.map((text, index) => (
                <div key={index} className={'flex text-gray-700 flex-row items-start gap-x-2'}>
                    <GiButterfly className={'text-[#FF9D5C]'} />
                    <FontText>{text}</FontText>
                </div>
            ))}
        </div>
    );
}
