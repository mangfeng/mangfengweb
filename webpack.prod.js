const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

// 线上版本
module.exports = merge(common, {
    mode: "production",
    // devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            extractComments: true, // 提取注释
            parallel: true, // 开启并行压缩，充分利用cpu
        }),
        // 指定其他library开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
}); 