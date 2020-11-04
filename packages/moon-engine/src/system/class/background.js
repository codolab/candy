import { system, get, getValue } from "@candy/system";
import { toRgba, withAlphaVariable } from "../../util";

const config = {
  bg: {
    transform(val, scale, _props) {
      const bgSizeScale = get(_props.theme, "backgroundSize", {});
      const bgSizeValue = bgSizeScale[val];
      if (bgSizeValue) {
        return { backgroundSize: bgSizeValue };
      }
      const bgColor = getValue(val, get(_props.theme, "colors"), _props);
      const variable = "--bg-opacity";
      const [color, opacity] = withAlphaVariable({
        color: bgColor,
        variable,
      });
      if (!opacity) {
        return { backgroundColor: bgColor }
      }
      return {
        backgroundColor: color,
        [variable]: opacity,
      };
    },
    translate(val) {
      if (typeof val === "object") return val;
      return null;
    },
  },
  bgOpacity: {
    property: "--bg-opacity",
    scale: "opacity",
  },
};

config.backgroundOpacity = config.bgOpacity;

export const background = system(config);
export default background;
