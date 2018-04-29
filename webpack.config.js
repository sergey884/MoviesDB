const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const development = process.env.NODE_ENV === 'development';

module.exports = {
	entry: [
		// 'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js',
		library: '[name]'
	},
	devtool: development ? 'eval' : 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'es2017', 'stage-0', 'react'],
						plugins: [
								"react-hot-loader/babel",
								'transform-runtime', 
								'transform-class-properties', 
								'transform-decorators-legacy'
							]
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Movies DB',
			template: './public/index.html',
		}),
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		host: 'localhost',
		port: 3000,
		// hot: true,
		open: true
	}
};