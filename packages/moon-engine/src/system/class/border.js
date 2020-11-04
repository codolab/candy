import { system, get, getValue } from "@candy/system";
import { withAlphaVariable } from "../../util";

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
          const n = getValue(finalVal, scale, _props);
          return n;
        },
      },
    };
  }, {}),
  border: {
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

      const borderColor = getValue(
        finalVal,
        get(_props.theme, "colors"),
        _props
      );
      const variable = "--border-opacity";
      const [color, opacity] = withAlphaVariable({
        color: borderColor,
        variable,
      });
      if (!opacity) {
        return { borderColor: borderColor };
      }
      return {
        borderColor: color,
        [variable]: opacity,
      };
    },
    translate(val) {
      return val;
    },
  },
  borderOpacity: {
    property: "--border-opacity",
    scale: "opacity",
  },
};

export const border = system(config);
export default border;
