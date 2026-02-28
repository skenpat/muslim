import { useState, useEffect } from 'react'
import ErrorCard from '../../components/ErrorCards'
import Layout from '../../components/Layouts'
import Loading from '../../components/Loading'
import BookmarksPanel from '../../components/quran/BookmarksPanel'
import LastReadCard from '../../components/quran/LastReadCard'
import ReadingStats from '../../components/quran/ReadingStats'
import ReadingSettingsTab from '../../components/quran/ReadingSettingsTab'
import SurahCard from '../../components/quran/SurahCard'
import { useQuranListSurah } from '../../utils/quran'

export default function Quran() {
  const [showBookmarks, setShowBookmarks] = useState(false)
  const [activeTab, setActiveTab] = useState('surah')
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
      <h1 className="text-4xl font-bold text-cartoon-orange-500 mb-6 flex items-center gap-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-4.5V5.5L12 1 3 5.5v10L12 20z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v19" />
        </svg>
        Qur'an
      </h1>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 sticky top-20 z-10 bg-white dark:bg-gray-900 pb-3">
        <button
          onClick={() => setActiveTab('surah')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'surah'
              ? 'bg-cartoon-orange-500 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
          }`}
        >
          <span className="inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-4.5V5.5L12 1 3 5.5v10L12 20z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v19" />
            </svg>
            Surah
          </span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'settings'
              ? 'bg-cartoon-orange-500 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
          }`}
        >
          <span className="inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 0V5m0 14v-3m-4-4H5m14 0h-3m-2.5-2.5L15.5 5m-7 7-3.5 3.5m12-3.5 3.5 3.5" />
            </svg>
            Pengaturan
          </span>
        </button>
      </div>

      {/* Surah Tab */}
      {activeTab === 'surah' ? (
        <>
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
                <span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.372-2.455a1 1 0 00-1.176 0l-3.372 2.455c-.784.57-1.839-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.049 9.379c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.952z"/></svg>Lihat Bookmark Saya</span>
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
        </>
      ) : (
        <ReadingSettingsTab />
      )}
    </Layout>
  )
}
