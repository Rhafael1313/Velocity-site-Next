import Link from "next/link";

interface IAbout {
    whatsAppUrl: string;
}

export function About({ whatsAppUrl }: IAbout) {

    return (
        <section className="w-full h-full min-h-[500px] bg-center bg-cover bg-no-repeat bg-fixed text-white relative" style={{ backgroundImage: 'url(https://velocitynet.com.br/wp-content/uploads/2022/01/cta_bg-1.jpg)' }}>
            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-75 z-0'></div>
            <div className='absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center p-6 gap-20'>
                <h2 className='text-3xl md:text-4xl text-center font-bold'>Precisa de banda lara rápida e segura para sua casa ou empresa?</h2>
                <div className='w-full px-10 flex flex-col items-center'>
                    <Link href={whatsAppUrl} target='_blank' className='flex flex-col items-start justify-center'>
                        <span className='block text-lg md:text-2xl font-semibold'>Saiba Mais</span>
                        <div className='flex flex-row justify-center items-center md:text-2xl'>
                            <strong className='text-green-600'>+55 (94) 99132-6169</strong>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}