import { listIcone } from "global";

export interface ILink<T> {
    textoDoLink: string;
    linkDoElmento: string;
    icone: listIcone;
    corDoIcone: T;
}