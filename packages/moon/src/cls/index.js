import classic from "candy-classic";
import { createCompile, createCSS } from "candy-atomic";
import { createClassParser } from "candy-moon-engine";

import sortStyles from "./sort";
import { lookupWithVariant } from "./lookupWithVariant";
import { processClassSystem as processSystem } from "../system/class";

// create parse with variant
const parse = createClassParser(processSystem, lookupWithVariant);
// create css with sort function
const css = createCSS(createCompile(sortStyles));

const cls = (...args) => {
  const styles = parse(...args);
  const { classic: c = {}, ...finalStyles } = styles;
  let classicClass = "";
  for (let i in c) {
    classicClass += classic(c[i], i) + " ";
  }
  
  return (classicClass || "") + css(finalStyles);
};

cls.raw = (...args) => {
  const styles = parse(...args);
  return styles;
};

export default cls;
