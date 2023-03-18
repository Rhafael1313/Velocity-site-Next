import { IAtributosHome } from 'global';
import { Icone } from '@/components/Icone';

interface ICardInfo {
    info: IAtributosHome
}

export function CardInfo({ info }: ICardInfo) {
    const { descricao, icone, titulo } = info;

    return(
        
        <div className="w-full h-[280px] border-[1px] flex flex-col justify-start items-center gap-4 px-5 py-7">
			<header className='w-full h-full flex flex-col items-start gap-5'>
				<Icone typeIcone={icone} className='text-5xl text-blue-600' />
				<h3 className='text-xl'>
                    {titulo}
                </h3>
			</header>
			<p className='text-justify'>
                {descricao.text}
			</p>
		</div>
    );
}