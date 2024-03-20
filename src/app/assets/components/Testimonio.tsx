import mandala from '@/app/assets/imgs/mandala.png';
import Image from 'next/image';

export default function Testimonio() {

    return (
        <section className='relative flex flex-col w-6/12 m-auto'>
            <Image src={mandala} alt="Mandala" className='absolute opacity-25 mt-10' />
            <div className='uppercase'>
                <h2>Experiencias</h2>
                <div>
                    <h3>Maria Ines Del Valle</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                <h3>Sanacion Pranica</h3>
            </div>
            <div className='uppercase'>
                <p>Adquiriste alguno de mis</p>
                <p>servicios?</p>
                <p>Contanos tu experiencia!</p>
                <button>escribe aqui</button>
            </div>
        </section>
    );
}