import { useContext, useEffect } from 'react'
import Helmet from 'react-helmet'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Heading2 from '@/components/Heading2'
import { FabricContext } from "@/contexts/Jsc8Context"

export default function Layout({ children, jsc8Config }) {
  const fabricCtx = useContext(FabricContext)
  const title = 'Macrometa Polling App'

  useEffect(() => {
    if (!fabricCtx.isSignedIn &&typeof fabricCtx.updateFabric === "function") {
      fabricCtx.updateFabric(jsc8Config)
    }
  }, [fabricCtx, jsc8Config])

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header
        background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)"
        title={title}
      />
      {!fabricCtx.isSignedIn
          ? <Heading2 style={{ display: "flex", justifyContent: "center", marginTop: "102px" }}>Loading...</Heading2>
          : <Container>{children(fabricCtx)}</Container>
      }
    </div>
  )
}
