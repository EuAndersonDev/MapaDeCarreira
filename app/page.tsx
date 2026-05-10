import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stack from '../components/sections/Stack';
import Timeline from '../components/sections/Timeline';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import Skills from '../components/sections/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-14"> {/* Compensar Header fixo (h-14) */}
        {/* Hero em full-width */}
        <Hero />

        {/* Seção About */}
        <About />

        {/* Mapa de Carreira: Grid com Timeline + Skills sticky (estilo projeto de referência) */}
        <section className="w-full bg-bg-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
              Mapa de Carreira
            </h2>
            
            {/* Grid: Timeline (col 1) + Skills (col 2 sticky) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Timeline — coloca em 2 colunas no grid (lg:col-span-2) */}
              <div className="lg:col-span-2">
                <Timeline />
              </div>

              {/* Skills — sticky à direita (lg:col-span-1) */}
              <div className="lg:col-span-1">
                <Skills />
              </div>
            </div>
          </div>
        </section>

        {/* Stack em full-width */}
        <Stack />

        {/* Education em full-width */}
        <Education />

        {/* Contact em full-width */}
        <Contact />
      </main>
    </>
  );
}