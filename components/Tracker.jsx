import { Loader } from '@googlemaps/js-api-loader'
import { useState, useEffect, useRef } from 'react'
import { coords } from '../constants/location'

export default function Tracker({ callback }) {
  const googleMap = useRef(null)
  const autoTrackButton = useRef(null)
  const [coordinates, setCoordinates] = useState({
    default: true,
    lat: coords.lat,
    lng: coords.lng,
  })

  useEffect(() => {
    // Mengaktifkan izin geo lokasi
    if (coordinates.default === true)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates)
      } else {
        console.log('Geolocation tidak didukung oleh browser ini.')
      }

    // Jika tombol auto track diklik
    autoTrackButton.current.onclick = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates)
      } else {
        console.log('Geolocation tidak didukung oleh browser ini.')
      }
    }

    // Callback
    if (coordinates !== null)
      callback({
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      })

    // Google map loader
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
      version: 'weekly',
    })

    let map
    loader.load().then(() => {
      const google = window.google
      map = new google.maps.Map(googleMap.current, {
        center: {
          lat: coordinates.lat,
          lng: coordinates.lng,
        },
        zoom: 14,
      })

      new google.maps.Marker({
        map,
        position: {
          lat: coordinates.lat,
          lng: coordinates.lng,
        },
        title: JSON.stringify({
          lat: coordinates.lat,
          lng: coordinates.lng,
        }),
      })

      // Jika map diklik maka perbarui coordinates
      map.addListener('click', (e) => {
        const { lat, lng } = e.latLng
        setCoordinates({ default: false, lat: lat(), lng: lng() })

        localStorage.setItem(
          'coords',
          JSON.stringify({ default: false, lat: lat(), lng: lng() })
        )
      })
    })
  }, [coordinates])

  // Mendapatkan coordinate
  const getCoordinates = (position) => {
    const { latitude, longitude } = position.coords
    setCoordinates({ default: false, lat: latitude, lng: longitude })

    localStorage.setItem(
      'coords',
      JSON.stringify({ default: false, lat: latitude, lng: longitude })
    )
  }

  return (
    <>
      <button
        ref={autoTrackButton}
        className="cartoon-btn mt-3 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        Lacak Otomatis
      </button>

      <div className="overflow-hidden my-4 rounded-2xl cartoon-card">
        <div className="h-96" ref={googleMap} />
      </div>
    </>
  )
}
