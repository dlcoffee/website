import Link, { type LinkProps } from 'next/link'

type Props = LinkProps & {
  children: React.ReactNode
}

export default function UnderlinedLink({ children, ...props }: Props) {
  return (
    <Link
      {...props}
      className="group text-sm text-sky-500 transition-all duration-300 ease-in-out"
    >
      <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_1px]">
        {children}
      </span>
    </Link>
  )
}
