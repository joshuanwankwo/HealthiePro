const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: './index_bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './src/assets',
        port: 2019,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js|jsx|json$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|gif|pdf|svg|doc)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8000, //converts images <8kb to base64 strings
                    name: '[hash]-[name].[ext]'
                }
            },
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            hash: true
        }),
    ]
}