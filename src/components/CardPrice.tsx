'use client';

import { REAL } from "@/helper/utils";
import { IPlanosHome } from "global";
import Link from "next/link";
import { useState } from "react";

interface ICardPrice {
    linkWhats: string;
    card: IPlanosHome;
}

export function CardPrice({ card, linkWhats }: ICardPrice) {
    const { cor1, cor2, degrade, informacoesImportantes, listaDeObservacoesDoPlano, nomeDoPlano, preco, privilegios, quantosMegas } = card;
    const valor = REAL.format(preco);
    const matchValor = valor.match(/(\w+)(,\w+)/);

    return (
        <div className="w-full h-full overflow-hidden flex flex-col rounded-lg border-[1px] items-center gap-3">
            <header className='w-full text-white p-5 flex flex-col items-center justify-center gap-3' 
                style={
                    degrade
                        ? { backgroundImage: `linear-gradient(to top, rgba(${cor1.rgba.r}, ${cor1.rgba.g}, ${cor1.rgba.b}, ${cor1.rgba.a}), rgba(${cor2.rgba.r}, ${cor2.rgba.g}, ${cor2.rgba.b}, ${cor2.rgba.a})` }
                        : { backgroundColor: `rgba(${cor1.rgba.r}, ${cor1.rgba.g}, ${cor1.rgba.b}, ${cor1.rgba.a})` }
                    }>
                <span className="block text-lg font-bold">{nomeDoPlano}</span>
                <strong className="block text-4xl font-bold">{`${quantosMegas} MEGA`}</strong>
            </header>
            <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col justify-center items-end">
                        <span className="block">apenas</span>
                        <span className="block font-bold">R$</span>
                    </div>
                    <h1 className="text-8xl xl:text-8xl lg:text-6xl font-bold">{matchValor ? matchValor[1] : 'Preço'}</h1>
                    <div className="flex flex-col justify-center items-start">
                        <span className="block font-bold xl:text-2xl">{matchValor ? matchValor[2] : 'decimal'}</span>
                        <span className="block">mês</span>
                    </div>
                </div>
                <strong className="font-medium">*até o vencimento</strong>
            </div>
            <div className="w-full px-4 flex flex-col gap-5 relative">
                <hr />
                <span className="w-10 block text-center bg-white absolute top-[-11px] left-[45%]">com</span>
                <div className="w-full flex flex-row items-center justify-center gap-4">
                    {
                        privilegios.map(({ id, url }) =>
                            <img
                                key={id}
                                className="rounded-lg w-10 h-10 shadow-black drop-shadow-lg"
                                src={url}
                                alt="logo de canal" />
                        )
                    }
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3 px-4 pb-5">
                <Link href='/#' className="w-full h-10 text-white font-bold rounded-lg bg-velocityBlue-500 flex justify-center items-center">
                    ASSINE AGORA
                </Link>
                <Link href={linkWhats} target='_blank' className="w-full h-10 text-white font-bold rounded-lg bg-velocityWhatsApp-500 flex justify-center items-center">
                    WHATSAPP
                </Link>
                <Link href='/#' className="w-full h-10 border-2 border-velocityBlue-500 text-velocityBlue-500 font-bold rounded-lg flex justify-center items-center">
                    + DETALHES
                </Link>
            </div>
        </div>
    );
}