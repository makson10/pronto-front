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
            {
                protocol: "https",
                hostname: process.env.VERCEL_BLOB_STORAGE_TOKEN + '.public.blob.vercel-storage.com'
            },
        ]
    }
}

console.log(process.env.VERCEL_BLOB_STORAGE_TOKEN + '.public.blob.vercel-storage.com');

module.exports = nextConfig
