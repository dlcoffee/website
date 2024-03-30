import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMDX = createMDX({
  options: {},
})

export default withMDX(nextConfig)
