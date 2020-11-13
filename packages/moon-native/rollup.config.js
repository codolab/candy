import pkg from "./package.json";
import jsxPkg from "./jsx/package.json";
import {
  createCJSConfig,
  createESMConfig,
  getCJS,
  getESM,
} from "../../rollup.common";

// const umd = createUMDConfig(pkg, "moonNative");

const cjs = createCJSConfig({ pkg });
const esm = createESMConfig({ pkg });

// jsx
const jsxCJS = {
  ...createCJSConfig({ pkg: jsxPkg }),
  input: "jsx/index.js",
  output: getCJS({ file: "jsx/dist/index.js" }),
};

const jsxESM = {
  ...createESMConfig({ pkg: jsxPkg }),
  input: "jsx/index.js",
  output: getESM({ file: "jsx/dist/index.esm.js" }),
};

// jsx-dev-runtime
const jsxDevRuntimeCJS = {
  ...createCJSConfig({ pkg: jsxPkg }),
  input: "jsx/jsx-dev-runtime.js",
  output: getCJS({ file: "jsx-dev-runtime/dist/index.js" }),
};

const jsxDevRuntimeESM = {
  ...createESMConfig({ pkg: jsxPkg }),
  input: "jsx/jsx-dev-runtime.js",
  output: getESM({ file: "jsx-dev-runtime/dist/index.esm.js" }),
};

// jsx-runtime
const jsxRuntimeCJS = {
  ...createCJSConfig({ pkg: jsxPkg }),
  input: "jsx/jsx-runtime.js",
  output: getCJS({ file: "jsx-runtime/dist/index.js" }),
};

const jsxRuntimeESM = {
  ...createESMConfig({ pkg: jsxPkg }),
  input: "jsx/jsx-runtime.js",
  output: getESM({ file: "jsx-runtime/dist/index.esm.js" }),
};

export default [
  cjs, 
  esm, 
  jsxCJS, 
  jsxESM,
  jsxDevRuntimeCJS,
  jsxDevRuntimeESM,
  jsxRuntimeCJS,
  jsxRuntimeESM,
];
