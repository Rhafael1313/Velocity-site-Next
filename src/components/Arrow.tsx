import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IArrow extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    directons: 'left' | 'right';
}

export function Arrow({directons, ...props}: IArrow) {
    
    return (
        <button {...props}>
            {
                directons === 'left'
                ? <IoIosArrowBack />
                : <IoIosArrowForward />
            }
        </button>
    );
}