import {
  setup,
  getDefaultConfig,
  globalTheme,
  merge,
} from "candy-moon-engine";

import { aspectRatio, boxShadow, textShadow } from "./theme";

const defaultConfig = getDefaultConfig(globalTheme);

setup({
  theme: merge(defaultConfig.theme, {
    aspectRatio,
    boxShadow,
    textShadow,
  }),
  variants: {},
});
