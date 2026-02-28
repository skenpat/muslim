import Head from 'next/head'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import BottomNavigation from './BottomNavigation'
import { useReadingPreferences } from '../contexts/ReadingPreferences'

export default function Layout({ children, name }) {
  const title = `Skemus - ${name}`
  const { theme } = useReadingPreferences()
  const themeClass = theme ? `theme-${theme}` : ''

  return (
    <div className={`w-full mx-auto ${themeClass}`}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Mushaf.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </Head>
      <main className="text-slate-600">
        <Header />
        <Content>{children}</Content>
        <Footer />
        <BottomNavigation />
      </main>
    </div>
  )
}
