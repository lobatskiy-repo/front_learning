import webpack from "webpack";

import { BuildOptions } from "./types/config";
import buildloaders from "./buildLoaders";
import buildResolves from "./buildResolves";
import buildPlugins from "./buildPlugins";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildloaders(),
    },
    resolve: buildResolves(),
    plugins: buildPlugins(options),
  };
}
