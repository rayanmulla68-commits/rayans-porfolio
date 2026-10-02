/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FDFBF7',
        'bg-alt': '#F5F2EB',
        card: '#FFFFFF',
        'card-hover': '#FBF9F5',
        border: '#E5E0D8',
        'border-light': '#E2E8F0',
        muted: '#64748B',
        'muted-2': '#94A3B8',
        heading: '#0F172A',
        body: '#334155',
        primary: '#4F46E5',
        accent: '#0EA5E9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        blink: 'blink 0.8s infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}
