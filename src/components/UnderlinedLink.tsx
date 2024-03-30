import Link, { type LinkProps } from 'next/link'

type Props = LinkProps & {
  children: React.ReactNode
}

export default function UnderlinedLink({ children, ...props }: Props) {
  return (
    <Link {...props} className="group transition">
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-sky-500"></span>
    </Link>
  )
}
