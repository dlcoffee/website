export default function UnderlinedLink({
  children,
  ...props
}: React.LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className="group text-pink-500 transition-all duration-300 ease-in-out"
    >
      <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
        {children}
      </span>
    </a>
  )
}
