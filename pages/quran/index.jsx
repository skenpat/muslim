import { useState, useEffect } from 'react'
import ErrorCard from '../../components/ErrorCards'
import Layout from '../../components/Layouts'
import Loading from '../../components/Loading'
import BookmarksPanel from '../../components/quran/BookmarksPanel'
import LastReadCard from '../../components/quran/LastReadCard'
import ReadingStats from '../../components/quran/ReadingStats'
import SurahCard from '../../components/quran/SurahCard'
import { useQuranListSurah } from '../../utils/quran'

export default function Quran() {
  const [showBookmarks, setShowBookmarks] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { listSurah, loading, error, getListSurah } = useQuranListSurah()

  const filteredSurah = listSurah?.filter((s) => {
    const term = searchTerm.toLowerCase()
    return (
      s.name.transliteration.id.toLowerCase().includes(term) ||
      s.name.translation.id.toLowerCase().includes(term) ||
      s.number.toString() === term
    )
  })

  useEffect(() => {
    getListSurah()
  }, [])

  return (
    <Layout name="Qur'an">
      <h1 className="text-4xl font-bold text-cartoon-orange-500 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
        📖 Qur'an
      </h1>

      <LastReadCard />

      {/* Bookmark & Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-1">
          <ReadingStats />
        </div>
        <div className="lg:col-span-2">
          <button
            onClick={() => setShowBookmarks(!showBookmarks)}
            className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold rounded-lg hover:shadow-lg transition-all mb-2 flex items-center justify-center gap-2"
          >
            <span>⭐ Lihat Bookmark Saya</span>
            <span className="text-sm bg-white/30 px-2 py-1 rounded">Tampilkan/Sembunyikan</span>
          </button>
          {showBookmarks && <BookmarksPanel />}
        </div>
      </div>

      {loading && <Loading message="Memuat semua surah..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {/* Search surah */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari surah..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border-2 border-cartoon-orange-300 rounded-lg focus:outline-none focus:border-cartoon-orange-500"
        />
      </div>

      {(filteredSurah || []).length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {(filteredSurah || []).map((surah, i) => (
            <SurahCard key={i} surah={surah} />
          ))}
        </div>
      ) : (
        !loading && searchTerm && (
          <p className="text-center text-gray-500">Tidak ada surah yang cocok.</p>
        )
      )}
    </Layout>
  )
}
