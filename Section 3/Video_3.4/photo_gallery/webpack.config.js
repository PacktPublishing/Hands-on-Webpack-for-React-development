
const path = require("path");
const wp = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),

    output: {
        path: path.resolve(__dirname, 'www/builds'),
        filename: 'bundle.js',
        publicPath: "builds/",
    },

    devServer: {
        contentBase: path.resolve(__dirname, "www"),
        hot: true,
        compress: true,
        host: "0.0.0.0",
        port: 8080,
        overlay: {
            warnings: true,
            errors: true,
        },
        watchContentBase: true,
        watchOptions: {
            poll: 2000, // in milliseconds
        },
    },
    
    plugins: [
        new wp.HotModuleReplacementPlugin(),
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

