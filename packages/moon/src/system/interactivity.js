import { system, getValue } from "candy-system";

export const config = {
  appearance: true,
  cursor: true,
  outline: {
    scale: "outline",
    transform(val, scale, _props) {
      const n = getValue(val, scale, _props);
      if (Array.isArray(n)) {
        return {
          outline: n[0],
          outlineOffset: n[1],
        };
      }
      return { outline: val };
    },
    translate(val) {
      return val;
    },
  },
  pointerEvents: true,
  resize: true,
  userSelect: true,
};

export const interactivity = system(config);
export default interactivity;
