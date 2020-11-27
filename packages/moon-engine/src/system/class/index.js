import { compose as _compose } from "candy-system";
import { processStyleSystem as defaultProcessStyleSystem } from "../";

import background from "./background";
import boxShadow from "./box-shadow";
import borderRadius from "./border-radius";
import border from "./border";
import boxAlignment from "./box-alignment";
import flexBox from "./flex-box";
import layout from "./layout";
import sizing from "./sizing";
import spacing from "./spacing";
import typography from "./typography";

const compose = _compose.bind({ strict: true });

export const processClassSystem = compose(
  defaultProcessStyleSystem,
  background,
  boxShadow,
  borderRadius,
  border,
  boxAlignment,
  flexBox,
  layout,
  sizing,
  spacing,
  typography
);
