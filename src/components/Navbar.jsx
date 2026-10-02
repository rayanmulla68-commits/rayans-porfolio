import { useEffect, useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = document.querySelectorAll('section[id]')
      let cur = 'home'
      const pos = window.scrollY + 140
      sections.forEach((s) => {
        if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768 && open) setOpen(false) }
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onEsc)
    return () => { window.removeEventListener('resize', onResize); window.removeEventListener('keydown', onEsc) }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-16 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-xl border-[#E5E0D8] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
          : 'bg-[#FDFBF7]/70 backdrop-blur-xl border-[#E5E0D8]/60'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-full flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="w-[34px] h-[34px] grid place-items-center rounded-[9px] bg-gradient-to-br from-[#4F46E5] via-[#3B82F6] to-[#0EA5E9] text-white font-mono text-[0.82rem] font-extrabold shadow-[0_4px_12px_rgba(79,70,229,0.3)]">RA</span>
          <span className="text-[#0F172A] hidden sm:inline font-extrabold">RAYAN</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5">
          {siteConfig.navLinks.map((l) => {
            const id = l.href.slice(1)
            const isActive = active === id
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative text-[0.88rem] font-semibold py-1.5 transition-colors ${isActive ? 'text-[#4F46E5]' : 'text-[#475569] hover:text-[#0F172A]'}`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded-full transition-transform duration-300 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.resumePath}
            download
            className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-br from-[#4F46E5] to-[#2563EB] text-white text-[0.84rem] font-semibold px-4 py-2 rounded-[10px] shadow-[0_4px_14px_rgba(79,70,229,0.25)] hover:shadow-[0_8px_22px_rgba(79,70,229,0.35)] hover:-translate-y-0.5 transition-all"
          >
            <FileText size={14} /> Resume
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-[#0F172A] hover:bg-black/5 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden absolute top-16 inset-x-0 bg-[#FDFBF7]/98 backdrop-blur-xl border-y border-[#E5E0D8] shadow-xl transition-all duration-300 origin-top ${open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {siteConfig.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2.5 text-[1rem] font-semibold ${active === l.href.slice(1) ? 'text-[#4F46E5]' : 'text-[#475569]'}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.resumePath}
            download
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#4F46E5] to-[#2563EB] text-white font-semibold py-2.5 rounded-xl"
          >
            <FileText size={16} /> Download Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
