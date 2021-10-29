const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const stripJsonComments = require("strip-json-comments");
const webpack = require("webpack");

const packageCopyConfig = /** @type WebpackConfig */ {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./src/package-with-comment.json",
          transform: (json) => {
            return stripJsonComments(json.toString(), { whitespace: false });
          },
          to: '../package.json',
          toType: 'file'
        }
      ],
    }),
  ],
  context: __dirname,
  mode: "none", // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
  target: "node", // extensions run in a node context
  entry: {
  },
  output: {
  },
  resolve: {
  },
  module: {
  },
  externals: {
    vscode: "commonjs vscode", // ignored because it doesn't exist
  },
  performance: {
    hints: false,
  },
  devtool: "nosources-source-map", // create a source map that points to the original source file
};

/** @typedef {import('webpack').Configuration} WebpackConfig **/
/** @type WebpackConfig */
const webExtensionConfig = {
  mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
  target: 'webworker', // extensions run in a webworker context
  entry: {
    extension: './src/extension.ts', // source of the web extension main file
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist/web'),
    libraryTarget: 'commonjs',
    devtoolModuleFilenameTemplate: '../../[resource-path]'
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
    extensions: ['.ts', '.js'], // support ts-files and js-files
    alias: {
      // provides alternate implementation for node module and source files
    },
    fallback: {
      // Webpack 5 no longer polyfills Node.js core modules automatically.
      // see https://webpack.js.org/configuration/resolve/#resolvefallback
      // for the list of Node.js core module polyfills.
      assert: require.resolve('assert'),
      path: require.resolve('path-browserify'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser' // provide a shim for the global `process` variable
    })
  ],
  externals: {
    vscode: 'commonjs vscode' // ignored because it doesn't exist
  },
  performance: {
    hints: false
  },
  devtool: 'nosources-source-map' // create a source map that points to the original source file
};

const nodeConfig = /** @type WebpackConfig */ {
    context: __dirname,
    mode: "none", // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
    target: "node", // extensions run in a node context
    entry: {
      "extension-node": "./src/extension.ts", // source of the node extension main file
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "./dist"),
      libraryTarget: "commonjs",
    },
    resolve: {
      mainFields: ["module", "main"],
      extensions: [".ts", ".js"], // support ts-files and js-files
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
      ],
    },
    externals: {
      vscode: "commonjs vscode", // ignored because it doesn't exist
    },
    performance: {
      hints: false,
    },
    devtool: "nosources-source-map", // create a source map that points to the original source file
};

module.exports = [packageCopyConfig, webExtensionConfig, nodeConfig];