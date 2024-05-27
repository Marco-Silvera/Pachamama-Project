import React from 'react'

function ViajeAMedida() {
    return (
        <section className='relative w-full h-[1000px]'>
            <img className='w-full h-full bg-cover object-center object-cover' src="viaje-a-tu-medida.webp" alt="Machu Picchu Maravilla del mundo" />
            <div className='absolute flex flex-col gap-5 -translate-x-2/4 -translate-y-2/4 text-center text-[white] left-2/4 top-[30%]'>
                <h3 className='text-[64px]'>
                    Viaja a tu medida
                </h3>
                <p className='text-2xl'>
                    Personaliza tu viaje y descubre destinos turísticos con el sello global de SAFE TRAVELS
                </p>
                <a className='bg-[rgb(34,100,22)] text-[rgb(201,206,146)] text-[28px] uppercase w-[300px] self-center px-5 py-2.5' href="">Más Información</a>
            </div>
        </section>
    )
}

export default ViajeAMedida