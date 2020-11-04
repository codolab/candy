import { compile as defaultCompile } from "./core";
import css2obj from "./css2obj";

export const createCSS = (compile = defaultCompile) => (val, ...exprs) => {
  const obj = Array.isArray(val) ? css2obj(val, exprs) : val;
  const classes = compile(obj);
  return classes;
};

const css = createCSS();

export default css;
