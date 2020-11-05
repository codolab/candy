import { createCompile, createCSS } from "@candy/atomic";
import classic from "@candy/classic";
import {
  createClassParse,
  setup,
  getDefaultConfig,
  globalTheme,
  merge,
} from "@candy-moon/engine";

import { lookupWithVariant } from "./lookupWithVariant";
import sortStyles from "./sort";
import { processClassSystem as processSystem } from "../system/class";
import {
  backgroundGradient,
  boxShadow,
  outline,
  fill,
  objectPosition,
  stroke,
  strokeWidth,
  grid,
  transform,
  transition,
  animate,
} from "../theme";
import { defaultVariants } from "../variant";

const defaultConfig = getDefaultConfig(globalTheme);
// create parse with variant
const parse = createClassParse(processSystem, lookupWithVariant);
// create css with sort function
const css = createCSS(createCompile(sortStyles));

setup({
  theme: merge(defaultConfig.theme, {
    ...backgroundGradient(),
    boxShadow,
    fill,
    objectPosition,
    outline,
    stroke,
    strokeWidth,
    ...grid(),
    ...transform(),
    ...transition(),
    ...animate(),
  }),
  variants: defaultVariants,
});

const cx = (...args) => {
  const styles = parse(...args);
  console.log("cx", styles);
  const { classic: c = {}, ...finalStyles } = styles;
  let classicClass = "";
  for (let i in c) {
    classicClass += classic(c[i], i) + " ";
  }
  return (classicClass || "") + css(finalStyles);
};

export default cx;
