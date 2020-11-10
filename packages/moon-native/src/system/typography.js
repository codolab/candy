import { system, getValue } from "candy-system";
import { transformColor } from "candy-moon-engine";

export const config = {
  fontVariant: true,
  textShadow: {
    property: "textShadow",
    scale: "textShadow",
    transform(val, scale, _props) {
      const finalVal = val === "text-shadow" ? "base" : val;
      const n = getValue(finalVal, scale, _props);
      if (typeof n === "object") return n;
      return { textShadow: n };
    },
    translate(val) {
      return val;
    },
  },
  textAlign: {
    property: "textAlignVertical",
  },
  textAlignVertical: true,
  textDecoration: {
    transform(value) {
      switch (value) {
        case "underline":
          return {
            textDecorationLine: "underline",
            textDecorationColor: "black",
            textDecorationStyle: "solid",
          };
        case "line-through":
          return {
            textDecorationLine: "line-through",
            textDecorationColor: "black",
            textDecorationStyle: "solid",
          };
        case "no-decoration":
          return {
            textDecorationLine: "none",
            textDecorationColor: "black",
            textDecorationStyle: "solid",
          };
        case "underline-double":
          return {
            textDecorationLine: "underline",
            textDecorationColor: "black",
            textDecorationStyle: "double",
          };
        case "line-through-double":
          return {
            textDecorationLine: "line-through",
            textDecorationColor: "black",
            textDecorationStyle: "double",
          };
        case "underline-dotted":
          return {
            textDecorationLine: "underline",
            textDecorationColor: "black",
            textDecorationStyle: "dotted",
          };
        case "line-through-dotted":
          return {
            textDecorationLine: "line-through",
            textDecorationColor: "black",
            textDecorationStyle: "dotted",
          };
        case "underline-dashed":
          return {
            textDecorationLine: "underline",
            textDecorationColor: "black",
            textDecorationStyle: "dashed",
          };
        case "line-through-dashed	":
          return {
            textDecorationLine: "line-through",
            textDecorationColor: "black",
            textDecorationStyle: "dashed",
          };
        default:
          return { textDecorationLine: value };
      }
    },
    translate(val) {
      return val;
    },
  },
  decoration: {
    scale: "colors",
    transform(val, scale, _props) {
      const color = getValue(val, scale, _props);
      return transformColor({
        color,
        property: "textDecorationColor",
        variable: "--decoration-opacity",
      });
    },
    translate(val) {
      return val;
    },
  },
  decorationOpacity: {
    property: "--decoration-opacity",
    scale: "opacity",
  },
};

export const typography = system(config);
export default typography;
