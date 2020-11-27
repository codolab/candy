import { system, get } from "candy-system";

const transform = (val, scale) => {
  return get(scale, val, null);
}

const scales = [
  { name: "scale", properties: ["--transform-scale-x", "--transform-scale-y"] },
  { name: "scaleX", properties: ["--transform-scale-x"] },
  { name: "scaleY", properties: ["--transform-scale-y"] },
];

const translates = [
  { name: "translateX", properties: ["--transform-translate-x"] },
  { name: "translateY", properties: ["--transform-translate-y"] },
];

const skews = [
  { name: "skewX", properties: ["--transform-skew-x"] },
  { name: "skewY", properties: ["--transform-skew-y"] },
];

const convert2Config = (arr, scale) =>
  arr.reduce((acc, { name, properties }) => {
    return {
      ...acc,
      [name]: {
        properties,
        scale,
        transform(val, scale) {
          const n = get(scale, val, null);
          if (!n) return null;

          return `${n} !important`;
        },
      },
    };
  }, {});

export const config = {
  transform: {
    transform(val) {
      switch (val) {
        case "transform":
          return {
            classic: {
              transform: {
                "--transform-translate-x": "0",
                "--transform-translate-y": "0",
                "--transform-rotate": "0",
                "--transform-skew-x": "0",
                "--transform-skew-y": "0",
                "--transform-scale-x": "1",
                "--transform-scale-y": "1",
                transform: [
                  "translateX(var(--transform-translate-x))",
                  "translateY(var(--transform-translate-y))",
                  "rotate(var(--transform-rotate))",
                  "skewX(var(--transform-skew-x))",
                  "skewY(var(--transform-skew-y))",
                  "scaleX(var(--transform-scale-x))",
                  "scaleY(var(--transform-scale-y))",
                ].join(" "),
              },
            },
          };
        case "gpu":
          return {
            classic: {
              transform: {
                "--transform-translate-x": "0",
                "--transform-translate-y": "0",
                "--transform-rotate": "0",
                "--transform-skew-x": "0",
                "--transform-skew-y": "0",
                "--transform-scale-x": "1",
                "--transform-scale-y": "1",
                transform: [
                  "translate3d(var(--transform-translate-x), var(--transform-translate-y), 0)",
                  "rotate(var(--transform-rotate))",
                  "skewX(var(--transform-skew-x))",
                  "skewY(var(--transform-skew-y))",
                  "scaleX(var(--transform-scale-x))",
                  "scaleY(var(--transform-scale-y))",
                ].join(" "),
              },
            },
          };
        case "none":
          return { transform:"none" };
        default:
          return null;
      }
    },
    translate(val) {
      return val;
    },
  },
  ...convert2Config(scales, "scale"),
  ...convert2Config(translates, "translate"),
  ...convert2Config(skews, "skew"),
  rotate: {
    property: "--transform-rotate",
    scale: "rotate",
    transform(val, scale) {
      const n = get(scale, val, null);
      if (!n) return null;

      return `${n} !important`;
    },
  },
  origin: {
    property: "transformOrigin",
    scale: "transformOrigin",
    transform,
  },
};

export const tf = system(config);
export default tf;
