import { system, get } from "candy-system";
import { transformColor } from "../../util";
import transform from "./clsTransform";

export const config = {
  // handle font-weight, font-family
  font: {
    scale: "fontFamily",
    transform(value, fontFamilyScale, _props) {
      const fontWeightScale = get(_props.theme, "fontWeight") || {};
      const fontWeightValue = fontWeightScale[value];
      if (fontWeightValue) {
        return { fontWeight: fontWeightValue };
      }
      const fontFamilyValue = get(fontFamilyScale, value, null);
      if (!fontFamilyValue) return null;
      if (fontFamilyValue && fontFamilyValue !== value) {
        return {
          fontFamily: Array.isArray(fontFamilyValue)
            ? fontFamilyValue.join(",")
            : fontFamilyValue,
        };
      }
      return { font: value };
    },
    translate(val) {
      return val;
    },
  },
  fontStyle: {
    property: "fontStyle",
    transform(value) {
      switch (value) {
        case "italic":
          return "italic";
        case "not-italic":
          return "normal";
        default:
          return null;
      }
    }
  },
  fontVariantNumeric: {
    property: "fontVariantNumeric",
    transform(value) {
      switch (value) {
        case "normal-nums":
          return "normal"
        default:
          return value;
      }
    }
  },
  // letter spacing
  tracking: {
    property: "letterSpacing",
    scale: "letterSpacing",
    transform,
  },
  // line height
  leading: {
    property: "lineHeight",
    scale: "lineHeight",
    transform,
  },
  // list
  list: {
    scale: "listStyleType",
    transform(value, listStyleTypeScale) {
      switch (value) {
        case "inside":
        case "outside":
          return { listStylePosition: value };
        default:
          const listStyleTypeValue = get(listStyleTypeScale, value, null);
          if (!listStyleTypeValue) return null;
          return { listStyleType: listStyleTypeValue };
      }
    },
    translate(val) {
      return val;
    },
  },
  // placeholder
  placeholder: {
    property: "&::placeholder",
    scale: "colors",
    transform(val, scale) {
      const n = get(scale, val, null);
      if (!n) return null;
      return transformColor({
        color: n,
        property: "color",
        variable: "--placeholder-opacity",
      });
    },
  },
  placeholderOpacity: {
    property: "&::placeholder",
    scale: "opacity",
    transform(val, scale) {
      const n = get(scale, val, null);
      if (!n) return null;

      return {
        "--placeholder-opacity": n,
      };
    },
  },
  // handle text-align, font-size, color
  text: {
    scale: "colors",
    transform(value, colorScale, _props) {
      switch (value) {
        case "left":
        case "center":
        case "right":
        case "justify":
          return { textAlign: value };
      }
      const fontSizeScale = get(_props.theme, "fontSize") || {};
      const fontSizeValue = fontSizeScale[value];
      if (fontSizeValue) {
        if (Array.isArray(fontSizeValue)) {
          return {
            fontSize: fontSizeValue[0],
            lineHeight: fontSizeValue[1].lineHeight,
          };
        }
        return { fontSize: fontSizeValue };
      }

      const textColor = get(colorScale, value, null);
      if (!textColor) return null;

      return transformColor({
        color: textColor,
        property: "color",
        variable: "--text-opacity",
      });
    },
    translate(val) {
      return val;
    },
  },
  textDecoration: {
    property: "textDecoration",
    transform(value) {
      switch (value) {
        case "no-underline":
          return "none";
        default:
          return value;
      }
    }
  },
  textTransform: {
    property: "textTransform",
    transform(value) {
      switch (value) {
        case "normal-case":
          return "none"
        default:
          return value;
      }
    }
  },
  // others
  textOverflow: {
    transform(value) {
      switch (value) {
        case "overflow-ellipsis":
          return { textOverflow: "ellipsis" };
        case "overflow-clip":
          return { textOverflow: "clip" };
        case "truncate":
          return {
            classic: {
              truncate: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            },
          };
        default:
          return null;
      }
    },
    translate(val) {
      return val;
    },
  },
  verticalAlign: {
    property: "verticalAlign",
    transform(value) {
      return value.replace("align-", "");
    }
  },
  whitespace: {
    property: "whiteSpace",
  },
};

export const typography = system(config);
export default typography;
