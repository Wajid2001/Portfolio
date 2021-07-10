const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { default: merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const common = require("./webpack.config");

module.exports = merge(common, {
	optimization: {
		// This will optimize Files and decerease file size
		minimize: true,
		minimizer: [
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
			`...`,
			new TerserPlugin(),
			new CssMinimizerPlugin(),
		],
	},
	performance: {
		hints: "warning",
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	plugins: [new CleanWebpackPlugin()],
});
