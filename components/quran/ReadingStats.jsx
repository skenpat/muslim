import { useReadingPreferences } from '../../contexts/ReadingPreferences'

export default function ReadingStats() {
  const { bookmarks } = useReadingPreferences()

  const bookmarkStats = {
    totalBookmarks: bookmarks.length,
    uniqueSurahs: new Set(bookmarks.map((b) => b.surahNumber)).size,
  }

  return (
    <div className="p-4 bg-gradient-to-r from-cartoon-orange-50 to-yellow-50 border-2 border-cartoon-orange-200 rounded-lg mb-4">
      <h3 className="font-bold text-cartoon-orange-600 mb-2">📊 Statistik Pembacaan</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded p-2 text-center">
          <p className="text-2xl font-bold text-cartoon-orange-500">
            {bookmarkStats.totalBookmarks}
          </p>
          <p className="text-xs text-gray-600">Ayat Dibookmark</p>
        </div>
        <div className="bg-white rounded p-2 text-center">
          <p className="text-2xl font-bold text-cartoon-orange-500">
            {bookmarkStats.uniqueSurahs}
          </p>
          <p className="text-xs text-gray-600">Surah Dibaca</p>
        </div>
      </div>
    </div>
  )
}
