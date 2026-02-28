import Link from 'next/link'
import { useReadingPreferences } from '../../contexts/ReadingPreferences'

export default function BookmarksPanel() {
  const { bookmarks, toggleBookmark } = useReadingPreferences()

  if (bookmarks.length === 0) {
    return (
      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded">
        <p className="text-gray-600">⭐ Belum ada bookmark. Tandai ayat favorit Anda untuk muncul di sini.</p>
      </div>
    )
  }

  const groupedBysurah = {}
  bookmarks.forEach((bookmark) => {
    if (!groupedBysurah[bookmark.surahNumber]) {
      groupedBysurah[bookmark.surahNumber] = []
    }
    groupedBysurah[bookmark.surahNumber].push(bookmark.verseNumber)
  })

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-cartoon-orange-500 mb-3">⭐ Bookmark Saya</h2>
      {Object.entries(groupedBysurah).map(([surahNumber, verses]) => (
        <Link key={surahNumber} href={`/quran/surah/${surahNumber}#${verses[0]}`}>
          <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-cartoon-orange-600">
                  Surah {surahNumber} - Ayat {verses.join(', ')}
                </p>
                <p className="text-sm text-gray-600">Klik untuk membaca</p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  verses.forEach((verse) => toggleBookmark(parseInt(surahNumber), verse))
                }}
                className="text-yellow-500 hover:text-red-500 transition-colors ml-2"
                title="Hapus bookmark"
              >
                ✕
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
