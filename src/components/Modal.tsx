'use client';

import { ReactNode, useState } from "react";
import { ModalContext } from "@/components/ModalContext";

interface IModal {
    children?: ReactNode;
}

export function Modal({ children }: IModal) {
    const [component, setComponent] = useState<ReactNode>();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <ModalContext.Provider value={{ setIsOpen, setComponent }}>
                <div className={`w-screen h-screen fixed left-0 top-0 z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className='w-full h-full relative flex justify-center items-center'>
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
                        <div className='w-full h-full z-10 flex justify-center items-center'>
                            {component}
                        </div>
                    </div>
                </div>
                {children}
            </ModalContext.Provider>
        </>
    );
}