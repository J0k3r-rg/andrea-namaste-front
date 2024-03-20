import { services } from "@/app/data/services";
import CardService from "./CardServiceComponent";
import { AlexBrush } from "../fonts/AlexBrush";
import Carrousel from "./Carrousel";

export default function Services() {
    return(
        <section className="w-11/12 m-auto flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${AlexBrush.className} text-[#E0C043] text-4xl`}>Mis Servicios</h2>
            <div className="md:grid md:grid-cols-3 gap-8 hidden">
                {
                    services.map((service, index) => 
                        <CardService key={index} item={service} />
                    )
                }
            </div>
            <Carrousel />
        </section>
    );
}