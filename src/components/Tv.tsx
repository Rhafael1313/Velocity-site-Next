'use client';

import { v4 as uuidv4 } from 'uuid';
import { chunk } from "@/helper/utils";
import { IPlanosTvHome } from "global";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ClientSlide } from './ClientSlide';

interface ITv {
    listPlanTV: IPlanosTvHome[];
}

export function Tv({ listPlanTV }: ITv) {
    const slideTv = listPlanTV.find(({ planoDeApresentacao }) => planoDeApresentacao === 'sim');
    const slidesDesktop = chunk(slideTv?.listaDeIconesDeCanais ?? [], 12);
    const slidesMobile = chunk(slideTv?.listaDeIconesDeCanais ?? [], 4);

    const desktop = slidesDesktop.map(list => ({
        id: uuidv4(),
        elements:
            <div className='w-full h-full grid items-center justify-items-center grid-cols-2 md:grid-cols-4 grid-rows-1 md:grid-rows-3 gap-2 md:p-2 p-1'>
                {
                    list.map(url =>
                        <img key={uuidv4()} className='w-20 h-20' src={url} />
                    )
                }
            </div>
    })
    );

    const mobile = slidesMobile.map(list => ({
        id: uuidv4(),
        elements:
            <div className='w-full h-full grid items-center justify-items-center grid-cols-2 md:grid-cols-4 grid-rows-1 md:grid-rows-3 gap-2 md:p-2 p-1'>
                {
                    list.map(url =>
                        <img key={uuidv4()} className='w-20 h-20' src={url} />
                    )
                }
            </div>
    })
    );

    return (
        <section className='max-w-[1280px] w-full flex flex-col gap-6 lg:flex-row justify-center items-center lg:items-start px-6 xl:px-0'>
            <div className="flex-none relative">
                <img className="w-[700px] h-auto" src='https://media.graphassets.com/EWfpWS4LThKLR3q4FmMx' />
                <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center px-[1%] pt-[1%] pb-[9%]">
                    <ClientSlide desktop={desktop} mobile={mobile} />
                </div>
            </div>
            <div className='text-center lg:text-left'>
                <h2 className='xl:text-5xl md:text-4xl text-xl font-bold'>
                    Curta filmes, séries, esportes, programas de TV e muito mais
                </h2>
                <p>
                    Contrate um de nossos planos e assista quando quiser de onde estiver.
                </p>
            </div>
        </section>
    );
}