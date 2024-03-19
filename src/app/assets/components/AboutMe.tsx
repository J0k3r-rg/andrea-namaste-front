import Image from "next/image";
import { Alex_Brush } from "next/font/google";
import hoja from "@/app/assets/imgs/hoja-dorada.png";
import meAbout from "@/app/assets/imgs/me-about.png";

const inter = Alex_Brush({ weight: "400", subsets: ["latin"] });

export default function AboutMeSection() {
  return (
    <section className="bg-[#ffffff] w-full ">
      <Image
        src={hoja}
        width={200}
        alt="image-hoja"
        className=" absolute ml-10"
      />
      <div className="w-10/12 m-auto flex flex-row py-12 items-center">
        <p className="w-7/12 text-2xl text-center text-[#969494] uppercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="w-5/12">
          <h2
            className={`${inter.className} text-5xl text-center mb-2 text-[#787878]`}
          >
            Sobre mi
          </h2>
          <Image
            src={meAbout}
            alt="image-me-about"
            className="w-[90%] m-auto"
          />
        </div>
      </div>
    </section>
  );
}
