module.exports = {
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended"
	],
	plugins: ["react", "react-hooks", "jsx-a11y", "import"],
	rules: {
		"react/react-in-jsx-scope": "off", // Next.js does not require React to be in scope
		"react/prop-types": "off", // Disable prop-types as we use TypeScript
		"prettier/prettier": ["error", { endOfLine: "auto" }],
		"no-unused-vars": "off"
		// Additional rules can be added here
	},
	settings: {
		react: {
			version: "detect" // Automatically detect the react version
		}
	}
}
