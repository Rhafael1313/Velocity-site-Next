import { About } from "@/components/About";
import { Info } from "@/components/Info";
import { ClientReponseSlider } from "@/components/ClientReponseSlider";
import { Plans } from "@/components/Plans";
import { Promotion } from "@/components/Promotion";
import { Slide } from "@/components/Slide";
import { Tv } from '@/components/Tv';
import { getHome } from "@/lib/http";

export default async function Home() {
  const home = await getHome();
  const { atributos, bussinesses, planos, planoDeTvs } = home.data;
  const { imagemCarroselMobile, imagensDoCarrosel, whatsApp } = bussinesses[0];

  return (
    <>
      <ClientReponseSlider>
        <Slide desktop={imagensDoCarrosel} mobile={imagemCarroselMobile} />
        <Plans listPlans={planos} whastApp={whatsApp} />
        <Info listOfAtribute={atributos} />
        <About whatsAppUrl={whatsApp.linkDoElmento} />
        <Promotion listOfPlans={planos} />
        <Tv listPlanTV={planoDeTvs} />
      </ClientReponseSlider>
    </>
  );
}
