import { compose as _compose } from "candy-system";
import { processClassSystem as defaultProcessClassSystem } from "candy-moon-engine";

import { processStyleSystem } from "../";

import borderRadius from "./border-radius";
import border from "./border";
import typography from "./typography";

const compose = _compose.bind({ strict: true });

export const processClassSystem = compose(
  processStyleSystem,
  defaultProcessClassSystem,
  borderRadius,
  border,
  typography
);
