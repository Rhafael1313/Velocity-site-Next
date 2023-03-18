import { Icone } from '@/components/Icone';
import { ILink } from "@/interface/ILink";
import { ICor } from "@/interface/ICor";
import Link from "next/link";

interface IInfoBar {
    endereco?: ILink<Pick<ICor, 'hex'>>;
    facebook?: ILink<Pick<ICor, 'hex'>>;
    instagram?: ILink<Pick<ICor, 'hex'>>;
    whatsApp?: ILink<Pick<ICor, 'hex'>>;
}

export function InfoBar({ endereco, facebook, instagram, whatsApp }: IInfoBar) {
    
    return (
        <div className='w-full max-w-[1280px] h-full lg:flex flex-row justify-between px-5 xl:px-0 font-bold text-white'>
            {
                endereco
                ? <Link href={endereco.linkDoElmento} target='_blank' className='flex flex-row items-center gap-3'>
                    <Icone className='text-2xl' style={{ color: endereco.corDoIcone.hex }} typeIcone={endereco.icone}/>
                    <span>
                        {endereco.textoDoLink}
                    </span>
                </Link>
                : null
            }
            {
                whatsApp
                ? <Link href={whatsApp.linkDoElmento} target='_blank' className='flex flex-row items-center gap-3'>
                    <Icone className='text-2xl' style={{ color: whatsApp.corDoIcone.hex }} typeIcone={whatsApp.icone}/>
                    <span>
                        {whatsApp.textoDoLink}
                    </span>
                </Link>
                : null
            }
            {
                facebook
                ? <Link href={facebook.linkDoElmento} target='_blank' className='flex flex-row items-center gap-3'>
                    <Icone className='text-2xl' style={{ color: facebook.corDoIcone.hex }} typeIcone={facebook.icone}/>
                    <span>
                        {facebook.textoDoLink}
                    </span>
                </Link>
                : null
            }
            {
                instagram
                ? <Link href={instagram.linkDoElmento} target='_blank' className='flex flex-row items-center gap-3'>
                    <Icone className='text-2xl' style={{ color: instagram.corDoIcone.hex }} typeIcone={instagram.icone}/>
                    <span>
                        {instagram.textoDoLink}
                    </span>
                </Link>
                : null
            }
        </div>
    );
}