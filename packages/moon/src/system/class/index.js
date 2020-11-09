import { compose } from "@candy/system";
import { processClassSystem as defaultProcessClassSystem } from "@candy-moon/engine";

import accessibility from "./accessibility";
import background from "./background";
import backgroundGradient from "./backgroundGradient";
import border from "./border";
import grid from "./grid";
import interactivity from "./interactivity";
import layout from "./layout";
import others from "./others";
import spacing from "./spacing";
import svg from "./svg";
import table from "./table";
import transform from "./transform";
import transition from "./transition";

import { processStyleSystem } from "../";

export const processClassSystem = compose(
  processStyleSystem,
  defaultProcessClassSystem,
  accessibility,
  background,
  border,
  grid,
  interactivity,
  layout,
  others,
  spacing,
  table,
  svg,
  transform,
  transition
);
