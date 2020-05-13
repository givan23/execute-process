const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Autoprefix = require('autoprefixer');

module.exports = {

    mode: 'development',
    devtool: "source-map",
    entry: {
        index: "./app/index.js",
        "clientlib-all": "./app/Clientlibs/Clientlib-all.js",
        "index-ui": "./app/ExecuteProcess/index-ui.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),                   //clean the folder "dist" in the tree
        new CopyWebpackPlugin([
            {from: 'public/index.html', to: 'index.html'},
            {from: 'public/index-ui.html', to: 'index-ui.html'},
            {from: `public/images/`, to: 'images/'},
            {from: 'public/fonts/', to: 'fonts/'},
            {from: 'public/scripts/', to: 'scripts/'},
            {from: 'public/editorialContext/', to: 'editorialContext/editorialContext.js'},


        ]),
        new MiniCssExtractPlugin({filename: `[name].css`}),
        new WriteFilePlugin(),                             //add the folder "dist" in the tree
    ],
    module: {
        rules: [
            {
                test: /\.less$/i,
                // NEW COMPILER VERSION
                // See the comments below
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader?url=false',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [Autoprefix],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
                // OLD COMPILER VERSION
                // use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
                // NOTE: We changed this line with the above ones because the old one doesn't correctly compile the sourcemap files.
                // Reference link for the problem and solution: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/29#issuecomment-386598242
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                include: [
                    path.join(__dirname, 'app'),
                    path.join(__dirname, 'node_modules/external-moduls/app'),
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {extensions: ['.js', '.jsx', '.json', '.less']},
    devServer: {
        historyApiFallback: true,
        port: 8006,
        host: "localhost",
        stats: 'minimal',
        open: true,
        overlay: true,
    }
};