import { useState } from 'react'

export default function BeritaCard({ berita }) {
  const { link, title, pubDate, description, thumbnail } = berita
  const [img, setImg] = useState(thumbnail)

  return (
    <div className="cartoon-card overflow-hidden">
      <div className="overflow-hidden flex justify-center items-center bg-gradient-to-br from-cartoon-orange-100 to-cartoon-orange-200 h-48">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          src={img}
          alt={title}
          onError={() => setImg('https://dummyimage.com/600x400/ff9933/fff')}
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg md:text-xl text-cartoon-orange-500 mb-3 hover:text-cartoon-orange-600">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p className="mb-3 text-sm font-semibold text-cartoon-orange-400">
          📅 {new Date(pubDate).toLocaleDateString('id-ID')}
        </p>
        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}
