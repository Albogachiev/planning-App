const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'production',
    cache: false,
    stats: {
      children: true,
    },
    module:{
        rules:[
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          },
          {
            test: /\.html$/,
            use: ['html-loader']
          },
              {
                test: /\.module\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: {
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                      }
                    }
                  }
                ]
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[hash][ext][query]'
                }
              },
            {
                test:/\.(ttf|otf|eof|woff|woff2)$/,
                use:[
                 {
                     loader:'file-loader',
                     options: {
                         outputPath: 'fonts',
                         name:'[name].[ext]'
                     }
                 },
                ],
            },
            {    test:/\.(s[ca]ss)$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
               
        ],
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },

    plugins:[
        new htmlWebpackPlugin({
            template:'public/index.html'
        })
    ]
}