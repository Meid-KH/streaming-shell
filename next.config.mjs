/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ["www.digitalshell.shop"],
  },
  // compiler: {
  //   removeConsole: true,
  // },
  // output: "export",
  // assetPrefix: "/",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

export default nextConfig
