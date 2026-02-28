import Link from 'next/link'
import { useReadingPreferences } from '../contexts/ReadingPreferences'
import { useState } from 'react'
import BookmarksPanel from './quran/BookmarksPanel'
export default function Header() {
  const { theme, setTheme } = useReadingPreferences()

  const cycleTheme = () => {
    const order = ['light', 'dark', 'sepia']
    const idx = order.indexOf(theme)
    const next = order[(idx + 1) % order.length]
    setTheme(next)
  }

  const themeIcon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '📖'
  const [showBookmarks, setShowBookmarks] = useState(false)

  return (
    <header className="bg-gradient-to-r from-cartoon-orange-500 to-cartoon-orange-400 p-4 flex flex-col md:flex-row justify-between items-center text-white shadow-cartoon-lg rounded-b-3xl relative">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold animate-bounce-pop hover:scale-110 transition-transform duration-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
          🎨 Skenpat-Muslim
        </Link>
        {/* desktop nav */}
        <nav className="hidden md:flex space-x-4 ml-6">
          <Link href="/" className="hover:underline">
            Sholat
          </Link>
          <Link href="/quran" className="hover:underline">
            Qur'an
          </Link>
          <Link href="/kiblat" className="hover:underline">
            Kiblat
          </Link>
          <Link href="/kalender" className="hover:underline">
            Kalender
          </Link>
        </nav>
      </div>

      <div className="mt-2 md:mt-0 flex items-center space-x-2">
        <button
          onClick={() => setShowBookmarks(true)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          title="Lihat bookmark"
        >
          ⭐
        </button>
        <button
          onClick={cycleTheme}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          title="Ganti tema"
        >
          {themeIcon}
        </button>
      </div>
      {showBookmarks && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-start p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-md w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">⭐ Bookmark Saya</h2>
              <button onClick={() => setShowBookmarks(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-300">
                ✕
              </button>
            </div>
            <BookmarksPanel />
          </div>
        </div>
      )}
    </header>
  )
}
