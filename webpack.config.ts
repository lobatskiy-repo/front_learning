import path from "path";
import webpack from "webpack";
import buildPlugins from "./config/build/buildPlugins";
import buildloaders from "./config/build/buildLoaders";
import buildResolves from "./config/build/buildResolves";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

const mode = "development";
const isDev = mode === "development";
const config: webpack.Configuration = buildWebpackConfig({
  mode: mode,
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "publish", "index.html"),
  },
  isDev: isDev,
});

export default config;
