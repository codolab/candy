import pkg from "./package.json";
import { createUMDConfig, createCoreConfig } from "../../rollup.common";

const umd = createUMDConfig({
  pkg,
  name: "classic",
});

const core = createCoreConfig({ pkg });

export default [umd, core];
