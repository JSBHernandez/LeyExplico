import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ContentBlock from "../components/ContentBlock";
import Footer from "../components/Footer";

export default function LeyesCoronadas() {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <Hero 
        title="Hasta que la vida nos separe"
        subtitle="Reinas y príncipes, después de nueve intentos, ya no es necesario inventar una telenovela de drama para poder divorciarse de su pareja. El Congreso de Colombia aprobó una ley para separase sin buscar excusas."
        size="medium"
      />

      {/* Main Content */}
      <div className="pt-20">
        {/* El Cuento */}
        <ContentBlock
          subtitle="EL CUENTO"
          content={[
            "Para casarse se necesitan dos, pero para separase basta con uno. Y es que el amor, como el dinero, también se acaba. Y aunque puede sonar triste, dejar a la pareja puede ser una decisión valiente y saludable.",
            "En Colombia, donde le ponen peros a todo, el divorcio solo estaba permitido sí había causas como infidelidad, maltrato o abandono por parte de alguno de los dos. Gracias al Congreso de la República esa norma tan retrograda acaba de cambiarse."
          ]}
          width="medium"
        />

        {/* ¿Qué dice la ley? */}
        <ContentBlock
          subtitle="¿QUÉ DICE LA LEY?"
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
                    <strong>La ley agrega un numeral al artículo 154 del Código Civil,</strong> estableciendo «la sola voluntad de cualquiera de los cónyuges» como una nueva causal de divorcio.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[--accent] font-bold text-xl shrink-0">•</span>
                  <p className="text-body">
                    <strong>Proceso simplificado:</strong> Cualquiera de los cónyuges puede presentar la demanda de divorcio en cualquier momento, acompañada de una propuesta que contenga las medidas para regular los efectos derivados del mismo.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[--accent] font-bold text-xl shrink-0">•</span>
                  <p className="text-body">
                    <strong>Sin necesidad de justificación:</strong> Ya no es necesario demostrar causales específicas como violencia intrafamiliar, alcoholismo o dos años de no convivencia para solicitar el divorcio.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[--accent] font-bold text-xl shrink-0">•</span>
                  <p className="text-body">
                    <strong>Protección de derechos:</strong> La ley mantiene las garantías en términos de repartición de bienes, protección al cónyuge y a los hijos.
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[--accent]/10 p-8 text-center">
                <div className="text-5xl font-serif font-bold text-[--accent] mb-2">52,000</div>
                <p className="text-sm uppercase tracking-wider text-[--gray-medium]">
                  Parejas se casaron en 2023 en Colombia
                </p>
              </div>
              <div className="bg-[--accent]/10 p-8 text-center">
                <div className="text-5xl font-serif font-bold text-[--accent] mb-2">40,000</div>
                <p className="text-sm uppercase tracking-wider text-[--gray-medium]">
                  Parejas se divorciaron en 2023 en Colombia
                </p>
              </div>
            </div>
            
            <div className="mt-8 space-y-6">
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Combate a la violencia intrafamiliar:</strong> Se considera una herramienta para enfrentar la violencia doméstica, al facilitar la salida de relaciones problemáticas.
                </p>
              </div>
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Respeto a la decisión individual:</strong> La ley reconoce que si el amor se acaba y hay una decisión tomada por alguna de las personas, debe ser respetada.
                </p>
              </div>
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Entre 10 y 14 años</strong> es el promedio de tiempo que duran los matrimonios en Colombia.
                </p>
              </div>
              <div className="border-l-4 border-[--accent] pl-6 py-2">
                <p className="text-body">
                  <strong>Las principales causas son:</strong> infidelidad, diferencias irreconciliables, violencia doméstica y problemas financieros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personajes Principales */}
        <ContentBlock
          subtitle="PERSONAJES PRINCIPALES (AUTORES)"
          content=""
          width="medium"
          background="gray"
        />

        <section className="bg-[--gray-light] pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[--accent]/20 flex items-center justify-center text-3xl mb-4 mx-auto">
                  👩‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">Katherine Miranda</h3>
                <p className="text-center text-[--accent] text-sm uppercase tracking-wider mb-4">
                  Representante a la Cámara
                </p>
                <p className="text-center text-[--gray-medium]">
                  Alianza Verde / Abogada / Integra la Comisión Primera
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[--accent]/20 flex items-center justify-center text-3xl mb-4 mx-auto">
                  👨‍⚖️
                </div>
                <h3 className="font-serif text-xl font-bold text-center mb-2">David Luna</h3>
                <p className="text-center text-[--accent] text-sm uppercase tracking-wider mb-4">
                  Exsenador
                </p>
                <p className="text-center text-[--gray-medium]">
                  Cambio Radical / Abogado / Integraba la Comisión Primera
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Articles */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-subtitle font-bold mb-12 text-center">
              Más leyes coronadas
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
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
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
