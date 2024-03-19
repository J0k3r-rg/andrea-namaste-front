import Image from "next/image"
import logo from '@/app/assets/imgs/logo.png';

export default function Banner() {
    return(
        <div className={`flex justify-center`}>
            <Image alt="Logo andrea-namaste" src={logo} width={350}/>
        </div>
    )
}