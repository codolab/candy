import { system } from "candy-system";
import transform from "./clsTransform";

const config = {
  // width
  w: {
    property: "width",
    scale: "width",
    transform,
  },
  minW: {
    property: "minWidth",
    scale: "width",
    transform,
  },
  maxW: {
    property: "maxWidth",
    scale: "width",
    transform,
  },
  // height
  h: {
    property: "height",
    scale: "height",
    transform,
  },
  minH: {
    property: "minHeight",
    scale: "height",
    transform,
  },
  maxH: {
    property: "maxHeight",
    scale: "height",
    transform,
  },
};

export const sizing = system(config);
export default sizing;
