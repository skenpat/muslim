import { useState, useEffect } from 'react'

export default function SurahSearchBar({ verses, onSearch, isSticky = true }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([])
      onSearch([])
      return
    }

    const query = searchTerm.toLowerCase()
    const filtered = verses.filter((verse) => {
      return (
        verse.translation.id.toLowerCase().includes(query) ||
        verse.text.transliteration.en.toLowerCase().includes(query)
      )
    })

    setResults(filtered)
    onSearch(filtered.map((v) => v.number.inSurah))
  }, [searchTerm, verses, onSearch])

  const containerClass = isSticky
    ? 'sticky top-24 z-20 bg-white dark:bg-gray-800 border-b-2 border-orange-200 dark:border-gray-700 p-3 md:p-4 shadow-md'
    : 'bg-white dark:bg-gray-800 border-b-2 border-orange-200 dark:border-gray-700 p-3 md:p-4 shadow-md rounded-b-lg'

  return (
    <div className={containerClass}>
      <div className="relative">
        <input
          type="text"
          placeholder="Cari dalam surah..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 md:px-5 py-2.5 md:py-3 pl-11 md:pl-12 border-2 border-orange-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-400/30 transition-all duration-200 text-base md:text-lg"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-orange-400 dark:text-orange-300 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {searchTerm && results.length > 0 && (
        <p className="text-sm text-orange-600 dark:text-orange-400 mt-2 font-medium">
          ✓ Ditemukan {results.length} ayat
        </p>
      )}
      {searchTerm && results.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">✗ Tidak ada ayat yang cocok</p>
      )}
    </div>
  )
}
