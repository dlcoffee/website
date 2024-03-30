import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { highlight } from 'sugar-high'

import UnderlinedNextLink from './UnderlinedNextLink'
import UnderlinedLink from './UnderlinedLink'
import CodePen from './CodePen'

// @ts-ignore
function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <UnderlinedNextLink href={href} {...props}>
        {props.children}
      </UnderlinedNextLink>
    )
  }

  if (href.startsWith('#')) {
    return <UnderlinedLink {...props} />
  }

  return <UnderlinedLink target="_blank" rel="noopener noreferrer" {...props} />
}

// @ts-ignore
function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  a: CustomLink,
  code: Code,
  CodePen,
}

export function CustomMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeAutolinkHeadings, rehypeSlug],
        },
      }}
      // @ts-ignore
      components={components}
    />
  )
}
