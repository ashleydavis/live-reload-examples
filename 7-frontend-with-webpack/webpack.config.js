const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'), // This has to be an absolute path!
    },
    devtool: "source-map",
    devServer: {
        static: './dist',
        hot: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],
};