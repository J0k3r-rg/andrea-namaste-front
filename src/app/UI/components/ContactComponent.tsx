import Image from "next/image";
import whatsapp from "@/app/UI/assets/imgs/whatsapp.png";
import instagram from "@/app/UI/assets/imgs/instagram.png";
import mancha from "@/app/UI/assets/imgs/mancha.png";
import { AlexBrush } from "@/app/UI/fonts/AlexBrush";

export default function ContactComponent() {
    return (
        <section id="contact-component" className="w-10/12 m-auto text-center mb-10">
            <div className="relative flex justify-center">
                <Image src={mancha} alt="mancha" className="opacity-25 absolute md:w-8/12 lg:w-5/12 mt-20 md:mt-14 lg:mt-2" />
            </div>
            <h2 className={`${AlexBrush.className} text-4xl text-right text-[#E0C043]`}>Contactanos</h2>
            <div className="text-[#969494] text-2xl mt-14">
                <p>Estas interesado en adquirir algunos de mis</p> <p> servicios</p>
                <p>Escribime y coordinamos una cita </p> <p>precencial o virtual</p>
            </div>
            <div className="flex flex-row justify-between w-6/12 md:w-2/12 m-auto mt-10">
                <Image src={whatsapp} alt="whatsapp" width={50} className="z-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
                <Image src={instagram} alt="instagram" width={50} className="z-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
            </div>
        </section>
    );
}