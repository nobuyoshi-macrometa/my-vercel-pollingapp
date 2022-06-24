import FabricProvider from '@/contexts/Jsc8Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <FabricProvider>
      <Component {...pageProps} />
    </FabricProvider>
  )
  
}

export default MyApp
