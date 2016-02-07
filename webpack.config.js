var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'dist/index.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				query: {
					presets: 'es2015',
				},
			},
			{
				loader: "eslint-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		// Avoid publishing files when compilation fails
		new webpack.NoErrorsPlugin()
	],
	stats: {
		// Nice colored output
		colors: true
	},
	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
