import { useState, useEffect } from 'react'

export default function SurahSearchBar({ verses, onSearch }) {
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

  return (
    <div className="sticky top-24 z-20 bg-white border-b-2 border-cartoon-orange-200 p-3 shadow-md">
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Cari dalam surah (terjemahan/transliterasi)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 border-2 border-cartoon-orange-300 rounded-lg focus:outline-none focus:border-cartoon-orange-500 transition-colors"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-3 h-5 w-5 text-cartoon-orange-400"
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
        <p className="text-sm text-gray-600 mt-2">
          Ditemukan {results.length} ayat yang cocok
        </p>
      )}
      {searchTerm && results.length === 0 && (
        <p className="text-sm text-gray-500 mt-2">Tidak ada ayat yang cocok</p>
      )}
    </div>
  )
}
