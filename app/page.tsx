import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <Hero 
        title="Ley Explico"
        subtitle="Reinas y príncipes, bienvenidos a la revista digital que explica las leyes del Congreso de Colombia de manera clara y visual."
        size="large"
      />

      {/* Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-subtitle font-bold mb-8">
            El Congreso explicado para todos
          </h2>
          <p className="text-body text-[--gray-medium] leading-relaxed max-w-3xl mx-auto">
            Un proyecto de grado dedicado a transformar la información legislativa en historias 
            comprensibles y visuales. Descubre las leyes aprobadas, los proyectos en curso y 
            conoce a quienes hacen posible este espacio.
          </p>
        </div>
      </section>

      {/* Main Cards Grid */}
      <section className="py-16 px-6 bg-[--gray-light]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Leyes Coronadas"
              description="Descubre las leyes que ya fueron aprobadas por el Congreso de Colombia. Historias de cambio que impactan nuestra sociedad."
              link="/leyes-coronadas"
              tag="Aprobadas"
            />
            <Card
              title="Proyectos Saltando"
              description="Conoce los proyectos de ley que están avanzando en el Congreso. El futuro de nuestra legislación se escribe hoy."
              link="/proyectos-saltando"
              tag="En progreso"
            />
            <Card
              title="Entre al Reinado"
              description="Conoce el equipo detrás de este proyecto y síguenos en nuestras redes sociales para más contenido sobre el Congreso."
              link="/entre-al-reinado"
              tag="Equipo"
            />
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-subtitle font-bold mb-12 text-center">
            Últimas leyes aprobadas
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <article className="group">
              <div className="mb-6 overflow-hidden">
                <div className="aspect-video bg-linear-to-br from-[--accent]/20 to-[--accent]/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="text-6xl">💑</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-[--accent] transition-colors">
                Hasta que la vida nos separe
              </h3>
              <p className="text-[--gray-medium] mb-4 leading-relaxed">
                Después de nueve intentos, ya no es necesario inventar una telenovela de drama para poder divorciarse. 
                El Congreso aprobó una ley para separarse sin buscar excusas.
              </p>
              <a href="/leyes-coronadas" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[--foreground] hover:text-[--accent] transition-colors">
                Leer más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>

            <article className="group">
              <div className="mb-6 overflow-hidden">
                <div className="aspect-video bg-linear-to-br from-[--accent]/20 to-[--accent]/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="text-6xl">👶</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-[--accent] transition-colors">
                Son niñas, no esposas
              </h3>
              <p className="text-[--gray-medium] mb-4 leading-relaxed">
                Después de 17 años de intentos, el Congreso por fin prohibió el matrimonio infantil en Colombia. 
                Un paso histórico para proteger a nuestros niños y niñas.
              </p>
              <a href="/leyes-coronadas" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[--foreground] hover:text-[--accent] transition-colors">
                Leer más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[--foreground] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-subtitle font-bold mb-6">
            Mantente informado
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Las leyes nos afectan a todos. Conoce lo que está pasando en el Congreso 
            de una manera clara, visual y sin complicaciones.
          </p>
          <a 
            href="/leyes-coronadas" 
            className="inline-block px-8 py-4 bg-[--accent] text-[--foreground] font-semibold uppercase tracking-wider hover:bg-[--accent]/90 transition-colors"
          >
            Explorar leyes
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
