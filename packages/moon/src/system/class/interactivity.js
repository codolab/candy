import { system } from "candy-system";

export const config = {
  resize: {
    property: "resize",
    transform(val) {
      switch (val) {
        case "none":
          return "none";
        case "y":
          return "vertical";
        case "x":
          return "horizontal";
        case "resize":
          return "both";
        default:
          return null;
      }
    }
  },
  select: {
    property: "userSelect",
  },
};

export const interactivity = system(config);
export default interactivity;
