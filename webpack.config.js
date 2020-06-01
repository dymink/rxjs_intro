const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    //entry: './src/index.js',
    output: {
        filename:  '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
             contentBase: './dist',
    },
    plugins: [
            new CleanWebpackPlugin({ 
                cleanStaleWebpackAssets: false 
            }),
            new HtmlWebpackPlugin({
                title: 'Rxjs Rxjs Rxjs',
                template: './src/index.html'
            }),
    ],
};