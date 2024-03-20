

export default function Footer() {
    return (
        <footer className="mt-10">
            <hr className='h-1 bg-[#E0C043] border-none my-6 w-9/12 m-auto md:w-7/12' />
            <div className="w-11/12 md:w-8/12 m-auto text-center text-xl mt-5 md:mt-20 mb-5 font-bold text-[#969494]">
                <p>2024, Todos los derechos reservados</p>
                <p className="flex flex-col justify-center md:flex-row">
                    <p>Diseno: Carla Gonzalez</p>
                    <p>Desarrollo: Mauricio Maldonado</p>
                </p>
            </div>
        </footer>
    );
}