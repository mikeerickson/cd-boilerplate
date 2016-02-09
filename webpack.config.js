var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: "eslint-loader?{rules:{semi:0}}",
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				loader: 'mocha-loader',
				test: path.join(__dirname, 'spec'),
				exclude: /node_modules/
			},
			{
				loader: 'babel-loader',
				test: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				query: {
					presets: 'es2015'
				}
			},
			{
				loader: 'eslint-loader',
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
	// Create `sourcemaps` for the bundle
	devtool: 'source-map'
};
