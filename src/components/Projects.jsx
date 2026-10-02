import { useState } from 'react'
import { Github, ExternalLink, Lightbulb, Target, Wrench } from 'lucide-react'
import { projects, projectFilters } from '../data/projects'

const gradientMap = {
  'port-scanner': 'from-[#6366F1] to-[#8B5CF6]',
  'captive-portal': 'from-[#0EA5E9] to-[#06B6D4]',
  'hospital-management': 'from-[#10B981] to-[#06B6D4]',
  landwatch: 'from-[#F59E0B] to-[#EF4444]',
  'game-helper-agent': 'from-[#EC4899] to-[#8B5CF6]',
  portfolio: 'from-[#6366F1] via-[#38BDF8] to-[#22D3EE]',
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? projects : projects.filter((p) => p.filter === filter || p.category.includes(filter))

  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-8">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 03 — Projects
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight text-[#0F172A]">Projects</h2>
          <p className="text-[#475569] mt-2 leading-relaxed">Problem, solution and technical stack for each project.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm font-semibold px-4 py-1.5 rounded-full border shadow-sm transition ${filter === f ? 'bg-[#0F172A] text-white border-[#0F172A]' : 'bg-white border-[#E5E0D8] text-[#475569] hover:text-[#0F172A] hover:border-[#CBD5E1]'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {list.map((p) => (
            <article key={p.id} className="bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden hover:border-[#CBD5E1] hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col shadow-sm">
              <div className={`h-[168px] relative grid place-items-center text-center p-4 bg-gradient-to-br ${gradientMap[p.id] || 'from-[#4F46E5] to-[#0EA5E9]'}`}>
                <p className="text-white font-extrabold tracking-widest uppercase text-sm leading-snug drop-shadow-md">{p.title}</p>
                <span className="absolute top-3 left-3 text-[11px] font-bold tracking-widest uppercase bg-black/25 backdrop-blur text-white px-2.5 py-1 rounded-full border border-white/20">{p.category}</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-[#334155] leading-relaxed font-medium">{p.description}</p>

                <div className="grid gap-2.5 mt-4">
                  <div className="flex gap-2">
                    <Target size={14} className="text-[#D97706] mt-0.5 shrink-0" />
                    <p className="text-xs leading-relaxed"><span className="font-bold text-[#0F172A]">Problem:</span> <span className="text-[#475569]">{p.problem}</span></p>
                  </div>
                  <div className="flex gap-2">
                    <Lightbulb size={14} className="text-[#16A34A] mt-0.5 shrink-0" />
                    <p className="text-xs leading-relaxed"><span className="font-bold text-[#0F172A]">Solution:</span> <span className="text-[#475569]">{p.solution}</span></p>
                  </div>
                  <div className="flex gap-2">
                    <Wrench size={14} className="text-[#0284C7] mt-0.5 shrink-0" />
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.map((t) => (
                        <span key={t} className="text-[11px] font-semibold tracking-wide bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-xs font-bold text-[#0F172A] mb-1.5">Key features</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="text-xs font-medium bg-[#F5F2EB] border border-[#E5E0D8] px-2.5 py-1 rounded-full text-[#334155]">{f}</li>
                    ))}
                  </ul>
                </div>

                {p.aiExplored && (
                  <div className="mt-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-3">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-[#B45309]">Potential AI features explored</p>
                    <p className="text-xs text-[#78350F] mt-1 flex flex-wrap gap-1 font-medium">
                      {p.aiExplored.map((a, i) => (
                        <span key={a}>{a}{i < p.aiExplored.length - 1 ? ' • ' : ''}</span>
                      ))}
                    </p>
                    <p className="text-[11px] text-[#92400E] mt-1 italic">{p.aiNote}</p>
                  </div>
                )}
                {p.note && <p className="text-[11px] text-[#64748B] italic mt-2">{p.note}</p>}

                <div className="flex gap-2 mt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-full border transition ${p.github === '#' ? 'bg-[#F5F2EB] border-dashed border-[#CBD5E1] text-[#94A3B8] cursor-not-allowed' : 'bg-[#0F172A] text-white border-[#0F172A] hover:bg-[#1E293B]'}`}
                    onClick={(e) => { if (p.github === '#') e.preventDefault() }}
                  >
                    <Github size={14} /> {p.github === '#' ? 'GitHub' : 'GitHub'}
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-full border transition ${p.demo === '#' ? 'bg-transparent border-dashed border-[#CBD5E1] text-[#94A3B8] cursor-not-allowed' : 'bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white border-transparent hover:opacity-95 shadow-sm'}`}
                    onClick={(e) => { if (p.demo === '#') e.preventDefault() }}
                  >
                    <ExternalLink size={14} /> {p.demo === '#' ? 'Live Demo' : 'Live Demo'}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[#64748B] bg-white border border-[#E5E0D8] rounded-xl px-4 py-3 shadow-sm">
          {list.length === 0 ? 'No projects in this filter.' : `Showing ${list.length} of ${projects.length} projects`}
        </p>
      </div>
    </section>
  )
}
