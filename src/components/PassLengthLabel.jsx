import React from 'react'

function PassLengthLabel({ length }) {
  return (
    <div className='flex items-center justify-between'>
        <span>Password length</span>
        <span className='font-semibold text-[#0085EE] text-lg'>{length}</span>
    </div>
  );
}

export { PassLengthLabel }