import { system, get } from "candy-system";

export const config = {
  shadow: {
    // v1 used for react native
    property: "boxShadow",
    scale: "boxShadow",
    transform(val, scale, _props) {
      const finalVal = val === "shadow" ? "base" : val;
      const n = get(scale, finalVal, null);
      if (!n) return null;
      if (typeof n === "object") return n;
      return { boxShadow: n };
    },
    translate(val) {
      return val;
    }
  },
  opacity: {
    property: "opacity",
    scale: "opacity",
    transform(val, scale, _props) {
      return get(scale, val, null);
    }
  }
};

export const boxShadow = system(config);
export default boxShadow;
