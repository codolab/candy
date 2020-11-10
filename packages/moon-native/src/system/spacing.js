import { system } from "candy-system";

export const config = {
  ps: {
    property: "paddingStart",
    scale: "space",
  },
  pe: {
    property: "paddingEnd",
    scale: "space",
  },
  ms: {
    property: "marginStart",
    scale: "space",
  },
  me: {
    property: "marginEnd",
    scale: "space",
  },
};

config.paddingStart = config.ps;
config.paddingEnd = config.pe;
config.marginStart = config.ms;
config.marginEnd = config.me;

export const spacing = system(config);
export default spacing;
