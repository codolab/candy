import pkg from "./package.json";
import { getUMDConfig, getBrowserConfig } from "../../rollup.common";

const { PRODUCTION } = process.env;

const umdConfig = getUMDConfig(pkg, "CandyMoonRN", PRODUCTION);

const browserConfig = getBrowserConfig(pkg);

export default [umdConfig, browserConfig];
