import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

import pkg from "./package.json";

const { PRODUCTION } = process.env;

export default [
  {
    input: "src/index.js",
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        exclude: /node_modules/,
        presets: ["@babel/preset-env"],
        sourceMaps: true,
      }),
      terser(),
      filesize(),
    ],
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true, exports: "named" },
    ],
  },
  {
    input: "src/index.js",
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        exclude: /node_modules/,
        babelHelpers: "runtime",
        sourceMaps: true,
        presets: ["@babel/preset-env"],
        plugins: [["@babel/transform-runtime", { useESModules: true }]],
      }),
      terser(),
    ],
    output: [{ file: pkg.module, format: "esm", sourcemap: true }],
  },
];
