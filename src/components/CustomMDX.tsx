import { MDXRemote } from 'next-mdx-remote/rsc'
import { isValidElement, type HTMLAttributes, type ReactNode } from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { codeToHtml } from 'shiki'

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

function getCodeDetails(children: ReactNode): {
  code: string
  language?: string
} | null {
  if (!isValidElement(children)) {
    return null
  }

  const props = children.props as {
    children?: ReactNode
    className?: string
  }

  if (typeof props.children !== 'string') {
    return null
  }

  return {
    code: props.children.replace(/\n$/, ''),
    language: props.className?.replace('language-', ''),
  }
}

function formatLanguageLabel(language?: string) {
  switch (language) {
    case 'js':
    case 'javascript':
      return 'JavaScript'
    case 'ts':
    case 'typescript':
      return 'TypeScript'
    case 'rb':
    case 'ruby':
      return 'Ruby'
    case 'bash':
    case 'sh':
    case 'shell':
      return 'Shell'
    case 'html':
      return 'HTML'
    case 'css':
      return 'CSS'
    default:
      return language
        ? language.charAt(0).toUpperCase() + language.slice(1)
        : 'Code'
  }
}

function normalizeLanguage(language?: string) {
  switch (language) {
    case 'js':
      return 'javascript'
    case 'ts':
      return 'typescript'
    case 'rb':
      return 'ruby'
    case 'sh':
      return 'bash'
    default:
      return language ?? 'text'
  }
}

async function Pre({ children }: { children: ReactNode }) {
  const details = getCodeDetails(children)

  if (!details) {
    return <pre>{children}</pre>
  }

  const language = normalizeLanguage(details.language)
  let codeHTML: string

  try {
    codeHTML = await codeToHtml(details.code, {
      lang: language,
      themes: {
        light: 'rose-pine-dawn',
        dark: 'rose-pine-moon',
      },
      defaultColor: false,
    })
  } catch {
    codeHTML = await codeToHtml(details.code, {
      lang: 'text',
      themes: {
        light: 'rose-pine-dawn',
        dark: 'rose-pine-moon',
      },
      defaultColor: false,
    })
  }

  return (
    <div className="code-block not-prose">
      <div className="code-block__header">
        <span>{formatLanguageLabel(details.language)}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: codeHTML }} />
    </div>
  )
}

function Code({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
  if (className?.startsWith('language-')) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <code className="inline-code" {...props}>
      {children}
    </code>
  )
}

const components = {
  a: CustomLink,
  code: Code,
  pre: Pre,
  CodePen,
}

export async function CustomMDX({ source }: { source: string }) {
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
