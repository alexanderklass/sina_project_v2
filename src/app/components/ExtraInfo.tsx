import FontText from '@/app/components/FontText';
import { SlMagicWand } from 'react-icons/sl';
import { LuAlarmClock } from 'react-icons/lu';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';

export default function ExtraInfo() {
    return (
        <div
            className={
                'w-full flex flex-col lg:flex-row px-5 gap-x-20 gap-y-10 lg:gap-y-0 py-10 items-center justify-between'
            }
        >
            <div className={'flex flex-col space-y-5 items-center justify-center'}>
                <SlMagicWand size={70} />
                <FontText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam autem consequuntur
                    dolorum, excepturi facilis hic id in ipsa nesciunt nobis recusandae reprehenderit sit, suscipit
                    tempore voluptates. Eum, quaerat?
                </FontText>
            </div>

            <div className={'flex flex-col space-y-5 items-center justify-center'}>
                <LuAlarmClock size={70} />
                <FontText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam autem consequuntur
                    dolorum, excepturi facilis hic id in ipsa nesciunt nobis recusandae reprehenderit sit, suscipit
                    tempore voluptates. Eum, quaerat?
                </FontText>
            </div>

            <div className={'flex flex-col space-y-5 items-center justify-center'}>
                <PiPersonArmsSpreadFill size={70} />
                <FontText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam autem consequuntur
                    dolorum, excepturi facilis hic id in ipsa nesciunt nobis recusandae reprehenderit sit, suscipit
                    tempore voluptates. Eum, quaerat?
                </FontText>
            </div>
        </div>
    );
}
