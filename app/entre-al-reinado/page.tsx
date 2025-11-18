import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function EntreAlReinado() {
  return (
    <>
      <NavBar />
      
      {/* Main Content with Sidebar */}
      <div className="min-h-screen bg-[#f5f5f5] pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Image 
                    src="/materials/SAPO 2.png" 
                    alt="Sapo Logo" 
                    width={50} 
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h1 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                  ENTRE AL REINADO
                </h1>
                <p className="text-[#666] text-sm leading-relaxed">
                  Conoce quien está detrás de Ley Explico, el reino de la explicación de proyectos y leyes de Colombia.
                </p>
              </div>
            </aside>

            {/* Main Content */}
            <main className="space-y-12">
              
              {/* ¿Qué carajos es Ley Explico? */}
              <section className="bg-white shadow-md rounded-lg p-8">
                <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-6 uppercase">
                  ¿Qué carajos es Ley Explico?
                </h2>
                <p className="text-[#333] text-base leading-relaxed mb-4">
                  Somos un medio nativo digital que nacimos postpandemia tras las dificultades para acceder a la información en el Congreso.
                </p>
                <p className="text-[#333] text-base leading-relaxed">
                  Este proyecto busca suplir dos necesidades: hablarles a los ciudadanos con un lenguaje común sobre las leyes que le hacen más fácil, o más difícil, sus vidas; y ofrecerles a los periodistas, y demás chismosos, el material de los proyectos y las iniciativas que transitan y se aprueban en el legislativo.
                </p>
              </section>

              {/* ¿Cómo queremos incidir? */}
              <section className="bg-white shadow-md rounded-lg p-8">
                <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-6 uppercase">
                  ¿Cómo queremos incidir?
                </h2>
                <p className="text-[#333] text-base leading-relaxed mb-4">
                  Alfabetizar a los colombianos sobre el maravilloso reino de las leyes. Que no coman cuento, o que sí se van a tragar el sapo, sepan a qué sabe.
                </p>
                <p className="text-[#333] text-base leading-relaxed mb-4">
                  Si los ciudadanos conocen y entienden las normas podrán tomar mejores decisiones.
                </p>
                <p className="text-[#333] text-base leading-relaxed">
                  Hacerle la vida más fácil a los periodistas que cubren en el Congreso y por qué no a los jefes de prensa del legislativo.
                </p>
              </section>

              {/* Tomémonos un tinto */}
              <section className="bg-white shadow-md rounded-lg p-8">
                <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-6 uppercase">
                  Tomémonos un tinto, seamos amigos
                </h2>
                <p className="text-[#333] text-base leading-relaxed mb-4">
                  Venga que sí es pa&apos; eso. Necesitamos de su ayuda para mantenernos y seguir creciendo.
                </p>
                <p className="text-[#333] text-base leading-relaxed mb-4">
                  Primero que todo, suscríbase gratis a nuestra newsletter aquí.
                </p>
                <p className="text-[#333] text-base leading-relaxed mb-6">
                  Recibimos donaciones, pautas publicitarias, trabajo patrocinado, realizamos talleres y eventos. Si está interesado, conversemos en <a href="mailto:leyexplico@gmail.com" className="text-[#c77dff] hover:underline font-semibold">leyexplico@gmail.com</a>.
                </p>
                
                {/* Aliados */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-[#333] text-base font-semibold mb-6">
                    Estos son algunos de nuestros aliados:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg">
                      <Image 
                        src="/materials/partner1.png" 
                        alt="Aliado 1" 
                        width={120} 
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg">
                      <Image 
                        src="/materials/partner2.png" 
                        alt="Aliado 2" 
                        width={120} 
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg">
                      <Image 
                        src="/materials/partner3.jpg" 
                        alt="Aliado 3" 
                        width={120} 
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg">
                      <Image 
                        src="/materials/partner4.png" 
                        alt="Aliado 4" 
                        width={120} 
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* El Equipo */}
              <section className="bg-white shadow-md rounded-lg p-8">
                <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-8 uppercase text-center">
                  La Autora
                </h2>
                <div className="max-w-md mx-auto">
                  {/* Autora */}
                  <div className="bg-[#f5f5f5] p-8 rounded-lg text-center">
                    <div className="w-32 h-32 rounded-full mb-6 mx-auto overflow-hidden">
                      <Image 
                        src="/fotocynthia.jpeg" 
                        alt="Cynthia Pineda" 
                        width={128} 
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-[#1a1a1a]">Cynthia Pineda</h3>
                    <p className="text-[#c77dff] text-sm uppercase tracking-wider mb-4 font-semibold">
                      Creadora de Ley Explico
                    </p>
                    <p className="text-[#666] text-base leading-relaxed mb-4">
                      Maestría en Comunicación Digital de la Universidad de La Sabana.
                    </p>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Comunicadora Social, especialista en Marketing Político. Este proyecto nació como trabajo de grado para la Maestría en Comunicación Digital de la Universidad de La Sabana.
                    </p>
                  </div>
                </div>
              </section>

              {/* Síguenos en Redes Sociales */}
              <section className="bg-white shadow-md rounded-lg p-8">
                <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-6 uppercase text-center">
                  Síguenos en Redes Sociales
                </h2>
                <p className="text-[#666] text-base mb-8 leading-relaxed text-center">
                  Mantente al día con las últimas noticias del Congreso, análisis de leyes y contenido exclusivo en nuestras redes sociales.
                </p>

                <div className="flex justify-center gap-8 flex-wrap">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/leyexplico?igsh=MXNkbzV1eWhzYmJsZg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center transition-all group-hover:bg-[#c77dff] group-hover:scale-110 mx-auto">
                      <svg className="w-8 h-8 text-[#1a1a1a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#666] group-hover:text-[#c77dff]">
                      Instagram
                    </p>
                  </a>

                  {/* X (Twitter) */}
                  <a 
                    href="https://x.com/cynthiapinedah?s=21" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center transition-all group-hover:bg-[#c77dff] group-hover:scale-110 mx-auto">
                      <svg className="w-8 h-8 text-[#1a1a1a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#666] group-hover:text-[#c77dff]">
                      X
                    </p>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center transition-all group-hover:bg-[#c77dff] group-hover:scale-110 mx-auto">
                      <svg className="w-8 h-8 text-[#1a1a1a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#666] group-hover:text-[#c77dff]">
                      Facebook
                    </p>
                  </a>

                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@tiesaymaja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center transition-all group-hover:bg-[#c77dff] group-hover:scale-110 mx-auto">
                      <svg className="w-8 h-8 text-[#1a1a1a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#666] group-hover:text-[#c77dff]">
                      TikTok
                    </p>
                  </a>
                </div>
              </section>

              {/* Información Académica */}
              <section className="bg-white shadow-md rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[#1a1a1a]">Trabajo de Grado</h3>
                <p className="text-[#666] mb-2 text-base">
                  Universidad de La Sabana / Maestría en Comunicación Digital
                </p>
                <p className="text-sm text-[#666]">
                  Año 2025
                </p>
              </section>

            </main>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-[#1a1a1a]">
            ¿Quieres saber más?
          </h2>
          <p className="text-[#666] text-lg mb-8">
            Este es un proyecto de grado en constante evolución. Si tienes sugerencias, comentarios o quieres colaborar con nosotros, ¡nos encantaría escucharte!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contacto@leyexplico.com" 
              className="inline-block px-8 py-3 bg-[#c77dff] text-white font-semibold uppercase tracking-wider rounded-full hover:bg-[#b565f0] transition-colors"
            >
              Contáctanos
            </a>
            <Link 
              href="/" 
              className="inline-block px-8 py-3 border-2 border-[#c77dff] text-[#c77dff] font-semibold uppercase tracking-wider rounded-full hover:bg-[#c77dff] hover:text-white transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
