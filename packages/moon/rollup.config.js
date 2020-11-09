import pkg from "./package.json";
import { createUMDConfig, createCJSConfig, createESMConfig } from "../../rollup.common";

const umd = createUMDConfig({
  pkg,
  name: "moon",
});

const cjs = createCJSConfig({ pkg });
const esm = createESMConfig({ pkg });

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

export default [umd, cjs, esm];
