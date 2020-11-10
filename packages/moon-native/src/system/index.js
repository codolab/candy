import { compose } from "candy-system";
import { processStyleSystem as defaultProcessStyleSystem } from "candy-moon-engine";

import borderRadius from "./border-radius";
import border from "./border";
import image from "./image";
import layout from "./layout";
import spacing from "./spacing";
import typography from "./typography";

export const processStyleSystem = compose(
  defaultProcessStyleSystem,
  borderRadius,
  border,
  image,
  layout,
  spacing,
  typography
);
