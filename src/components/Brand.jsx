import React from 'react'
import { PassIcon } from '../assets/icons/PassIcon'

function Brand() {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
        <div className='flex items-center justify-center p-1 w-[70px] h-[70px] rounded-3xl border-2 border-[#00000015]'>
            <PassIcon />
        </div>
        <div className='text-center'>
            <h1 className='mb-2 text-3xl font-bold'>
                Secret<span className='text-[#0085EE]'>Pass</span>
            </h1>
            <small className='text-[#888] text-sm'>Password Generator</small>
        </div>
    </header>
  )
}

export { Brand }