import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cartoon-orange-500 to-cartoon-orange-400 p-4 flex justify-between items-center text-white shadow-cartoon-lg rounded-b-3xl">
      <div>
        <Link href="/" className="text-2xl font-bold animate-bounce-pop hover:scale-110 transition-transform duration-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
          🎨 Skenpat-Muslim
        </Link>
      </div>

      <div>{/* <button className="p-3 rounded-full">Dark</button> */}</div>
    </header>
  )
}
