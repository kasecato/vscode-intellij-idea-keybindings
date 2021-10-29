const path = require("path");
const webpack = require("webpack");

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

module.exports = [nodeConfig];