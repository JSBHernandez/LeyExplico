import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ProyectosSaltando() {
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
                  PROYECTOS SALTANDO
                </h1>
                <p className="text-[#666] text-sm leading-relaxed">
                  Príncipes y princesas, estos son los proyectos de ley que están en debate en el Congreso de Colombia y que podrían cambiar nuestras vidas.
                </p>
              </div>
            </aside>

            {/* Articles Section */}
            <main className="space-y-12">
              {/* Artículo 1: Una hora más de sueño */}
              <article className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr] gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto bg-[#f5f5f5]">
                    <Image 
                      src="/materials/NIÑO DURMIENDO 3.jpg" 
                      alt="Niño Durmiendo" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2 leading-tight uppercase">
                      ¡Una hora más de sueño! Adiós al madrugón escolar
                    </h2>
                    <div className="text-sm text-[#666] font-semibold mb-4">
                      En debate
                    </div>
                    <p className="text-[#333] text-base leading-relaxed mb-6">
                      Reinas y príncipes, los niños y jóvenes ya no tendrán que despertarse a la hora en la que cacarean las gallinas. En el Congreso de la República avanza un proyecto de ley que busca prohibir las clases antes de las 07: 00 a.m. <strong>E L C U E N T O</strong> Todo niño sueña con levantarse más tarde si es para ir al colegio y ese deseo puede convertirse en realidad...
                    </p>
                    <Link 
                      href="/proyectos-saltando/una-hora-mas-de-sueno"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-[#c77dff] text-white font-semibold rounded-full hover:bg-[#b565f0] transition-colors text-sm"
                    >
                      LEER MÁS
                    </Link>
                  </div>
                </div>
              </article>

            </main>
          </div>
        </div>
      </div>

      {/* Newsletter/CTA Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-[#1a1a1a]">
            Mantente informado
          </h2>
          <p className="text-[#666] text-lg mb-8">
            Los proyectos de ley nos afectan a todos. Conoce lo que está en debate en el Congreso de una manera clara, visual y profesional.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-[#c77dff] text-white font-semibold uppercase tracking-wider rounded-full hover:bg-[#b565f0] transition-colors"
          >
            Explorar más proyectos
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
