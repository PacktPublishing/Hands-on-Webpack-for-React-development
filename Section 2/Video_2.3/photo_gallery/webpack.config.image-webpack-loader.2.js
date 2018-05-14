
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),

    output: {
        path: path.resolve(__dirname, 'www/builds'),
        filename: 'bundle.js',
        publicPath: "./builds/",
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                options: {
                    "presets": ["env", "react"],
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
                        'options': {
                            'mozjpeg': {
                                'progressive': true,
                                'quality': 65
                              },
                              'optipng': {
                                'enabled': false,
                              },
                              'pngquant': {
                                'quality': '65-90',
                                'speed': 4
                              },
                              'gifsicle': {
                                'interlaced': false,
                              },
                              'webp': {
                              'quality': 75
                              },
                        },
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

