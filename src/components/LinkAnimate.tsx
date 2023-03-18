'use client';

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { BsArrowRightShort } from "react-icons/bs";

interface ILinkAnimate extends LinkProps {
	children?: ReactNode | undefined;
}

export function LinkAnimate({ children, ...props }: ILinkAnimate) {
	return (
		<Link {...props} className='group w-full lg:w-auto xl:transition-all xl:ease-linear xl:hover:translate-x-3 cursor-pointer text-sm'>
			<div className="w-full h-14 bg-velocityBlue-500 rounded-full flex justify-center items-center relative overflow-hidden px-4">
				<div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all ease-out duration-500 w-full h-full rounded-full bg-yellow-400 z-0"></div>
				<div className="w-full h-full flex justify-center items-center">
					<span className="font-bold text-white z-20 flex flex-row justify-center items-center gap-3">
						{children}
					</span>
				</div>
				<div className='w-9 h-full flex justify-center items-center z-10'>
					<BsArrowRightShort className="text-white text-2xl font-bold" />
				</div>
			</div>
		</Link>
	);
}