import { ICor } from "@/interface/ICor";
import { ILink } from "@/interface/ILink";
import { IMediaQueryChild, IPlanosHome } from "global";
import { CardPrice } from "@/components/CardPrice";

interface IPlans extends IMediaQueryChild {
    listPlans: IPlanosHome[];
    whastApp: Pick<ILink<ICor>, 'textoDoLink' | 'linkDoElmento'>;
}

export function Plans({ listPlans, whastApp }: IPlans) {

    return (
        <section className='w-full max-w-[1280px] flex flex-col gap-5 px-6 xl:px-0'>
            <h1 className='text-center font-bold text-3xl md:text-5xl'>
                Escolha o melhor plano para você!
            </h1>
            <ol className="grid grid-cols-plans gap-4">
                {
                    listPlans.map((card) =>
                        <li key={card.id} className='self-center'>
                            <CardPrice card={card} linkWhats={whastApp.linkDoElmento} />
                        </li>
                    )
                }
            </ol>
        </section>

    );
}