import Helmet from 'react-helmet'

import Header from '@/components/Header'
import Container from '@/components/Container'

export default function Layout({ children }) {

  return (
    <>
      <Helmet
        title='Macrometa Polling App'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header
        background="background-image: linear-gradient(116deg, #6767E6 0%, #7141A1 100%)"
        title='Macrometa Polling App'
      />
        <Container>{children}</Container>
    </>
  )
}
