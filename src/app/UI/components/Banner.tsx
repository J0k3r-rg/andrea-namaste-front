import Image from "next/image"
import logo from '@/app/UI/assets/imgs/logo.png';

export default function Banner() {
    return(
        <section className={`flex justify-center`}>
            <Image alt="Logo andrea-namaste" src={logo} className="md:w-96 w-48"/>
        </section>
    )
}