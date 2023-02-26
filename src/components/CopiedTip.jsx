import React from 'react'
import { CheckIcon } from '../assets/icons/CheckIcon'

function CopiedTip() {
  return (
    <div className='relative flex items-center justify-center p-0 m-0'>
        <CheckIcon />
        <span className='absolute top-[-140%] flex items-center pt-[3px] px-[9px] pb-[5px] rounded-lg bg-[#111] text-white text-sm whitespace-nowrap z-10 text-center transition-all duration-[40] w-fit delay-[10] scale-100'>Password copied</span>
        <span className='absolute w-5 h-5 top-[-107%] bg-[#111] rotate-45'></span>
    </div>
  )
}

export { CopiedTip }