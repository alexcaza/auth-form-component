const webpack            = require("webpack")
const path               = require("path")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require("html-webpack-plugin")

const CONF = {
    build: "./build",
    proxy: {
        addr: 'http://koodzo.dev',
        secure: false
    }
}

module.exports = {
    entry: {
        'app.home': path.resolve(__dirname, 'app.js')
    },

    output: {
        path: CONF.build,
        filename: "[name]-[hash].js",
        chunkFilename: "[chunkhash].js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel", "eslint-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader?modules"
            }
        ],
    },

    devtool: 'source-map',

    resolve: {
        modulesDirectories: ['AuthForm', 'node_modules']
    },

    plugins: [
        new CleanWebpackPlugin(CONF.build, {
            root: process.cwd()
        }),
        new HtmlWebpackPlugin({
            filename: './exampleApp/index.html',
            template: './exampleApp/templates/index.html',
            inject: 'body'
        })
    ],

    proxy: {
        '/api/v1/': {
            target: CONF.proxy.addr,
            secure: CONF.proxy.secure
        }
    }
}
