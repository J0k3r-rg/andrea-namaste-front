'use client';
import { useState } from "react";
import { services } from '@/app/UI/data/services';
import CardService from '@/app/UI/components/CardServiceComponent';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function CarrouselDesktop() {

    const [current, setCurrent] = useState([0, 1, 2]);

    const next = () => {
        if (current[2] === services.length - 1) return;
        let next = current.map((item) => item + 1);
        setCurrent(next);
    }

    const prev = () => {
        if (current[0] === 0) return;
        let prev = current.map((item) => item - 1);
        setCurrent(prev);
    }

    return (
        <div className="hidden md:flex flex-row items-center">
            <div>
                <MdNavigateBefore
                    className={`text-6xl text-[#969494] cursor-pointer ${current[0] === 0 && 'hidden'}`}
                    onClick={prev}
                />
            </div>
            <div className="md:grid grid-cols-3 gap-8">
                {
                    services.map((service, index) =>
                        <CardService key={index} item={service} className={`${!current.includes(index) && 'hidden'}`} />
                    )
                }
            </div>
            <div>
                <MdNavigateNext
                    className={`text-6xl text-[#969494] cursor-pointer ${current[2] === services.length - 1 && 'hidden'}`}
                    onClick={next}
                />
            </div>
        </div>
    );
}