import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

const cjs = {
  exports: "named",
  format: "cjs",
  sourcemap: true,
};

const esm = {
  format: "esm",
  sourcemap: true,
};

export const getCJS = (override) => ({ ...cjs, ...override });
export const getESM = (override) => ({ ...esm, ...override });

const commonPlugins = [
  nodeResolve(),
  commonjs(),
  babel({
    exclude: /node_modules/,
    babelHelpers: "runtime",
    sourceMaps: true,
    presets: ["@babel/preset-env"],
    plugins: [["@babel/transform-runtime", { useESModules: true }]],
  }),
];

const minifierPlugin = terser({
  compress: {
    passes: 2,
  },
});

export const configBase = {
  input: "src/index.js",
  
  external: (id) =>
    !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  plugins: commonPlugins,
};

export const getUMDConfig = (pkg, name, env) => ({
  ...configBase,
  output: {
    file: pkg.browser,
    format: "umd",
    name,
    sourcemap: true,
  },
  external: false,
  plugins: configBase.plugins.concat(
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        env ? "production" : "development"
      ),
    }),
    minifierPlugin
  ),
});

export const getBrowserConfig = (pkg) => ({
  ...configBase,
  output: [getESM({ file: pkg.module }), getCJS({ file: pkg.main })],
  plugins: configBase.plugins.concat(minifierPlugin, filesize()),
});
