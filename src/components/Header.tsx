'use client';

import { Logo } from '@/components/Logo';
import { LogoMini } from '@/components/LogoMini';
import { Hamburguer } from '@/components/Hamburguer';
import { NavBar } from '@/components/NavBar';
import { useState } from 'react';
import { IHeaderAndFooter } from 'global';
import { InfoBar } from './InfoBar';

export function Header({
    corDoHeader,
    endereco,
    facebook,
    instagram,
    whatsApp
}: Omit<IHeaderAndFooter, 'iFrameGoogle' | 'numeroDeTelefone' | 'horarioDeAtendimento'>) {
    const [ active, setActive ] = useState(false);

    return (
        <header className="w-full border-b-2 bg-white z-50 border-gray-100 flex flex-col items-center justify-between fixed">
            <div className='w-full h-[50px] hidden xl:flex justify-center items-center' style={{ backgroundColor: corDoHeader.hex }}>
                <InfoBar endereco={endereco} facebook={facebook} instagram={instagram} whatsApp={whatsApp} />
            </div>
            <div className='w-full max-w-[1280px] h-[72px] bg-white flex items-center justify-between px-6 xl:px-0 gap-6 font-bold'>
                <LogoMini className='w-12 h-12 sm:hidden' />
                <Logo className='w-44 h-auto sm:block hidden' />
                <Hamburguer className='lg:hidden' isOpen={active} onClick={() => setActive(state => !state)}/>
                <NavBar openModal={active} setOpenModal={setActive} />
            </div>
        </header>
    );
}