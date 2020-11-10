import { system, getValue } from "candy-system";
import { transformColor } from "candy-moon-engine";

export const config = {
  divideX: {
    property: "& > :not(template) ~ :not(template)",
    scale: "borderWidth",
    transform(value, scale, _props) {
      const finalVal = value === "divide-x" ? "base" : value;
      const n = getValue(finalVal, scale, _props);
      return {
        borderLeftWidth: n,
      };
    },
  },
  divideY: {
    property: "& > :not(template) ~ :not(template)",
    scale: "borderWidth",
    transform(value, scale, _props) {
      const finalVal = value === "divide-y" ? "base" : value;
      const n = getValue(finalVal, scale, _props);
      return {
        borderTopWidth: n,
      };
    },
  },
  // handle divide-style divide-color
  divide: {
    property: "& > :not(template) ~ :not(template)",
    scale: "colors",
    transform(val, scale, _props) {
      switch (val) {
        case "solid":
        case "dashed":
        case "dotted":
        case "double":
        case "none":
          return { borderStyle: val };
      }

      const divideColor = getValue(val, scale, _props);
      return transformColor({ color: divideColor, property: "borderColor", variable: "--divide-opacity" });
    },
  },
  divideOpacity: {
    property: "& > :not(template) ~ :not(template)",
    scale: "opacity",
    transform(val, scale, _props) {
      const n = getValue(val, scale, _props);
      return {
        "--divide-opacity": n,
      };
    },
  },
};

export const border = system(config);
export default border;
