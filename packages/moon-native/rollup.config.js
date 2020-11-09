import pkg from "./package.json";
import { createCoreConfig } from "../../rollup.common";

// const umd = createUMDConfig(pkg, "moonNative");

const core = createCoreConfig({ pkg });

export default [core];
