import React, { useEffect, useRef } from 'react'
import styles from '../styles/slider.module.css';

function Slider({ value = 0, handleChange, min = 0, max = 100 }) {

    const fillRef = useRef();
    useEffect(() => {
        const fillLength = ((value - min) * 100) / (max - min);
        fillRef.current.style.width = `${fillLength}%`;
    }, [value]);

  return (
    <div className='relative flex items-center my-2'>
        <span className='absolute w-full h-[6px] rounded-md bg-[#BBB] overflow-hidden'>
        <span ref={fillRef} className='block w-0 h-full bg-[#0085EE]'/>
        </span>
        <input
            id="slider"
            className={styles.slider}
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
        />
    </div>
  )
}

export default Slider