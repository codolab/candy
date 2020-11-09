import pkg from "./package.json";
import { createUMDConfig, createCJSConfig, createESMConfig } from "../../rollup.common";

const umd = createUMDConfig({
  input: "src/index-standalone",
  pkg,
  name: "atomic",
});

const cjs = createCJSConfig({ pkg });

const esm = createESMConfig({ pkg });

export default [umd, cjs, esm];
