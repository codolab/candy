import { compose } from "@candy/system";
import { processStyleSystem as defaultProcessStyleSystem } from "../";

import background from "./background";
import borderRadius from "./border-radius";
import border from "./border";
import boxAlignment from "./box-alignment";
import flexBox from "./flex-box";
import layout from "./layout";
import typography from "./typography";

export const processClassSystem = compose(
  defaultProcessStyleSystem,
  background,
  borderRadius,
  border,
  boxAlignment,
  flexBox,
  layout,
  typography
);
