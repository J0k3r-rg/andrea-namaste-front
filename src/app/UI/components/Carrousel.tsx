"use client";
import { services } from '@/app/UI/data/services';
import CardService from '@/app/UI/components/CardServiceComponent';
import {
    MdNavigateBefore,
    MdNavigateNext,
    MdOutlineNavigateBefore,
} from "react-icons/md";

import { useState } from "react";

export default function Carrousel() {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index === services.length - 1) setIndex(0);
        else setIndex(index + 1);
    };

    const prev = () => {
        if (index === 0) setIndex(services.length - 1);
        else setIndex(index - 1);
    };

    return (
        <div className="md:hidden flex flex-row items-center relative">
            <div className='absolute'>
                <MdNavigateBefore
                    className="text-6xl text-[#E0C043] cursor-pointer"
                    onClick={prev}
                />
            </div>
            <div>
                {services.map((service, i) => (
                    <CardService
                        key={i}
                        item={service}
                        className={`${index != i && "hidden"}`}
                    />
                ))}
            </div>
            <div className='absolute right-0'>
                <MdNavigateNext
                    className="text-6xl text-[#E0C043] cursor-pointer"
                    onClick={next}
                />
            </div>
        </div>
    );
}
