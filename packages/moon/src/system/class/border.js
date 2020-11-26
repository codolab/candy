import { system, get } from "candy-system";
import { transformColor } from "candy-moon-engine";

export const config = {
  divideX: {
    property: "& > :not([hidden]) ~ :not([hidden])",
    scale: "borderWidth",
    transform(value, scale, _props) {
      const finalVal = value === "divide-x" ? "base" : value;
      const n = get(scale, finalVal, null);
      if (!n) return null;
      return {
        borderLeftWidth: n,
      };
    },
  },
  divideY: {
    property: "& > :not([hidden]) ~ :not([hidden])",
    scale: "borderWidth",
    transform(value, scale, _props) {
      const finalVal = value === "divide-y" ? "base" : value;
      const n = get(scale, finalVal, null);
      if (!n) return null;
      return {
        borderTopWidth: n,
      };
    },
  },
  // handle divide-style divide-color
  divide: {
    property: "& > :not([hidden]) ~ :not([hidden])",
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

      const divideColor = get(scale, val, null);
      if (!divideColor) return null;

      return transformColor({
        color: divideColor,
        property: "borderColor",
        variable: "--divide-opacity",
      });
    },
  },
  divideOpacity: {
    property: "& > :not([hidden]) ~ :not([hidden])",
    scale: "opacity",
    transform(val, scale, _props) {
      const n = get(scale, val, null);
      if (!n) return null;

      return {
        "--divide-opacity": n,
      };
    },
  },
  // handle ring
  ring: {
    scale: "colors",
    transform(val, scale, _props) {
      const finalVal = val === "ring" ? "base" : val;
      if (finalVal === "inset") {
        return {
          "--tw-ring-inset": "inset",
        };
      }

      const ringWidthScale = get(_props.theme, "ringWidth") || {};
      const ringWidthValue = ringWidthScale[finalVal];
      if (ringWidthValue) {
        return {
          classic: {
            ring: {
              "--tw-ring-offset-shadow":
                "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
              "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${ringWidthValue} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
              boxShadow:
                "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
            },
          },
        };
      }

      const ringColor = get(scale, finalVal, null);
      if (!ringColor) return null;

      return transformColor({
        color: ringColor,
        property: "--tw-ring-color",
        variable: "--tw-ring-opacity",
      });
    },
    translate(val) {
      return val;
    },
  },
  ringOpacity: {
    property: "--tw-ring-opacity",
    scale: "opacity",
  },
  ringOffset: {
    scale: "colors",
    transform(val, scale, _props) {
      const ringOffsetWidthScale = get(_props.theme, "ringOffsetWidth") || {};
      const ringOffsetWidthValue = ringOffsetWidthScale[val];
      if (ringOffsetWidthValue) {
        return {
          "--tw-ring-offset-width": ringOffsetWidthValue,
        };
      }

      const ringOffsetColor = get(scale, val, null);
      if (!ringOffsetColor) return null;

      return {
        "--tw-ring-offset-color": ringOffsetColor,
      };
    },
    translate(val) {
      return val;
    },
  },
};

export const border = system(config);
export default border;
