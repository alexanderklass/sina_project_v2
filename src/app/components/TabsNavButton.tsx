import FontText from '@/app/components/FontText';

interface TabsNavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean;
    text: string;
}

export default function TabsNavButton({ text, active, ...props }: TabsNavButtonProps) {
    return (
        <button
            {...props}
            className={`w-full ${active && 'bg-pastel-beige'} cursor-pointer rounded-md py-1 hover:bg-pastel-beige`}
        >
            <FontText className={'text-gray-700'}>{text}</FontText>
        </button>
    );
}
