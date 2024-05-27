import React from 'react'

function Header() {
    return (
        <header className='bg-[white] h-[70px] flex justify-center items-center gap-[220px] sticky z-[1] top-0'>
            <a href="">
                <img className='h-[50px]' src="logo.webp" alt="Logo Pachamama Turismo" />
            </a>
            <div className='flex items-center gap-5'>
                <ul className='flex gap-5'>
                    <li><a className='text-[rgb(34,100,40)] text-base font-medium' href="">Inicio</a></li>
                    <li><a className='text-[rgb(34,100,40)] text-base font-medium' href="">Nosotros</a></li>
                    <li><a className='text-[rgb(34,100,40)] text-base font-medium' href="">Circuitos</a></li>
                    <li><a className='text-[rgb(34,100,40)] text-base font-medium' href="">Testimonios</a></li>
                    <li><a className='text-[rgb(34,100,40)] text-base font-medium' href="">Noticias</a></li>
                    <li><a className='text-[rgb(34,100,40)] text-base font-medium' href="">Contacto</a></li>
                </ul>
                <div className='flex gap-2.5'>
                    <a href="">
                        <img className='h-10' src="españa.webp" alt="Bandera Española" />
                    </a>
                    <a href="">
                        <img className='h-10' src="francia.webp" alt="Bandera Francesa" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header