/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'encrypted-tbn0.gstatic.com'
            },
            {
                protocol: "https",
                hostname: 'img.icons8.com'
            },
        ]
    }
}

module.exports = nextConfig
