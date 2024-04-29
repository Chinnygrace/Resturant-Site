

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: {
    index: './src/index.js',
},
  output: {
    filename: 'main.js', // Name of the bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
  },

  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
},

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your source HTML template
      filename: 'index.html', // Output filename for the generated HTML
    }),
  ],
};