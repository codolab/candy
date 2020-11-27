import { system, get } from "candy-system";
import { transformColor } from "../../util";

const borders = [
  { name: "borderT", prefix: "border-t", properties: ["borderTopWidth"] },
  { name: "borderL", prefix: "border-l", properties: ["borderLeftWidth"] },
  { name: "borderR", prefix: "border-r", properties: ["borderRightWidth"] },
  { name: "borderB", prefix: "border-b", properties: ["borderBottomWidth"] },
];

export const config = {
  // border
  ...borders.reduce((acc, { name, prefix, properties }) => {
    return {
      ...acc,
      [name]: {
        properties,
        scale: "borderWidth",
        transform(val, scale, _props) {
          const finalVal = val === prefix ? "base" : val;
          const n = get(scale, finalVal, null);
          return n;
        },
      },
    };
  }, {}),
  border: {
    // handle border-collapse, border-style, border-width, border-color
    scale: "colors",
    transform(val, scale, _props) {
      const finalVal = val === "border" ? "base" : val;
      switch (finalVal) {
        case "collapse":
        case "separate":
          return { borderCollapse: finalVal };
      }

      switch (finalVal) {
        case "solid":
        case "dashed":
        case "dotted":
        case "double":
        case "none":
          return { borderStyle: finalVal };
      }

      const borderWidthScale = get(_props.theme, "borderWidth") || {};
      const borderWidthValue = borderWidthScale[finalVal];
      if (borderWidthValue) {
        return { borderWidth: borderWidthValue };
      }

      const borderColor = get(scale, finalVal, null);
      if (!borderColor) return null;

      return transformColor({
        color: borderColor,
        property: "borderColor",
        variable: "--border-opacity",
      });
    },
    translate(val) {
      return val;
    },
  },
};

export const border = system(config);
export default border;
