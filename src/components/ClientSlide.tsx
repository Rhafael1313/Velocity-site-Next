'use client';

import { ReactNode, useContext, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { ClientSliderContext } from "@/components/ClientSliderContext";

import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ISlides {
	id: string;
	elements: ReactNode;
}

interface IClientSlide {
	desktop: ISlides[];
	mobile: ISlides[];
}

export function ClientSlide({ desktop, mobile }: IClientSlide) {
	const [ slides, setSlides ] = useState<ISlides[]>(mobile);
	const { isActiveResponse } = useContext(ClientSliderContext);

	isActiveResponse ? setSlides(desktop) : setSlides(mobile);

	return (
		<div className='`w-full h-full flex justify-center items-center relative'>
			<Swiper
				className='w-full h-full z-0'
				slidesPerView={1}
				loop={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}>
					{
						slides.map(({ elements, id }) => 
							<SwiperSlide key={id} className='w-full h-full'>
								{elements}
							</SwiperSlide>
						)
					}
			</Swiper>
		</div>
	);
}
