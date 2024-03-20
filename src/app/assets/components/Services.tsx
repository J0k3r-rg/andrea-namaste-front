import { AlexBrush } from "../fonts/AlexBrush";
import Carrousel from "./Carrousel";
import CarrouselDesktop from "./CarrouselDesktop";

export default function Services() {
    return (
        <section className="w-11/12 m-auto flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${AlexBrush.className} text-[#E0C043] text-4xl`}>Mis Servicios</h2>
            <CarrouselDesktop />
            <Carrousel />
        </section>
    );
}