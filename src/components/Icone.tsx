import { FaRocket, FaCloudDownloadAlt, FaCloudUploadAlt, FaWhatsapp, FaFacebookSquare, FaInstagram, FaWifi, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';
import { MdRouter, MdGroups, MdOutlineImportantDevices} from 'react-icons/md';
import { listIcone } from 'global';
import { IconBaseProps } from 'react-icons';

interface IIconeDynamic extends IconBaseProps  {
    typeIcone: listIcone;
}

export function Icone({ typeIcone, ...props }: IIconeDynamic) {

    const list = {
        'FaRocket': FaRocket,
        'FaCloudDownload': FaCloudDownloadAlt,
        'FaCloudUploadAlt': FaCloudUploadAlt,
        'FaWhatsapp': FaWhatsapp,
        'FaFacebookSquare': FaFacebookSquare,
        'FaInstagram': FaInstagram,
        'FaWifi': FaWifi,
        'FaFacebookF': FaFacebookF,
        'FaTwitter': FaTwitter,
        'FaLinkedinIn': FaLinkedinIn,
        'IoMdArrowDropright': IoMdArrowDropright,
        'FiMapPin': FiMapPin,
        'MdRouter': MdRouter,
        'MdGroups': MdGroups,
        'MdOutlineImportantDevices': MdOutlineImportantDevices
    }

    const Element = list[typeIcone];

    return (<Element  {...props}/>);
}