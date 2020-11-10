import { system } from "candy-system";

const config = {
  // padding
  p: {
    property: "padding",
    scale: "space",
  },
  py: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
  },
  px: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
  },
  pt: {
    property: "paddingTop",
    scale: "space",
  },
  pl: {
    property: "paddingLeft",
    scale: "space",
  },
  pr: {
    property: "paddingRight",
    scale: "space",
  },
  pb: {
    property: "paddingBottom",
    scale: "space",
  },
  // margin
  m: {
    property: "margin",
    scale: "space",
  },
  my: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
  },
  mx: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
  },
  mt: {
    property: "marginTop",
    scale: "space",
  },
  ml: {
    property: "marginLeft",
    scale: "space",
  },
  mr: {
    property: "marginRight",
    scale: "space",
  },
  mb: {
    property: "marginBottom",
    scale: "space",
  },
};

config.padding = config.p;
config.paddingTop = config.pt;
config.paddingRight = config.pr;
config.paddingBottom = config.pb;
// margin
config.margin = config.m;
config.marginTop = config.mt;
config.marginRight = config.mr;
config.marginBottom = config.mb;

export const spacing = system(config);
export default spacing;
