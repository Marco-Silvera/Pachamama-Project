import React from 'react'

function Footer() {
    return (
        <footer className='bg-[#226428] text-white p-10 flex flex-col justify-center items-center'>
            <section className='flex justify-between flex-wrap w-[1200PX] px-10 border-b-[1px]'>
                <article className='flex flex-col'>
                    <h4 className='text-2xl'>
                        Nuestra Empresa
                    </h4>
                    <ul className='flex flex-col indent-5'>
                        <li className=''><a className='text-base text-white' href="">Inicio</a></li>
                        <li className=''><a className='text-base text-white' href="">Nosotros</a></li>
                        <li className=''><a className='text-base text-white' href="">Circuitos</a></li>
                        <li className=''><a className='text-base text-white' href="">Testimonios</a></li>
                        <li className=''><a className='text-base text-white' href="">Noticias</a></li>
                        <li className=''><a className='text-base text-white' href="">Contacto</a></li>
                    </ul>
                </article>

                <article className='flex flex-col'>
                    <h4 className='text-2xl'>
                        Nuestros Tours
                    </h4>
                    <ul className='flex flex-col indent-5'>
                        <li className=''><a className='text-base text-white' href="">A lo largo de los Andes</a></li>
                        <li className=''><a className='text-base text-white' href="">Aventura Inca</a></li>
                        <li className=''><a className='text-base text-white' href="">Del Pacífico al Amazonas</a></li>
                        <li className=''><a className='text-base text-white' href="">Corazón del Imperio Inca</a></li>
                        <li className=''><a className='text-base text-white' href="">Esencia del Perú</a></li>
                        <li className=''><a className='text-base text-white' href="">Panorama Peruano</a></li>
                        <li className=''><a className='text-base text-white' href="">Perú - Bolivia</a></li>
                        <li className=''><a className='text-base text-white' href="">Tesoros del Norte</a></li>
                    </ul>
                </article>

                <article className='flex flex-col'>
                    <h4 className='text-2xl'>
                        Otras Experiencias
                    </h4>
                    <ul className='flex flex-col indent-5'>
                        <li className=''><a className='text-base text-white' href="">Circuitos</a></li>
                        <li className=''><a className='text-base text-white' href="">Nosotros</a></li>
                        <li className=''><a className='text-base text-white' href="">Inicio</a></li>
                        <li className=''><a className='text-base text-white' href="">Testimonios</a></li>
                        <li className=''><a className='text-base text-white' href="">Noticias</a></li>
                        <li className=''><a className='text-base text-white' href="">Contacto</a></li>
                    </ul>
                </article>

                <article className='flex-col'>
                    <h4 className='text-2xl'>
                        Contacto
                    </h4>
                    <ul className='flex flex-col indent-5'>
                        <li className=''><a className='text-base text-white' href="">Central: +51 981 310 819</a></li>
                        <li className=''><a className='text-base text-white' href="">Whatsapp: +51 981 310 819</a></li>
                        <li className=''><a className='text-base text-white' href="">info@pachamamaturismo.org</a></li>
                        <li className=''><a className='text-base text-white' href=""><p>Jr. Inca Garcilazo De La Vega 496,</p> <br /><p> San Martín de Porres</p></a></li>
                        <li className='self-center'><a className='text-base text-white flex flex-col items-center' href="">
                            <img className='h-12' src="libro-reclamaciones.webp" alt="Libro de reclamaciones" />
                            <p>Libro de reclamaciones</p>
                        </a></li>
                    </ul>
                </article>
            </section>
            <section className='p-10'>
                <article>
                    <p className=''>
                        Copyright © 2024 Todos los derechos reservados / Pachamama Turismo
                    </p>
                </article>
                <article className=''>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                </article>
            </section>
        </footer>
    )
}

export default Footer