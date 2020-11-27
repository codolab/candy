import { system, get } from "candy-system";

const transform = (val, scale) => {
  return get(scale, val, null);
}

export const config = {
  transition: {
    property: "transitionProperty",
    scale: "transitionProperty",
    transform(val, scale, _props) {
      const finalVal = val === "transition" ? "base" : val;
      const n = get(scale, finalVal, null);
      if (!n) return null;
      return n;
    },
  },
  duration: {
    property: "transitionDuration",
    scale: "transitionDuration",
    transform,
  },
  ease: {
    property: "transitionTimingFunction",
    scale: "transitionTimingFunction",
    transform,
  },
  delay: {
    property: "transitionDelay",
    scale: "transitionDelay",
    transform,
  },
};

export const transition = system(config);
export default transition;
