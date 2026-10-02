import { Award, ExternalLink } from 'lucide-react'

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-6">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 06 — Certifications
          </p>
          <h2 className="text-[1.6rem] font-extrabold tracking-tight text-[#0F172A]">Certifications</h2>
        </div>

        <div className="bg-white border border-[#E5E0D8] rounded-2xl p-5 flex gap-4 items-start hover:border-[#CBD5E1] shadow-sm transition max-w-[640px]">
          <span className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-[#DCFCE7] text-[#16A34A] border border-[#86EFAC]"><Award size={20} /></span>
          <div className="flex-1">
            <h3 className="font-bold text-[#0F172A]">Cisco Packet Tracer Certification</h3>
            <p className="text-sm text-[#475569] font-medium">Focus: Network Security / Networking</p>
            <p className="text-xs text-[#64748B] mt-1">Issued by Cisco Networking Academy • Packet Tracer fundamentals</p>
          </div>
          <span className="hidden sm:inline-flex text-[11px] font-bold tracking-widest uppercase bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] px-2.5 py-1 rounded-full self-start">Verified</span>
        </div>
      </div>
    </section>
  )
}
