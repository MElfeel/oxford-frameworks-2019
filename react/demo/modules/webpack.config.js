
module.exports = (env) => {

	var config = {
		entry: {
			filename: './js/code.js'
		},
		output: {
			filename: 'dist/bundle.js'
		},
		module: {
			rules: [{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react']
						}
					}],
				}
			],
		}
	}

	return config;
}
