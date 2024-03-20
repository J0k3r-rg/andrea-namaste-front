import AboutMeComponent from "./assets/components/AboutMe";
import Banner from "./assets/components/Banner";
import Services from "./assets/components/Services";
import Testimonio from "./assets/components/Testimonio";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Banner />

      <AboutMeComponent />
      
      <Services />

      <Testimonio />
    </main>
  );
}