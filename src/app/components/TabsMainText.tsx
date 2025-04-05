import FontText from '@/app/components/FontText';

interface TabsMainTextProps {
    text: string;
    title: string;
}

export default function TabsMainText({ text, title }: TabsMainTextProps) {
    return (
        <div className={'flex items-center justify-center gap-y-3 flex-col'}>
            <FontText className={'text-[#5a8f7b] font-bold self-start text-xl'}>{title}</FontText>
            <FontText className={'text-gray-700'}>{text}</FontText>
        </div>
    );
}
