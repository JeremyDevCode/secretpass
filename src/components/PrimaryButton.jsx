import React from 'react'

function PrimaryButton({ children, handleClick, disabled }) {
  return (
        <button
            className={`'py-[10px] px-[14px] flex justify-center items-center w-fit text-base font-semibold rounded-xl bg-[#0085ee] text-white transition-all duration-300 hover:bg-[#0096FF]' ${disabled && 'opacity-50 bg-[#0085ee ]'}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
  );
}

export { PrimaryButton }