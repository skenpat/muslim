import { useReadingPreferences } from '../../contexts/ReadingPreferences'

export default function ReadingSettingsTab() {
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
    { name: '☀️ Terang', value: 'light' },
    { name: '🌙 Gelap', value: 'dark' },
    { name: 'Sepia', value: 'sepia' },
  ]

  const lineHeights = [
    { name: 'Rapat', value: 'tight' },
    { name: 'Biasa', value: 'normal' },
    { name: 'Santai', value: 'relaxed' },
    { name: 'Luas', value: 'loose' },
  ]

  return (
    <div className="space-y-6 p-4">
      {/* Font Size Control */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-orange-200 dark:border-gray-700 shadow-sm">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-lg">
          <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 7h4m-2-2v4M5 6h14M5 18h14M12 12v6"/></svg></span> Ukuran Huruf
        </h3>
        <div className="flex gap-2 flex-wrap">
          {fontSizes.map((item) => (
            <button
              key={item.value}
              onClick={() => setFontSize(item.value)}
              className={`${item.size} font-bold px-4 py-2 rounded-lg transition-all min-h-10 ${
                fontSize === item.value
                  ? 'bg-orange-500 text-white shadow-md hover:bg-orange-600 active:scale-95'
                  : 'bg-orange-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-200 dark:hover:bg-gray-600 active:scale-95'
              }`}
              title={`Ukuran ${item.value}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Font Size */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-orange-200 dark:border-gray-700 shadow-sm">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-lg">
          <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 0V5m0 14v-3m-4-4H5m14 0h-3m-2.5-2.5L15.5 5m-7 7-3.5 3.5m12-3.5 3.5 3.5"/></svg></span> Ukuran Kustom (px)
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="number"
            min="12"
            max="60"
            value={customFontSizePx}
            onChange={(e) => setCustomFontSizePx(Number(e.target.value || 16))}
            className="flex-1 min-w-20 px-3 py-2 rounded-md border-2 border-orange-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-400/30 transition-all"
          />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">px</span>
          <button
            onClick={() => setFontSize('custom')}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all min-h-10 ${
              fontSize === 'custom'
                ? 'bg-orange-500 text-white shadow-md hover:bg-orange-600 active:scale-95'
                : 'bg-orange-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-200 dark:hover:bg-gray-600 active:scale-95'
            }`}
          >
            Gunakan
          </button>
        </div>
      </div>

      {/* Line Height */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-orange-200 dark:border-gray-700 shadow-sm">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-lg">
          <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4 4 4M8 17l4 4 4-4M12 3v18"/></svg></span> Jarak Baris
        </h3>
        <div className="flex gap-2 flex-wrap">
          {lineHeights.map((item) => (
            <button
              key={item.value}
              onClick={() => setLineHeight(item.value)}
              className={`px-4 py-2 rounded-lg transition-all font-medium min-h-10 ${
                lineHeight === item.value
                  ? 'bg-orange-500 text-white shadow-md hover:bg-orange-600 active:scale-95'
                  : 'bg-orange-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-200 dark:hover:bg-gray-600 active:scale-95'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Theme */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-orange-200 dark:border-gray-700 shadow-sm">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-lg">
          <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.382V8.618a2 2 0 01.553-1.894L9 4m0 16l5.447 2.724A2 2 0 0019 18.382V11.618a2 2 0 00-.553-1.894L9 4"/></svg></span> Tema
        </h3>
        <div className="flex gap-2 flex-wrap">
          {themes.map((item) => (
            <button
              key={item.value}
              onClick={() => setTheme(item.value)}
              className={`px-4 py-2 rounded-lg transition-all font-medium min-h-10 ${
                theme === item.value
                  ? 'bg-orange-500 text-white shadow-md hover:bg-orange-600 active:scale-95'
                  : 'bg-orange-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-200 dark:hover:bg-gray-600 active:scale-95'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
