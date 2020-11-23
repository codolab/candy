import { system, get, getValue } from "candy-system";
import { transformColor } from "../../util";

export const config = {
  // handle font-weight, font-family
  font: {
    transform(value, _scale, _props) {
      const fontWeightScale = get(_props.theme, "fontWeight") || {};
      const fontWeightValue = fontWeightScale[value];
      if (fontWeightValue) {
        return { fontWeight: fontWeightValue };
      }
      const fontFamilyValue = getValue(
        value,
        get(_props.theme, "fontFamily"),
        _props
      );
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
    transform(value) {
      switch (value) {
        case "italic":
          return { fontStyle: "italic" };
        case "not-italic":
          return { fontStyle: "normal" };
        default:
          return { fontStyle: value };
      }
    },
    translate(val) {
      return val;
    },
  },
  fontVariantNumeric: {
    transform(value) {
      switch (value) {
        case "normal-nums":
          return { fontVariantNumeric: "normal" };
        default:
          return { fontVariantNumeric: value };
      }
    },
    translate(val) {
      return val;
    },
  },
  // letter spacing
  tracking: {
    property: "letterSpacing",
    scale: "letterSpacing",
  },
  // line height
  leading: {
    property: "lineHeight",
    scale: "lineHeight",
  },
  // list
  list: {
    transform(value, _scale, _props) {
      switch (value) {
        case "inside":
        case "outside":
          return { listStylePosition: value };
        default:
          const listStyleTypeValue = getValue(
            value,
            get(_props.theme, "listStyleType"),
            _props
          );
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
    transform(val, scale, _props) {
      const n = getValue(val, scale, _props);
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
    transform(val, scale, _props) {
      const n = getValue(val, scale, _props);

      return {
        "--placeholder-opacity": n,
      };
    },
  },
  // handle text-align, font-size, color
  text: {
    transform(value, _scale, _props) {
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

      const textColor = getValue(value, get(_props.theme, "colors"), _props);
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
    transform(value) {
      switch (value) {
        case "no-underline":
          return { textDecoration: "none" };
        default:
          return { textDecoration: value };
      }
    },
    translate(val) {
      return val;
    },
  },
  textTransform: {
    transform(value) {
      switch (value) {
        case "normal-case":
          return { textTransform: "none" };
        default:
          return { textTransform: value };
      }
    },
    translate(val) {
      return val;
    },
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
          return { textOverflow: value };
      }
    },
    translate(val) {
      return val;
    },
  },
  verticalAlign: {
    transform(value) {
      return { verticalAlign: value.replace("align-", "") };
    },
    translate(val) {
      return val;
    },
  },
  whitespace: {
    property: "whiteSpace",
  },
};

export const typography = system(config);
export default typography;
