import { system, get } from "candy-system";
import { toRgba } from "candy-moon-engine";

const convert2Gradient = (p1, p2) => ({
  scale: "colors",
  transform(val, scale, _props) {
    const n = get(scale, val, null);
    if (!n) return n;

    const transparentTo = (() => {
      try {
        const [r, g, b] = toRgba(n);
        return `rgba(${r}, ${g}, ${b}, 0)`;
      } catch (_error) {
        return `rgba(255, 255, 255, 0)`;
      }
    })();

    return {
      [`--gradient-${p1}-color`]: n,
      "--gradient-color-stops": `${p2} ${transparentTo})`,
    };
  },
  translate(val) {
    return val;
  },
});

const config = {
  bgGradient: {
    property: "backgroundImage",
    scale: "backgroundImage",
    transform(val, scale, _props) {
      const key = `gradient-${val}`;
      const bgGradient = get(scale, key, null);
      if (!bgGradient) return null;
      return bgGradient;
    },
  },
  from: convert2Gradient(
    "from",
    "var(--gradient-from-color), var(--gradient-to-color,"
  ),
  via: convert2Gradient(
    "via",
    "var(--gradient-from-color), var(--gradient-via-color), var(--gradient-to-color,"
  ),
  to: {
    property: "--gradient-to-color",
    scale: "colors",
  },
};

export const backgroundGradient = system(config);
export default backgroundGradient;
