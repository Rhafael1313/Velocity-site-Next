'use client';

import { ReactNode, useEffect, useState } from "react";
import { ClientSliderContext } from '@/components/ClientSliderContext';

interface IClientReponseSlider {
    children?: ReactNode;
}

export function ClientReponseSlider({ children }: IClientReponseSlider) {
    const [isActiveResponse, setIsActiveResponse] = useState<boolean>(false);

    useEffect(() => {
        const getReponsive = () => {
            const mediaQuery = window.matchMedia('(min-width: 768px)').matches;
            setIsActiveResponse(mediaQuery);
        };

        getReponsive();
        window.addEventListener('resize', getReponsive);
    });

    return (
        <>
            <ClientSliderContext.Provider value={{isActiveResponse}}>
                {children}
            </ClientSliderContext.Provider>
        </>
    );
}