import { GraduationCap } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-10">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 05 — Education
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight text-[#0F172A]">Education</h2>
        </div>

        <div className="relative max-w-[780px]">
          <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-[#E5E0D8] hidden sm:block" />
          <div className="relative sm:pl-12">
            <span className="hidden sm:block absolute left-[6px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#FDFBF7] border-[3px] border-[#4F46E5] shadow-[0_0_0_4px_rgba(79,70,229,0.15)]" />
            <p className="inline-block text-xs font-bold tracking-widest uppercase text-[#4F46E5] bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-1 rounded-full mb-3">Final Year • 2022 — 2026 (Expected)</p>

            <div className="bg-white border border-[#E5E0D8] rounded-2xl p-6 shadow-sm hover:border-[#CBD5E1] transition">
              <div className="flex gap-3.5">
                <span className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE]"><GraduationCap size={20} /></span>
                <div className="flex-1">
                  <h3 className="font-bold text-[1.05rem] leading-tight text-[#0F172A]">Bachelor of Engineering — Computer Science and Engineering</h3>
                  <p className="text-sm text-[#475569] font-medium">{siteConfig.college || 'Anjuman Institute Of Technology And Management'}</p>
                  <span className="inline-block mt-2 text-xs font-bold bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] px-2.5 py-1 rounded-full">Final Year • Currently Pursuing</span>
                </div>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed mt-4">
                Currently pursuing undergraduate studies in Computer Science Engineering with academic exposure to software engineering, computer networks, cloud computing, machine learning, computer vision, cybersecurity, big data, IoT, and related computing subjects.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <div className="bg-[#F5F2EB] border border-[#E5E0D8] rounded-xl p-3.5">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#64748B]">Status</p>
                  <p className="text-sm font-semibold text-[#0F172A] mt-1">Final Year — B.E. CSE</p>
                </div>
                <div className="bg-[#F5F2EB] border border-dashed border-[#E5E0D8] rounded-xl p-3.5">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#64748B]">Location</p>
                  <p className="text-sm font-semibold text-[#0F172A] mt-1">Bhatkal, Karnataka</p>
                </div>
                <div className="sm:col-span-2 bg-[#F5F2EB] border border-[#E5E0D8] rounded-xl p-3.5">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#64748B]">Relevant Coursework</p>
                  <p className="text-sm text-[#334155] font-medium mt-1 leading-relaxed">Software Engineering • Computer Networks • Cloud Computing • Machine Learning • Computer Vision • Cybersecurity • Big Data • IoT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
