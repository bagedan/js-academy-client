const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('static/dist'),
        filename: 'app-bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                },
                exclude: /node_modules/
            }]
    }
};