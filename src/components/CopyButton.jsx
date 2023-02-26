import { CopyIcon } from "../assets/icons/CopyIcon";

export const CopyButton = ({ handleClick, disabled }) => {
    return (
        <button
            className={`relative bg-transparent hover:stroke-[#222]' ${disabled && 'opacity-50'}`}
            onClick={handleClick}
        >
            <CopyIcon /> 
        </button>
    );
};