/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Add this line
  },
  // Keep your trailingSlash if you added it earlier
  trailingSlash: true, 
}

module.exports = nextConfig