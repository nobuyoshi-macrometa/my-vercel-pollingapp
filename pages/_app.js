import FabricProvider from '@/contexts/Jsc8Context'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <FabricProvider>
      <Component {...pageProps} />
    </FabricProvider>
  )
  
}

export default MyApp
