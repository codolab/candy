import { system } from "candy-system";

export const config = {
  d: {
    property: "display",
  },
  // overflow
  overflow: true,
  // position
  position: true,
  top: true,
  left: true,
  bottom: true,
  right: true,
  // z-index
  z: {
    property: "zIndex",
    scale: "zIndex",
  },
};

config.zIndex = config.z;

export const layout = system(config);
export default layout;
