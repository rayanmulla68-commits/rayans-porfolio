import { Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E0D8] bg-[#F5F2EB] py-7">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-[#475569]">© {new Date().getFullYear()} Rayan Ahmed. All rights reserved.</p>
          <p className="text-xs text-[#64748B] mt-1">Built with React and passion for technology.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={siteConfig.github.startsWith('http') ? siteConfig.github : '#'} target="_blank" rel="noopener" aria-label="GitHub" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-[#E5E0D8] text-[#64748B] hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm transition"><Github size={14} /></a>
          <a href={siteConfig.linkedin.startsWith('http') ? siteConfig.linkedin : '#'} target="_blank" rel="noopener" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-[#E5E0D8] text-[#64748B] hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm transition"><Linkedin size={14} /></a>
          <a href={siteConfig.email.includes('@') ? `mailto:${siteConfig.email}` : '#'} aria-label="Email" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-[#E5E0D8] text-[#64748B] hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm transition"><Mail size={14} /></a>
          <a href="#home" className="hidden sm:inline-flex text-xs font-semibold border border-[#E5E0D8] bg-white px-3.5 py-2 rounded-full text-[#475569] hover:text-[#0F172A] hover:border-[#CBD5E1] shadow-sm transition ml-1">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
