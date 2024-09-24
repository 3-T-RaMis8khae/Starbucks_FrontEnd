/** @type {import("next").NextConfig} */
const nextConfig = {
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		)

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/ // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ["@svgr/webpack"]
			}
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
	images: {
		// To resolve this error, you need to configure the next.config.js file to allow images from the specified hostname.
		// Add the hostname sitem.ssgcdn.com to the images.domains array in your next.config.js file.
		remotePatterns: [
			{
				protocol: "https",
				hostname: "sitem.ssgcdn.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "simg.ssgcdn.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname:
					"prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "image.istarbucks.co.kr",
				port: "",
				pathname: "/**"
			}
		]
	}
	// todo: env 설정
	// env: {
	// 	API_URL: process.env.API_URL,
	// 	API_KEY: process
	// }
}

export default nextConfig
