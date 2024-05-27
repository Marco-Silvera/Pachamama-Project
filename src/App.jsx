
function App() {
  return (
    <div className=''>
      <section className='relative w-full h-[800px]'>
        <img className='w-full h-full bg-cover object-center object-cover' src="machu-picchu.webp" alt="Machu Picchu Maravilla del mundo" />
        <a className='absolute bg-[rgb(34,100,22)] text-[rgb(201,206,146)] text-[32px] px-5 py-2.5 right-[200px] bottom-[100px]' href="">Ver circuitos</a>
      </section>

      <section className='w-full flex gap-[200px] justify-center items-center h-[500px] p-20'>
        <div className='flex flex-col items-center'>
          <h2 className='text-[40px]'>¿Por qué elegir</h2>
          <h2 className='text-[80px] text-[#226428]'>Pachamama</h2>
          <h2 className='text-[64px] text-[#C9CE92]'>Turismo?</h2>
        </div>
        <div className='text-2xl'>
          <p>
            Pertenecemos a la familia CIAP, una organización de artesanos <br /> peruanos que apoya al comercio justo y la economía social.
          </p>
          <ul className='list-inside'>
            <li className='indent-[30px]'>
              Nuestra experiencia en el sector del turismo alternativo.
            </li>
            <li className='indent-[30px]'>
              Promoveremos un turismo responsable, sostenible y alternativo en Perú.
            </li>
            <li className='indent-[30px]'>
              Buscamos involucrar al viajero responsable en el desarrollo local de nuestros pueblos.
            </li>
          </ul>
        </div>
      </section>

      <section className="relative inline-block w-full h-[600px] before:content-[''] before:absolute before:w-full before:h-full before:bg-[black] before:opacity-50 before:pointer-events-none before:left-0 before:top-0">
        <img src="amazonas-bote.webp" alt="Amazonas en bote" className='w-full h-full bg-cover object-center object-cover' />
        <div className='absolute w-full h-full flex gap-[100px] justify-center items-center text-[white] p-5 left-0 top-0'>
          <div className='text-center'>
            <h3 className='text-6xl'>
              Compromiso Sostenible
            </h3>
            <p className='text-[32px]'>
              No dejes para mañana el viaje que <br /> puedes hacer hoy, conoce nuestros <br /> más atractivos circuitos.
            </p>
          </div>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3ETVsjQngRQ?si=qrZMIOTf-lJcd_x_&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
      </section>

      <section className='flex flex-col items-center gap-20 p-20'>
        <h3 className='text-6xl uppercase'>
          Circuitos Destacados
        </h3>
        <section className='flex gap-10'>
          <article className='relative w-[380px] h-[600px]'>
            <a href="">
              <img className="w-full h-full bg-cover object-center object-cover" src="circuito-1.webp" alt="Circuito1" />
              <div className='absolute bg-[#226428] text-[#C9CE92] text-[28px] w-full text-center p-2.5 top-[80%]'>
                <h3 className='Circuits-overlay-title'>
                  Circuito1
                </h3>
              </div>
            </a>
          </article>
          <article className='relative w-[380px] h-[600px]'>
            <a href="">
              <img className="w-full h-full bg-cover object-center object-cover" src="circuito-1.webp" alt="Circuito1" />
              <div className='absolute bg-[#226428] text-[#C9CE92] text-[28px] w-full text-center p-2.5 top-[80%]'>
                <h3 className='Circuits-overlay-title'>
                  Circuito2
                </h3>
              </div>
            </a>
          </article>
          <article className='relative w-[380px] h-[600px]'>
            <a href="">
              <img className="w-full h-full bg-cover object-center object-cover" src="circuito-1.webp" alt="Circuito1" />
              <div className='absolute bg-[#226428] text-[#C9CE92] text-[28px] w-full text-center p-2.5 top-[80%]'>
                <h3 className='Circuits-overlay-title'>
                  Circuito3
                </h3>
              </div>
            </a>
          </article>
        </section>
      </section>

      <section className='flex flex-col items-center gap-20 p-20'>
        <h3 className='text-6xl uppercase'>
          Experiencias Alternativas
        </h3>
        <section className='flex gap-10'>
          <article className='relative w-[380px] h-[600px]'>
            <a href="">
              <img className="w-full h-full bg-cover object-center object-cover" src="circuito-1.webp" alt="Aternativa1" />
              <div className='absolute bg-[#226428] text-[#C9CE92] text-[28px] w-full text-center p-2.5 top-[80%]'>
                <h3 className='Circuits-overlay-title'>
                  Alternativa1
                </h3>
              </div>
            </a>
          </article>
          <article className='relative w-[380px] h-[600px]'>
            <a href="">
              <img className="w-full h-full bg-cover object-center object-cover" src="circuito-1.webp" alt="Aternativa1" />
              <div className='absolute bg-[#226428] text-[#C9CE92] text-[28px] w-full text-center p-2.5 top-[80%]'>
                <h3 className='Circuits-overlay-title'>
                  Alternativa2
                </h3>
              </div>
            </a>
          </article>
          <article className='relative w-[380px] h-[600px]'>
            <a href="">
              <img className="w-full h-full bg-cover object-center object-cover" src="circuito-1.webp" alt="Aternativa1" />
              <div className='absolute bg-[#226428] text-[#C9CE92] text-[28px] w-full text-center p-2.5 top-[80%]'>
                <h3 className='Circuits-overlay-title'>
                  Alternativa3
                </h3>
              </div>
            </a>
          </article>
        </section>
      </section>

      <section className='relative w-full h-[600px] before:content-[""] before:absolute before:w-full before:h-full before:bg-[black] before:opacity-60 before:pointer-events-none before:left-0 before:top-0'>
        <img className='w-full h-full bg-cover object-center object-cover' src="fondo-testimonio.webp" alt="Machu Picchu Maravilla del mundo" />
        <div className='absolute w-full h-full flex gap-[100px] justify-center items-center text-[white] p-5 left-0 top-0'>
          <div className='text-center'>
            <h3 className='text-6xl'>
              Testimonios
            </h3>
            <p className='image-container-description'>
              Mucho de los turistas quedaron <br /> fascinados, nos cuentan sus experiencias.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-2xl text-center'>
              Tout au long du séjour, nous avons apprécié la <br /> qualite et les compétences de nos guides ainsi que <br /> le professionnalisme de PACHAMAMA, petite <br /> structure souple qui sait s’adapter aux désirs de <br /> ses clients et leur proposer un programme riche et <br /> passionnant.
            </p>
            <h3 className='text-[32px] text-center'>
              Christine GROS
            </h3>
          </div>
        </div>
      </section>
    </div >
  )
}

export default App
