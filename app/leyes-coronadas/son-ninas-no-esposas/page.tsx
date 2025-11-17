import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function SonNinasNoEsposas() {
  return (
    <>
      <NavBar />
      
      {/* Article Hero */}
      <article className="min-h-screen bg-white pt-24">
        {/* Header Section */}
        <div className="bg-[#f5f5f5] py-12">
          <div className="max-w-4xl mx-auto px-6">
            <Link 
              href="/leyes-coronadas"
              className="inline-flex items-center gap-2 text-[#666] hover:text-[#1a1a1a] mb-6 transition-colors"
            >
              <span>←</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Volver a Leyes Coronadas</span>
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
                Leyes Coronadas
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight uppercase">
              Son niñas, no esposas
            </h1>
            
            <div className="text-sm text-[#666] font-semibold mb-8">
              6 de enero de 2025
            </div>

            <p className="text-xl text-[#333] leading-relaxed font-medium">
              Reinas y príncipes, después de nueve intentos, el Congreso de Colombia por fin coronó una ley que la ciudadanía estaba pidiendo a gritos: prohibir el matrimonio infantil.
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
                Lastimosamente y para vergüenza nuestra, en Colombia era más fácil para un pelado casarse que entrar a una discoteca. Incluso, el 28% de las mujeres en el país se &apos;arrejuntan&apos; antes de tener cédula. Por eso, en un hecho histórico y que aplaudimos, la plenaria del Senado de la República aprobó en último debate un proyecto de ley que establece que los matrimonios y las uniones maritales solo podrá hacerse entre o con mayores de 18 años.
              </p>
            </div>
          </section>

          {/* ¿Qué dice la ley? */}
          <section className="mb-16 bg-[#f5f5f5] p-8 rounded-lg">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-6 uppercase">
              ¿Qué dice la ley?
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  <strong>Cambia la legislación:</strong> es decir, que tumba las normas creadas en el Código Civil de 1887, por lo que ningún notario podrá casar a un menor de edad.
                </p>
              </div>
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  <strong>Ordena a los gobernantes</strong> a diseñar estrategias de prevención y a crear proyectos de vida, para evitar que los niños y adolescentes sean obligados o se les meta en la cabeza la idea de casarse a una temprana edad.
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
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">17</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  años duraron los HP&apos;s (Honorables Parlamentarios) intentando prohibir el matrimonio infantil en Colombia
                </p>
              </div>
              <div className="bg-[#c77dff]/10 p-6 rounded-lg text-center">
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">14</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  años era la edad mínima permitida desde 2009 para contraer matrimonio en Colombia
                </p>
              </div>
              <div className="bg-[#c77dff]/10 p-6 rounded-lg text-center">
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">20°</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  puesto que ocupa Colombia en la lista de países con mayores registros de niñas casadas antes de los 15 años
                </p>
              </div>
              <div className="bg-[#c77dff]/10 p-6 rounded-lg text-center">
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">28%</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  de las mujeres en Colombia se &apos;arrejuntan&apos; antes de tener cédula
                </p>
              </div>
            </div>

            {/* Additional Facts */}
            <div className="space-y-4">
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  ✓ <strong>Sí, tranquilos,</strong> la ley cobijará a las comunidades indígenas, donde más se registran este tipo de casos.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Algunas de las consecuencias del matrimonio infantil son:</strong> alto riesgo de sufrir violencia doméstica, abusos, y relaciones sexuales forzadas; mayor probabilidad de tener un embarazo infantil; desescolarización en el sistema educativo; y afectaciones en la salud mental.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Los departamentos con más matrimonios donde había una menor de 18 años son:</strong> Antioquia, Cundinamarca, Tolima y Valle del Cauca.
                </p>
              </div>
            </div>
          </section>

          {/* Personajes Principales */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-8 uppercase">
              Personajes Principales (Autores)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Jennifer Pedraza */}
              <div className="bg-white border-2 border-[#f5f5f5] p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center text-4xl mb-4 mx-auto">
                  👩‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">Jennifer Pedraza</h3>
                <p className="text-center text-[#c77dff] text-sm uppercase tracking-wider mb-3">
                  Representante a la Cámara
                </p>
                <p className="text-center text-[#666] text-sm leading-relaxed">
                  Partido Dignidad<br />
                  Economista<br />
                  Integra la Comisión Primera
                </p>
              </div>

              {/* Alexandra Vásquez */}
              <div className="bg-white border-2 border-[#f5f5f5] p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center text-4xl mb-4 mx-auto">
                  👩‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">Alexandra Vásquez</h3>
                <p className="text-center text-[#c77dff] text-sm uppercase tracking-wider mb-3">
                  Representante a la Cámara
                </p>
                <p className="text-center text-[#666] text-sm leading-relaxed">
                  Pacto Histórico<br />
                  Docente de Química<br />
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
                    src="/materials/snne1.jpeg" 
                    alt="Son niñas no esposas - Imagen 1" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80 mb-3">Imagen promocional 1</p>
                  <a 
                    href="/materials/snne1.jpeg" 
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
                    src="/materials/snne2.jpeg" 
                    alt="Son niñas no esposas - Imagen 2" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80 mb-3">Imagen promocional 2</p>
                  <a 
                    href="/materials/snne2.jpeg" 
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

            {/* Video */}
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative aspect-video bg-black">
                <video 
                  controls
                  className="w-full h-full"
                  preload="metadata"
                >
                  <source src="/materials/snne3.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
              <div className="p-4">
                <p className="text-sm text-white/80 mb-3">Video promocional - Material audiovisual</p>
                <a 
                  href="/materials/snne3.mp4" 
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
              Más leyes coronadas
            </h2>
            <div className="text-center">
              <Link 
                href="/leyes-coronadas"
                className="inline-block px-8 py-3 bg-[#c77dff] text-white font-semibold uppercase tracking-wider rounded-full hover:bg-[#b565f0] transition-colors"
              >
                Ver todas las leyes
              </Link>
            </div>
          </div>
        </section>

      </article>

      <Footer />
    </>
  );
}
