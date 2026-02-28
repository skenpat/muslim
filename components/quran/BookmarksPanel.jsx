import Link from 'next/link'
import { useReadingPreferences } from '../../contexts/ReadingPreferences'

export default function BookmarksPanel() {
  const { bookmarks, toggleBookmark } = useReadingPreferences()

  if (bookmarks.length === 0) {
    return (
      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded">
        <p className="text-gray-600 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.372-2.455a1 1 0 00-1.176 0l-3.372 2.455c-.784.57-1.839-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.049 9.379c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.952z"/></svg>Belum ada bookmark. Tandai ayat favorit Anda untuk muncul di sini.</p>
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
      <h2 className="text-xl font-bold text-cartoon-orange-500 mb-3 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.372-2.455a1 1 0 00-1.176 0l-3.372 2.455c-.784.57-1.839-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.049 9.379c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.952z"/></svg>Bookmark Saya</h2>
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
