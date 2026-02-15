import { useEffect, useState } from 'react'
import ErrorCard from '../../components/ErrorCards'
import Layout from '../../components/Layouts'
import Loading from '../../components/Loading'
import { coords } from '../../constants/location'
import { indonesianDate } from '../../utils/jadwal-sholat'

export default function Kalender() {
  const [coordinates, setCoordinates] = useState({
    latitude: coords.lat,
    longitude: coords.lng,
  })
  const [calendar, setCalendar] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [local, setLocal] = useState(true)

  const d = new Date()

  // Fetch data
  useEffect(() => {
    if (localStorage.getItem('coords')) {
      setLocal(!local)

      if (local) {
        const { lat, lng } = JSON.parse(localStorage.getItem('coords'))
        setCoordinates({
          latitude: lat,
          longitude: lng,
        })
      }
    }

    // Query string
    const query = new URLSearchParams({
      ...coordinates,
      method: 15,
    })

    console.log(`${query}`)

    setLoading(true)
    fetch(`https://api.aladhan.com/v1/calendar?${query}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setCalendar(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [coordinates])

  return (
    <Layout name="Kalender">
      <h1 className="text-4xl font-bold text-cartoon-orange-500 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>📅 Kalender</h1>

      <div className="text-center mb-4 bg-gradient-to-r from-cartoon-orange-50 to-cartoon-orange-100 p-4 rounded-2xl border-3 border-cartoon-orange-200">
        <p className="text-lg">
          Sekarang tanggal <strong className="text-cartoon-orange-600">{indonesianDate()}</strong>
        </p>
        <p className="text-gray-700 mt-2">
          Berikut ini kalender sholat khusus bulan{' '}
          <strong className="text-cartoon-orange-600">{d.getMonth() + 1}</strong> tahun{' '}
          <strong className="text-cartoon-orange-600">{d.getFullYear()}</strong>
        </p>
      </div>

      {loading && <Loading message="Memuat kalender..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {calendar && (
        <div className="overflow-x-auto mx-auto max-w-full">
          <table className="table-fixed border-3 border-cartoon-orange-300 rounded-2xl overflow-hidden">
            <thead>
              <tr className="divide-x-2 divide-cartoon-orange-300 text-white bg-gradient-to-r from-cartoon-orange-500 to-cartoon-orange-400" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                <th className="p-3 font-bold">Tanggal</th>
                {Object.keys(calendar[0].timings).map((name) => (
                  <th className="p-3 font-bold">{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendar.map(({ timings, date }, i) => (
                <tr
                  key={i}
                  className={`font-semibold whitespace-nowrap divide-x-2 divide-cartoon-orange-200 border-b-2 border-cartoon-orange-200 ${
                    date.gregorian.day === String(d.getDate()).padStart(2, '0')
                      ? 'bg-cartoon-orange-400 text-white'
                      : 'odd:bg-cartoon-orange-50 hover:bg-cartoon-orange-100 transition-colors'
                  }`}
                >
                  <td className="p-3">
                    {date.gregorian.day}/{date.gregorian.month.number}/
                    {date.gregorian.year}
                  </td>
                  {Object.values(timings).map((time, i) => (
                    <td className="p-3" key={i}>
                      {time.slice(0, 5)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  )
}
