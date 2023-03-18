import { REAL } from "@/helper/utils";
import { IMediaQueryChild, IPlanosHome } from "global";
import { MdRouter } from "react-icons/md";

interface IPromotion extends IMediaQueryChild {
    listOfPlans: IPlanosHome[];
}

export function Promotion({ listOfPlans }: IPromotion) {

    const plan = listOfPlans.find(element => element.promocao === 'Sim');

    const valor = REAL.format(plan?.preco ?? 0.0);

    return (
        <section className='w-full max-w-[1280px] flex flex-col-reverse items-center lg:flex-row lg:items-start gap-5 flex-1 px-6 xl:px-0'>
            <div className='flex flex-col gap-10'>
                <h2 className='md:text-5xl text-xl lg:text-left text-center font-bold'>
                    Obtenha internet banda larga a um preço incomparável
                </h2>
                <p className='text-justify'>
                    Sim! Você poderá usar nossa Internet para conectar sua casa ou negocio usando seu computador, telefone e vários outros dispositivos.
                </p>
                <div className='w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4'>
                    <div className='flex justify-center md:justify-start items-end gap-1 xl:grow lg:grow-0'>
                        <span className='font-bold text-4xl lg:text-5xl'>
                            {valor}
                        </span>
                        <span className="text-2xl">/Mês</span>
                    </div>
                    <div className='flex flex-row justify-center md:justify-start items-center gap-3 lg:grow'>
                        <MdRouter className='text-5xl' />
                        <span className='block w-44'>
                            Instalação grátis é roteador em comodato
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-auto h-auto md:w-[325px] md:h-[325px] lg:w-[550px] lg:h-[550px] grow flex-none relative">
                <div className='w-[50%] h-[50%] absolute flex justify-start items-center'>
                    <div className='w-[65%] h-[65%] bg-blue-700 rounded-full relative flex justify-center items-center'>
                        <strong className='uppercase text-center text-white text-2xl lg:text-5xl p-2'>
                            {`${plan?.quantosMegas} Mega`}
                        </strong>
                        <div className='w-[60%] h-[60%] bg-gray-900 rounded-full absolute left-[60%] bottom-[70%] flex justify-center items-center'>
                            <strong className='uppercase text-center text-white lg:text-xl text-[10px] p-2'>
                                Oferta Especial
                            </strong>
                        </div>
                    </div>
                </div>
                <img className='rounded-full w-full h-full' src='https://velocitynet.com.br/wp-content/uploads/2022/01/special_offer_img-1.jpg' />
            </div>
        </section>
    );
}