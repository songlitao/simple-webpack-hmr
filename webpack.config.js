const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        index: [
            // 同样主动引入 client.js
            "./node_modules/webpack-hot-middleware/client.js",
            // 无需引入 webpack/hot/dev-server ，webpack/hot/dev-server 通过 require('./process-update') 已经集成到 client.js 模块
            "./src/main.js",
        ]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, './dist/index.html'),
            template: path.join(__dirname, './src/index.html')
        }),
        new HotModuleReplacementPlugin()
    ]
};
