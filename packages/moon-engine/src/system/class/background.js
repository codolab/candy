import { system, get, getValue } from "@candy/system";
import { transformColor } from "../../util";

const config = {
  // handle bg-size bg-colors
  bg: {
    transform(val, scale, _props) {
      const bgSizeScale = get(_props.theme, "backgroundSize", {});
      const bgSizeValue = bgSizeScale[val];
      if (bgSizeValue) {
        return { backgroundSize: bgSizeValue };
      }
      const bgColor = getValue(val, get(_props.theme, "colors"), _props);
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
