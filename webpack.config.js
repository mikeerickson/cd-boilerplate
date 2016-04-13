var path    = require('path');
var webpack = require('webpack');

module.exports = {

	// Create `sourcemaps` for the bundle
	devtool: 'source-map',

	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, loader: "eslint-loader?{rules:{semi:0}}", exclude: /node_modules/ }
		],
		loaders: [
			{ test: path.join(__dirname, 'spec'),
				loader: 'mocha-loader',
				exclude: /node_modules/
			},
			{
				test: path.join(__dirname, 'src'),
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: 'es2015'
				}
			},
			{
				test: /\.js$/,
				loader: 'eslint-loader',
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
	}

};
