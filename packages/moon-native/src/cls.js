import { createClassParser } from "candy-moon-engine";

import css from "./css";
import { getStylesRN } from "./util";
import { processClassSystem as processSystem } from "./system/class";

const parse = createClassParser(processSystem);

const cls = (...args) => {
  const parsed = parse(...args);
  const stylesRN = getStylesRN(parsed);
  return css(stylesRN);
};

cls.raw = (...args) => {
  const parsed = parse(...args);
  return getStylesRN(parsed);
};

export default cls;
