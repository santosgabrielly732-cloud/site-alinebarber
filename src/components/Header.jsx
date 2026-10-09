import { useEffect, useState } from 'react'
import { NAV, whatsappLink } from '../config/site'
export default function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 30)
    f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition duration-300 ${solid || open ? 'bg-ink/95 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-10 h-[68px] flex items-center justify-between">
        <a href="#inicio" className="title text-2xl">ALINE<span className="text-brand">BARBER</span></a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="relative text-xs font-semibold tracking-[.2em] text-white/80 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full">{l}</a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-red !py-2.5 !px-5 !text-xs">Agendar</a>
        </nav>
        <button aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-brand transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
      {open && (
        <nav className="lg:hidden bg-ink/95 px-5 pb-6 flex flex-col">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="title text-3xl py-3 border-b border-white/10 hover:text-brand">{l}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
