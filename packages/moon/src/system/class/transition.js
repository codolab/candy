import { system, getValue } from "candy-system";

export const config = {
  transition: {
    property: "transitionProperty",
    scale: "transitionProperty",
    transform(val, scale, _props) {
      const finalVal = val === "transition" ? "base" : val;
      const n = getValue(finalVal, scale, _props);
      return n;
    },
  },
  duration: {
    property: "transitionDuration",
    scale: "transitionDuration",
  },
  ease: {
    property: "transitionTimingFunction",
    scale: "transitionTimingFunction",
  },
  delay: {
    property: "transitionDelay",
    scale: "transitionDelay",
  },
};

export const transition = system(config);
export default transition;
