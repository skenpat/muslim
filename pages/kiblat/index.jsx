import { useEffect } from 'react'

export default function Kiblat() {
  useEffect(() => {
    // Redirect ke Google Qibla Finder
    window.location.href = 'https://qiblafinder.withgoogle.com/intl/id/onboarding'
  }, [])

  return null
}
