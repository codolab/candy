import css from "candy-atomic";
import { createStyleParser } from "candy-moon-engine";

import { processStyleSystem as processSystem } from "./system";
import { processVariant } from "./variant";
// create parse with variant
const parse = createStyleParser(processSystem, processVariant);

const sx = (obj) => {
  const styles = parse(obj);
  return css(styles);
};

sx.raw = (obj) => {
  const styles = parse(obj);
  return styles;
};

export default sx;
