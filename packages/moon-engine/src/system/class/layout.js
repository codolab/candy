import { system } from "candy-system";
import transform from "./clsTransform";

export const config = {
  display: {
    property: "display",
    transform(val) {
      return val === "hidden" ? "none" : val;
    }
  },
  top: {
    property: "top",
    scale: "inset",
    transform,
  },
  left: {
    property: "left",
    scale: "inset",
    transform,
  },
  bottom: {
    property: "bottom",
    scale: "inset",
    transform,
  },
  right: {
    property: "right",
    scale: "inset",
    transform,
  },
  inset: {
    scale: "inset",
    properties: ["top", "right", "bottom", "left"],
    transform,
  },
  insetY: {
    scale: "inset",
    properties: ["top", "bottom"],
    transform,
  },
  insetX: {
    scale: "inset",
    properties: ["right", "left"],
    transform,
  },
};

export const layout = system(config);
export default layout;
