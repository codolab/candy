import { compose } from "candy-system";
import { processStyleSystem as defaultProcessStyleSystem } from "candy-moon-engine";

import animation from "./animation";
import grid from "./grid";
import interactivity from "./interactivity";
import layout from "./layout";
import svg from "./svg";
import table from "./table";
import transform from "./transform";
import transition from "./transition";

export const processStyleSystem = compose(
  defaultProcessStyleSystem,
  animation,
  grid,
  interactivity,
  layout,
  svg,
  table,
  transform,
  transition,
);
