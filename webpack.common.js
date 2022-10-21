 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const devMode = process.env.NODE_ENV !== 'production';
 const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

 module.exports = {
   // 入口文件
   entry: {
     app:['babel-polyfill', './src/index.js'],
   },
   // 插件配置
   plugins: [
     // 构建重新生成dist目录文件
     new CleanWebpackPlugin(['dist']),
     // HTML 生成
     new HtmlWebpackPlugin({
        title: '莽风 - mangfeng.com.cn',
        template: './src/index.html',
        //HTML 压缩
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          },
        hash:true,
     }),
    //  CSS 单独分离成文件
     new MiniCssExtractPlugin({
        filename: devMode ? '[name]-main.css' : '[name].[hash].css',
        //chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
     }),
    //  CSS 压缩
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
    })

   ],
   // 输出文件
   output: {
     filename: '[name].bundle.js', //文件名
     path: path.resolve(__dirname, 'dist'), //目录
   },
   // 模块配置
   module: {
        rules: [
            // babel-loader
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            // HTML loader 
            // 取消 html-loader 后可显示 HtmlWebpackPlugin Title
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader'
            // },
            // css模块
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,//压缩
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:6]' //css 类或者ID名重新设置
                        }
                    },
                    'postcss-loader',
                ]
            },
            //图片模块
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:"./assets/",
                        }
                    }
                    
                ]
            },
            //加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    
 };