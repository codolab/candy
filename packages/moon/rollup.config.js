import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import {
  createUMDConfig,
  createCJSConfig,
  createESMConfig,
} from "../../rollup.common";

const umd = createUMDConfig({
  pkg,
  name: "moon",
});

const cjs = createCJSConfig({ pkg });
const esm = createESMConfig({ pkg });
const resetCss = {
  input: "src/_reset.css",
  output: {
    file: "dist/reset.min.css",
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      modules: false,
      sourceMap: false,
      plugins: [],
    }),
  ],
  onwarn(warning, warn) {
    if (warning.code === "FILE_NAME_CONFLICT") return;
    warn(warning);
  },
};

// const umdWindConfig = {
//   ...getUMDConfig({ browser: "wind/dist/index.umd.js" }, "cx", PRODUCTION),
//   input: "src/index-wind.js",
// }

// const windConfig = {
//   ...getBrowserConfig({}),
//   input: "src/index-wind.js",
//   output: [
//     getESM({ file: "wind/dist/index.esm.js" }),
//     getCJS({
//       file: "wind/dist/index.js",
//     }),
//   ],
// };

export default [umd, cjs, esm, resetCss];
