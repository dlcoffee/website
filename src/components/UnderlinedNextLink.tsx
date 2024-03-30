import Link, { type LinkProps } from 'next/link'

type Props = LinkProps & {
  children: React.ReactNode
}

export default function UnderlinedLink({ children, ...props }: Props) {
  return (
    <Link
      {...props}
      className="group text-sky-500 transition-all duration-300 ease-in-out"
    >
      <span className="bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
        {children}
      </span>
    </Link>
  )
}
