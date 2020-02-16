const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');

const isDevServer = process.argv.some(v => v.includes('webpack-dev-server'));

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.scss/,
        loader: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: 'sass-loader',
            options: {
              importer: jsonImporter({
                resolver: function(dir, url) {
                  if (url.startsWith('~') && url.endsWith('.json')) {
                    return path.resolve(
                      __dirname,
                      'node_modules',
                      url.substr(1)
                    );
                  } else if (url.endsWith('.json')) {
                    return path.resolve(dir, url);
                  }

                  return url;
                },
              }),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      settings: path.resolve(
        isDevServer ? './src/settings.dev' : './src/settings.prod'
      ),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 8080,
  },
  devtool: isDevServer ? 'source-map' : '',
};
