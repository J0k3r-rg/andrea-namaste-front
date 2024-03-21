import mandala from '@/app/UI/assets/imgs/mandala.png';
import Image from 'next/image';
import { AlexBrush } from '@/app/UI/fonts/AlexBrush';
import CarrouselComments from './CarrouselComments';

export default function Testimonio() {

    return (
        <>
            <hr className='h-1 bg-[#E0C043] border-none my-6 w-9/12 m-auto md:w-7/12' />
            <section className='z-10 flex flex-col gap-8 lg:w-7/12 md:w-9/12 m-auto w-11/12'>
                <div className='relative md:flex justify-center hidden'>
                    <Image src={mandala} alt="Mandala" className='w-10/12 absolute opacity-25 mt-10' />
                </div>
                <div className='z-10 flex flex-col gap-6'>
                    <h2 className={`${AlexBrush.className} text-5xl text-[#787878] text-center`}>Experiencias</h2>
                    <CarrouselComments />
                </div>
                <div className='z-10 text-lg md:text-xl uppercase font-bold bg-[#D9D9D9] bg-opacity-50 flex flex-col gap-4 py-8 text-center px-4 md:px-12 lg:px-36'>
                    <p>¿Adquiriste alguno de mis</p>
                    <p>servicios?</p>
                    <p>Contanos tu experiencia!</p>
                </div>
                <button className='z-10 cursor-pointer hover:scale-110 hover:border-[#a08f4a] transition-all duration-300 ease-in-out uppercase border-[#E0C043] border-2 w-fit px-6 py-2 m-auto'>escribe aqui</button>
            </section>
        </>
    );
}