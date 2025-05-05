/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SITE_URL: 'https://hathimashir.com',
        name: 'Hathim Ashir'
    },
    images: {
        unoptimized: true,
    },
    output: 'export',
    staticPageGenerationTimeout: 300,
    // Remove headers for static export since they don't work with 'output: export'
    // Instead, we'll implement CSP through meta tags in _document.tsx
}

module.exports = nextConfig
