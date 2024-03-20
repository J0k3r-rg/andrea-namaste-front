import { services } from "@/app/data/services";
import CardService from "./CardServiceComponent";
import { AlexBrush } from "../fonts/AlexBrush";
import Carrousel from "./Carrousel";
import { Suspense } from "react";

export default function Services() {
    return(
        <section className="w-11/12 m-auto flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${AlexBrush.className} text-[#E0C043] text-4xl`}>Mis Servicios</h2>
            <div className="md:grid md:grid-cols-3 gap-8 hidden">
                {
                    services.map((service, index) => 
                        <Suspense key={index} fallback={<div className="w-full h-full bg-black bg-opacity-30 grid place-content-center">Cargando...</div>}>
                            <CardService key={index} item={service} />
                        </Suspense>
                    )
                }
            </div>
            <Carrousel />
        </section>
    );
}