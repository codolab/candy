import { system, get, getValue } from "@candy/system";

export const config = {
  stroke: {
    transform(val, scale, _props) {
      const strokeWidthScale = get(_props.theme, "strokeWidth") || {};
      if (strokeWidthScale[val]) {
        return { strokeWidth: strokeWidthScale[val] };
      }
      const strokeValue = getValue(val, get(_props.theme, "stroke"), _props);
      return { stroke: strokeValue };
    },
    translate(val) {
      return val;
    }
  },
};

export const svg = system(config);
export default svg;
