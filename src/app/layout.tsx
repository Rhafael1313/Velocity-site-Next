import { getHeaderAndFooter } from '@/lib/http';
import { Header } from '@/components/Header';
import { Roboto } from 'next/font/google';

import './globals.css'
import { Footer } from '@/components/Footer';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headAndFooter = await getHeaderAndFooter();
  const { corDoHeader, endereco, facebook, iFrameGoogle, instagram, whatsApp, horarioDeAtendimento, numeroDeTelefone } = headAndFooter.data.bussinesses[0];

  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header
          corDoHeader={corDoHeader}
          endereco={endereco}
          facebook={facebook}
          instagram={instagram}
          whatsApp={whatsApp} />
        <div className='w-full h-full min-h-screen xl:pt-[122px] pt-[74px] flex flex-col justify-center items-center gap-8 mb-8'>
          {children}
        </div>
        <Footer
          endereco={endereco}
          facebook={facebook}
          iFrameGoogle={iFrameGoogle}
          instagram={instagram}
          horarioDeAtendimento={horarioDeAtendimento}
          numeroDeTelefone={numeroDeTelefone} />
      </body>
    </html>
  )
}
