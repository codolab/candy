import pkg from "./package.json";
import { createUMDConfig, createCoreConfig } from "../../rollup.common";

const umd = createUMDConfig({
  input: "src/index-standalone",
  pkg,
  name: "atomic",
});

const core = createCoreConfig({ pkg });

export default [umd, core];
