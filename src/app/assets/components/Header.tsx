"use client";
import { useState } from "react";
import whatsapp from "@/app/assets/imgs/whatsapp.png";
import instagram from "@/app/assets/imgs/instagram.png";
import logo from "@/app/assets/imgs/logo.png";
import { Alex_Brush } from "next/font/google";
import { MdMoreHoriz } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const inter = Alex_Brush({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header
        className={`${inter.className} flex flex-row md:justify-between w-11/12 m-auto h-24 items-center`}
      >
        <ul
          className={`text-3xl text-[#787878] hidden md:flex flex-row gap-20`}
        >
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
              <Image alt="whatsapp" src={whatsapp} width={35} />
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
        <div
          onClick={() => setShow(true)}
          className="md:hidden absolute right-10 justify-self-end bg-[#DCC361] bg-opacity-40 px-3 py-1 text-2xl rounded-2xl cursor-pointer"
        >
          <MdMoreHoriz className="text-[#787878] w-8" />
        </div>
      </header>
      <div
        className={`fixed md:hidden top-0 w-screen ${
          show ? "right-0" : "right-[-100%]"
        } h-screen md:hidden transition-all duration-300`}
        id="header-mobile"
      >
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <div>
            <Image alt="logo" src={logo} width={150} />
          </div>
          <div
            onClick={() => setShow(false)}
            className="md:hidden absolute right-10 bg-[#DCC361] bg-opacity-40 px-3 py-1 text-2xl rounded-2xl cursor-pointer"
          >
            <MdMoreHoriz className="text-[#787878] w-8" />
          </div>
        </div>
        <div className="h-full mt-20">
          <ul
            className={`${inter.className} text-5xl text-[#787878] font-bold md:hidden flex flex-col gap-10 text-center`}
          >
            <li>
              <Link href={`#`}>Inicio</Link>
            </li>
            <li>
              <Link href={`#`}>Sobre mi</Link>
            </li>
            <li>
              <Link href={`#`}>Mis Servicios</Link>
            </li>
            <li>
              <Link href={`#`}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
