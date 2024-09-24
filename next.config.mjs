/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/wally_score',
    assetPrefix: '/wally_score/', // Ensures that static assets are also served correctly
};

export default nextConfig;
