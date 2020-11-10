import { system, getValue } from "candy-system";

export const config = {
  shadow: {
    property: "boxShadow",
    scale: "boxShadow",
    transform(val, scale, _props) {
      const finalVal = val === "shadow" ? "base" : val;
      const n = getValue(finalVal, scale, _props);
      if (typeof n === "object") return n;
      return { boxShadow: n };
    },
    translate(val) {
      return val;
    }
  },
};

export const boxShadow = system(config);
export default boxShadow;
