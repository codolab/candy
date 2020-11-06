import pkg from "./package.json";
import { getUMDConfig, getBrowserConfig } from "../../rollup.common";

const { PRODUCTION } = process.env;

const umdConfig = getUMDConfig(pkg, "moon", PRODUCTION);

const browserConfig = getBrowserConfig(pkg);

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

export default [umdConfig, browserConfig];
