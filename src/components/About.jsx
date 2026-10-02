import { Code2, Layers, Cpu, Gamepad2 } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-10">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 01 — About Me
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight leading-tight text-[#0F172A]">A little about me</h2>
          <p className="text-[#475569] mt-2 leading-relaxed">Computer Science Engineering student who loves turning ideas into real, usable projects.</p>
        </div>

        <div className="grid lg:grid-cols-[1.45fr_0.85fr] gap-10 items-start">
          <div className="space-y-7">
            <div className="space-y-3 text-[0.98rem] leading-7 text-[#334155]">
              <p>
                I am a final-year <strong className="text-[#0F172A] font-bold">Computer Science Engineering student at {siteConfig.college || 'Anjuman Institute Of Technology And Management'}</strong>. My interests span software development, web technologies, artificial intelligence, cybersecurity, and game development.
              </p>
              <p>
                I am currently strengthening my development skills by working on practical projects and learning modern technologies. I enjoy understanding how systems work and converting ideas into usable applications.
              </p>
              <p>
                I have experience exploring programming languages including <strong className="text-[#0F172A] font-bold">Python, Java, and C++</strong>, while currently developing my web development skills.
              </p>
            </div>

            <div>
              <h3 className="text-[0.92rem] font-extrabold text-[#0F172A] mb-3">What I'm interested in</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Code2, title: 'Web Development', desc: 'Building responsive, accessible websites and learning modern frontend & backend basics.' },
                  { icon: Layers, title: 'Software Development', desc: 'Understanding logic, data structures, and how to write clean, maintainable code.' },
                  { icon: Cpu, title: 'AI & Technology', desc: 'Exploring fundamentals of AI, how models work, and where they can be applied.' },
                  { icon: Gamepad2, title: 'Game Development', desc: 'Interested in game logic, interactive experiences and learning game dev basics.' },
                ].map((c) => (
                  <div key={c.title} className="flex gap-3 bg-white border border-[#E5E0D8] rounded-xl p-3.5 shadow-sm hover:border-[#CBD5E1] hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <span className="w-9 h-9 shrink-0 grid place-items-center rounded-lg bg-[#EEF2FF] text-[#4F46E5]"><c.icon size={16} /></span>
                    <div><p className="text-[0.88rem] font-bold text-[#0F172A]">{c.title}</p><p className="text-xs text-[#64748B] leading-relaxed mt-1">{c.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E5E0D8] rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <h3 className="text-sm font-bold text-[#0F172A]">Currently Learning</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15803D] bg-[#DCFCE7] border border-[#86EFAC] px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full shadow-[0_0_0_4px_rgba(22,163,74,0.18)]" /> Learning in progress
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['JavaScript (ES6+) & Responsive CSS', 'React — Currently Learning', 'Git & GitHub', 'Python for AI/ML', 'Data Structures & Algorithms', 'Networking & Security basics'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-[#334155] bg-[#F5F2EB] border border-[#E5E0D8] px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
              <p className="text-xs text-[#64748B] mt-3 leading-relaxed">Focusing on fundamentals and building small projects to apply what I learn — consistent, honest progress.</p>
            </div>
          </div>

          {/* stats */}
          <div className="lg:sticky lg:top-[88px]">
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { n: '6', l: 'Projects', s: 'Academic & personal builds' },
                { n: '10+', l: 'Technologies', s: 'Languages & tools explored' },
                { n: '1', l: 'Certification', s: 'Cisco Packet Tracer' },
                { n: 'Daily', l: 'Learning', s: 'Consistent practice', accent: true },
              ].map((x) => (
                <div key={x.l} className={`rounded-2xl p-4 text-center border ${x.accent ? 'bg-gradient-to-br from-[#4F46E5] to-[#0EA5E9] border-transparent text-white shadow-md' : 'bg-white border-[#E5E0D8] shadow-sm hover:border-[#CBD5E1] hover:-translate-y-0.5 transition-all'}`}>
                  <p className={`text-2xl font-extrabold tracking-tight ${x.accent ? 'text-white' : 'text-[#0F172A]'}`}>{x.n}</p>
                  <p className={`text-xs font-bold mt-1 ${x.accent ? 'text-white' : 'text-[#334155]'}`}>{x.l}</p>
                  <p className={`text-[11px] mt-1 leading-snug ${x.accent ? 'text-white/90' : 'text-[#64748B]'}`}>{x.s}</p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#94A3B8] text-center mt-2 leading-relaxed">* Numbers reflect learning journey as a student, not professional experience.</p>

            <div className="mt-4 bg-white border border-[#E5E0D8] rounded-2xl p-4 shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-[#4F46E5]">How I describe myself</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Computer Science Engineering Student', 'Developer', 'Aspiring Software Developer', 'AI & Technology Enthusiast'].map((t) => (
                  <span key={t} className="text-xs font-semibold bg-[#F5F2EB] border border-[#E5E0D8] px-2.5 py-1 rounded-full text-[#334155]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
