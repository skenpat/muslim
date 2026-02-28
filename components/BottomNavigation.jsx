import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const navs = [
  {
    name: 'Sholat',
    url: '/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Qur'an",
    url: '/quran',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    name: 'Kiblat',
    url: '/kiblat',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l4 8h-8l4-8zm0 4v14"
        />
      </svg>
    ),
  },
  {
    name: 'Kalender',
    url: '/kalender',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

export default function BottomNavigation() {
  const router = useRouter()
  const [active, setActive] = useState(null)
  const firstPath = '/' + router.asPath.split('/')[1]

  useEffect(() => {
    setActive(navs.find(({ url }) => url === firstPath).url)
  }, [])

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gradient-to-r from-orange-500 to-orange-400 text-white grid grid-cols-4 text-center shadow-lg border-t-2 border-orange-600 pb-safe pt-2">
      {navs.map(({ name, icon, url }, i) => (
        <Link
          href={url}
          key={i}
          className={`py-2 px-1 transition-all duration-300 hover:bg-orange-600/50 active:bg-orange-700/70 rounded-t-lg hover:scale-105 active:scale-95 flex flex-col items-center justify-center ${
            url === active ? 'bg-orange-600/60 border-t-2 border-white' : ''
          }`}
        >
          {icon}
          <span className="text-xs font-semibold mt-1">{name}</span>
        </Link>
      ))}
    </div>
  )
}
