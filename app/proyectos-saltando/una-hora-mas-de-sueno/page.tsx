import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function UnaHoraMasDeSueno() {
  return (
    <>
      <NavBar />
      
      {/* Article Hero */}
      <article className="min-h-screen bg-white pt-24">
        {/* Header Section */}
        <div className="bg-[#f5f5f5] py-12">
          <div className="max-w-4xl mx-auto px-6">
            <Link 
              href="/proyectos-saltando"
              className="inline-flex items-center gap-2 text-[#666] hover:text-[#1a1a1a] mb-6 transition-colors"
            >
              <span>←</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Volver a Proyectos Saltando</span>
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/materials/SAPO 2.png" 
                alt="Sapo Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <span className="text-[#666] text-sm font-semibold uppercase tracking-wider">
                Proyectos Saltando
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight uppercase">
              ¡Una hora más de sueño! Adiós al madrugón escolar
            </h1>
            
            <div className="text-sm text-[#666] font-semibold mb-8">
              En debate
            </div>

            <p className="text-xl text-[#333] leading-relaxed font-medium">
              Reinas y príncipes, los niños y jóvenes ya no tendrán que despertarse a la hora en la que cacarean las gallinas. En el Congreso de la República avanza un proyecto de ley que busca prohibir las clases antes de las 07: 00 a.m.
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* El Cuento */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-6 uppercase">
              El Cuento
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#333] text-lg leading-relaxed mb-6">
                Todo niño sueña con levantarse más tarde si es para ir al colegio y ese deseo puede convertirse en realidad. Y todo gracias a que el Senado de la República aprobó en segundo debate, y con amplias mayorías, el proyecto &apos;Estudio sin Madrugón&apos;, una iniciativa que busca poner patas arriba las rutinas escolares de millones de niños y adolescentes en Colombia.
              </p>
              <p className="text-[#333] text-lg leading-relaxed mb-6">
                Y es que una de las mayores alegrías es saber que a uno le sobran unos minutitos antes de que suene la alarma, y de convertirse en ley, serían mínimo 60 minutos más en la cama, no solo para los estudiantes, sino también para los padres.
              </p>
            </div>
          </section>

          {/* ¿Qué dice la ley? */}
          <section className="mb-16 bg-[#f5f5f5] p-8 rounded-lg">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-6 uppercase">
              ¿Qué dice el proyecto?
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  Que <strong>todos los establecimientos educativos del país,</strong> tanto públicos como privados, en los niveles de educación inicial, preescolar, básica y media, tendrán prohibido iniciar las clases antes de las 07:00 a.m.
                </p>
              </div>
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  Que para no extender significativamente la hora de salida, propone <strong>reducir la duración de las clases a 45 minutos,</strong> dando autonomía a los rectores para el uso del tiempo restante.
                </p>
              </div>
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  Que esta medida busca <strong>aliviar la carga de las madres,</strong> muchas de ellas las únicas responsables del hogar, quienes deben levantarse muy temprano para alistar a sus hijos para ir al colegio.
                </p>
              </div>
            </div>
          </section>

          {/* Datos para Sapos */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-8 uppercase">
              Datos para Sapos
            </h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#c77dff]/10 p-6 rounded-lg text-center">
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">60+</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  minutos más de sueño para estudiantes y familias
                </p>
              </div>
              <div className="bg-[#c77dff]/10 p-6 rounded-lg text-center">
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">50%</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  de hogares en Colombia tienen jefatura femenina según el DANE
                </p>
              </div>
            </div>

            {/* Additional Facts */}
            <div className="space-y-4">
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Mejora en salud y rendimiento:</strong> Mejorar de manera significativa la calidad del sueño de los estudiantes impacta positivamente en su salud física, bienestar psicológico, atención, concentración y rendimiento académico.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Experiencias internacionales:</strong> Demuestran cómo estos cambios de horario benefician no solo a los estudiantes, sino también a sus familias, y más en Colombia donde, según el DANE, la jefatura de los hogares reposa en más del 50% en las mujeres.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Mayor seguridad:</strong> Entrar más tarde a estudiar puede garantizar mayor seguridad para aquellos niños y adolescentes que se desplazan a sus colegios caminando.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Estado actual:</strong> El proyecto pasa a manos de la Cámara de Representantes, donde deberá ser aprobado en dos debates: en la Comisión Sexta y en la plenaria.
                </p>
              </div>
            </div>
          </section>

          {/* Personajes Principales */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-8 uppercase">
              Personaje Principal (Autor)
            </h2>
            <div className="max-w-md mx-auto">
              {/* Alejandro Carlos Chacón */}
              <div className="bg-white border-2 border-[#f5f5f5] p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center text-4xl mb-4 mx-auto">
                  👨‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">Alejandro Carlos Chacón</h3>
                <p className="text-center text-[#c77dff] text-sm uppercase tracking-wider mb-3">
                  Senador de la República
                </p>
                <p className="text-center text-[#666] text-sm leading-relaxed">
                  Partido Liberal<br />
                  Abogado<br />
                  Integra la Comisión Primera
                </p>
              </div>
            </div>
          </section>

          {/* Combo para la prensa */}
          <section className="bg-[#390050] text-white p-8 rounded-lg">
            <h2 className="font-serif text-2xl font-bold mb-6 uppercase">
              Combo para la prensa
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              Material multimedia disponible para descarga y uso editorial. Incluye imágenes de alta calidad y contenido audiovisual.
            </p>

            {/* Multimedia Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Imagen 1 */}
              <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image 
                    src="/materials/madrugon2.jpeg" 
                    alt="Una hora más de sueño - Imagen 1" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80 mb-3">Imagen promocional 1</p>
                  <a 
                    href="/materials/madrugon2.jpeg" 
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#390050] font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar imagen
                  </a>
                </div>
              </div>

              {/* Imagen 2 */}
              <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image 
                    src="/materials/madrugon3.jpeg" 
                    alt="Una hora más de sueño - Imagen 2" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80 mb-3">Imagen promocional 2</p>
                  <a 
                    href="/materials/madrugon3.jpeg" 
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#390050] font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar imagen
                  </a>
                </div>
              </div>
            </div>

            {/* Video - Full Width */}
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative aspect-video bg-black">
                <video 
                  controls
                  className="w-full h-full"
                  preload="metadata"
                >
                  <source src="/materials/madrugon1.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
              <div className="p-4">
                <p className="text-sm text-white/80 mb-3">Video promocional - Material audiovisual</p>
                <a 
                  href="/materials/madrugon1.mp4" 
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#390050] font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar video
                </a>
              </div>
            </div>

            {/* Audio */}
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm mt-6">
              <div className="p-4">
                <p className="text-sm text-white/80 mb-3">Audio - Material sonoro</p>
                <audio 
                  controls
                  className="w-full mb-3"
                  preload="metadata"
                  style={{height: '40px'}}
                >
                  <source src="/materials/madrugon4.mp3" type="audio/mpeg" />
                  Tu navegador no soporta la reproducción de audio.
                </audio>
                <a 
                  href="/materials/madrugon4.mp3" 
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#390050] font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar audio
                </a>
              </div>
            </div>

            {/* Notas adicionales */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/70 text-sm leading-relaxed">
                <strong>Nota:</strong> Este material multimedia no es de nuestra autoría. Los créditos y derechos corresponden a sus respectivos autores y/o publicadores.
              </p>
            </div>
          </section>

        </div>

        {/* Related Articles */}
        <section className="bg-[#f5f5f5] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center text-[#1a1a1a]">
              Más proyectos en debate
            </h2>
            <div className="text-center">
              <Link 
                href="/proyectos-saltando"
                className="inline-block px-8 py-3 bg-[#c77dff] text-white font-semibold uppercase tracking-wider rounded-full hover:bg-[#b565f0] transition-colors"
              >
                Ver todos los proyectos
              </Link>
            </div>
          </div>
        </section>

      </article>

      <Footer />
    </>
  );
}
