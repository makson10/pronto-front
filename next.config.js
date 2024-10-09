const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
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
            {
                protocol: "https",
                hostname: 'static.wikia.nocookie.net'
            },
            {
                protocol: "https",
                hostname: process.env.VERCEL_BLOB_STORAGE_TOKEN + '.public.blob.vercel-storage.com'
            },
        ]
    }
}

module.exports = nextConfig
