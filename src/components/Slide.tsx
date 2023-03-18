import { v4 as uuidv4 } from 'uuid';
import Imagem from 'next/image';
import { IImg } from "@/interface/IImg";
import { ClientSlide } from './ClientSlide';

interface ISlide {
    desktop: IImg[];
    mobile: IImg[];
}

export function Slide({ desktop, mobile }: ISlide) {

    const listSlide = desktop.map(({ url }) => 
        ({
            id: uuidv4(),
            elements: <Imagem
            blurDataURL={url}
            placeholder='blur'
            width={1980}
            height={720}
            className='object-cover w-full h-full'
            src={url}
            alt="Promoção do dia" />
        })
    );

    const listSlideMobile = mobile.map(({ url }) => 
        ({
            id: uuidv4(),
            elements: <img
            className='object-cover w-full h-full'
            src={url}
            alt="Promoção do dia" />
        })
    );

    return(
        <section className='w-full h-[600px] flex-none'>
            <ClientSlide desktop={listSlide} mobile={listSlideMobile} />
        </section>
    );
}