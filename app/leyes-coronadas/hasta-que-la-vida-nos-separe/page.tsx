import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function HastaQuelaVidaNosSepare() {
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
              Hasta que la vida nos separe
            </h1>
            
            <div className="text-sm text-[#666] font-semibold mb-8">
              19 de diciembre de 2024
            </div>

            <p className="text-xl text-[#333] leading-relaxed font-medium">
              Reinas y príncipes, ya no es necesario inventar una telenovela de drama para poder divorciarse de su pareja. El Congreso de Colombia aprobó una ley para separarse sin buscar excusas.
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
                Para casarse se necesitan dos, pero para separarse basta con uno. Y es que el amor, como el dinero, también se acaba. Y aunque puede sonar triste, dejar a la pareja puede ser una decisión valiente y saludable.
              </p>
              <p className="text-[#333] text-lg leading-relaxed mb-6">
                En Colombia, donde le ponen peros a todo, el divorcio solo estaba permitido si había causas como infidelidad, maltrato o abandono por parte de alguno de los dos. Gracias al Congreso de la República esa norma tan retrógrada acaba de cambiarse.
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
                  La ley agrega un numeral al artículo 154 del Código Civil, estableciendo <strong>«la sola voluntad de cualquiera de los cónyuges»</strong> como una nueva causal de divorcio.
                </p>
              </div>
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  <strong>Proceso simplificado:</strong> Cualquiera de los cónyuges puede presentar la demanda de divorcio en cualquier momento, acompañada de una propuesta que contenga las medidas para regular los efectos derivados del mismo.
                </p>
              </div>
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  <strong>Sin necesidad de justificación:</strong> Ya no es necesario demostrar causales específicas como violencia intrafamiliar, alcoholismo o dos años de no convivencia para solicitar el divorcio.
                </p>
              </div>
              <div className="border-l-4 border-[#c77dff] pl-6">
                <p className="text-[#333] text-lg leading-relaxed">
                  <strong>Protección de derechos:</strong> La ley mantiene las garantías en términos de repartición de bienes, protección al cónyuge y a los hijos.
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
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">52,000</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  parejas se casaron en 2023 en Colombia
                </p>
              </div>
              <div className="bg-[#c77dff]/10 p-6 rounded-lg text-center">
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">40,000</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  parejas se divorciaron en 2023 en Colombia
                </p>
              </div>
              <div className="bg-[#c77dff]/10 p-6 rounded-lg text-center md:col-span-2">
                <div className="text-5xl font-serif font-bold text-[#c77dff] mb-2">10-14 años</div>
                <p className="text-sm text-[#666] leading-relaxed">
                  es el promedio de tiempo que duran los matrimonios en Colombia
                </p>
              </div>
            </div>

            {/* Additional Facts */}
            <div className="space-y-4">
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Combate a la violencia intrafamiliar:</strong> Se considera una herramienta para enfrentar la violencia doméstica, al facilitar la salida de relaciones problemáticas.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Respeto a la decisión individual:</strong> La ley reconoce que si el amor se acaba y hay una decisión tomada por alguna de las personas, debe ser respetada.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <p className="text-[#333] text-base leading-relaxed">
                  <strong>Las principales causas de divorcio son:</strong> infidelidad, diferencias irreconciliables, violencia doméstica y problemas financieros.
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
              {/* Katherine Miranda */}
              <div className="bg-white border-2 border-[#f5f5f5] p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center text-4xl mb-4 mx-auto">
                  👩‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">Katherine Miranda</h3>
                <p className="text-center text-[#c77dff] text-sm uppercase tracking-wider mb-3">
                  Representante a la Cámara
                </p>
                <p className="text-center text-[#666] text-sm leading-relaxed">
                  Alianza Verde<br />
                  Abogada<br />
                  Integra la Comisión Primera
                </p>
              </div>

              {/* David Luna */}
              <div className="bg-white border-2 border-[#f5f5f5] p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-[#c77dff]/20 flex items-center justify-center text-4xl mb-4 mx-auto">
                  👨‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">David Luna</h3>
                <p className="text-center text-[#c77dff] text-sm uppercase tracking-wider mb-3">
                  Exsenador de la República
                </p>
                <p className="text-center text-[#666] text-sm leading-relaxed">
                  Cambio Radical<br />
                  Abogado<br />
                  Integraba la Comisión Primera
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
                    src="/materials/dly1.jpeg" 
                    alt="Hasta que la vida nos separe - Imagen" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80 mb-3">Imagen promocional</p>
                  <a 
                    href="/materials/dly1.jpeg" 
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

              {/* Video */}
              <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="relative aspect-video bg-black">
                  <video 
                    controls
                    className="w-full h-full"
                    preload="metadata"
                  >
                    <source src="/materials/dly2.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80 mb-3">Video promocional</p>
                  <a 
                    href="/materials/dly2.mp4" 
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
                  <source src="/materials/dly3.mp3" type="audio/mpeg" />
                  Tu navegador no soporta la reproducción de audio.
                </audio>
                <a 
                  href="/materials/dly3.mp3" 
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
