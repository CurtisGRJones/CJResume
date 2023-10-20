const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
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
        publicPath: './public',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
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
            // TODO find out how to do this in 1 rule
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '/node_modules/@fontsource/roboto/300.css'),
                    path.join(__dirname, '/node_modules/@fontsource/roboto/400.css'),
                    path.join(__dirname, '/node_modules/@fontsource/roboto/500.css'),
                    path.join(__dirname, '/node_modules/@fontsource/roboto/700.css'),
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new CopyPlugin({
            patterns:
                [{
                    from: 'public',
                    globOptions: {
                        ignore: ['**/index.html']
                    }
                }]
        })
    ]
}