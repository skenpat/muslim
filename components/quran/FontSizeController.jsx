import { useReadingPreferences } from '../../contexts/ReadingPreferences'

export default function FontSizeController() {
  const {
    fontSize,
    setFontSize,
    theme,
    setTheme,
    lineHeight,
    setLineHeight,
    tajweedHighlight,
    setTajweedHighlight,
  } = useReadingPreferences()

  const fontSizes = [
    { label: 'A', size: 'text-sm', value: 'sm' },
    { label: 'A', size: 'text-lg', value: 'lg' },
    { label: 'A', size: 'text-2xl', value: '2xl' },
    { label: 'A', size: 'text-4xl', value: '4xl' },
  ]

  const themes = [
    { name: '☀️ Terang', value: 'light' },
    { name: '🌙 Gelap', value: 'dark' },
    { name: '📖 Sepia', value: 'sepia' },
  ]

  const lineHeights = [
    { name: 'Rapat', value: 'tight' },
    { name: 'Biasa', value: 'normal' },
    { name: 'Santai', value: 'relaxed' },
    { name: 'Luas', value: 'loose' },
  ]

  return (
    <div className="sticky top-24 z-20 bg-white dark:bg-gray-900 border-b-2 border-cartoon-orange-200 dark:border-gray-700 p-4 space-y-3 shadow-md">
      {/* Font Size Control */}
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

      {/* Line Height Control */}
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

      {/* Theme Control */}
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

      {/* Tajweed Highlight Toggle */}
      <div className="flex items-center gap-3 justify-between flex-wrap">
        <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Tajwid:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setTajweedHighlight(!tajweedHighlight)}
            className={`px-4 py-1 rounded-lg font-medium transition-all ${
              tajweedHighlight
                ? 'bg-green-500 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tajweedHighlight ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    </div>
  )
}
