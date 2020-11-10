import { system, getValue } from "candy-system";
import { getColorConfig } from "./util";

export const config = {
  fontFamily: {
    property: "fontFamily",
    scale: "fontFamily",
    transform(value, scale, _props) {
      const n = getValue(value, scale, _props);
      if (Array.isArray(n)) return n.join(",");
      return n;
    },
  },
  fontSize: {
    scale: "fontSize",
    transform(value, scale, _props) {
      const fontSizeValue = getValue(value, scale, _props);
      if (Array.isArray(fontSizeValue)) {
        return {
          fontSize: fontSizeValue[0],
          lineHeight: fontSizeValue[1].lineHeight,
        };
      }
      return { fontSize: fontSizeValue };
    },
    translate(val) {
      return val;
    },
  },
  fontStyle: true,
  fontWeight: true,
  fontVariantNumeric: true,
  // letter spacing
  letterSpacing: true,
  // line height
  lineHeight: true,
  // list
  listStyleType: true,
  listStylePosition: true,
  // text
  textAlign: true,
  color: getColorConfig("color", "--text-opacity"),
  textOpacity: {
    property: "--text-opacity",
    scale: "opacity",
  },
  textDecoration: true,
  textTransform: true,
  // others
  verticalAlign: true,
  whiteSpace: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
};

export const typography = system(config);
export default typography;
