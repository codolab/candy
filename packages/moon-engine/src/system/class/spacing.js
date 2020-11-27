import { system } from "candy-system";
import transform from "./clsTransform";

const config = {
  // padding
  p: {
    property: "padding",
    scale: "space",
    transform,
  },
  py: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    transform,
  },
  px: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    transform,
  },
  pt: {
    property: "paddingTop",
    scale: "space",
    transform,
  },
  pl: {
    property: "paddingLeft",
    scale: "space",
    transform,
  },
  pr: {
    property: "paddingRight",
    scale: "space",
    transform,
  },
  pb: {
    property: "paddingBottom",
    scale: "space",
    transform,
  },
  // margin
  m: {
    property: "margin",
    scale: "space",
    transform,
  },
  my: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform,
  },
  mx: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform,
  },
  mt: {
    property: "marginTop",
    scale: "space",
    transform,
  },
  ml: {
    property: "marginLeft",
    scale: "space",
    transform,
  },
  mr: {
    property: "marginRight",
    scale: "space",
    transform,
  },
  mb: {
    property: "marginBottom",
    scale: "space",
    transform,
  },
};

export const spacing = system(config);
export default spacing;
