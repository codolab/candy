import { createStyleParser } from "candy-moon-engine";
import css2rn from "css-to-react-native";

import css from "./css";
import { getStylesRN } from "./util";
import { processStyleSystem as processSystem } from "./system";

const parse = createStyleParser(processSystem);

const sx = (obj) => {
  const parsed = parse(obj);
  const stylesRN = getStylesRN(parsed);
  return css(stylesRN);
};

sx.raw = (obj) => {
  const parsed = parse(obj);
  const stylesRN = getStylesRN(parsed);
  return stylesRN;
}

export default sx;
