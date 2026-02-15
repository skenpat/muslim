import { useEffect, useState } from 'react'
import BeritaCard from '../../components/berita/BeritaCard'
import ErrorCard from '../../components/ErrorCards'
import Layout from '../../components/Layouts'
import Loading from '../../components/Loading'

export default function Berita() {
  const [berita, setBerita] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // Fetch data
  useEffect(() => {
    setLoading(true)
    fetch('https://api-berita-indonesia.vercel.app/republika/islam/')
      .then((res) => res.json())
      .then(({ data }) => {
        setBerita(data.posts)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [])

  return (
    <Layout name="Berita">
      <h1 className="text-4xl font-bold text-cartoon-orange-500 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>📰 Berita Islamic</h1>

      <p className="text-gray-700 font-semibold">Berikut ini adalah kumpulan berita-berita Islamic terkini dari berbagai sumber terpercaya.</p>

      {loading && <Loading message="Memuat berita..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {berita && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4">
          {berita.map((post, i) => (
            <BeritaCard berita={post} key={i} />
          ))}
        </div>
      )}
    </Layout>
  )
}
