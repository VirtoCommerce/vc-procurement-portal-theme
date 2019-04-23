var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'script': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, 'assets/static/bundle'),     // путь к каталогу выходных файлов - папка public
       publicPath: '/',
       filename: '[name].js'
   },
   devServer: {
    historyApiFallback: true
    //port: 2082
  },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            }, {
              test: /\.html$/,
              loader: 'html-loader'
            },{
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
          },{
            test: /\.css$/,
            exclude: path.resolve(__dirname, 'src/app'),
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader"
            ]
          },{
            test: /\.css$/,
            include: path.resolve(__dirname, 'src/app'),
            loader: 'raw-loader'
          }
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\|\/)core/,
        path.resolve(__dirname, 'src'), // каталог с исходными файлами
      {} // карта маршрутов
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new UglifyJSPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
}