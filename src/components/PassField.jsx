import { CopyButton } from "../components/CopyButton";
import { CopiedTip } from "../components/CopiedTip";
import { useState } from "react";

export const PassField = ({ value, setValue }) => {
    const [check, setCheck] = useState(false);

    const copyPass = () => {
        navigator.clipboard
            .writeText(value)
            .then(() => {
                setCheck(true);
                setTimeout(() => {
                    setCheck(false);
                }, 1500);
            })
            .catch(() => {
                alert("Cannot copy password to clipboard");
            });
    };

    return (
        <div className='py-[10px] px-[15px] flex items-center text-base w-full font-semibold rounded-xl border-2 border-[#00000018] transition-all duration-300 gap-[10px] focus-within:border-2 focus-within:border-[#0085eeb0]'>
            <input
                type="text"
                placeholder="Generating password..."
                className="flex items-center w-full bg-transparent focus:border-0 focus:outline-none"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                readOnly
            />
            <span className='h-[26px] border-l-2 border-[#00000015]'></span>
            {!check && <CopyButton handleClick={copyPass} />}
            {check && <CopiedTip />}
        </div>
    );
};