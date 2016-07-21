'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'tether',
        'font-awesome-loader',
        'bootstrap-loader',
        path.join(__dirname, 'src/client/index.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            "window.Tether": "tether"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',},
            {test: /\.json?$/, loader: 'json'},
            {test: /\.css$/, loaders: ['style', 'css', 'postcss']},
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']},
            {test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000"},
            {test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file'},
            {test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports?jQuery=jquery'}
        ]
    },
    resolve: {extensions: ['', '.js', '.jsx']},
    resolveLoader: {root: path.join(__dirname, 'node_modules')},
    postcss: [autoprefixer]
};
