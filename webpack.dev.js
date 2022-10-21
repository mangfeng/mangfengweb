 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 // 开发版本
 module.exports = merge(common, {
   
   mode: "development",
   // 使用 source-map 追踪到错误和警告在源代码中的原始位置
   devtool: 'inline-source-map',
   // webpack-dev-server 实时重新加载(live reloading)
   devServer: {
     contentBase: './dist',
     // 模块热替换
     hot: true, 
     historyApiFallback: true,
     proxy: {
        '/': {
            target: 'https://panpan.iteasy.cn/poem',
            secure: false
        }
     }
   },
   plugins:[
    new webpack.HotModuleReplacementPlugin(),
   ],

 });