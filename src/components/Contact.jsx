import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) { setStatus('Please fix the errors above.'); return }
    setSending(true)
    setStatus('Sending...')
    setTimeout(() => {
      // No backend — mailto fallback
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
      const mailto = `mailto:${siteConfig.email.includes('@') ? siteConfig.email : 'your.email@example.com'}?subject=${subject}&body=${body}`
      // try mailto
      window.location.href = mailto
      setStatus('✓ Opening your email client — if it didn’t open, please email directly. (No backend connected)')
      setForm({ name: '', email: '', message: '' })
      setSending(false)
      setTimeout(() => setStatus(''), 5000)
    }, 600)
  }

  const isPlaceholder = (v) => v.startsWith('[')

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-10">
          <p className="inline-flex items-center gap-2 text-[0.74rem] font-bold tracking-[0.13em] uppercase text-[#4F46E5] mb-3">
            <span className="w-[18px] h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] rounded" /> 08 — Contact
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight text-[#0F172A]">Let's Build Something Together</h2>
          <p className="text-[#475569] mt-2 leading-relaxed">Have a question or want to collaborate? Reach out via email or the form below.</p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-7 items-start">
          <div className="bg-white border border-[#E5E0D8] rounded-2xl p-6 shadow-sm">
            <h3 className="font-extrabold text-[#0F172A]">Contact details</h3>

            <div className="flex flex-col gap-3 mt-5">
              {[
                { icon: Mail, label: 'Email', value: siteConfig.email, href: siteConfig.email.includes('@') ? `mailto:${siteConfig.email}` : '#' },
                { icon: Phone, label: 'Phone', value: siteConfig.phone, href: siteConfig.phone && !isPlaceholder(siteConfig.phone) ? `tel:${siteConfig.phone}` : '#' },
                { icon: Linkedin, label: 'LinkedIn', value: siteConfig.linkedin, href: siteConfig.linkedin },
                { icon: Github, label: 'GitHub', value: siteConfig.github, href: siteConfig.github },
                { icon: MapPin, label: 'Location', value: siteConfig.location, href: '#' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'LinkedIn' || c.label === 'GitHub' ? '_blank' : undefined}
                  rel="noopener"
                  className={`flex gap-3 items-center bg-[#F5F2EB] border rounded-xl p-3 transition ${isPlaceholder(c.value) ? 'border-dashed border-[#CBD5E1]' : 'border-[#E5E0D8] hover:border-[#4F46E5]'}`}
                  onClick={(e) => { if (c.href === '#') e.preventDefault() }}
                >
                  <span className="w-9 h-9 grid place-items-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0 font-bold"><c.icon size={14} /></span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#0F172A]">{c.label}</p>
                    <p className="text-sm text-[#475569] truncate font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="bg-white border border-[#E5E0D8] rounded-2xl p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-bold text-[#334155]">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={`mt-1 w-full bg-[#FDFBF7] text-[#0F172A] border rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition ${errors.name ? 'border-[#EF4444]' : 'border-[#E5E0D8] focus:border-[#4F46E5] focus:shadow-[0_0_0_3px_rgba(79,70,229,0.12)]'}`}
                />
                <p className="text-xs text-[#EF4444] min-h-[16px] mt-1">{errors.name || ''}</p>
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-bold text-[#334155]">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className={`mt-1 w-full bg-[#FDFBF7] text-[#0F172A] border rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition ${errors.email ? 'border-[#EF4444]' : 'border-[#E5E0D8] focus:border-[#4F46E5] focus:shadow-[0_0_0_3px_rgba(79,70,229,0.12)]'}`}
                />
                <p className="text-xs text-[#EF4444] min-h-[16px] mt-1">{errors.email || ''}</p>
              </div>
            </div>
            <div className="mt-1">
              <label htmlFor="message" className="text-xs font-bold text-[#334155]">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi Rayan, I'd like to talk about..."
                className={`mt-1 w-full bg-[#FDFBF7] text-[#0F172A] border rounded-[10px] px-3.5 py-2.5 text-sm outline-none resize-y transition ${errors.message ? 'border-[#EF4444]' : 'border-[#E5E0D8] focus:border-[#4F46E5] focus:shadow-[0_0_0_3px_rgba(79,70,229,0.12)]'}`}
              />
              <p className="text-xs text-[#EF4444] min-h-[16px] mt-1">{errors.message || ''}</p>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#4F46E5] via-[#3B82F6] to-[#0EA5E9] text-white font-semibold py-3 rounded-xl disabled:opacity-60 hover:shadow-[0_8px_22px_rgba(79,70,229,0.3)] transition shadow-sm"
            >
              <Send size={16} /> {sending ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className={`text-sm mt-3 ${status.startsWith('✓') || status.startsWith('Opening') ? 'text-[#16A34A]' : status.includes('fix') ? 'text-[#EF4444]' : 'text-[#334155]'}`}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
