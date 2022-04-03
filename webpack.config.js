const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: process.env.NODE_ENV,
    entry: {
        main: './resources/js/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/[name].[hash].js",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader',},
                    {loader: 'postcss-loader'}
                ],
            },
            {
                test: /\.(png|jpg|gif|jpe?g|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext]'
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: "./resources/views/index.html",
            filename: "index.html",
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                '!CNAME',
                '!.gitignore',
            ],
        }),
        new CopyPlugin({
            patterns: [
                { from: "resources/favicon", to: "favicon" },
            ],
        }),
    ],
};