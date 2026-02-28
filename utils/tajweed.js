// Tajweed rules mapping
const TAJWEED_RULES = {
  idhar: { name: 'Idhar', color: 'text-green-600', bg: 'bg-green-100' },
  iqlab: { name: 'Iqlab', color: 'text-blue-600', bg: 'bg-blue-100' },
  ikhfaa: { name: 'Ikhfaa', color: 'text-purple-600', bg: 'bg-purple-100' },
  qalqalah: { name: 'Qalqalah', color: 'text-red-600', bg: 'bg-red-100' },
  meem_saakinah: {
    name: 'Meem Saakinah',
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
  },
  noon_saakinah: {
    name: 'Noon Saakinah',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  madda: { name: 'Madda', color: 'text-orange-600', bg: 'bg-orange-100' },
  shaddah: { name: 'Shaddah', color: 'text-pink-600', bg: 'bg-pink-100' },
}

// Very basic pattern matching to return tajweed rules for a verse string
export const getTajweedHighlight = (text) => {
  const rules = []
  if (!text) return rules

  // Example: match noon saakinah or meem
  if (/م/.test(text)) rules.push({ start: 0, end: text.length, rule: 'meem_saakinah' })
  if (/ن/.test(text)) rules.push({ start: 0, end: text.length, rule: 'noon_saakinah' })

  return rules
}

export const TAJWEED_COLORS = TAJWEED_RULES

export const TajweedLegend = () => {
  return (
    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <p className="font-semibold text-sm mb-2 text-gray-700 dark:text-gray-300">
        📚 Legenda Tajweed
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(TAJWEED_RULES).map(([key, rule]) => (
          <div
            key={key}
            className={`text-xs p-2 rounded ${rule.bg} ${rule.color} font-semibold text-center`}
          >
            {rule.name}
          </div>
        ))}
      </div>
    </div>
  )
}
