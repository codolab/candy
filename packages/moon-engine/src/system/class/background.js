import { system, get } from "candy-system";
import { transformColor } from "../../util";

const config = {
  // handle bg-size bg-colors
  bg: {
    transform(val, _scale, _props) {
      const bgSizeScale = get(_props.theme, "backgroundSize", {});
      const bgSizeValue = bgSizeScale[val];
      if (bgSizeValue) {
        return { backgroundSize: bgSizeValue };
      }
      const bgColorScale = get(_props.theme, "colors");
      const bgColor = get(bgColorScale, val, null);
      if (!bgColor) return null;
      
      return transformColor({
        color: bgColor,
        property: "backgroundColor",
        variable: "--bg-opacity",
      });
    },
    translate(val) {
      if (typeof val === "object") return val;
      return null;
    },
  },
};

export const background = system(config);
export default background;
