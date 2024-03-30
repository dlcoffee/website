import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

const withMDX = createMDX({
  options: {},
})

export default withMDX(nextConfig)
