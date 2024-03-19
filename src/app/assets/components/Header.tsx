import whatsapp from "@/app/assets/imgs/whatsapp.png";
import instagram from "@/app/assets/imgs/instagram.png";
import { Alex_Brush } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Alex_Brush({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <header className={`${inter.className} flex flex-row justify-between w-11/12 m-auto h-24 items-center`}>
      <ul className={`text-3xl text-[#787878] flex flex-row gap-20`}>
        <li>
          <Link href={`#`}>Inicio</Link>
        </li>
        <li>
          <Link href={`#`}>Sobre mi</Link>
        </li>
        <li>
          <Link href={`#`}>Mis Servicios</Link>
        </li>
      </ul>

      <ul className="text-3xl text-[#ca8c8c]  flex flex-row gap-6">
        <li>
          <Link href={`#`}>
            <Image alt="whatsapp" src={whatsapp} width={35}/>
          </Link>
        </li>
        <li>
          <Link href={`#`}>
            <Image alt="whatsapp" src={instagram} width={40} />
          </Link>
        </li>
        <li>
          <Link href={`#`}>Contacto</Link>
        </li>
      </ul>
    </header>
  );
}
