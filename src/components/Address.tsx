import { ICor } from '@/interface/ICor';
import { ILink } from '@/interface/ILink';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiHeadphoneFill } from 'react-icons/ri';
import { Icone } from './Icone';

interface IAddress {
	phone: string;
	facebook?: ILink<Pick<ICor, 'hex'>>;
	twitter?: ILink<Pick<ICor, 'hex'>>;
	instagram?: ILink<Pick<ICor, 'hex'>>;
	linkedin?: ILink<Pick<ICor, 'hex'>>;
	endereco?: ILink<Pick<ICor, 'hex'>>;
	iframe?: string;
}

export function Address({ endereco, facebook, iframe, instagram, linkedin, phone, twitter }: IAddress) {

	return (
		<div className='w-full lg:max-w-[393px] md:max-w-[293px] flex flex-col justify-start items-center gap-3'>
			<div className='w-full flex flex-row justify-start items-center gap-2'>
				<RiHeadphoneFill className='text-[#0000B8] text-5xl' />
				<div className='flex flex-col justify-center items-start'>
					<span>
						Suporte
					</span>
					<span className='font-bold text-lg'>
						{phone}
					</span>
				</div>
			</div>
			<div className='w-full flex flex-row items-center justify-start gap-2'>
				{
					facebook
					? <Link href={facebook.linkDoElmento} className='w-9 h-9 flex justify-center items-center rounded-full bg-gray-400 group'>
						<Icone typeIcone={facebook.icone} className='group-hover:text-[#3b5998] text-gray-600' />
					</Link>
					: null
				}
				{
					instagram
					? <Link href={instagram.linkDoElmento} className='w-9 h-9 flex justify-center items-center rounded-full bg-gray-400 group'>
						<Icone typeIcone={instagram.icone} className='hover:text-[#dd2a7b] text-gray-600' />
					</Link>
					: null
				}
				{
					linkedin
					? <Link href={linkedin.linkDoElmento} className='w-9 h-9 flex justify-center items-center rounded-full bg-gray-400 group'>
						<Icone typeIcone={linkedin.icone} className='group-hover:text-[#3b5998] text-gray-600' />
					</Link>
					: null
				}
				{
					twitter
					? <Link href={twitter.linkDoElmento} className='w-9 h-9 flex justify-center items-center rounded-full bg-gray-400 group'>
						<Icone typeIcone={twitter.icone} className='group-hover:text-[#3b5998] text-gray-600' />
					</Link>
					: null
				}
			</div>
			<div className='flex flex-col justify-center items-center gap-2'>
				<div className='flex flex-col justify-center items-start'>
					<span className='font-bold text-xl'>Endereço</span>
					<Link className='hover:text-blue-600' href={endereco?.linkDoElmento ?? '/#'} target="_blank" rel="noreferrer">
						{endereco?.textoDoLink}
					</Link>
				</div>
				<iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.559158014574!2d-49.854625!3d-6.0780622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67c165682ffaf115!2sVelocitynet%20Telecom%20-%20FIBRA%20%C3%93PTICA!5e0!3m2!1spt-BR!2sbr!4v1675358719753!5m2!1spt-BR!2sbr"loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	);
}