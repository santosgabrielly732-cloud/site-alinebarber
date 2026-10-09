import Reveal from './Reveal'
import { SERVICES, GALLERY, INSTAGRAM_URL, INSTAGRAM_HANDLE, ADDRESS, MAPS_EMBED_URL, OPENING_HOURS, whatsappLink } from '../config/site'

export function About() {
  const items = [['Autoestima', 'Cada atendimento começa em quem você é e no que quer transmitir.'], ['Estilo', 'Cortes pensados para o seu rosto, a sua rotina e o seu jeito.'], ['Personalidade', 'O visual certo reforça a sua marca pessoal.'], ['Cuidado', 'Atenção aos detalhes, do início ao acabamento.']]
  return (
    <section id="sobre" className="bg-coal">
      <div className="section grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="title text-5xl md:text-7xl">Mais que um corte. <span className="text-brand">Uma nova versão de você.</span></h2>
          <p className="mt-6 text-white/70 max-w-md">Na ALINEBARBER_GS, o corte é só o começo: o objetivo é você sair se sentindo mais confiante e com a cara que sempre quis ter.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {items.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100} className="bg-coal p-7 hover:bg-ink transition group">
              <div className="w-8 h-1 bg-brand mb-5 group-hover:w-14 transition-all" />
              <h3 className="title text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-white/60">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="servicos" className="section">
      <Reveal><h2 className="title text-5xl md:text-7xl">Serviços</h2></Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 80} className="h-full">
            <article className="h-full flex flex-col border border-white/10 bg-coal p-6 hover:border-brand hover:-translate-y-1 transition duration-300">
              <h3 className="title text-2xl">{s.name}</h3>
              <p className="mt-3 text-sm text-white/60 flex-1">{s.description}</p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-end justify-between">
                <span className="title text-3xl text-brand">{s.price}</span>
                <span className="text-xs text-steel">{s.duration}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section id="trabalhos" className="bg-coal">
      <div className="section">
        <Reveal><h2 className="title text-5xl md:text-7xl">Seu estilo. <span className="text-brand">Sua marca.</span></h2></Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className={`group relative overflow-hidden bg-ink border border-white/10 ${i % 4 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                {g.src ? (
                  <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition duration-700" />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center text-center p-4 text-steel">
                    <span className="title text-3xl text-white/20">FOTO</span>
                    <span className="text-xs mt-2">Adicione em src/config/site.js</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Instagram() {
  return (
    <section id="instagram" className="section text-center">
      <Reveal>
        <h2 className="title text-5xl md:text-7xl">Acompanhe nosso trabalho</h2>
        <p className="mt-4 title text-3xl md:text-4xl text-brand">{INSTAGRAM_HANDLE}</p>
        <p className="mt-4 text-white/60">Novos trabalhos e bastidores direto no Instagram.</p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn btn-red mt-8">Seguir no Instagram</a>
      </Reveal>
    </section>
  )
}

export function Booking() {
  return (
    <section className="relative bg-brand overflow-hidden">
      <div className="absolute -right-10 -top-10 title text-[22rem] text-black/10 leading-none select-none pointer-events-none">✂</div>
      <div className="relative max-w-6xl mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
        <Reveal>
          <h2 className="title text-5xl md:text-8xl">Pronta para sua melhor versão?</h2>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn mt-10 bg-ink text-white hover:bg-white hover:text-ink !px-10 !py-5">Agendar meu horário</a>
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contato" className="section grid md:grid-cols-2 gap-10">
      <Reveal>
        <h2 className="title text-5xl md:text-7xl">Contato</h2>
        <div className="mt-8 space-y-6 text-white/80">
          <div><h3 className="text-xs tracking-[.25em] text-brand font-bold mb-1">ENDEREÇO</h3><p>{ADDRESS || 'Endereço em breve.'}</p></div>
          {OPENING_HOURS && <div><h3 className="text-xs tracking-[.25em] text-brand font-bold mb-1">HORÁRIOS</h3><p>{OPENING_HOURS}</p></div>}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-red">Chamar no WhatsApp</a>
        </div>
      </Reveal>
      <Reveal delay={150}>
        {MAPS_EMBED_URL ? (
          <iframe title="Localização" src={MAPS_EMBED_URL} loading="lazy" className="w-full h-80 md:h-full min-h-[320px] border border-white/10 grayscale" />
        ) : (
          <div className="h-80 md:h-full min-h-[320px] border border-dashed border-white/20 flex items-center justify-center text-steel text-sm text-center p-6">
            Mapa do Google Maps<br />(defina MAPS_EMBED_URL em src/config/site.js)
          </div>
        )}
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 pb-28 md:pb-8 text-center text-xs text-steel">
      © {new Date().getFullYear()} ALINEBARBER_GS · <a className="hover:text-brand" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{INSTAGRAM_HANDLE}</a>
    </footer>
  )
}

export function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-ink/90 backdrop-blur border-t border-white/10">
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-red w-full !py-4">Agendar pelo WhatsApp</a>
    </div>
  )
}
