import React from 'react'

function MainSection({ children }) {
  return (
    <section 
    className='relative flex flex-col w-full h-screen min-h-[600px] justify-center items-center bg-[#001A2F]'
    >
        {children}
    </section>
  )
}

export { MainSection }