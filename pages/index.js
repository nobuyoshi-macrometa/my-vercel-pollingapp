import jsc8 from 'jsc8'
import Link from 'next/link'

import Layout2 from '@/components/Layout2'
import Button from '@/components/Button'

export async function getServerSideProps() {
  const client = new jsc8({
    url: process.env.MACROMETA_URL,
    fabricName: process.env.MACROMETA_FABRIC_NAME,
    apiKey: process.env.MACROMETA_API_KEY
  })

  const collection = process.env.MACROMETA_CONTENT_COLLECTION_NAME

  const results = await client.executeQuery(`For doc IN ${collection} RETURN doc`)

  return {
    props: {
      title: results[0].title,
      content: results[0].content,
    }
  }
}

export default function Index({ title, content }) {
  return (
    <Layout2>
      <>
        <div dangerouslySetInnerHTML={{ __html: title }}></div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <Link href="/new">
          <Button>New Poll</Button>
        </Link>
      </>
    </Layout2>
  )
}
