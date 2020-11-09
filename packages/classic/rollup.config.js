import pkg from "./package.json";
import { createUMDConfig, createCJSConfig, createESMConfig } from "../../rollup.common";

const umd = createUMDConfig({
  pkg,
  name: "classic",
});

const cjs = createCJSConfig({ pkg });
const esm = createESMConfig({ pkg });

export default [umd, cjs, esm];
