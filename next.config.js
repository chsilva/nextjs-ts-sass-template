/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/',
          destination: '/home'
        }
      ]
    }
  },
  reactStrictMode: true,
  pageExtensions: ['tsx']
}
