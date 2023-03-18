'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IHamburguer extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isOpen?: boolean;
}

export function Hamburguer({isOpen, ...rest}: IHamburguer) {
	
	return (
		<button {...rest}>
			<div className=" w-full h-full space-y-2">
				<div className={`item-hamburguer 
                ${isOpen ? 'rotate-45 translate-y-3':''}`}></div>
				<div className={`item-hamburguer 
                ${isOpen ? 'opacity-0':''}`}></div>
				<div className={`item-hamburguer 
                ${isOpen ? '-rotate-45 -translate-y-3':''}`}></div>
			</div>
		</button>
	);
}