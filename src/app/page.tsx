import Banner from '@/app/UI/components/Banner';
import AboutMeComponent from '@/app/UI/components/AboutMe';
import Services from '@/app/UI/components/Services';
import Testimonio from '@/app/UI/components/Testimonio';
import ContactComponent from './UI/components/ContactComponent';

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Banner />

      <AboutMeComponent />
      
      <Services />

      <Testimonio />

      <ContactComponent />
    </main>
  );
}