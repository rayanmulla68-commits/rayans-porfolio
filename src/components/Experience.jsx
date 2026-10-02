import { Users, Lightbulb } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#F5F2EB] border-y border-[#E5E0D8]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-10">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 04 — Leadership & Activities
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight text-[#0F172A]">Leadership & Activities</h2>
          <p className="text-[#475569] mt-2 leading-relaxed">Focused on leadership, communication, coordination and execution — not titles.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* FOCI */}
          <div className="bg-white border border-[#E5E0D8] rounded-2xl p-6 shadow-sm hover:border-[#CBD5E1] hover:-translate-y-0.5 hover:shadow-md transition-all">
            <div className="flex gap-4">
              <span className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-[#EEF2FF] text-[#4F46E5]"><Users size={18} /></span>
              <div className="flex-1">
                <h3 className="font-bold leading-tight text-[#0F172A]">FOCI — College Student Organization</h3>
                <p className="text-sm font-semibold text-[#4F46E5]">President, CSE Branch</p>
                <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                  Elected as President of the FOCI organization for the CSE branch and involved in coordinating students, planning activities, organizing events, communicating with members, and contributing to the overall execution of college initiatives.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Leadership', 'Communication', 'Team Coordination', 'Event Planning', 'Responsibility', 'Organization'].map((t) => (
                    <span key={t} className="text-xs font-semibold bg-[#F5F2EB] border border-[#E5E0D8] px-2.5 py-1 rounded-full text-[#334155]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIH */}
          <div className="bg-white border border-[#E5E0D8] rounded-2xl p-6 shadow-sm hover:border-[#CBD5E1] hover:-translate-y-0.5 hover:shadow-md transition-all">
            <div className="flex gap-4">
              <span className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-[#E0F2FE] text-[#0284C7]"><Lightbulb size={18} /></span>
              <div className="flex-1">
                <h3 className="font-bold leading-tight text-[#0F172A]">SIH Pre-Hackathon Ideation & Strategy</h3>
                <p className="text-sm font-semibold text-[#0284C7]">Student Project Team Member</p>
                <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                  Contributed to problem identification, ideation, MVP planning, technical strategy, team coordination, project presentation, and synthetic/mock data preparation — including work on the LANDWATCH concept.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Problem Identification', 'Ideation', 'MVP Planning', 'Technical Strategy', 'Team Coordination', 'Presentation', 'Mock Data'].map((t) => (
                    <span key={t} className="text-xs font-semibold bg-[#F5F2EB] border border-[#E5E0D8] px-2.5 py-1 rounded-full text-[#334155]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
