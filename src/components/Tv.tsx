import { ClientSlide } from "./ClientSlide";

export function Tv() {

    return (
        <section className='max-w-[1280px] w-full flex flex-col gap-6 lg:flex-row justify-center items-center lg:items-start px-6 xl:px-0'>
            <div className="flex-none relative">
                <img className="w-[700px] h-auto" src='https://media.graphassets.com/EWfpWS4LThKLR3q4FmMx' />
                <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center px-[1%] pt-[1%] pb-[9%]">

                </div>
            </div>
            <div className='text-center lg:text-left'>
                <h2 className='xl:text-5xl md:text-4xl text-xl font-bold'>
                    Curta filmes, séries, esportes, programas de TV e muito mais
                </h2>
                <p>
                    Contrate um de nossos planos e assista quando quiser de onde estiver.
                </p>
            </div>
        </section>
    );
}