import Image from "next/image";
import { AlexBrush } from "@/app/assets/fonts/AlexBrush";
import about from "@/app/assets/imgs/me-about.png";

export default function AboutMeComponent() {
    
    return(
        <section>
            <h2 className={`${AlexBrush.className} text-center text-4xl mb-4 mt-4`}>Sobre mi</h2>
            <div className="bg-[#fff] flex flex-col md:flex-row py-6">
                <p className="text-center text-xl md:text-2xl w-10/12 md:w-7/12 m-auto">
                    Soy Andrea Namaste, terapeuta holística y profesora de yoga. 
                    Mi misión es acompañarte en tu proceso de sanación y transformación personal, 
                    para que puedas conectar con tu esencia y vivir en armonía con tu cuerpo, 
                    mente y espíritu.
                </p>
                <Image src={about} alt="about me" className="md:w-4/12 w-10/12 m-auto"/>
            </div>
        </section>
    );
}