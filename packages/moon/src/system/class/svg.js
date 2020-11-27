import { system, get } from "candy-system";

export const config = {
  stroke: {
    scale: "stroke",
    transform(val, strokeScale, _props) {
      const strokeWidthScale = get(_props.theme, "strokeWidth") || {};
      if (strokeWidthScale[val]) {
        return { strokeWidth: strokeWidthScale[val] };
      }
      const strokeValue = get(strokeScale, val, null);
      if (!strokeValue) return null;
      return { stroke: strokeValue };
    },
    translate(val) {
      return val;
    }
  },
};

export const svg = system(config);
export default svg;
