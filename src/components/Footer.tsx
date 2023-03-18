import { IHeaderAndFooter } from "global";
import { Address } from "./Address";
import { Category } from "./Category";
import { LogoDark } from "./LogoDark";
import { OpeningHours } from "./OpeningHours";

export function Footer({ endereco, facebook, iFrameGoogle, instagram, numeroDeTelefone, horarioDeAtendimento }: Omit<IHeaderAndFooter, 'corDoHeader' | 'whatsApp'>) {

    return (
        <footer className='w-full h-full flex flex-col justify-center items-center gap-8 border-t-2
		pt-3'>
            <div className="w-full max-w-[1280px] flex flex-row flex-wrap-reverse justify-between items-end gap-3 px-4">
                <Address 
                    phone={numeroDeTelefone}
                    endereco={endereco}
                    facebook={facebook}
                    iframe={iFrameGoogle}
                    instagram={instagram} />
                <Category />
				<OpeningHours />
            </div>
            <div className="w-full min-h-[65px] bg-velocityDark-500 p-3 flex justify-center items-center">
                <div className='w-full max-w-[1280px] h-full text-white flex gap-5 flex-row flex-wrap items-center justify-between'>
                    <div className='grow flex items-center justify-center md:justify-start'>
                        <LogoDark className="w-44 h-9" />
                    </div>
                    <div className='grow flex items-center justify-center md:justify-end'>
                        <span className='block text-center'>
                            Copyrighted VelocityNet Telecom - All Right Reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}