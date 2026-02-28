import copy from 'copy-to-clipboard'
import { useEffect, useState } from 'react'
import { useReadingPreferences } from '../../contexts/ReadingPreferences'
import { useQuranLastRead } from '../../utils/quran' 
import ClipboardCheckFill from '../icons/ClipboardCheckFill'
import ClipboardIcon from '../icons/ClipboardIcon'
import PinAngleIcon from '../icons/PinAngleIcon'
import PinFill from '../icons/PinFill'

export default function VerseCard({ verse, options, surahNumber = null }) {
  const { lastRead, setLastRead } = useQuranLastRead()
  const { fontSize, customFontSizePx, theme, lineHeight, bookmarks, toggleBookmark } = useReadingPreferences()
  const [displayMenu, setDisplayMenu] = useState(false)
  const [verseLink, setVerseLink] = useState(null)
  const [copied, setCopied] = useState(false)

  const { number, text, translation, audio } = verse
  const { displayLatin, displayAudio, displayTranslate } = options

  const isBookmarked =
    surahNumber &&
    bookmarks.some(
      (b) => b.surahNumber === surahNumber && b.verseNumber === number.inSurah
    )

  const fontSizeMap = {
    sm: 'text-sm leading-normal',
    lg: 'text-lg',
    '2xl': 'text-2xl',
    '4xl': 'text-4xl',
  }

  const lineHeightMap = {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  }

  const themeClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-gray-100',
    sepia: 'bg-amber-50 text-amber-900',
  }

  const arabicBaseClass = fontSizeMap[fontSize] || 'text-lg'
  const arabicLineClass = lineHeightMap[lineHeight] || 'leading-relaxed'
  const arabicThemeClass = themeClasses[theme] || ''


  useEffect(() => {
    setVerseLink(
      window.location.origin + window.location.pathname + '#' + number.inSurah
    )
  }, [number.inSurah])

  const copyVerseLink = (link) => {
    const copied = copy(link)
    if (copied) setCopied(true)
    setTimeout(() => setCopied(false), 5000)
  }

  const onPlay = (e) => {
    const audios = document.querySelectorAll('audio')
    audios.forEach((audio) => {
      if (audio.src !== e.target.src) {
        audio.pause()
        audio.currentTime = 0
      }
    })
    e.target.play()
  }

  const nextAudio = (e) => {
    const audios = document.querySelectorAll('audio')
    const next = audios.item(number.inSurah)
    if (next) {
      const a = document.createElement('a')
      a.href = window.location.pathname + '#' + (number.inSurah + 1)
      a.click()
      next.play()
    }
  }

  return (
    <div
      id={number.inSurah}
      className={`${options?.offsetOn ? 'mb-4 -mt-16 pt-16' : ''} ${themeClasses[theme] || ''} transition-colors duration-300`}
    >
      <div onDoubleClick={() => setDisplayMenu(!displayMenu)} className="flex">
        <div className="verse-number font-bold text-cartoon-orange-600 mr-3">
          <div className={`sticky top-14 px-3 py-1.5 rounded-full border-2 border-cartoon-orange-500 ${themeClasses[theme] || ''}`}>
            {number.inSurah}
          </div>
        </div>
        <div className="w-full">
          {/* Arab */}
          <p 
            className={`text-right font-serif ${arabicBaseClass} ${arabicLineClass} ${arabicThemeClass}`}
            {...(fontSize === 'custom' ? { style: { fontSize: `${customFontSizePx}px` } } : {})}>
            <span className="font-mushaf">{text.arab}</span>
          </p>

          {/* Latin */}
          {displayLatin && (
            <em className={`text-cartoon-orange-400/70 block mt-3 italic text-sm ${theme === 'dark' ? 'text-cartoon-orange-300' : ''}`}>
              {text.transliteration.en}
            </em>
          )}

          {/* Translate */}
          {displayTranslate && (
            <p className={`block mt-2 text-sm ${theme === 'light' ? 'text-gray-700' : theme === 'dark' ? 'text-gray-300' : 'text-amber-900'}`}>
              {translation.id}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {displayAudio && (
              <div className={`overflow-hidden flex justify-center items-center h-8 flex-1 min-w-fit rounded-xl border-2 ${
                theme === 'light'
                  ? 'border-cartoon-orange-300 bg-cartoon-orange-50'
                  : theme === 'dark'
                  ? 'border-gray-600 bg-gray-800'
                  : 'border-amber-300 bg-amber-100'
              }`}>
                <audio
                  className="w-full"
                  src={audio.primary}
                  preload="none"
                  controls={true}
                  onPlay={onPlay}
                  onEnded={nextAudio}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={`overflow-hidden duration-300 ${displayMenu ? 'h-auto' : 'h-0'}`}>
        <div className="flex gap-3 px-3 justify-start text-cartoon-orange-500 font-semibold flex-wrap py-2 mt-2">
          {/* Copy link button */}
          <div
            title="Salin link ayat"
            className="flex items-center gap-2 cursor-pointer hover:text-cartoon-orange-600 hover:scale-110 duration-300 transition-all text-sm"
            onClick={() => copyVerseLink(verseLink)}
          >
            {!copied ? <ClipboardIcon /> : <ClipboardCheckFill />}
            <span>{!copied ? 'Salin' : '✓ Tersalin'}</span>
          </div>

          {/* Bookmark button */}
          {surahNumber && (
            <div
              title={isBookmarked ? 'Hapus dari bookmark' : 'Tambah ke bookmark'}
              className={`flex items-center gap-2 cursor-pointer hover:scale-110 duration-300 transition-all text-sm ${
                isBookmarked
                  ? 'text-yellow-500 hover:text-yellow-600'
                  : 'text-gray-400 hover:text-yellow-500'
              }`}
              onClick={() => toggleBookmark(surahNumber, number.inSurah)}
            >
              <span>
                {isBookmarked ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.849L19.335 24 12 19.771 4.665 24 6 15.597 0 9.748l8.332-1.73L12 .587z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.952a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.372-2.455a1 1 0 00-1.176 0l-3.372 2.455c-.784.57-1.839-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.049 9.379c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.952z" />
                  </svg>
                )}
              </span>
              <span>{isBookmarked ? 'Bookmark' : 'Bookmark'}</span>
            </div>
          )}

          {/* Last read button */}
          {options?.showLastReadButton && (
            <div
              title="Tandai terakhir dibaca"
              className="flex items-center gap-2 cursor-pointer hover:text-cartoon-orange-600 hover:scale-110 duration-300 transition-all text-sm"
              onClick={() => setLastRead({ ...verse, link: verseLink })}
            >
              {lastRead?.number.inQuran !== number.inQuran ? (
                <PinAngleIcon />
              ) : (
                <PinFill />
              )}
              <span>
                {lastRead?.number.inQuran !== number.inQuran
                  ? 'Tandai'
                  : '📌 Ditandai'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
