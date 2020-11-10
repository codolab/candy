import { compose } from "candy-system";

import background from "./background";
import borderRadius from "./border-radius";
import border from "./border";
import boxAlignment from "./box-alignment";
import boxShadow from "./box-shadow";
import flexBox from "./flex-box";
import interactivity from "./interactivity";
import layout from "./layout";
import sizing from "./sizing";
import spacing from "./spacing";
import typography from "./typography";

export const processStyleSystem = compose(
  background,
  borderRadius,
  border,
  boxAlignment,
  boxShadow,
  flexBox,
  interactivity,
  layout,
  sizing,
  spacing,
  typography
);
