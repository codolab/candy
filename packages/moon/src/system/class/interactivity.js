import { system, getValue } from "@candy/system";

export const config = {
  resize: {
    transform(val) {
      switch (val) {
        case "none":
          return { resize: "none" };
        case "y":
          return { resize: "vertical" };
        case "x":
          return { resize: "horizontal" };
        case "resize":
          return { resize: "both" };
        default:
          return { resize: val };
      }
    },
    translate(val) {
      return val;
    },
  },
  select: {
    properties: ["userSelect"],
  },
};

export const interactivity = system(config);
export default interactivity;
