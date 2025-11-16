import Link from "next/link";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function EntreAlReinado() {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <Hero 
        title="Entre al Reinado"
        subtitle="Conoce al equipo detrás de Ley Explico, un proyecto de grado dedicado a hacer las leyes más accesibles para todos los colombianos."
        size="medium"
      />

      {/* Main Content */}
      <div className="pt-20">
        {/* About the Project */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-subtitle font-bold mb-8">
              Nuestra Misión
            </h2>
            <p className="text-body text-[--gray-medium] leading-relaxed mb-6">
              Ley Explico nace con el propósito de transformar la información legislativa en 
              contenido comprensible y atractivo para todos. Creemos que conocer las leyes que 
              nos rigen es un derecho y una necesidad para construir una sociedad más informada 
              y participativa.
            </p>
            <p className="text-body text-[--gray-medium] leading-relaxed">
              A través de un lenguaje claro, visuales atractivos y un formato de revista digital, 
              buscamos cerrar la brecha entre el Congreso y la ciudadanía, haciendo que la política 
              legislativa sea accesible para reinas y príncipes de todas las edades.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 bg-[--gray-light]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-subtitle font-bold mb-12 text-center">
              El Equipo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member Template - Add your team members here */}
              <div className="bg-white p-8 text-center shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 rounded-full bg-[--accent]/20 flex items-center justify-center text-5xl mb-6 mx-auto">
                  👑
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Integrante 1</h3>
                <p className="text-[--accent] text-sm uppercase tracking-wider mb-4">
                  Rol en el proyecto
                </p>
                <p className="text-[--gray-medium] text-sm leading-relaxed">
                  Descripción breve del rol y contribución al proyecto.
                </p>
              </div>

              <div className="bg-white p-8 text-center shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 rounded-full bg-[--accent]/20 flex items-center justify-center text-5xl mb-6 mx-auto">
                  👑
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Integrante 2</h3>
                <p className="text-[--accent] text-sm uppercase tracking-wider mb-4">
                  Rol en el proyecto
                </p>
                <p className="text-[--gray-medium] text-sm leading-relaxed">
                  Descripción breve del rol y contribución al proyecto.
                </p>
              </div>

              <div className="bg-white p-8 text-center shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 rounded-full bg-[--accent]/20 flex items-center justify-center text-5xl mb-6 mx-auto">
                  👑
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Integrante 3</h3>
                <p className="text-[--accent] text-sm uppercase tracking-wider mb-4">
                  Rol en el proyecto
                </p>
                <p className="text-[--gray-medium] text-sm leading-relaxed">
                  Descripción breve del rol y contribución al proyecto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-subtitle font-bold mb-8">
              Síguenos en Redes Sociales
            </h2>
            <p className="text-body text-[--gray-medium] mb-12 leading-relaxed">
              Mantente al día con las últimas noticias del Congreso, análisis de leyes 
              y contenido exclusivo en nuestras redes sociales.
            </p>

            <div className="flex justify-center gap-8 flex-wrap">
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 rounded-full bg-[--accent]/20 flex items-center justify-center text-3xl transition-all group-hover:bg-[--accent] group-hover:scale-110">
                  📸
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[--gray-medium] group-hover:text-[--accent]">
                  Instagram
                </p>
              </a>

              {/* Twitter/X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 rounded-full bg-[--accent]/20 flex items-center justify-center text-3xl transition-all group-hover:bg-[--accent] group-hover:scale-110">
                  🐦
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[--gray-medium] group-hover:text-[--accent]">
                  Twitter
                </p>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 rounded-full bg-[--accent]/20 flex items-center justify-center text-3xl transition-all group-hover:bg-[--accent] group-hover:scale-110">
                  👍
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[--gray-medium] group-hover:text-[--accent]">
                  Facebook
                </p>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 rounded-full bg-[--accent]/20 flex items-center justify-center text-3xl transition-all group-hover:bg-[--accent] group-hover:scale-110">
                  🎵
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[--gray-medium] group-hover:text-[--accent]">
                  TikTok
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6 bg-[--foreground] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-subtitle font-bold mb-6">
              ¿Quieres saber más?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Este es un proyecto de grado en constante evolución. Si tienes sugerencias, 
              comentarios o quieres colaborar con nosotros, ¡nos encantaría escucharte!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contacto@leyexplico.com" 
                className="inline-block px-8 py-4 bg-[--accent] text-[--foreground] font-semibold uppercase tracking-wider hover:bg-[--accent]/90 transition-colors"
              >
                Contáctanos
              </a>
              <Link 
                href="/" 
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-[--foreground] transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>

        {/* University/Academic Info */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-xl font-bold mb-4">Proyecto de Grado</h3>
            <p className="text-[--gray-medium] mb-2">
              Universidad / Facultad / Programa
            </p>
            <p className="text-sm text-[--gray-medium]">
              Año 2024-2025
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
