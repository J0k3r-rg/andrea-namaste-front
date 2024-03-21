import Banner from '@/app/UI/components/Banner';
import AboutMeComponent from '@/app/UI/components/AboutMe';
import Services from '@/app/UI/components/Services';
import Testimonio from '@/app/UI/components/Testimonio';
import ContactComponent from './UI/components/ContactComponent';
import { AlexBrush } from '@/app/UI/fonts/AlexBrush';

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Banner />

      <AboutMeComponent />
      
      <Services />

      <Testimonio />

      <ContactComponent />

      <div className={`text-center text-3xl ${AlexBrush.className} text-[#787878] mt-5`}>

        <p>El camino no esta en el cielo, el camino esta en el corazon</p>
        <p>Buda</p>
      </div>
    </main>
  );
}