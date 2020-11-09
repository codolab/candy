import pkg from "./package.json";
import { createCJSConfig, createESMConfig } from "../../rollup.common";

const cjs = createCJSConfig({ pkg });
const esm = createESMConfig({ pkg });

export default [cjs, esm];
