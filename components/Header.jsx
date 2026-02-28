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

  const [showBookmarks, setShowBookmarks] = useState(false)

  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-400 p-3 md:p-4 flex flex-col md:flex-row justify-between items-center text-white shadow-lg rounded-b-2xl relative z-30">
      <div className="flex items-center space-x-3 md:space-x-4 w-full md:w-auto">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center gap-2" 
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.15)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-4.5V5.5L12 1 3 5.5v10L12 20z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v19" />
          </svg>
          Skenpat-Muslim
        </Link>
        {/* desktop nav */}
        <nav className="hidden md:flex space-x-6 ml-8">
          <Link href="/" className="hover:text-orange-100 transition-colors duration-200 font-medium">
            Sholat
          </Link>
          <Link href="/quran" className="hover:text-orange-100 transition-colors duration-200 font-medium">
            Qur'an
          </Link>
          <Link href="/kiblat" className="hover:text-orange-100 transition-colors duration-200 font-medium">
            Kiblat
          </Link>
          <Link href="/kalender" className="hover:text-orange-100 transition-colors duration-200 font-medium">
            Kalender
          </Link>
        </nav>
      </div>

      <div className="mt-2 md:mt-0 flex items-center space-x-2">
        <button
          onClick={() => setShowBookmarks(true)}
          className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200 hover:scale-110 active:scale-95"
          title="Lihat bookmark"
          aria-label="Bookmark"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.372-2.455a1 1 0 00-1.176 0l-3.372 2.455c-.784.57-1.839-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.049 9.379c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.952z" />
          </svg>
        </button>
        <button
          onClick={cycleTheme}
          className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200 hover:scale-110 active:scale-95"
          title="Ganti tema"
          aria-label="Theme toggle"
        >
          {theme === 'light' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          )}
          {theme === 'dark' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3c0 .63.045 1.25.13 1.86A7 7 0 0021 12.79z" />
            </svg>
          )}
          {theme === 'sepia' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 22h14" />
            </svg>
          )}
        </button>
      </div>
      {showBookmarks && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-start p-4 z-50 top-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-md w-full shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.372-2.455a1 1 0 00-1.176 0l-3.372 2.455c-.784.57-1.839-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.049 9.379c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.952z"/></svg>Bookmark Saya</h2>
              <button 
                onClick={() => setShowBookmarks(false)} 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                aria-label="Close"
              >
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
