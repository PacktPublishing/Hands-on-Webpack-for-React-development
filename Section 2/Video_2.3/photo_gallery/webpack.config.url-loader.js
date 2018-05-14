
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
                        'loader': 'url-loader',
                        'options': {
                            //'limit': 8192,
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

