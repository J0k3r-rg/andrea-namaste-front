'use client';
import { useState } from "react";
import whatsapp from "@/app/assets/imgs/whatsapp.png";
import instagram from "@/app/assets/imgs/instagram.png";
import { Alex_Brush } from "next/font/google";
import { MdMoreHoriz } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const inter = Alex_Brush({ weight: "400", subsets: ["latin"] });

export default function Header() {

  const [show, setShow] = useState(false);

  return (
    <header className={`${inter.className} flex flex-row md:justify-between w-11/12 m-auto h-24 items-center`}>
      <ul className={`text-3xl text-[#787878] hidden md:flex flex-row gap-20`}>
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

      <ul className="text-3xl text-[#ca8c8c] hidden lg:flex flex-row gap-6">
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
      <div onClick={() => setShow(true)} className="md:hidden absolute right-10 justify-self-end bg-[#DCC361] bg-opacity-40 px-3 py-1 text-2xl rounded-2xl cursor-pointer">
        <MdMoreHoriz className="text-[#787878] w-8"/>
      </div>
      <div className={`absolute md:hidden top-0 ${show ? 'right-0' : 'right-[-100%]'} h-screen w-screen md:hidden  transition-all duration-300`} id="header-mobile">
        <p onClick={() => setShow(false)} className="px-5 text-6xl">x</p>
      </div>
    </header>
  );
}
