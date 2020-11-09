import pkg from "./package.json";
import { createCoreConfig } from "../../rollup.common";

const core = createCoreConfig({ pkg });

export default [core];
