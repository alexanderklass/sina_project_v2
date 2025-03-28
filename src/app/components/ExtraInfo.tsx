import FontText from '@/app/components/FontText';
import { SlMagicWand } from 'react-icons/sl';
import { LuAlarmClock } from 'react-icons/lu';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';
import SlideInAnimation from '@/app/components/SlideInAnimation';

export default function ExtraInfo() {
    return (
        <div
            className={
                'w-full flex flex-col lg:flex-row px-5 gap-x-20 gap-y-10 lg:gap-y-0 py-10 items-center justify-between'
            }
        >
            <SlideInAnimation>
                <div className={'flex flex-col space-y-2 items-center justify-center'}>
                    <SlMagicWand className={'text-yellow-500 mb-5'} size={70} />
                    <FontText className={'text-xl font-bold'}>Individuelle Förderung</FontText>
                    <FontText className={'text-center'}>
                        Wir begleiten Ihr Kind mit Herz und Kompetenz durch die ersten wichtigen Lebensjahre. In einer
                        warmen, familiären Umgebung bieten wir eine liebevolle Betreuung und individuelle Förderung.
                    </FontText>
                </div>
            </SlideInAnimation>

            <SlideInAnimation>
                <div className={'flex flex-col space-y-2 items-center justify-center'}>
                    <LuAlarmClock className={'text-[#ce8da1] mb-5'} size={70} />
                    <FontText className={'text-xl font-bold'}>An Ihre Bedürfnisse angepasst </FontText>
                    <FontText className={'text-center'}>
                        Wir wissen, dass der Alltag manchmal unvorhersehbar ist. Deshalb bieten wir flexible
                        Betreuungszeiten, die sich an Ihre Bedürfnisse anpassen – für eine sorgenfreie Vereinbarkeit von
                        Familie und Beruf.
                    </FontText>
                </div>
            </SlideInAnimation>

            <SlideInAnimation>
                <div className={'flex flex-col space-y-2 items-center justify-center'}>
                    <PiPersonArmsSpreadFill className={'text-[#dce4c9] mb-5'} size={70} />
                    <FontText className={'text-xl font-bold'}>Geborgenheit und Vertrauen</FontText>
                    <FontText className={'text-center'}>
                        In unserer kleinen Gruppe kann Ihr Kind in einer sicheren, geborgenen Atmosphäre wachsen und
                        lernen. So entstehen enge Beziehungen, die eine optimale Entwicklung fördern.
                    </FontText>
                </div>
            </SlideInAnimation>
        </div>
    );
}
