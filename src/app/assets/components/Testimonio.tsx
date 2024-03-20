import mandala from '@/app/assets/imgs/mandala.png';
import Image from 'next/image';
import { AlexBrush } from '../fonts/AlexBrush';

export default function Testimonio() {

    return (
        <>
            <hr className='h-1 bg-[#E0C043] border-none my-6 w-9/12 m-auto md:w-7/12' />
            <section className='z-10 relative flex flex-col gap-8 md:w-6/12 m-auto w-10/12'>
                <div className='z-10 flex flex-col gap-6'>
                    <h2 className={`${AlexBrush.className} text-4xl text-[#787878] text-center`}>Experiencias</h2>
                    <div className='uppercase bg-[#D9D9D9] bg-opacity-50 flex flex-col gap-4 py-8 text-center px-4 lg:px-36 md:px-14'>
                        <h3 className='font-bold text-xl'>Maria Ines Del Valle</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <h3 className='font-bold text-xl'>Sanacion Pranica</h3>
                    </div>
                </div>
                <div className='z-10 uppercase bg-[#D9D9D9] bg-opacity-50 flex flex-col gap-4 py-8 text-center px-4 md:px-12 lg:px-36'>
                    <p>Adquiriste alguno de mis</p>
                    <p>servicios?</p>
                    <p>Contanos tu experiencia!</p>
                </div>
                <button className='z-10 cursor-pointer uppercase border-[#E0C043] border-2 w-fit px-6 py-2 m-auto'>escribe aqui</button>
                <Image src={mandala} alt="Mandala" className='md:block absolute opacity-25 mt-10 hidden' />
            </section>
        </>
    );
}