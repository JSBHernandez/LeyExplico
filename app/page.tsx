import Link from "next/link";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section with Purple Background */}
      <section className="min-h-screen bg-[#390050] relative flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
          {/* Main Logo and Title */}
          <div className="mb-16 animate-fade-in relative">
            <div className="flex justify-center -mb-5 relative z-10">
              <Image 
                src="/materials/SAPO 2.png" 
                alt="Sapo Logo" 
                width={144} 
                height={144}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="ley-explico-title text-[clamp(3rem,12vw,8rem)] font-bold text-white mb-6 tracking-tight leading-none drop-shadow-lg">
              LEY EXPLICO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light tracking-wide">
              Reinas y príncipes, bienvenidos al Reino de la explicación de proyectos y leyes de Colombia. 
            </p>
          </div>

          {/* Three Main Sections */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
            {/* Leyes Coronadas */}
            <Link href="/leyes-coronadas" className="group">
              <div className="bg-white/10 border-2 border-white/30 rounded-lg p-8 hover:bg-white/20 hover:border-[#00ff88] hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                  LEYES CORONADAS
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Entienda las leyes para que no coma cuento
                </p>
                <div className="mt-6 flex justify-center items-center gap-2 text-[#00ff88] font-semibold uppercase text-sm tracking-wider">
                  Explorar
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Proyectos Saltando */}
            <Link href="/proyectos-saltando" className="group">
              <div className="bg-white/10 border-2 border-white/30 rounded-lg p-8 hover:bg-white/20 hover:border-[#00ff88] hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                  PROYECTOS SALTANDO
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Conozca los proyectos que le pueden dar un salto a su vida
                </p>
                <div className="mt-6 flex justify-center items-center gap-2 text-[#00ff88] font-semibold uppercase text-sm tracking-wider">
                  Explorar
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Entre al Reinado */}
            <Link href="/entre-al-reinado" className="group">
              <div className="bg-white/10 border-2 border-white/30 rounded-lg p-8 hover:bg-white/20 hover:border-[#00ff88] hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                  ENTRE AL REINADO
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Sea una reina o un príncipe y ayúdenos a seguir conquistando
                </p>
                <div className="mt-6 flex justify-center items-center gap-2 text-[#00ff88] font-semibold uppercase text-sm tracking-wider">
                  Explorar
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Subtitle at bottom */}
          <div className="mt-20 pt-12 border-t border-white/20">
            <p className="text-white/70 text-sm md:text-base tracking-widest uppercase font-light">
              Un proyecto de grado dedicado a hacer las leyes accesibles para todos
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-subtitle font-bold mb-10 text-center text-[#390050]">
            Últimas Leyes Aprobadas
          </h2>
          <p className="text-center text-[--gray-medium] mb-12 max-w-2xl mx-auto">
            Mantente informado sobre las leyes más recientes que están cambiando el país
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Link href="/leyes-coronadas" className="group">
              <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-linear-to-br from-[#390050]/20 to-[#00ff88]/10 flex items-center justify-center">
                  <span className="text-6xl">💑</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-[#390050] transition-colors">
                    Hasta que la vida nos separe
                  </h3>
                  <p className="text-[--gray-medium] mb-4 leading-relaxed">
                    Después de nueve intentos, ya no es necesario inventar una telenovela de drama para poder divorciarse.
                  </p>
                  <div className="flex items-center gap-2 text-[#390050] font-semibold text-sm uppercase tracking-wider">
                    Leer más
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/leyes-coronadas" className="group">
              <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-linear-to-br from-[#390050]/20 to-[#00ff88]/10 flex items-center justify-center">
                  <span className="text-6xl">👶</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-[#390050] transition-colors">
                    Son niñas, no esposas
                  </h3>
                  <p className="text-[--gray-medium] mb-4 leading-relaxed">
                    Después de 17 años de intentos, el Congreso por fin prohibió el matrimonio infantil en Colombia.
                  </p>
                  <div className="flex items-center gap-2 text-[#390050] font-semibold text-sm uppercase tracking-wider">
                    Leer más
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
