import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export default function buildloaders(): webpack.RuleSetRule[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typeScriptLoader];
}
