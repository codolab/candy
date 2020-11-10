import { system, getValue, get } from "candy-system";

export const config = {
  // handle flex-shrink, flex-grow, flex-direction, flex-wrap, flex
  flex: {
    scale: "flex",
    transform(val, scale, _props) {
      switch (val) {
        case "flex-shrink":
          const flexShrinkScale = get(_props.theme, "flexShrink", {});
          return { flexShrink: flexShrinkScale.base || val };
        case "flex-grow":
          const flexGrowScale = get(_props.theme, "flexGrow", {});
          return { flexGrow: flexGrowScale.base || val };
        // direction
        case "row":
        case "row-reverse":
        case "col":
        case "col-reverse":
          return { flexDirection: val };
        // wrap
        case "wrap":
        case "wrap-reverse":
          return { flexWrap: val };
        case "no-wrap":
          return { flexWrap: "nowrap" };
        default:
          const n = getValue(val, scale, _props);
          if (n) return { flex: n };
          return val;
      }
    },
    translate(transformedVal) {
      if (typeof transformedVal === "object") return transformedVal;
      return null;
    },
  },
};

export const flexBox = system(config);
export default flexBox;
