import { tabs } from '@/app/constants/rooms';
import TabsNavButton from '@/app/components/TabsNavButton';
import { useState } from 'react';
import TabsContent from '@/app/components/TabsContent';

export default function Tabs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const subItems = tabs.map((item) => item.subText.map((subItem) => subItem));
    return (
        <div className={'flex flex-col gap-y-5 items-center justify-center lg:w-[900px] px-5 lg:px-0'}>
            <section className={'flex flex-row gap-x-1 bg-gray-200 rounded-lg p-1 w-full'}>
                {tabs.map((tab, index) => (
                    <TabsNavButton
                        onClick={() => setActiveIndex(index)}
                        key={index}
                        active={index === activeIndex}
                        text={tab.navButton}
                    />
                ))}
            </section>
            {tabs.map((tab, index) => (
                <TabsContent
                    image={tab.image}
                    active={index === activeIndex}
                    subTextArray={subItems[activeIndex]}
                    mainText={tab.text}
                    mainTextTitle={tab.titleText}
                    key={index}
                />
            ))}
        </div>
    );
}
