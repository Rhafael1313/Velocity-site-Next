import { ICor } from '@/interface/ICor';
import { ILink } from '@/interface/ILink';
import { IIconeItem } from '@/interface/IIconeItem';
import { IImg } from '@/interface/IImg';

type listIcone = 'FaRocket' | 'FaCloudDownload' | 'FaCloudUploadAlt' | 'MdRouter' | 'IoMdArrowDropright' | 'FiMapPin' | 'FaWhatsapp' | 'FaFacebookSquare' |
'FaInstagram' | 'FaWifi' | 'FaFacebookF' | 'FaTwitter' | 'FaLinkedinIn' | 'MdOutlineImportantDevices' | 'MdGroups';

interface IColorLinkHover {
    corDoLinkAnimado1: Pick<ICor, 'hex'>;
    corDoLinkHover: Pick<ICor, 'hex'>;
}

interface IGetColorLinkHover {
    data: {
        bussinesses: IColorLinkHover[];
    }
}

//-----------------------------------------------------------------------

interface IHeaderAndFooter {
    numeroDeTelefone: string;
    corDoHeader: Pick<ICor, 'hex'>;
    whatsApp: ILink<Pick<ICor, 'hex'>>;
    instagram: ILink<Pick<ICor, 'hex'>>;
    facebook: ILink<Pick<ICor, 'hex'>>;
    endereco: ILink<Pick<ICor, 'hex'>>;
    iFrameGoogle: string;
    horarioDeAtendimento?: {
        html: string;
    }
}

interface IGetHeaderAndFooter {
    data: {
        bussinesses: IHeaderAndFooter[];
    }
}

//-----------------------------------------------------------------------

interface IHead {
    tituloDaPagina: string;
    descricaoDeMetaDadosDaPagina: string;
    iconeDaPagina: IImg;
}

interface IGetHead {
    data: {
        bussinesses: IHead[];
    }
}

//-----------------------------------------------------------------------

interface IAtributosHome {
    id: string;
    icone: listIcone;
    titulo: string;
    descricao: {
        text: string;
    }
}

interface IBussinessesHome {
    imagemCarroselMobile: IImg[];
    imagensDoCarrosel: IImg[];
    whatsApp: Pick<ILink<ICor>, 'textoDoLink' | 'linkDoElmento'>;
}

interface IPlanosHome {
    id: string;
    nomeDoPlano: string;
    quantosMegas: number;
    preco: number;
    privilegios: IImg[];
    promocao: string;
    degrade: boolean;
    cor1: Pick<ICor, 'rgba'>;
    cor2: Pick<ICor, 'rgba'>;
    informacoesImportantes: string;
    listaDeObservacoesDoPlano: IIconeItem[];
}

interface IPlanosTvHome {
    listaDeIconesDeCanais: string[];
    planoDeApresentacao?: string;
}

interface IGetHome {
    data: {
        atributos: IAtributosHome[];
        bussinesses: IBussinessesHome[];
        planos: IPlanosHome[];
        planoDeTvs: IPlanosTvHome[];
    }
}

//-----------------------------------------------------------------------

interface IMediaQueryChild {
    media?: string;
}

//-----------------------------------------------------------------------

type nodeIterval = string | number | NodeJS.Timeout | undefined;