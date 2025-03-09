import React from 'react';
import FontText from './FontText';

export default function Footer() {
    return (
        <footer className={'bg-white h-[400px] w-full p-2 flex flex-row items-center justify-center'}>
            <div className={`w-full flex items-center justify-center flex-col`}>
                <FontText className={'font-bold'}>Impressum</FontText>
                <FontText className={'w-[400px]'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut blanditiis consectetur
                    eveniet, ex incidunt iste, libero maiores neque nesciunt, repellat similique suscipit totam! Aut
                    enim ex expedita omnis quos.
                </FontText>
            </div>
            <div className={'w-full flex items-center justify-center ring-2 ring-black rounded-xl h-full'}>MAP</div>
        </footer>
    );
}
