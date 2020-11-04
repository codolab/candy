import pkg from "./package.json";
import { getUMDConfig, getBrowserConfig, configBase, getESM, getCJS } from "../../rollup.common";

const { PRODUCTION } = process.env;

const umdConfig = {
  ...getUMDConfig(pkg, "sx", PRODUCTION),
  input: "src/index-standalone.js",
}

const browserConfig = getBrowserConfig(pkg);

const umdWindConfig = {
  ...getUMDConfig({ browser: "wind/dist/index.umd.js" }, "cx", PRODUCTION),
  input: "src/index-wind.js",
}

const windConfig = {
  ...getBrowserConfig({}),
  input: "src/index-wind.js",
  output: [
    getESM({ file: "wind/dist/index.esm.js" }),
    getCJS({
      file: "wind/dist/index.js",
    }),
  ],
};

export default [umdConfig, browserConfig, umdWindConfig, windConfig];
