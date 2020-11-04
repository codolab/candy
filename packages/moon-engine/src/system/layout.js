import { system } from "@candy/system";

export const config = {
  d: {
    property: "display",
  },
  // overflow
  overflow: true,
  // position
  position: true,
  top: {
    property: "top",
    scale: "inset",
  },
  left: {
    property: "left",
    scale: "inset",
  },
  bottom: {
    property: "bottom",
    scale: "inset",
  },
  right: {
    property: "right",
    scale: "inset",
  },
  inset: {
    scale: "inset",
    properties: ["top", "right", "bottom", "left"],
  },
  insetY: {
    scale: "inset",
    properties: ["top", "bottom"],
  },
  insetX: {
    scale: "inset",
    properties: ["right", "left"],
  },
  // z-index
  z: {
    property: "zIndex",
    scale: "zIndex",
  },
};

export const layout = system(config);
export default layout;
