import Link from 'next/link'
import { useReadingPreferences } from '../contexts/ReadingPreferences'

export default function Header() {
  const { theme, setTheme } = useReadingPreferences()

  const cycleTheme = () => {
    const order = ['light', 'dark', 'sepia']
    const idx = order.indexOf(theme)
    const next = order[(idx + 1) % order.length]
    setTheme(next)
  }

  const themeIcon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '📖'

  return (
    <header className="bg-gradient-to-r from-cartoon-orange-500 to-cartoon-orange-400 p-4 flex justify-between items-center text-white shadow-cartoon-lg rounded-b-3xl">
      <div>
        <Link href="/" className="text-2xl font-bold animate-bounce-pop hover:scale-110 transition-transform duration-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
          🎨 Skenpat-Muslim
        </Link>
      </div>

      <div>
        <button
          onClick={cycleTheme}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          title="Ganti tema"
        >
          {themeIcon}
        </button>
      </div>
    </header>
  )
}
