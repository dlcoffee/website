import UnderlinedNextLink from '@/components/UnderlinedNextLink'

import { getAllFilesFrontMatter } from '@/lib/mdx'

export default async function Page() {
  const posts = await getAllFilesFrontMatter()

  return (
    <section className="mx-auto w-full max-w-2xl space-y-4">
      <div className="space-y-2">
        <p>Here are all the posts I&apos;ve written</p>
      </div>

      <div className="space-y-2">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <div>
                <UnderlinedNextLink href={`/writing/${post.slug}`}>
                  {post.slug}
                </UnderlinedNextLink>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
