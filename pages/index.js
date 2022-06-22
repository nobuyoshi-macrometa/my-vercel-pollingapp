import Link from 'next/link'

import Layout from '@/components/Layout'
import Button from '@/components/Button'

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Example:
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // TODO: Implement call. This shouldn't be hard-coded.
  return {
    props: {
      title: '<h2>A Next-Generation Polling Application</h2>',
      content: '<p>Built from the ground up - Ut pariatur velit eu fugiat ut. Veniam commodo non esse proident ut anim irure voluptate commodo aliqua tempor Lorem excepteur cupidatat. Nulla commodo ex laboris eu sit nisi exercitation dolore labore qui elit non Lorem minim. Voluptate pariatur anim esse irure ipsum ut pariatur. Mollit occaecat velit occaecat sint pariatur tempor. Consectetur culpa tempor dolore amet officia dolore nulla nisi sunt ea.</p>'
    },
  }
}

export default function Index({ title, content }) {
  return (
    <Layout>
      {() => (
        <>
          <div>
            <div dangerouslySetInnerHTML={{ __html: title }}></div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <Link href="/new">
              <Button>New Poll</Button>
            </Link>
          </div>
        </>
      )}
    </Layout>
  )
}
