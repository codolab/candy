import { css } from "@candy/atomic";
import {
  createStyleParse,
  setup,
  getDefaultConfig,
  globalTheme,
  merge,
} from "@candy-moon/engine";

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
} from "./theme";
import { processStyleSystem as processSystem } from "./system";
import { processVariant, defaultVariants } from "./variant";

const defaultConfig = getDefaultConfig(globalTheme);
// create parse with variant
const parse = createStyleParse(processSystem, processVariant);

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

const sx = (obj) => {
  const styles = parse(obj);
  console.log("sx", styles);
  return css(styles);
};

export default sx;
