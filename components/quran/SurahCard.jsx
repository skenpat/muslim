import Link from 'next/link'
import { useState } from 'react'

export default function SurahCard({ surah }) {
  const { number, numberOfVerses, name, revelation, tafsir } = surah
  const [displayTafsir, setDisplayTafsir] = useState(false)

  return (
    <>
      {/* Card */}
      <div className="cartoon-card flex w-full">
        <div>
          <div className="px-2 md:px-3 lg:px-4 py-5 h-full text-3xl bg-gradient-to-br from-cartoon-orange-400 to-cartoon-orange-500 rounded-l-xl font-bold text-white flex justify-center items-center shadow-md" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            {number}
          </div>
        </div>
        <div className="w-full">
          <Link href={`/quran/surah/${number}`}>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="px-3 py-2.5">
                  <h2 className="text-lg md:text-xl font-bold text-cartoon-orange-500">
                    {name.transliteration.id}
                  </h2>
                  <h2 className="font-semibold text-sm md:text-base text-gray-600">
                    {name.translation.id}
                  </h2>
                </div>
              </div>

              <div className="text-right flex items-center">
                <div className="px-3">
                  <h1 className="text-xl md:text-2xl font-bold font-serif text-cartoon-orange-600">
                    <span className="font-mushaf">{name.short}</span>
                  </h1>
                </div>
              </div>
            </div>
          </Link>

          <div className="text-sm mt-1 flex justify-between px-3 pb-3 text-gray-600">
            <div className="font-bold">
              {numberOfVerses} ayat • surah {revelation.id}
            </div>

            <div className="hover:text-cartoon-orange-500 cursor-pointer transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                title="Lihat Tafsir"
                onClick={() => setDisplayTafsir(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tafsir */}
      <div
        className={`fixed inset-0 z-10 flex justify-center p-4 bg-slate-900/40 backdrop-blur-sm duration-300 overflow-y-auto ${
          displayTafsir ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="w-full md:w-2/3 lg:w-1/2 my-auto">
          {/* Head */}
          <div className="p-4 rounded-t-2xl bg-gradient-to-r from-cartoon-orange-500 to-cartoon-orange-400 text-white relative shadow-cartoon-lg">
            <div className="absolute top-3 right-3 p-2 hover:bg-white/20 rounded-full cursor-pointer transition-all" onClick={() => setDisplayTafsir(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="px-2 py-2">
                  <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                    {name.transliteration.id}
                  </h2>
                  <h2 className="font-semibold text-sm">{name.translation.id}</h2>
                </div>
              </div>

              <div className="text-right flex items-center">
                <div className="px-3 pt-2">
                  <h1 className="text-2xl font-bold font-serif" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                    <span className="font-mushaf">{name.short}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 rounded-b-2xl bg-white shadow-cartoon-lg">
            <p className="mb-4">
              <strong>
                Qur'an surah ke-{number}, terdiri dari {numberOfVerses} ayat dan
                termasuk surah {revelation.id}.
              </strong>
            </p>
            <p className="text-gray-700 leading-relaxed">{tafsir.id}</p>
          </div>
        </div>
      </div>
    </>
  )
}
