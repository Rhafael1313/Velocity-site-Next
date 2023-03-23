import { IIconeItem } from "@/interface/IIconeItem";
import { ReactElement, ReactNode, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Icone } from "@/components/Icone";
import { ModalContext } from "@/components/ModalContext";
import { v4 as uuid4 } from 'uuid';

interface IModalCardPrice {
    nomeDoPlano: string;
    quantosMegas: number;
    informacoesImportantes: string;
    listaDeObservacoesDoPlano: IIconeItem[];
    WhatsApp: Element | ReactElement<any, any>;
    AssineAgora: Element | ReactElement<any, any>;
}

export function ModalCardPrice({
    nomeDoPlano,
    quantosMegas,
    informacoesImportantes,
    listaDeObservacoesDoPlano,
    AssineAgora,
    WhatsApp
}: IModalCardPrice) {
    const { setIsOpen } = useContext(ModalContext);
    const list = informacoesImportantes.split('\n');
    const regexRemove = new RegExp(' .+', 'gm');
    const listValidadeRegex = list.map(item => item.match(regexRemove)?.toString().trim());

    return (
        <div className='w-full h-full overflow-hidden flex justify-end items-start'>
            <div className='w-1/4 h-full bg-white'>
                <div className='w-full h-full flex flex-row justify-end items-start gap-4 p-2 pr-4'>
                    <div className='w-full max-w-[330px]'>
                        <header className='w-full h-20 flex flex-col justify-center items-start gap-1 border-b-2'>
                            <span className='text-lg'>
                                {nomeDoPlano.toUpperCase()}
                            </span>
                            <strong className='text-3xl'>
                                {`${quantosMegas} MEGAS`}
                            </strong>
                        </header>
                        <div className='flex flex-col justify-center items-center'>
                            <ol className='w-full min-h-[100px] flex flex-col justify-around items-center gap-4 py-5 border-b-2'>
                                {
                                    listaDeObservacoesDoPlano.map(({ icone, nome, id }) =>
                                        <li key={id} className='w-full flex items-center justify-start gap-3'>
                                            <Icone typeIcone={icone} className='text-2xl' />
                                            <span className='text-sm'>
                                                {nome}
                                            </span>
                                        </li>
                                    )
                                }
                            </ol>
                            <div className='w-full flex flex-col gap-2 py-3'>
                                <strong>
                                    INFOMAÇÕES IMPORTANTES
                                </strong>
                                <ol className='w-full flex flex-col justify-start items-start text-justify text-xs font-bold list-disc pl-6'>
                                    {
                                        listValidadeRegex.map(item => {
                                            const regexRed = new RegExp('\#(.*?)\#', 'gm');
                                            const regexBlue = new RegExp('\&(.*?)\&', 'gm');
                                            const regexDivisor = new RegExp('#|&');

                                            const words = item?.split(regexDivisor);
                                            const wordRed = regexRed.exec(item ?? '');
                                            const wordBlue = regexBlue.exec(item ?? '');
                                            
                                            return (
                                                <li key={uuid4()}>
                                                    {
                                                        words?.map(word => {
                                                            const wordRedValid = wordRed ? wordRed[1] : '';
                                                            const wordBlueValid = wordBlue ? wordBlue[1] : '';

                                                            if (word === wordRedValid)
                                                                return <span key={uuid4()} className='text-red-700'>{word}</span>

                                                            if (word === wordBlueValid)
                                                                return <span key={uuid4()} className='text-blue-800'>{word}</span>

                                                            return word;
                                                        })
                                                    }
                                                </li>
                                            );
                                        })
                                    }
                                </ol>
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                    {AssineAgora as ReactNode}
                                    {WhatsApp as ReactNode}
                            </div>
                        </div>
                    </div>
                    <div className='w-16 h-20 flex justify-center items-center'>
                        <button onClick={() => setIsOpen(false)} className="w-10 h-10 text-4xl flex justify-center items-center">
                            <IoMdClose />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}