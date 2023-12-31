const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = () => {
    return {
        entry: './src/index.tsx',
        devtool: 'inline-source-map',
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.js',
        },
        devServer: {
            port: 8001,
            contentBase: path.join(__dirname, "/dist"),
            historyApiFallback: { index: '/', disableDotRule: true }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ],
                    exclude: /node_modules/,
                    /*
                    TODO find out why these are causing issues with Webpack
                    include: [
                        path.join(__dirname, './src'),
                        path.join(__dirname, './public'),
                        path.join(__dirname, '/node_modules/@fontsource/roboto/300.css'),
                        path.join(__dirname, '/node_modules/@fontsource/roboto/400.css'),
                        path.join(__dirname, '/node_modules/@fontsource/roboto/500.css'),
                        path.join(__dirname, '/node_modules/@fontsource/roboto/700.css'),
                    ] 
                    */
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html',
                favicon: './public/favicon.ico'
            }),
            new CopyPlugin({
                patterns:
                    [{
                        from: './public',
                        globOptions: {
                            ignore: ['**/index.html']
                        },
                        to: './public'
                    }]
            }),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ]
    }
}