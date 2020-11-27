import { system } from "candy-system";

export const config = {
  object: {
    transform(val) {
      switch (val) {
        case "contain":
        case "cover":
        case "fill":
        case "none":
        case "scale-down":
          return { objectFit: val };
        case "bottom":
        case "center":
        case "left":
        case "right":
        case "top":
          return { objectPosition: val };
        case "left-bottom":
          return { objectPosition: "left bottom" };
        case "left-top":
          return { objectPosition: "left top" };
        case "right-bottom":
          return { objectPosition: "right bottom" };
        case "right-top":
          return { objectPosition: "right bottom" };
        default:
          return null;
      }
    },
    translate(transformedVal) {
      if (typeof transformedVal === "object") return transformedVal;
      return null;
    },
  },
};

export const layout = system(config);
export default layout;
