import React from 'react'

function ToggleLabel({ content, active }) {
  return (
    <span className={`text-[#4A4A4A] transition-all duration-300 ${active && 'text-[#000]'}`}>
            {content}
    </span>
  );
}

export { ToggleLabel }