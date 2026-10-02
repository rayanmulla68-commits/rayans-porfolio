import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download, Code2, Shield, Cpu, Gamepad2 } from 'lucide-react'
import { siteConfig } from '../data/site'

const phrases = ['Building practical solutions with code, AI and technology.']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const full = phrases[0]

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(id)
    }, 24)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* bg glows */}
      <div className="pointer-events-none absolute -top-20 -right-24 w-[680px] h-[680px] rounded-full opacity-60" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.07), transparent 68%)' }} />
      <div className="pointer-events-none absolute -bottom-20 -left-24 w-[620px] h-[620px] rounded-full opacity-50" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06), transparent 70%)' }} />

      <div className="max-w-[1120px] mx-auto px-6 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative z-10">
        {/* Left */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-[#334155] bg-white border border-[#E5E0D8] px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] shadow-[0_0_0_4px_rgba(22,163,74,0.18)]" /> Available for opportunities
          </div>

          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-[#4F46E5] mb-2">Hi, I'm Rayan Ahmed</p>
            <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              <span className="text-[#0F172A]">Final-Year Computer</span>
              <br />
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] bg-clip-text text-transparent">Science Engineering</span>
              <br />
              <span className="text-[#0F172A]">Student</span>
            </h1>
            <p className="mt-3 text-[clamp(1rem,2vw,1.2rem)] font-semibold text-[#475569] leading-snug min-h-[1.5em]">{typed}<span className="inline-block w-0.5 h-[1em] bg-[#4F46E5] ml-0.5 animate-blink align-middle" /></p>
          </div>

          <p className="text-[1.02rem] leading-7 text-[#475569] max-w-[60ch]">
            I'm a Computer Science Engineering student passionate about building practical software, exploring artificial intelligence, cybersecurity, web technologies, and game development. I enjoy turning ideas into working projects and continuously improving my technical skills.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-br from-[#4F46E5] via-[#3B82F6] to-[#0EA5E9] text-white font-semibold px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(79,70,229,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(79,70,229,0.38)] transition-all">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href={siteConfig.resumePath} download className="inline-flex items-center gap-2 bg-white border border-[#E5E0D8] text-[#0F172A] font-semibold px-6 py-3 rounded-xl hover:bg-[#F5F2EB] hover:-translate-y-0.5 shadow-sm transition-all">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#F5F2EB] border border-[#E5E0D8] text-[#0F172A] font-semibold px-6 py-3 rounded-xl hover:bg-[#EEF2FF] hover:border-[#C7D2FE] transition-colors">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3 flex-wrap pt-2">
            <a href={siteConfig.github.startsWith('http') ? siteConfig.github : '#'} target="_blank" rel="noopener" aria-label="GitHub" className="w-9 h-9 grid place-items-center rounded-[10px] bg-white border border-[#E5E0D8] text-[#64748B] hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm transition">
              <Github size={16} />
            </a>
            <a href={siteConfig.linkedin.startsWith('http') ? siteConfig.linkedin : '#'} target="_blank" rel="noopener" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-[10px] bg-white border border-[#E5E0D8] text-[#64748B] hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm transition">
              <Linkedin size={16} />
            </a>
            <a href={siteConfig.email.includes('@') ? `mailto:${siteConfig.email}` : '#'} aria-label="Email" className="w-9 h-9 grid place-items-center rounded-[10px] bg-white border border-[#E5E0D8] text-[#64748B] hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm transition">
              <Mail size={16} />
            </a>
            <span className="w-px h-5 bg-[#E5E0D8] mx-1" />
            <span className="text-[0.84rem] text-[#64748B] font-medium">{siteConfig.location} • Final Year CSE</span>
          </div>
        </div>

        {/* Right — profile / placeholder + window */}
        <div className="relative flex flex-col items-center gap-4">
          {/* Profile image area */}
          <div className="relative w-full max-w-[420px]">
            <div className="relative rounded-[20px] overflow-hidden bg-white border border-[#E5E0D8] shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              {/* subtle header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#F8F6F0] border-b border-[#E5E0D8]">
                <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" /><span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" /><span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" /></div>
                <span className="font-mono text-xs font-semibold text-[#64748B]">rayan Ahmed — profile</span>
              </div>

              {siteConfig.profileImage ? (
                <img src={siteConfig.profileImage} alt="Rayan Ahmed" className="w-full aspect-[4/5] object-cover object-top" />
              ) : (
                <div className="aspect-[4/3] grid place-items-center p-8 bg-gradient-to-br from-[#FDFBF7] via-[#F5F2EB] to-[#EEF2FF]">
                  <div className="text-center">
                    <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#0EA5E9] grid place-items-center text-white text-2xl font-extrabold shadow-lg">RA</div>
                    <p className="mt-4 text-sm font-bold text-[#0F172A] tracking-widest uppercase">Rayan Ahmed</p>
                  </div>
                </div>
              )}

              {/* code snippet footer */}
              <div className="p-4 bg-[#0F172A] border-t border-[#E5E0D8]">
                <pre className="font-mono text-[0.78rem] leading-6 text-[#E2E8F0] overflow-x-auto"><code>{`const rayan = {\n  role: 'CSE Student',\n  focus: ['Web','AI','Security','Games'],\n  motto: 'Ideas → Working Projects'\n};`}</code></pre>
              </div>
            </div>

            {/* floating mini cards */}
            <div className="hidden sm:flex absolute -top-3 -right-3 items-center gap-2 bg-white border border-[#E5E0D8] rounded-xl px-3 py-2 shadow-lg animate-float">
              <span className="w-7 h-7 rounded-lg grid place-items-center bg-[#4F46E5]/10 text-[#4F46E5]"><Code2 size={14} /></span>
              <div><p className="text-xs font-bold leading-none text-[#0F172A]">Clean Code</p><p className="text-[11px] text-[#64748B]">Scalable approach</p></div>
            </div>
            <div className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-2 bg-white border border-[#E5E0D8] rounded-xl px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="w-7 h-7 rounded-lg grid place-items-center bg-[#0EA5E9]/10 text-[#0EA5E9]"><Shield size={14} /></span>
              <div><p className="text-xs font-bold leading-none text-[#0F172A]">Curious Builder</p><p className="text-[11px] text-[#64748B]">Always learning</p></div>
            </div>
            <div className="absolute inset-0 -z-10 blur-2xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.25), transparent 70%)' }} />
          </div>

          {/* tech pills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-[420px]">
            {[
              { icon: Code2, label: 'Web Dev' },
              { icon: Cpu, label: 'AI / ML' },
              { icon: Shield, label: 'Cybersecurity' },
              { icon: Gamepad2, label: 'Game Dev' },
            ].map((t) => (
              <span key={t.label} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-[#E5E0D8] px-3 py-1.5 rounded-full text-[#475569] shadow-sm">
                <t.icon size={12} className="text-[#4F46E5]" /> {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll down" className="hidden lg:grid absolute bottom-6 left-1/2 -translate-x-1/2 w-7 h-11 border border-[#CBD5E1] rounded-full place-items-center opacity-70 hover:opacity-100 transition">
        <span className="w-1 h-2 bg-[#8B92A8] rounded-full animate-bounce" />
      </a>
    </section>
  )
}
