import { ServiceType } from '@/app/UI/data/types';
import Image from 'next/image';


export default function CardService({item, className} : {item : ServiceType, className? : string}) {
    return(
        <div className={`flex flex-col gap-5 ${className} cursor-pointer`}>
            <Image src={item.img} alt={item.tittle} className="w-10/12 md:w-8/12 m-auto rounded-xl transition-all duration-300 ease-in-out hover:scale-110"/>
            <h2 className="text-center text-[#969494] font-bold text-2xl">{item.tittle}</h2>
        </div>
    );
}