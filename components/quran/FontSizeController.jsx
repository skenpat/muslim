import { useState } from 'react'
import { useReadingPreferences } from '../../contexts/ReadingPreferences'

export default function FontSizeController() {
  const [activeTab, setActiveTab] = useState('reading')
  const {
    fontSize,
    setFontSize,
    customFontSizePx,
    setCustomFontSizePx,
    theme,
    setTheme,
    lineHeight,
    setLineHeight,
  } = useReadingPreferences()

  const fontSizes = [
    { label: 'A', size: 'text-sm', value: 'sm' },
    { label: 'A', size: 'text-lg', value: 'lg' },
    { label: 'A', size: 'text-2xl', value: '2xl' },
    { label: 'A', size: 'text-4xl', value: '4xl' },
    { label: 'A', size: '', value: 'custom' },
  ]

  const themes = [
    { name: 'Terang', value: 'light' },
    { name: 'Gelap', value: 'dark' },
    { name: 'Sepia', value: 'sepia' },
  ]

  const lineHeights = [
    { name: 'Rapat', value: 'tight' },
    { name: 'Biasa', value: 'normal' },
    { name: 'Santai', value: 'relaxed' },
    { name: 'Luas', value: 'loose' },
  ]

  return (
    <div className="sticky top-24 z-20 bg-white dark:bg-gray-900 border-b-2 border-cartoon-orange-200 dark:border-gray-700 p-4 space-y-3 shadow-md">
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setActiveTab('reading')}
          className={`px-3 py-1 rounded-md font-semibold ${activeTab === 'reading' ? 'bg-cartoon-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
          Reading
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-3 py-1 rounded-md font-semibold ${activeTab === 'settings' ? 'bg-cartoon-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
          Settings
        </button>
      </div>

      {activeTab === 'reading' ? (
        <div className="space-y-3">
          <div className="flex items-center gap-3 justify-between flex-wrap">
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Ukuran Huruf:</span>
            <div className="flex gap-2">
              {fontSizes.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setFontSize(item.value)}
                  className={`${item.size} font-bold px-3 py-1 rounded-lg transition-all ${
                    fontSize === item.value
                      ? 'bg-cartoon-orange-500 text-white shadow-md'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  title={`Ukuran ${item.value}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 justify-between flex-wrap">
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Jarak Baris:</span>
            <div className="flex gap-2 flex-wrap">
              {lineHeights.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setLineHeight(item.value)}
                  className={`text-xs px-3 py-1 rounded-lg transition-all font-medium ${
                    lineHeight === item.value
                      ? 'bg-cartoon-orange-500 text-white shadow-md'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 justify-between flex-wrap">
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Tema:</span>
            <div className="flex gap-2 flex-wrap">
              {themes.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setTheme(item.value)}
                  className={`text-xs px-3 py-1 rounded-lg transition-all font-medium ${
                    theme === item.value
                      ? 'bg-cartoon-orange-500 text-white shadow-md'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3 justify-between">
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Ukuran Kustom (px):</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={customFontSizePx}
                onChange={(e) => setCustomFontSizePx(Number(e.target.value || 16))}
                className="w-24 px-2 py-1 rounded-md border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-sm"
              />
              <button
                onClick={() => setFontSize('custom')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${fontSize === 'custom' ? 'bg-cartoon-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
                Gunakan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
