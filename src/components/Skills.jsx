import { Code2, Globe, Wrench, Sparkles } from 'lucide-react'
import { skillGroups } from '../data/skills'

const iconMap = {
  code: Code2,
  globe: Globe,
  tool: Wrench,
  spark: Sparkles,
}

const variantStyles = {
  programming: 'bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE]',
  web: 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]',
  tools: 'bg-[#DCFCE7] text-[#16A34A] border border-[#86EFAC]',
  other: 'bg-[#FFEDD5] text-[#EA580C] border border-[#FED7AA]',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#F5F2EB] border-y border-[#E5E0D8]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-10">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 02 — Skills
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight text-[#0F172A]">Technical Skills</h2>
          <p className="text-[#475569] mt-2 leading-relaxed">Grouped honestly, without inflated percentages — clean tags over fake bars.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {skillGroups.map((g) => {
            const Icon = iconMap[g.icon] || Code2
            return (
              <div key={g.title} className="bg-white border border-[#E5E0D8] rounded-2xl p-5 shadow-sm hover:border-[#CBD5E1] hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-11 h-11 grid place-items-center rounded-xl ${variantStyles[g.variant]}`}>
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-[0.98rem] font-bold leading-none text-[#0F172A]">{g.title}</h3>
                    <span className="text-xs text-[#64748B] font-medium">{g.meta}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s.name}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#FDFBF7] border border-[#E5E0D8] px-3 py-1.5 rounded-full text-[#334155] hover:text-[#4F46E5] hover:border-[#C7D2FE] transition"
                      title={s.note || undefined}
                    >
                      {s.name}
                      {s.note && <span className="text-[10px] font-bold tracking-wide uppercase bg-[#EEF2FF] text-[#4F46E5] px-1.5 py-0.5 rounded-full">{s.note}</span>}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
