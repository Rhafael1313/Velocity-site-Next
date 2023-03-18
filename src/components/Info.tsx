import { IAtributosHome, IMediaQueryChild } from "global";
import { CardInfo } from "./CardInfo";

interface IInfo extends IMediaQueryChild {
    listOfAtribute: IAtributosHome[];
}

export function Info({ listOfAtribute }: IInfo) {

    return (
        <section className='w-full max-w-[1280px] flex-0 flex flex-col gap-5 px-6 xl:px-0'>
            <h1 className="text-center font-bold text-2xl md:text-4xl">
                Nos temos a solução perfeita para você.
            </h1>
            <ol className="w-full grid grid-cols-plans gap-4 justify-center content-center">
                {
                    listOfAtribute.map(card =>
                        <li key={card.id}>
                            <CardInfo info={card} />
                        </li>
                    )
                }
            </ol>
        </section>
    );
}