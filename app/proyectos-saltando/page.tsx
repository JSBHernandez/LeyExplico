import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ContentBlock from "../components/ContentBlock";
import Footer from "../components/Footer";

export default function ProyectosSaltando() {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <Hero 
        title="¡Una hora más de sueño! Adiós al madrugón escolar"
        subtitle="Reinas y príncipes, los niños y jóvenes ya no tendrán que despertarse a la hora en la que cacarean las gallinas. En el Congreso de la República avanza un proyecto de ley que busca prohibir las clases antes de las 07:00 a.m."
        size="medium"
      />

      {/* Main Content */}
      <div className="pt-20">
        {/* El Cuento */}
        <ContentBlock
          subtitle="EL CUENTO"
          content={[
            "Todo niño sueña con levantarse más tarde si es para ir al colegio y ese deseo puede convertirse en realidad. Y todo gracias a que el Senado de la República aprobó en segundo debate, y con amplias mayorías, el proyecto 'Estudio sin Madrugón', una iniciativa que busca poner patas arriba las rutinas escolares de millones de niños y adolescentes en Colombia.",
            "Y es que una de las mayores alegrías es saber que a uno le sobran unos minutitos antes de que suene la alarma, y de convertirse en ley, serían mínimo 60 minutos más en la cama, no solo para los estudiantes, sino también para los padres."
          ]}
          width="medium"
        />

        {/* ¿Qué dice la ley? */}
        <ContentBlock
          subtitle="¿QUÉ DICE EL PROYECTO?"
          content=""
          width="medium"
          background="gray"
        />
        
        <div className="bg-[--gray-light] pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 shadow-sm">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-[--accent] font-bold text-xl shrink-0">•</span>
                  <p className="text-body">
                    Que <strong>todos los establecimientos educativos del país,</strong> tanto públicos como privados, en los niveles de educación inicial, preescolar, básica y media, tendrán prohibido iniciar las clases antes de las 07:00 a.m.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[--accent] font-bold text-xl shrink-0">•</span>
                  <p className="text-body">
                    Que para no extender significativamente la hora de salida, propone <strong>reducir la duración de las clases a 45 minutos,</strong> dando autonomía a los rectores para el uso del tiempo restante.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[--accent] font-bold text-xl shrink-0">•</span>
                  <p className="text-body">
                    Que esta medida busca <strong>aliviar la carga de las madres,</strong> muchas de ellas las únicas responsables del hogar, quienes deben levantarse muy temprano para alistar a sus hijos para ir al colegio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Datos para Sapos */}
        <ContentBlock
          subtitle="DATOS PARA SAPOS"
          content=""
          width="medium"
        />

        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[--accent]/10 p-8 text-center">
                <div className="text-5xl font-serif font-bold text-[--accent] mb-2">60+</div>
                <p className="text-sm uppercase tracking-wider text-[--gray-medium]">
                  Minutos más de sueño para estudiantes
                </p>
              </div>
              <div className="bg-[--accent]/10 p-8 text-center">
                <div className="text-5xl font-serif font-bold text-[--accent] mb-2">50%</div>
                <p className="text-sm uppercase tracking-wider text-[--gray-medium]">
                  De hogares con jefatura femenina según el DANE
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Mejora en la salud y rendimiento académico:</strong> Mejorar de manera significativa la calidad del sueño de los estudiantes impacta positivamente en su salud física, bienestar psicológico, atención, concentración y rendimiento académico.
                </p>
              </div>
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Experiencias internacionales:</strong> Demuestran cómo estos cambios de horario benefician no solo a los estudiantes, sino también a sus familias, especialmente en Colombia donde más del 50% de la jefatura de los hogares recae en las mujeres.
                </p>
              </div>
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Mayor seguridad:</strong> Entrar más tarde a estudiar puede garantizar mayor seguridad para aquellos niños y adolescentes que se desplazan a sus colegios caminando.
                </p>
              </div>
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Estado actual:</strong> El proyecto pasa a manos de la Cámara de Representantes, donde deberá ser aprobado en dos debates: en la Comisión Sexta y en la plenaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personajes Principales */}
        <ContentBlock
          subtitle="PERSONAJE PRINCIPAL (AUTOR)"
          content=""
          width="medium"
          background="gray"
        />

        <section className="bg-[--gray-light] pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[--accent]/20 flex items-center justify-center text-3xl mb-4 mx-auto">
                  👨‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">Alejandro Carlos Chacón</h3>
                <p className="text-center text-[--accent] text-sm uppercase tracking-wider mb-4">
                  Senador de la República
                </p>
                <p className="text-center text-[--gray-medium]">
                  Partido Liberal / Abogado / Integra la Comisión Primera
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[--accent]/5 p-12 text-center">
              <h2 className="font-serif text-subtitle font-bold mb-6">
                Un proyecto que beneficia a todos
              </h2>
              <p className="text-body text-[--gray-medium] leading-relaxed max-w-2xl mx-auto">
                Este proyecto no solo mejora la calidad de vida de los estudiantes, sino que también 
                apoya a las familias colombianas, especialmente a las madres cabeza de hogar, 
                y contribuye a crear entornos educativos más saludables y seguros.
              </p>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-20 px-6 bg-[--gray-light]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-subtitle font-bold mb-12 text-center">
              Otros proyectos en curso
            </h2>
            <div className="text-center text-[--gray-medium]">
              <p className="text-body">
                Mantente atento a más proyectos que están avanzando en el Congreso de la República.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
