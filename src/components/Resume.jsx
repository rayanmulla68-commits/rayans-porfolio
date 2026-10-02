import { Download, Eye, FileText } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Resume() {
  return (
    <section className="py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-[#334155] rounded-[24px] p-8 md:p-10 overflow-hidden relative shadow-xl text-white">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.6), transparent 70%)' }} />
          <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex gap-4">
              <span className="hidden sm:grid w-12 h-12 place-items-center rounded-xl bg-white text-[#0F172A] shrink-0 font-bold shadow-md"><FileText size={22} /></span>
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight leading-tight text-white">Looking for the next opportunity to build, learn and contribute.</h2>
                <p className="text-sm text-[#94A3B8] leading-relaxed mt-3 max-w-[60ch]">
                  I am currently seeking opportunities where I can apply my technical knowledge, work on real-world problems, learn from experienced teams, and contribute to meaningful software projects.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0 w-full md:w-auto">
              <a
                href={siteConfig.resumePath}
                download
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] font-extrabold px-6 py-3 rounded-xl hover:bg-[#F8FAFC] transition shadow-md"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition"
              >
                <Eye size={16} /> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
