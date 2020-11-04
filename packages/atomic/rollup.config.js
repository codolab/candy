import pkg from "./package.json";
import { getUMDConfig, getBrowserConfig } from "../../rollup.common";

const { PRODUCTION } = process.env;

const umdConfig = {
  ...getUMDConfig(pkg, "atomic", PRODUCTION),
  input: "src/index-standalone"
};

const browserConfig = getBrowserConfig(pkg);

export default [umdConfig, browserConfig];
