
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const wp = require("webpack");

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.jsx'),
        admin: path.resolve(__dirname, 'src/admin.jsx'),
    },

    output: {
        path: path.resolve(__dirname, 'www/builds'),
        filename: '[name]_bundle.js',
        publicPath: "builds/",
    },

    devServer: {
        contentBase: path.resolve(__dirname, "www"),
        historyApiFallback: true,
        //hot: true,
        compress: true,
        host: "0.0.0.0",
        port: 8080,
        overlay: {
            warnings: true,
            errors: true,
        },
        watchContentBase: true,
    },
    
    plugins: [
        new wp.optimize.CommonsChunkPlugin({
            name: 'albion',
        }),
    ],
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                options: {
                    "presets": ["env", "react"],
                    "plugins": ["react-hot-loader/babel"],
                },
            },
            {
                test: /\.(png)|(jpe?g)$/,
                loader: [ 
                    {
                        'loader': 'file-loader',
                        'options': {
                            'name': '[name].[ext]',
                        },
                    },
                    {
                        'loader': 'image-webpack-loader',
                    },
                ],
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, 'src'),
            },
        ],
    },

    devtool: 'source-map',
};

