import { system, get } from "candy-system";

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
          return { flexDirection: val };
        case "col":
          return { flexDirection: "column" };
        case "col-reverse":
          return { flexDirection: "column-reverse" };
        // wrap
        case "wrap":
        case "wrap-reverse":
        case "nowrap":
          return { flexWrap: val };
        default:
          const n = get(scale, val, null);
          if (!n) return null;
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
