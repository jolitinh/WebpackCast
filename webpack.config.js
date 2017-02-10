const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'), //must be an absolute file path
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				loader: ExtractTextPlugin.extract({ //legacy way of configuring it for older plugins
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 40000 //40kb large
						}
					},
					'image-webpack-loader'
				],
				test: /\.(jpe?g|png|gif|svg)$/
			}
			/*
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			}*/
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css') //takes anything created by its loader and put it in this file
	]
};

module.exports = config;