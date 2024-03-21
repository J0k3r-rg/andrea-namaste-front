import Image from "next/image";
import { AlexBrush } from "@/app/UI/fonts/AlexBrush";
import about from "@/app/UI/assets/imgs/me-about.jpg";

export default function AboutMeComponent() {
    
    return(
        <section className="bg-[#fff] pt-4">
            <h2 className={`${AlexBrush.className} text-center text-5xl text-[#787878]`}>Sobre mi</h2>
            <div className="flex flex-col md:flex-row py-6 md:px-12">
                <p className="text-center text-lg md:text-2xl w-10/12 md:w-7/12 m-auto">
                    Soy Andrea Namaste, terapeuta holística y profesora de yoga. 
                    Mi misión es acompañarte en tu proceso de sanación y transformación personal, 
                    para que puedas conectar con tu esencia y vivir en armonía con tu cuerpo, 
                    mente y espíritu.
                </p>
                <Image src={about} alt="about me" className="md:w-4/12 w-9/12 m-auto rounded-2xl"/>
            </div>
        </section>
    );
}