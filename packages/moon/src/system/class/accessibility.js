import { system } from "candy-system";

export const config = {
  box: {
    transform(val) {
      switch (val) {
        case "border":
          return { boxSizing: "border-box" };
        case "content":
          return { boxSizing: "content-box" };
        default:
          return null;
      }
    },
    translate(val) {
      if (typeof val === "object") return val;
      return null;
    },
  },
};

export const accessibility = system(config);
export default accessibility;
