import pkg from "./package.json";
import { getBrowserConfig } from "../../rollup.common";

const browserConfig = getBrowserConfig(pkg);

export default [browserConfig];
