import { system, get, getValue } from "@candy/system";
import { withAlphaVariable } from "@candy-moon/engine";

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
  divide: {
    transform(val, scale, _props) {
      switch (val) {
        case "solid":
        case "dashed":
        case "dotted":
        case "double":
        case "none":
          return {
            "& > :not(template) ~ :not(template)": {
              borderStyle: val,
            },
          };
      }

      const divideColor = getValue(val, get(_props.theme, "colors"), _props);
      const variable = "--divide-opacity";
      const [color, opacity] = withAlphaVariable({
        color: divideColor,
        variable,
      });
      if (!opacity) {
        return {
          "& > :not(template) ~ :not(template)": {
            borderColor: divideColor,
          },
        };
      }
      return {
        "& > :not(template) ~ :not(template)": {
          borderColor: color,
          [variable]: opacity,
        },
      };
    },
    translate(val) {
      return val;
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
