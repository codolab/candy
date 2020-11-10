import { system, getValue, get } from "candy-system";

export const config = {
  animation: {
    property: "animation",
    scale: "animation",
    transform(val, scale, _props) {
      const result = {};
      const n = getValue(val, scale, _props);
      if (n && typeof n === "string") {
        const name = n.split(" ")[0];
        const frameScale = get(_props.theme, `keyframes`);
        if (name && frameScale[name]) {
          result.keyframes = {
            [name]: frameScale[name],
          };
        }
      }

      result.animation = n;
      return result;
    },
    translate(val) {
      return val;
    },
  },
};

config.animate = config.animation;

export const animation = system(config);
export default animation;
