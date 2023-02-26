import React, { useEffect, useRef } from "react";
import { HappyIcon } from "../assets/icons/HappyIcon";
import { NormalFaceIcon } from "../assets/icons/NormalFaceIcon";
import { SadIcon } from "../assets/icons/SadIcon";
import { EmotionIcon } from "../assets/icons/EmotionIcon";

export const PasswordQuality = ({ length = 0, min = 0, max = 100 }) => {
    const indicatorRef = useRef();

    useEffect(() => {
        const color =
            length >= 35 ? "#77DD77" : length > 18 ? "#76BA99" : length >= 9 ? "#FFC54D" : "#EB5353";
        let quality = Math.round(((length - min) * 100) / (max - min) / 10);
        if (quality === 0) quality = 1;
        for (let i = 0; i < quality; i++) {
            indicatorRef.current.children[i].style.background = color;
        }
        for (let i = quality; i < 10; i++) {
            indicatorRef.current.children[i].style.background = "#DDD";
        }
    }, [length]);

    return (
        <div className='flex items-center justify-between w-full gap-6 text-sm text-[#666]'>
            <span>Password quality</span>
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1' ref={indicatorRef}>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                    <span className='h-[13px] w-2 bg-[#DDDD] rounded-sm'></span>
                </div>
                <div className='w-6 h-6'>
                    {length >= 35 && <EmotionIcon fill="#77DD77" />}
                    {length <= 34 && length >= 19 && (
                        <HappyIcon fill="#76BA99" />
                    )}
                    {length <= 18 && length >= 9 && (
                        <NormalFaceIcon fill="#FFC54D" />
                    )}
                    {length <= 8 && <SadIcon fill="#EB5353" />}
                </div>
            </div>
        </div>
    );
};