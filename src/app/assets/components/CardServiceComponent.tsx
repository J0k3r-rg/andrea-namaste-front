import { ServiceType } from "@/app/data/types";
import Image, { StaticImageData } from "next/image";


export default function CardService({item, className} : {item : ServiceType, className? : string}) {
    return(
        <div className={`flex flex-col gap-5 ${className}  transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer`}>
            <Image src={item.img} alt={item.tittle} className="w-10/12 md:w-8/12 m-auto rounded-xl"/>
            <h2 className="text-center text-[#969494] font-bold text-2xl">{item.tittle}</h2>
        </div>
    );
}