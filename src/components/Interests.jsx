import { Code2, Brain, Shield, Gamepad2, Layers, Network, Cpu, Sparkles } from 'lucide-react'

const interests = [
  { icon: Code2, title: 'Web Development', desc: 'Responsive, accessible web apps' },
  { icon: Brain, title: 'Artificial Intelligence', desc: 'Intelligent systems & automation' },
  { icon: Cpu, title: 'Machine Learning', desc: 'Data-driven models & insights' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Network security & protection' },
  { icon: Gamepad2, title: 'Game Development', desc: 'Interactive gameplay & engines' },
  { icon: Layers, title: 'Software Engineering', desc: 'Clean architecture & scalability' },
  { icon: Network, title: 'Networking', desc: 'Protocols & infrastructure' },
  { icon: Sparkles, title: 'Emerging Tech', desc: 'Exploring what’s next' },
]

export default function Interests() {
  return (
    <section className="py-16 bg-[#F5F2EB] border-y border-[#E5E0D8]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-8">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 07 — Areas of Interest
          </p>
          <h2 className="text-[1.6rem] font-extrabold tracking-tight text-[#0F172A]">Areas of Interest</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {interests.map((it) => (
            <div key={it.title} className="bg-white border border-[#E5E0D8] rounded-2xl p-5 text-center shadow-sm hover:border-[#CBD5E1] hover:-translate-y-1 transition-all group">
              <span className="mx-auto w-11 h-11 grid place-items-center rounded-xl bg-[#EEF2FF] text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
                <it.icon size={20} />
              </span>
              <p className="text-sm font-bold mt-3 text-[#0F172A]">{it.title}</p>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed font-medium">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
