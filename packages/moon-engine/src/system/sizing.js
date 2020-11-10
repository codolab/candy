import { system } from "candy-system";

const config = {
  // width
  w: {
    property: "width",
    scale: "width",
  },
  minW: {
    property: "minWidth",
    scale: "width",
  },
  maxW: {
    property: "maxWidth",
    scale: "width",
  },
  // height
  h: {
    property: "height",
    scale: "height",
  },
  minH: {
    property: "minHeight",
    scale: "height",
  },
  maxH: {
    property: "maxHeight",
    scale: "height",
  },
};

config.width = config.w;
config.minWidth = config.minW;
config.maxWidth = config.maxW;

config.height = config.h;
config.minHeight = config.minH;
config.maxHeight = config.maxH;

export const sizing = system(config);
export default sizing;
