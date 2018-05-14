
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),

    output: {
        path: path.resolve(__dirname, 'www/builds'),
        filename: 'bundle.js',
        publicPath: "/builds/",
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, 'src'),
            },
        ],
    },

    plugins: [ 
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            title: "Chess Timer",
            minify: true,
            hash: true,
        }),
        new HtmlWebpackPlugin({
            filename: "dev.html",
            title: "Dev Chess Timer",
        }),
        new webpack.DefinePlugin({
            PRODUCTION: false,
        }),
    ],

    devtool: 'source-map',
};

