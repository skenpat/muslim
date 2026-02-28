import { useEffect } from 'react'

export default function Kiblat() {
  useEffect(() => {
    // Redirect ke Google Qibla Finder
    window.location.href = 'https://qiblafinder.withgoogle.com/intl/id/onboarding'
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-center text-gray-600">Mengalihkan ke Qibla Finder… Jika tidak otomatis, <a href="https://qiblafinder.withgoogle.com/intl/id/onboarding" className="text-cartoon-orange-500 underline">klik di sini</a>.</p>
    </div>
  )
}
