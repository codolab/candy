import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

const { PRODUCTION } = process.env;

const clear = (x) => x.filter(Boolean);

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

const plugins = [
  nodeResolve(),
  commonjs(),
  json(),
];

const minifierPlugin = terser({
  compress: {
    passes: 2,
  },
});

export const createConfiguration = ({ input = "src/index.js" }) => ({
  input,

  external: (id) =>
    !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  plugins,
});

export const configBase = createConfiguration({});

export const createUMDConfig = ({ input = "src/index.js", pkg, name }) => ({
  ...configBase,
  input,
  output: {
    file: pkg.browser,
    format: "umd",
    name,
    sourcemap: true,
  },
  external: false,
  plugins: configBase.plugins.concat(
    babel({
      exclude: /node_modules/,
      babelHelpers: "runtime",
      sourceMaps: true,
      presets: ["@babel/preset-env"],
      plugins: [["@babel/transform-runtime", { useESModules: true }]],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        PRODUCTION ? "production" : "development"
      ),
    }),
    minifierPlugin
  ),
});

export const createCJSConfig = ({ pkg, minify = true, size = true }) => ({
  ...configBase,
  output: getCJS({ file: pkg.main }),
  plugins: configBase.plugins.concat(
    clear([
      babel({ exclude: /node_modules/, sourceMaps: true,  presets: ["@babel/preset-env"], }),
      minify && minifierPlugin, 
      size && filesize()
    ])
  ),
});

export const createESMConfig = ({ pkg, minify = true, size = true }) => ({
  ...configBase,
  output: getESM({ file: pkg.module }),
  plugins: configBase.plugins.concat(
    clear([
      babel({
        exclude: /node_modules/,
        babelHelpers: "runtime",
        sourceMaps: true,
        presets: ["@babel/preset-env"],
        plugins: [["@babel/transform-runtime", { useESModules: true }]],
      }),
      minify && minifierPlugin, 
      size && filesize()
    ])
  ),
});
