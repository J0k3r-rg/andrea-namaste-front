"use client";
import { useState } from "react";
import whatsapp from '@/app/UI/assets/imgs/whatsapp.png';
import instagram from '@/app/UI/assets/imgs/instagram.png';
import logo from '@/app/UI/assets/imgs/logo.png';
import { AlexBrush } from "@/app/UI/fonts/AlexBrush";
import { MdMoreHoriz } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  }

  return (
    <>
      <header
        className={`${AlexBrush.className} flex flex-row md:justify-between w-11/12 m-auto h-24 items-center`}
      >
        <ul
          className={`text-3xl text-[#787878] hidden md:flex flex-row gap-20`}
        >
          <li className="hover:scale-110 transition-all duration-300 ease-in-out">
            <Link href={`/`} className="hover:text-[#E0C043]">Inicio</Link>
          </li>
          <li className="hover:scale-110 transition-all duration-300 ease-in-out">
            <Link href={`/pages/about_me`} className="hover:text-[#E0C043]">Sobre mi</Link>
          </li>
          <li className="hover:scale-110 transition-all duration-300 ease-in-out">
            <Link href={`/pages/services`} className="hover:text-[#E0C043]">Mis Servicios</Link>
          </li>
        </ul>

        <ul className="text-3xl text-[#ca8c8c] hidden lg:flex flex-row gap-6">
          <li>
            <Link href={`#`}>
              <Image alt="whatsapp" src={whatsapp} width={35}  className="hover:scale-110 transition-all duration-300 ease-in-out"/>
            </Link>
          </li>
          <li>
            <Link href={`#`}>
              <Image alt="whatsapp" src={instagram} width={40} className="hover:scale-110 transition-all duration-300 ease-in-out"/>
            </Link>
          </li>
          <li className="hover:scale-110 transition-all duration-300 ease-in-out">
            <Link href={`/pages/contact`} className="hover:text-[#E0C043] transition-all duration-300 ease-in-out">Contacto</Link>
          </li>
        </ul>
        <div
          onClick={changeShow}
          className="md:hidden absolute right-10 justify-self-end bg-[#DCC361] bg-opacity-40 px-3 py-1 text-2xl rounded-2xl cursor-pointer"
        >
          <MdMoreHoriz className="text-[#787878] w-8" />
        </div>
      </header>
      <div
        className={`fixed md:hidden top-0 w-screen ${
          show ? "right-0" : "right-[-100%]"
        } h-screen md:hidden transition-all duration-300 z-20`}
        id="header-mobile"
      >
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <div>
            <Image alt="logo" src={logo} width={150} />
          </div>
          <div
            onClick={changeShow}
            className="md:hidden absolute right-10 bg-[#DCC361] bg-opacity-40 px-3 py-1 text-2xl rounded-2xl cursor-pointer"
          >
            <MdMoreHoriz className="text-[#787878] w-8" />
          </div>
        </div>
        <div className="h-full mt-20">
          <ul
            className={`${AlexBrush.className} text-3xl text-[#787878] md:hidden flex flex-col gap-10 text-center`}
          >
            <li>
              <Link onClick={changeShow} href={`/`}>Inicio</Link>
            </li>
            <li>
              <Link onClick={changeShow} href={`/pages/about_me`}>Sobre mi</Link>
            </li>
            <li>
              <Link onClick={changeShow} href={`/pages/services`}>Mis Servicios</Link>
            </li>
            <li>
              <Link onClick={changeShow} href={`/pages/contact`}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
