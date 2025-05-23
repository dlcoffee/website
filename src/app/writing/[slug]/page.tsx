import { CustomMDX } from '@/components/CustomMDX'

import { getFiles, getFileBySlug } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = await getFiles()

  return posts.map((p) => {
    return {
      slug: p.replace(/\.mdx/, ''),
    };
  });
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { mdxSource, frontMatter } = await getFileBySlug(
    decodeURIComponent(params.slug),
  )
  return (
    <section className="mx-auto w-full max-w-2xl space-y-4">
      <article className="prose prose-sm prose-zinc w-full max-w-none">
        <CustomMDX source={mdxSource} />
      </article>
    </section>
  )
}
