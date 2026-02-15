import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useQuranLastRead } from '../../utils/quran'
import VerseCard from './VerseCard'

export default function LastReadCard() {
  const { lastRead } = useQuranLastRead()
  const [loaded, setLoaded] = useState()

  // Mengatasi hydration
  useEffect(() => {
    setLoaded(true)
  }, [lastRead])

  return (
    loaded &&
    lastRead && (
      <div className="cartoon-card mb-4">
        <h1 className="text-lg font-bold text-center mb-4 text-cartoon-orange-600">📚 Terakhir dibaca</h1>

        <VerseCard
          verse={lastRead}
          options={{
            displayLatin: false,
            displayAudio: false,
            displayTranslate: true,
            showLastReadButton: false,
          }}
        />

        <div className="text-right pt-3">
          <Link
            href={lastRead.link}
            className="inline-block py-3 px-6 rounded-2xl bg-gradient-to-r from-cartoon-orange-400 to-cartoon-orange-500 text-white font-bold hover:shadow-cartoon-md transition-all duration-200 border-3 border-cartoon-orange-600"
          >
            Lanjutkan Membaca →
          </Link>
        </div>
      </div>
    )
  )
}
