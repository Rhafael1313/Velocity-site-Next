'use client';

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { IoMdArrowDropright } from 'react-icons/io';

import { LinkAnimate } from '@/components/LinkAnimate';

interface INavBar {
    openModal?: boolean;
    setOpenModal?: Dispatch<SetStateAction<boolean>>;
}

export function NavBar({ openModal, setOpenModal }: INavBar) {

    return (
        <>
            <div className={`absolute top-[72px] left-0 w-full h-screen transition-all duration-75 ease-out bg-black opacity-75 lg:hidden ${openModal ? 'block' : 'hidden'}`}></div>
            <nav className={`overflow-hidden lg:overflow-visible absolute lg:static lg:w-full lg:h-full top-[72px] left-0 h-screen flex flex-row transition-all ${openModal ? 'w-full' : 'w-0'}`}>
                <ol className="flex-none w-3/4 sm:w-2/5 lg:w-full h-full bg-white flex flex-col lg:flex-row lg:justify-end items-center lg:gap-5">
                    <li className="w-full lg:inline lg:w-auto flex-none">
                        <Link href="#" className="uppercase flex-none w-full h-14 px-6 lg:px-0 border-b-2 lg:border-b-0 flex justify-start items-center">
                            Inicio
                        </Link>
                    </li>
                    <li className="uppercase w-full lg:inline lg:w-auto px-6 lg:px-0 border-b-2 lg:border-b-0 flex flex-col justify-center gap-0 relative cursor-pointer group">
                        <div className="group">
                            <div className='flex justify-center items-center'>
                                <span className="flex w-full lg:w-auto h-14 items-center">
                                    Internet
                                </span>
                                <IoMdArrowDropright className='text-2xl transition-all rotate-0 group-hover:rotate-90' />
                            </div>
                            <ol className='pl-6 lg:pl-0 overflow-hidden transition-all lg:absolute lg:w-48 lg:bg-white h-0 group-hover:h-32'>
                                <li className="uppercase w-full h-14 flex items-center lg:border-b-[1px] lg:pl-6">
                                    <Link href="/">
                                        Para você
                                    </Link>
                                </li>
                                <li className="uppercase w-full h-14 flex items-center lg:pl-6">
                                    <Link href="/">
                                        Para sua empresa
                                    </Link>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li className="w-full lg:inline lg:w-auto flex-none">
                        <Link href="#" className="uppercase w-full h-14 px-6 lg:px-0 border-b-2 lg:border-b-0 flex justify-start items-center">
                            Tv
                        </Link>
                    </li>
                    <li className="w-full lg:inline lg:w-auto flex-none">
                        <Link href="#" className="uppercase flex-none w-full h-14 px-6 lg:px-0 border-b-2 lg:border-b-0 flex justify-start items-center">
                            Sobre nós
                        </Link>
                    </li>
                    <li className="w-full lg:inline lg:w-auto flex-none">
                        <Link href="#" className="uppercase flex-none w-full h-14 px-6 lg:px-0 border-b-2 lg:border-b-0 flex justify-start items-center">
                            Contatos
                        </Link>
                    </li>
                    <li className="w-full lg:w-auto h-full flex flex-col lg:flex-row items-center justify-start lg:justify-end py-7 lg:py-0 px-3 lg:px-0 gap-8 lg:gap-5">
                        <LinkAnimate href='/' >
                            Assine Já
                        </LinkAnimate>
                        <LinkAnimate href='/'>
                            Central do Assinante
                        </LinkAnimate>
                    </li>
                </ol>
                <div className='w-full h-full' onClick={() => { if (setOpenModal) setOpenModal(state => !state); }}></div>
            </nav>
        </>
    );
}