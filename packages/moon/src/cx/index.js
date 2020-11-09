import { createCompile, createCSS } from "@candy/atomic";
import classic from "@candy/classic";
import { createClassParser } from "@candy-moon/engine";
import memoize from "fast-memoize";

import { lookupWithVariant } from "./lookupWithVariant";
import sortStyles from "./sort";
import { processClassSystem as processSystem } from "../system/class";

// create parse with variant
const parse = createClassParser(processSystem, lookupWithVariant);
// create css with sort function
const css = createCSS(createCompile(sortStyles));

// experiment with memoize
const cx = memoize(
  (...args) => {
    const styles = parse(...args);
    const { classic: c = {}, ...finalStyles } = styles;
    let classicClass = "";
    for (let i in c) {
      classicClass += classic(c[i], i) + " ";
    }
    return (classicClass || "") + css(finalStyles);
  },
  {
    strategy: memoize.strategies.variadic,
  }
);

export default cx;
