import { system } from "candy-system";

export const config = {
  rounded: {
    property: "borderRadius",
    scale: "borderRadius",
  },
  //
  roundedTopLeft: {
    property: "borderTopLeftRadius",
    scale: "borderRadius",
  },
  roundedTopRight: {
    property: "borderTopRightRadius",
    scale: "borderRadius",
  },
  roundedBottomLeft: {
    property: "borderBottomLeftRadius",
    scale: "borderRadius",
  },
  roundedBottomRight: {
    property: "borderBottomRightRadius",
    scale: "borderRadius",
  },
  //
  roundedTop: {
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
    scale: "borderRadius",
  },
  roundedBottom: {
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    scale: "borderRadius",
  },
  roundedLeft: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    scale: "borderRadius",
  },
  roundedRight: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
    scale: "borderRadius",
  },
}

config.borderRadius = config.rounded;
//
config.borderTopLeftRadius = config.roundedTopLeft;
config.borderTopRightRadius = config.roundedTopRight;
config.borderBottomLeftRadius = config.roundedBottomLeft;
config.borderBottomRightRadius = config.roundedBottomRight;
//
config.borderTopRadius = config.roundedTop;
config.borderBottomRadius = config.roundedBottom;
config.borderLeftRadius = config.roundedLeft;
config.borderRightRadius = config.roundedRight;

export const borderRadius = system(config);
export default borderRadius;
