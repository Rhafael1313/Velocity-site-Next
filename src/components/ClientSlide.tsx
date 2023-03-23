'use client';

import { ReactNode, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
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
	const { isActiveResponse } = useContext(ClientSliderContext);

	const slides = isActiveResponse ? desktop : mobile;

	return (
		<div className='aqui w-full h-full flex justify-center items-center relative'>
			<Swiper
				className='w-full h-full z-0'
				slidesPerView={1}
				loop={true}
				autoplay={
					{
						delay: 2000,
						disableOnInteraction: false,
					}
				}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Autoplay]}>
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
