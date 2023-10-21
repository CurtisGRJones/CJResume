const path = require('path');
//const Dotenv = require('dotenv-webpack');
//const CopyPlugin = require("copy-webpack-plugin");
const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node16.20',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
        {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
  },
  plugins: [
    //new Dotenv(),
    //new CopyPlugin({
      //patterns:
          //[{
              //from: '.env',
              //to: '.'
          //}]
  //}),
  ],
}