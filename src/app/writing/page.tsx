import UnderlinedNextLink from '@/components/UnderlinedNextLink'
import { Badge } from '@/components/ui/badge'

import { getAllFilesFrontMatter } from '@/lib/mdx'

export default async function Page() {
  const posts = await getAllFilesFrontMatter()

  return (
    <section className="mx-auto w-full max-w-2xl space-y-4">
      <div className="space-y-2">
        <p>Here are all the posts I&apos;ve written.</p>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => {
          const categories = post.categories?.split(' ')

          return (
            <div key={index} className="flex flex-col">
              <div>
                <UnderlinedNextLink href={`/writing/${post.slug}`}>
                  {post.title}
                </UnderlinedNextLink>
              </div>

              <div>
                <span className="text-xs font-semibold">{post.date}</span>
                {categories && (
                  <div className="space-x-1">
                    {categories.map((c) => {
                      return <Badge key={c}>{c}</Badge>
                    })}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
