import { system } from "candy-system";

export const config = {
  ratio: {
    property: "aspectRatio",
    scale: "aspectRatio",
  },
  direction: true,
  end: {
    property: "end",
    scale: "inset",
  },
  start: {
    property: "start",
    scale: "inset",
  },
};

// config.aspectRatio = config.aspect;

export const layout = system(config);
export default layout;
