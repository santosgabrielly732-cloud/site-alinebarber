import { HERO_IMAGE, INSTAGRAM_URL, whatsappLink } from '../config/site'
export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: `linear-gradient(105deg, rgba(5,5,5,.94) 25%, rgba(5,5,5,.6) 100%), url(${HERO_IMAGE}), radial-gradient(circle at 80% 20%, #3a0a0f, #050505 60%)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute left-0 top-0 h-full w-1.5 bg-brand" />
      <div className="max-w-6xl mx-auto px-5 md:px-10 pt-28 pb-32 md:pb-20 w-full">
        <p className="text-brand font-bold tracking-[.3em] text-xs md:text-sm mb-5">✂️ DESCUBRA SUA MELHOR VERSÃO!</p>
        <h1 className="title text-[16vw] md:text-[9rem] lg:text-[11rem]">ALINE<br /><span className="text-brand">BARBER</span><span className="text-white/30">_GS</span></h1>
        <p className="mt-6 max-w-xl text-lg md:text-2xl text-white/85 font-medium">Meu papel é elevar sua autoestima e renovar seu visual.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-red">Agendar horário</a>
          <a href="#trabalhos" className="btn btn-line">Ver trabalhos</a>
        </div>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-block mt-8 text-sm text-white/60 hover:text-brand underline underline-offset-4">Ver no Instagram</a>
      </div>
    </section>
  )
}
