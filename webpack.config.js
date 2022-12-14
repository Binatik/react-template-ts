const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

let configWebPack = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './bundle'),
    filename: 'index.js',
    publicPath: '',
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,

        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[sha1:hash:hex:3]',
              },
            },
          },
        ],
      },

      {
        test: /\.(png|svg|gif|jpg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },

      {
        test: /^((?!\.module).)*css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, './src/images/react.ico'),
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@cmp': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
};

module.exports = (env, options) => {
  let isProduction = options.mode === 'production';
  configWebPack.devtool = isProduction ? false : 'eval-cheap-module-source-map';

  return configWebPack;
};
