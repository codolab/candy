import {
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
import { defaultVariants } from "./variant";

const defaultConfig = getDefaultConfig(globalTheme);

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
