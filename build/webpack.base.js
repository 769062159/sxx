const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../html')
    },
    module:{
        rules:[
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|eot|ttf|svg|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024',
                            outputPath: 'images'
                        }
                    },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '思学行教育',
            template: path.resolve(__dirname,'../public/index.html')
        })
    ]
};