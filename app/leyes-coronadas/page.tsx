import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function LeyesCoronadas() {
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
                  LEYES CORONADAS
                </h1>
                <p className="text-[#666] text-sm leading-relaxed">
                  Príncipes y princesas, estas son las leyes más recientes que ha aprobado el Congreso de Colombia.
                </p>
              </div>
            </aside>

            {/* Articles Section */}
            <main className="space-y-12">
              {/* Artículo 1: Son niñas, no esposas */}
              <article className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr] gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto bg-[#f5f5f5]">
                    <Image 
                      src="/materials/NIÑA.png" 
                      alt="Niña" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2 leading-tight uppercase">
                      Son niñas, no esposas
                    </h2>
                    <div className="text-sm text-[#666] font-semibold mb-4">
                      6 de enero de 2025
                    </div>
                    <p className="text-[#333] text-base leading-relaxed mb-6">
                      Príncipes y reinas, después de nueve intentos, el Congreso de Colombia por fin prohibió el matrimonio infantil. <strong>E L C U E N T O</strong> Lastimosamente y para vergüenza nuestra, en Colombia era más fácil para un pelado casarse que entrar a una discoteca. Incluso, el 28% de las mujeres en el país se &apos;arrejuntan&apos;...
                    </p>
                    <Link 
                      href="/leyes-coronadas/son-ninas-no-esposas"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-[#c77dff] text-white font-semibold rounded-full hover:bg-[#b565f0] transition-colors text-sm"
                    >
                      LEER MÁS
                    </Link>
                  </div>
                </div>
              </article>

              {/* Artículo 2: Hasta que la vida nos separe */}
              <article className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr] gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto bg-[#f5f5f5]">
                    <Image 
                      src="/materials/Divorcio.png" 
                      alt="Divorcio" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2 leading-tight uppercase">
                      Hasta que la vida nos separe
                    </h2>
                    <div className="text-sm text-[#666] font-semibold mb-4">
                      19 de diciembre de 2024
                    </div>
                    <p className="text-[#333] text-base leading-relaxed mb-6">
                      Príncipes y reinas, ya no es necesario inventar una telenovela de drama para poder divorciarse de su pareja. El Congreso de Colombia aprobó una ley para separase sin buscar excusas. <strong>E L C U E N T O</strong> Para casarse se necesitan dos, pero para separase basta con uno. Y es que el amor, como...
                    </p>
                    <Link 
                      href="/leyes-coronadas/hasta-que-la-vida-nos-separe"
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

      {/* Newsletter/CTA Section - Removed morado background */}
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-[#1a1a1a]">
            NO COMA CUENTO
          </h2>
          <p className="text-[#666] text-lg mb-8">
            Conocer las leyes es bueno, entenderlas aún mejor.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-[#c77dff] text-white font-semibold uppercase tracking-wider rounded-full hover:bg-[#b565f0] transition-colors"
          >
            Explorar más leyes
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
