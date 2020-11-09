import pkg from "./package.json";
import { createUMDConfig, createCoreConfig } from "../../rollup.common";

const umd = createUMDConfig({
  pkg,
  name: "moon",
});

const core = createCoreConfig({ pkg });

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

export default [umd, core];
