import { system, get } from "candy-system";

export const config = {
  shadow: {
    property: "boxShadow",
    scale: "boxShadow",
    transform(val, scale, _props) {
      const finalVal = val === "shadow" ? "base" : val;
      const n = get(scale, finalVal, null);
      if (!n) return null;
      if (typeof n === "object") return n;

      return {
        "--tw-shadow": finalVal === "none" ? "0 0 #0000" : n,
        boxShadow:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      };
    },
    translate(val) {
      return val;
    },
  },
};

export const boxShadow = system(config);
export default boxShadow;
