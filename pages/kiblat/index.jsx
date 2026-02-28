import Layout from '../../components/Layouts'

export default function Kiblat() {
  // The page now embeds Google Qibla Finder via iframe
  return (
    <Layout name="Kiblat">
      <h1 className="text-4xl font-bold text-cartoon-orange-500 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
        🌐 Qibla Finder
      </h1>

      <div className="mt-4" style={{ 
        position: 'relative', 
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        paddingTop: '177.78%'
      }}>
        <iframe
          src="https://qiblafinder.withgoogle.com/intl/id/onboarding"
          title="Google Qibla Finder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          allowFullScreen
        />
      </div>
    </Layout>
  )
}
